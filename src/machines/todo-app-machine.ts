import { assign, createMachine } from 'xstate'

type TodoEvent =
  | { type: 'SUBMIT' }
  | { type: 'SPEED_UP' }
  | { type: 'CREATE_TODO' }
  | { type: 'DELETE_TODO'; todo: string }
  | { type: 'FORM_INPUT_CHANGE'; value: string }

export const todosMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUFkCGBjAFgJYB2YAdGhrADKrYQlQDEGpZJAbqgNbmVZ4ibfjToNiUBJ1S5syQqmIBtAAwBdVWsSgADqliF5i7SAAeiAEwBWAGxkrARgAcFgMxWnrgCwB2FV+8AGhAAT0RXCwcyAE4nW08HGxUVGwsLAF904P4cAhI+dH1aekYmMAAnctRysh0AGzkAM2qAWwpC3KECqmLxSWlZI2V1TRM9AyGTcwQLLztHF3dPX39XH2CwhCSfMkSVRKtD6JUnFStM7I7BfPaesUgmAGEAJQBRAEEAFVeAfU+AeQAIv9RkgQONDApiFNEEkokloq5Eb5IscrBtELYVGQvE4bA43FYLCcLE4vBcQDlrsJCqJ6A9Aa9qK9vn8gSD1GN9JDjGDpnCyAikd4fKizhiZjYrLsVKKVNEHKKrO4MllKVc8mwIGA6mBkGBPoUWIpyNJeLcBJryNrdfrDRgpMQuIMoZpQbpuZM+bD9oL5cKUQ40RLcTtEW5khYfGTFTZyWqqVayDa9QajRUqjV6k1WhbOjcU3bCo7nXJXSNOWCIV7QNM3DsUo4HP5Unj3OtQognFFfAqbC4gx44jYKYmusmdanXpVqpB7agmABlAAKr1egJ+AFVl+7wZ6oTCZlGyI2HM25qSbO2JVGokTIkjYv5CaONePC2Bp5m50bTLBkHI5DYI0+rlAAFK4yQqAAlEwY4FpO+pfrOEDzru1YHt6MxrCeUpni2l7Xp2R5eLhcbyl4Qbyj4Pivhg+ZsLg5RgIB85kLA+CoAA7gAYq0ACSxA6AArsgTA8f8zyYD8-EAHLLpunw-I8AAS7yyQA4q86H7rytZdr6KTWLMDhWF4l4dpslENnM+xEl4VixDYtEJm+NxMSxRYYOxnG8QJQmiUum4AEKYPxnw6RMmH6QgzZuPYPiHES0TKo4yoSkSdguBY0SklYPiKs48aXPR1LkB5rGFOx2AcGmGDGmwZrdJa44VV5qDVbV84ljIZaKG6lYelFelmJYrjzM4hLLH4AReBKNGuDKzkuM5PgBCOrmlUmbV1R1sA1btZQzlmDTIM05RtPBjHMZV3n7V1xYDH1wwaINe7DdCWFxYt+VJTlqWma4IYRIKuJeHMipRpGmRqsQ6BwCYV1gFyH2HgAtDYEoY3RLU3CIvSMCjPKfTF5kSt4Tg4t2NHRsqKXFeqW3jnUYiMPOsDIeURM1qNCDg4tpLHIluVzAO6LEak0T2CoFj4gE3gi04OMMc1dLahA3PRbzDmU04esqN4vguI4lmWKKJ7ymeCpzPlSubbjWqIbtmsjdMNFREZ9mmeZeKmzM5m7GeZ7g7Erj4a4ytlROtqfsdP4YC7JPaxYEpnhYuzRF4+wRLKstEi5JUO+VN3tYnh6JYtnsmWZFnkzl9g2P2Kyy0i3YM0jZA7WxHHcXxF2CSJyBl1hCRkGt+JBkHbikhlQZkGkCQy1eYd24XKudyXu2dc7Va6Un0wEsSZDeFeiKrF44YhscOKKmZjg+w4ESR9tm-dwd86c8PMWeHYmcOAEzhTKOUSBlGiY9FROBSvhOM0YYbpCAA */
    id: 'todoMachine',
    initial: 'todosLoading',
    tsTypes: {} as import('./todo-app-machine.typegen').Typegen0,

    schema: {
      services: {} as {
        loadTodos: {
          data: string[]
        }

        saveTodo: {
          data: void
        }

        deleteTodo: {
          data: void
        }
      },
      events: {} as TodoEvent
    },

    context: {
      todos: [] as string[],
      errorMessage: undefined as string | undefined,
      createNewTodoFormInputValue: ''
    },

    states: {
      todosLoading: {
        invoke: {
          src: 'loadTodos',

          onDone: [
            {
              actions: 'assignTodosToContext',
              cond: 'hasTodos',
              target: 'todosLoaded'
            },
            {
              target: '#todoMachine.createTodo'
            }
          ],

          onError: [
            {
              target: 'loadingTodosError',
              actions: 'assignErrorToContext'
            }
          ]
        }
      },

      loadingTodosError: {},

      todosLoaded: {
        on: {
          CREATE_TODO: {
            target: 'createTodo'
          },

          DELETE_TODO: {
            target: 'deleteTodo'
          }
        }
      },

      createTodo: {
        initial: 'showFormInput',

        states: {
          showFormInput: {
            on: {
              FORM_INPUT_CHANGE: {
                actions: 'assignFormInputToContext'
              },

              SUBMIT: {
                target: 'saveTodo'
              }
            }
          },

          saveTodo: {
            invoke: {
              src: 'saveTodo',
              onDone: [{ target: '#todoMachine.todosLoading' }],
              onError: [
                { target: 'showFormInput', actions: 'assignErrorToContext' }
              ]
            }
          },

          saveTodoError: {}
        }
      },

      deleteTodo: {
        invoke: {
          src: 'deleteTodo',
          onDone: [{ target: 'todosLoading' }],
          onError: [
            {
              target: 'deleteErroredTodo',
              actions: 'assignErrorToContext'
            }
          ]
        }
      },

      deleteErroredTodo: {
        after: {
          2500: {
            target: 'todosLoaded'
          }
        },
        on: {
          SPEED_UP: {
            target: 'todosLoaded'
          }
        }
      }
    }
  },
  {
    guards: {
      hasTodos(_context, event) {
        return event.data.length > 0
      }
    },
    actions: {
      assignTodosToContext: assign((_context, event) => ({
        todos: event.data
      })),

      assignErrorToContext: assign((_context, event) => ({
        errorMessage: (event.data as Error).message
      })),

      assignFormInputToContext: assign((_context, event) => ({
        createNewTodoFormInputValue: event.value
      }))
    }
  }
)
