import { useTodoPage } from './hooks/use-todo-page'

import styles from './todo-page.module.scss'

export function TodoPage(): JSX.Element {
  const { send, state } = useTodoPage()

  return (
    <div className={styles.todoPage}>
      <h1>TODO APP PAGE</h1>

      <br />

      <pre>Value: {JSON.stringify(state.value, null, 2)}</pre>
      <pre>Context: {JSON.stringify(state.context, null, 2)}</pre>

      <br />
      <br />

      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            send({ type: 'Submit' })
          }}
        >
          {state.matches('Todos Loaded') && (
            <button onClick={() => send('Create New')}>Create New</button>
          )}

          {state.matches('Deleting Todo Errored') && (
            <>
              <p>Something went wrong: {state.context.errorMessage}</p>

              <button onClick={() => send({ type: 'Speed Up' })}>
                Go back to list
              </button>
            </>
          )}

          {state.matches('Creating New Todo.Showing Form Input') && (
            <input
              type="text"
              value={state.context.createNewTodoFormInput}
              onChange={e =>
                send({
                  type: 'Form Input Changed',
                  value: e.target.value
                })
              }
            />
          )}
        </form>

        <br />
        <br />

        <div>
          {state.matches('Todos Loaded') &&
            state.context.todos.length > 0 &&
            state.context.todos.map(todo => (
              <div key={todo}>
                <span>{todo}</span>{' '}
                <button onClick={() => send({ type: 'Delete', todo })}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
