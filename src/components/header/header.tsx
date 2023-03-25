import { send, createMachine } from 'xstate'
import { createActorContext } from '@xstate/react'

import { HamburgerMenu } from '@components'

import styles from './header.module.scss'

interface InitialState {
  authorized: boolean
  unauthorized: boolean
}

interface AuthEvents {
  type: string
}

const authMachine = createMachine<InitialState, AuthEvents>({
  schema: {
    events: {} as { type: 'LOG_IN' } | { type: 'LOG_OUT' }
  },

  initial: 'unauthorized',

  states: {
    authorized: {
      on: {
        LOG_OUT: {
          target: 'unauthorized'
        }
      }
    },

    unauthorized: {
      on: {
        LOG_IN: {
          cond: 'authCheck',
          target: 'authorized'
        }
      }
    }
  },
  services: {
    authCheck: () => {
      return true
    }
  }
})

const AuthMachineContext = createActorContext(authMachine)

export function Header(): JSX.Element {
  return (
    <AuthMachineContext.Provider>
      <header className={styles.header}>
        <span className={styles.brand}>Snuki Computers</span>

        <button
          type="button"
          onClick={() => {
            send('LOG_IN')
          }}
        >
          LOG IN
        </button>

        <button
          type="button"
          onClick={() => {
            send('LOG_OUT')
          }}
        >
          LOG OUT
        </button>

        <HamburgerMenu />
      </header>
    </AuthMachineContext.Provider>
  )
}
