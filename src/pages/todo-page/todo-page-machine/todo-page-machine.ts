import { assign, createMachine } from 'xstate'

export const todoPageMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAIAKBDGmAsrgMYAWAlgHZgB0AMqrhNVJmhrAMQY23UA3VAGs6HLHgLFy1Oo2at26VLASDUJXABcKqKgG0ADAF0jxxKAAOKijr0WQAD0QAmAKwBOWi4Bsbny4AjB4A7AAsABwhbgDMADQgAJ6Ibqm0hoE+UVHhhjFBAL4FCeI4+GBEpJR88ixUbOLcYABOzajNtJYANtoAZu0AtrSlkhXS1XJMdQ3KquqadgYmZg7WsLa6VA7OCO4utG5hWbGZYWcxbhEJybuGhrQhho8uYU9hMYExIS5FJcplUiqsmGs0wtUgXAAws0wNoKgA5MAAdxWSBAaw29jROx8HjCtB8hjCgRcQS+HyO10QPg+3hiMTClwimU8NN+IBG5UqMj4jTBUwhABEwF0wFowKirDZFttqXiCUSSWSQhSfFSEJd7iFcR5ggzGdEQuzOYCeXRobCdPVMIikUoMLQAMpkVBIxQAMUGmAAklRLABXLRcT3NAY+v2BzCQsi4eqQSXo6WbWUIKL7S5MkIRfzfFXqnyRWhHNwuGKGDwxHwhDwvY3-Ubcia0C3aRS2+2oJ0ut3WkNh30BoOO-0AIwGtgTGJl2MQgUCeSLIU+nxr5Z8JPVhtoSoupKJkTrGABYyBfBbVrY7fETtwAkU4h4ejo6lEIKPDfGwPPbeRHZvd+tcQ1CoIQFk2MxJyTLFQB2F50yObMPgLc4aXVZlF11fwPAiCJK1JQ8JC5T8zxhVtrSvZR-3vZQuBaNoOm6PpBjfQjTSbb9yN-a9HVvaiMGA0DWz0CCTFWKCthnBA5wXMIlw+GJVw8dcXHzAt0irHw-FCbCMiNYoOXrIjTzoYVRQvDtHz4F8xEMtjgVMsU+NQASNCEpZTFEtEp2TSS9gOBCTmQ95LnVSs3AOekIkMCIC1LWSCOPRt7JFRzAJouj2k6HotH6UMWMS4iTJS8ygPmNyRPMLzxJTdwvF8fwglCSJoniJJEGJfZsI8WJ-HXXEXA8BKP2M2gHJK-4AFFWnaCFHFgLQ4VoXBenFZoAAp3DuABKLgTRPM1RuKpzMCm+j408qV1mnGDXE8bw-ACYJwiiWJ82wiK3DnXxiVCEshqMg6xuO06ZogLhHUsMBIEwABVSxIKunybt2O76sepqXtam4CwidIlywo5SzCop9KodA4AcPakpoMTEegpxEAAWjVNqEGZ9I7k5rmub0v53wBptaic+AqrpiTkbCFTWZcQwfAOEtDFSJcXG1QJeYM-m7N5UFwQgWnMXFhmNRiXHS1xPwFI+NxvnVS4QgJJcIgG0ty2rQJ-q1yYFDSzgTummE9dFg2UwNWgncMFxskju43Fl9VSX2SJus0rIGVliIPf29jSPMiiMH166jad-EMxwrMcxVrGUkJWhsMJAs116zPqfNHOfztbjuw9L0B0DAukaLnCw8yL5DheCJiRCTcwi8EsQm+O559edxm8K5s284jvKJ4gCZnzoPC52T5ooeM5nsuRlSSuVmF4eTImtxWOnkG-SqbXoGfdQfv6Z2KL8RpDI-h5y4UZIEUKNICSyXCGrbM3UV6v1slnZKZlgb+0gN-Q2OxJb5iOOkDM0Q5xKTyO7EmQA */
    id: 'Todo Page Machine',
    initial: 'Loading Todos',
    schema: {
      // В "schema" казваме на XState и TS каква форма трябва да имат евентите и/или сървисите ни.
      events: {} as
        | { type: 'Create New' }
        | { type: 'Form Input Changed'; value: string }
        | { type: 'Submit' }
        | { type: 'Delete'; todo: string }
        | { type: 'Speed Up' },

      services: {} as {
        loadTodos: {
          /**
           * Тук описваме структурата на return стойността на "loadTodos" сървиса,
           * който подаваме в "useMachine" в React компонента.
           */
          data: string[]
        }

        saveTodo: {
          data: void
        }

        deleteTodo: {
          data: void
        }
      }
    },
    // "typegen" спомага да типизираме правилно всичко в нашите "actions" и "services".
    tsTypes: {} as import('./todo-page-machine.typegen').Typegen0,

    context: {
      /**
       * "context" е key:value store, в който може да съхраняваме всичко.
       * Тук инициализираме нашия т.нар. "store". "context" е контекст за цялата машина! Не за отделни "states".
       * Обновяваме "context"-а ни чрез "assign" метода от XState!
       */
      todos: [] as string[],
      errorMessage: undefined as string | undefined,
      createNewTodoFormInput: ''
    },

    states: {
      'Loading Todos': {
        /**
         * Със "invoke" извикваме сървисите, чийто колбек трябва да подадем после в React компонента чрез useMachine.
         * Сървисите изпълняват асинхронни задачи, т.е. изпълни колбека и като си готов ела и довърши.
         */
        invoke: {
          src: 'loadTodos',

          onDone: [
            {
              target: 'Todos Loaded',
              /**
               * "cond" се вика, когато имаме добавен "guard".
               * В случая имаме "guard" или казано по др. начин - IF/ELSE за "loadTodos" сървиса.
               * Това е IF-а на guard-а ни
               */
              cond: 'Has Todos',
              // Викаме "action"-а, който ни е необходим при успешен "loadTodos" и ако "Has Todos" е true
              actions: 'assignTodosToContext'
            },
            {
              // Това е ELSE-а на guard-а ни
              target: '#Todo Page Machine.Creating New Todo'
            }
          ],

          onError: [
            {
              target: 'Loading Todos Errored',
              actions: 'assignErrorToContext'
            }
          ]
        }
      },

      'Todos Loaded': {
        on: {
          'Create New': {
            target: 'Creating New Todo'
          },

          Delete: {
            target: 'Deleting Todo'
          }
        }
      },

      'Loading Todos Errored': {},

      'Creating New Todo': {
        initial: 'Showing Form Input',
        states: {
          'Showing Form Input': {
            on: {
              'Form Input Changed': {
                actions: 'assignFormInputToContext'
              },

              Submit: { target: 'Saving Todo' }
            }
          },

          'Saving Todo': {
            invoke: {
              src: 'saveTodo',
              onDone: [{ target: '#Todo Page Machine.Loading Todos' }],
              onError: [
                {
                  target: 'Showing Form Input',
                  actions: 'assignErrorToContext'
                }
              ]
            }
          }
        }
      },

      'Deleting Todo': {
        invoke: {
          src: 'deleteTodo',
          onDone: [{ target: 'Loading Todos' }],
          onError: [
            {
              target: 'Deleting Todo Errored',
              actions: 'assignErrorToContext'
            }
          ]
        }
      },

      'Deleting Todo Errored': {
        after: {
          // "after" е нещо като setTimeout. Подават се стойности в милисекунди
          '2500': { target: 'Todos Loaded' }
        },

        on: {
          'Speed Up': { target: 'Todos Loaded' }
        }
      }
    }
  },
  {
    guards: {
      /**
       * Нещо като IF/ELSE логика. Трябва да се връщат Boolean стойности,
       * за да можем после изберем кой "action" да изпълним там, където викаме "guard"-а.
       */
      'Has Todos': (_context, event) => event.data.length > 0
    },

    actions: {
      // Чрез "actions" изпълняваме синхронни задачи, един вид "Изпълни и забрави".
      assignTodosToContext: assign((_context, event) => ({
        // Тук винаги трябва да върнем част от новият "context"
        todos: event.data
      })),

      assignErrorToContext: assign((_context, event) => ({
        /**
         * Тъй като TS отчита всеки "Error" като "unknown" трябва "event.data" да
         * бъде обгърнат като "Error" и от него да извлечем ".message".
         */
        errorMessage: (event.data as Error).message
      })),

      assignFormInputToContext: assign((_context, event) => ({
        createNewTodoFormInput: event.value
      }))
    }
  }
)
