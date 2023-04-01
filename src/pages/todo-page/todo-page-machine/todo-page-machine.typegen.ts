// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  internalEvents: {
    'done.invoke.Todo Page Machine.Creating New Todo.Saving Todo:invocation[0]': {
      type: 'done.invoke.Todo Page Machine.Creating New Todo.Saving Todo:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.Todo Page Machine.Deleting Todo:invocation[0]': {
      type: 'done.invoke.Todo Page Machine.Deleting Todo:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'done.invoke.Todo Page Machine.Loading Todos:invocation[0]': {
      type: 'done.invoke.Todo Page Machine.Loading Todos:invocation[0]'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'error.platform.Todo Page Machine.Creating New Todo.Saving Todo:invocation[0]': {
      type: 'error.platform.Todo Page Machine.Creating New Todo.Saving Todo:invocation[0]'
      data: unknown
    }
    'error.platform.Todo Page Machine.Deleting Todo:invocation[0]': {
      type: 'error.platform.Todo Page Machine.Deleting Todo:invocation[0]'
      data: unknown
    }
    'error.platform.Todo Page Machine.Loading Todos:invocation[0]': {
      type: 'error.platform.Todo Page Machine.Loading Todos:invocation[0]'
      data: unknown
    }
    'xstate.after(2500)#Todo Page Machine.Deleting Todo Errored': {
      type: 'xstate.after(2500)#Todo Page Machine.Deleting Todo Errored'
    }
    'xstate.init': { type: 'xstate.init' }
  }
  invokeSrcNameMap: {
    deleteTodo: 'done.invoke.Todo Page Machine.Deleting Todo:invocation[0]'
    loadTodos: 'done.invoke.Todo Page Machine.Loading Todos:invocation[0]'
    saveTodo: 'done.invoke.Todo Page Machine.Creating New Todo.Saving Todo:invocation[0]'
  }
  missingImplementations: {
    actions: never
    delays: never
    guards: never
    services: 'deleteTodo' | 'loadTodos' | 'saveTodo'
  }
  eventsCausingActions: {
    assignErrorToContext:
      | 'error.platform.Todo Page Machine.Creating New Todo.Saving Todo:invocation[0]'
      | 'error.platform.Todo Page Machine.Deleting Todo:invocation[0]'
      | 'error.platform.Todo Page Machine.Loading Todos:invocation[0]'
    assignFormInputToContext: 'Form Input Changed'
    assignTodosToContext: 'done.invoke.Todo Page Machine.Loading Todos:invocation[0]'
  }
  eventsCausingDelays: {}
  eventsCausingGuards: {
    'Has Todos': 'done.invoke.Todo Page Machine.Loading Todos:invocation[0]'
  }
  eventsCausingServices: {
    deleteTodo: 'Delete'
    loadTodos:
      | 'done.invoke.Todo Page Machine.Creating New Todo.Saving Todo:invocation[0]'
      | 'done.invoke.Todo Page Machine.Deleting Todo:invocation[0]'
      | 'xstate.init'
    saveTodo: 'Submit'
  }
  matchesStates:
    | 'Creating New Todo'
    | 'Creating New Todo.Saving Todo'
    | 'Creating New Todo.Showing Form Input'
    | 'Deleting Todo'
    | 'Deleting Todo Errored'
    | 'Loading Todos'
    | 'Loading Todos Errored'
    | 'Todos Loaded'
    | { 'Creating New Todo'?: 'Saving Todo' | 'Showing Form Input' }
  tags: never
}
