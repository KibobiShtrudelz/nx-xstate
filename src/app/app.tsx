import { Main, Header, Sidebar } from '@components'

import { NavMachineContext } from '../context'

import styles from './app.module.scss'

export function App() {
  const [state, send] = NavMachineContext.useActor()

  const isSidebarVisible = state.value === 'visible'

  return (
    <div className={styles.app}>
      <Sidebar
        modal={false}
        position="left"
        showCloseIcon={false}
        style={{ width: '75%' }}
        visible={isSidebarVisible}
        onHide={() => {
          send(`HIDE_SIDEBAR`)
        }}
      >
        <div>
          <h2>Left Sidebar</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Sidebar>

      <Header />

      <Main />
    </div>
  )
}
