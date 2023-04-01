import { useMachine } from '@xstate/react'

import { todoPageMachine } from '../todo-page-machine/todo-page-machine'

const todos = new Set<string>([])

export function useTodoPage() {
  const [state, send] = useMachine(todoPageMachine, {
    services: {
      loadTodos: async () => {
        return Array.from(todos)
      },

      saveTodo: async (context, _event) => {
        todos.add(context.createNewTodoFormInput)
      },

      deleteTodo: async (_context, event) => {
        todos.delete(event.todo)
      }
    }
  })

  return { send, state }
}
