// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'done.invoke.todoMachine.createTodo.saveTodo:invocation[0]': {
      type: 'done.invoke.todoMachine.createTodo.saveTodo:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.todoMachine.deleteTodo:invocation[0]': {
      type: 'done.invoke.todoMachine.deleteTodo:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.todoMachine.todosLoading:invocation[0]': {
      type: 'done.invoke.todoMachine.todosLoading:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'error.platform.todoMachine.createTodo.saveTodo:invocation[0]': {
      type: 'error.platform.todoMachine.createTodo.saveTodo:invocation[0]'
      data: unknown
    }
    'error.platform.todoMachine.deleteTodo:invocation[0]': {
      type: 'error.platform.todoMachine.deleteTodo:invocation[0]'
      data: unknown
    }
    'error.platform.todoMachine.todosLoading:invocation[0]': {
      type: 'error.platform.todoMachine.todosLoading:invocation[0]'
      data: unknown
    }
    'xstate.after(2500)#todoMachine.deleteErroredTodo': {
      type: 'xstate.after(2500)#todoMachine.deleteErroredTodo'
    }
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {
    deleteTodo: 'done.invoke.todoMachine.deleteTodo:invocation[0]'
    loadTodos: 'done.invoke.todoMachine.todosLoading:invocation[0]'
    saveTodo: 'done.invoke.todoMachine.createTodo.saveTodo:invocation[0]'
  }
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: 'deleteTodo' | 'loadTodos' | 'saveTodo'
  }
  eventsCausingActions: {
    assignErrorToContext:
      | 'error.platform.todoMachine.createTodo.saveTodo:invocation[0]'
      | 'error.platform.todoMachine.deleteTodo:invocation[0]'
      | 'error.platform.todoMachine.todosLoading:invocation[0]'
    assignFormInputToContext: 'FORM_INPUT_CHANGE'
    assignTodosToContext: 'done.invoke.todoMachine.todosLoading:invocation[0]'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {
    hasTodos: 'done.invoke.todoMachine.todosLoading:invocation[0]'
  }
  eventsCausingServices: {
    deleteTodo: 'DELETE_TODO'
    loadTodos:
      | 'done.invoke.todoMachine.createTodo.saveTodo:invocation[0]'
      | 'done.invoke.todoMachine.deleteTodo:invocation[0]'
      | 'xstate.init'
    saveTodo: 'SUBMIT'
  }
  matchesStates:
    | 'createTodo'
    | 'createTodo.saveTodo'
    | 'createTodo.saveTodoError'
    | 'createTodo.showFormInput'
    | 'deleteErroredTodo'
    | 'deleteTodo'
    | 'loadingTodosError'
    | 'todosLoaded'
    | 'todosLoading'
    | { createTodo?: 'saveTodo' | 'saveTodoError' | 'showFormInput' }
  tags: never
}
