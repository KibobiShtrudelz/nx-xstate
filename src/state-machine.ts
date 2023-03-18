import { createMachine } from 'xstate'

export const toggleNavMachine = createMachine({
  predictableActionArguments: true,
  id: 'sideBar',
  initial: 'hidden',
  states: {
    visible: {
      id: 'visible',
      on: {
        HIDE_SIDEBAR: 'hidden'
      }
    },

    hidden: {
      id: 'hidden',
      on: {
        SHOW_SIDEBAR: 'visible'
      }
    }
  }
})
