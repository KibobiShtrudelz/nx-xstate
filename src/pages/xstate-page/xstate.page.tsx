import { useMachine } from '@xstate/react'
import { todosMachine } from 'machines/todo-app-machine'

import styles from './xstate-page.module.scss'

const todos = new Set<string>([])

export function XState(): JSX.Element {
  const [state, send] = useMachine(todosMachine, {
    services: {
      async loadTodos() {
        return Array.from(todos)
      },

      async saveTodo(context, _event) {
        todos.add(context.createNewTodoFormInputValue)
      },

      async deleteTodo(_context, event) {
        todos.delete(event.todo)
      }
    }
  })

  return (
    <div className={styles.xstate}>
      <pre>{JSON.stringify(state.value)}</pre>

      <pre>{JSON.stringify(state.context)}</pre>

      <div>
        {state.matches('todosLoaded') && (
          <>
            {state.context.todos.map(todo => (
              <div key={todo} style={{ display: 'flex', alignItems: 'center' }}>
                <p>{todo}</p>
                <button
                  onClick={e => {
                    send({ type: 'DELETE_TODO', todo })
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}
      </div>

      <pre>
        {state.matches('todosLoaded') && (
          <button
            type="button"
            onClick={() => {
              send({ type: 'CREATE_TODO' })
            }}
          >
            Create TODO
          </button>
        )}
      </pre>

      {state.matches('deleteErroredTodo') && (
        <>
          <p>Something went wrong: {state.context.errorMessage}</p>
          <button
            type="button"
            onClick={() => {
              send({ type: 'SPEED_UP' })
            }}
          >
            Go back to list
          </button>
        </>
      )}

      {state.matches('createTodo.showFormInput') && (
        <form
          onSubmit={e => {
            e.preventDefault()
            send({ type: 'SUBMIT' })
          }}
        >
          <input
            type="text"
            onChange={e => {
              send({
                type: 'FORM_INPUT_CHANGE',
                value: e.target.value
              })
            }}
          />
        </form>
      )}
    </div>
  )
}
