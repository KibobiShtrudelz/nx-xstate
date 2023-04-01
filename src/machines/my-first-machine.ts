import { createMachine } from 'xstate'

export const myMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYmoHkA1AUQCUBtAAwBdRKAAO5WLkq5y+MSAAeiAEwB2AGwkAnAA5NOrZtUBmAKwWAjJoA0IAJ6I9VkgBZ1Oq+sE6dgqx1zQVMAX3D7Cgg4RTQsPEIiRUlpWXlFFQQAWjtHRCzzXT99M1VVPT0gsoiQOJwCYjIqWgZmCGSpGTkFJGVEN1V7JwQXd09vX39A4LDQ+zqExux6JkgO1O6MxHM3EnUrNz03N2tvUy9c4en3UzL-dXVjnx1w8KA */
  initial: 'notHovered',
  states: {
    notHovered: {
      on: {
        MOUSEOVER: {
          target: 'hovered'
        }
      }
    },
    hovered: {
      on: {
        MOUSEOUT: {
          target: 'notHovered'
        }
      }
    }
  }
})
