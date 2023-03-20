import { Main, Header, NavSidebar } from '@components'

import styles from './app.module.scss'

export const App = (): JSX.Element => (
  <div className={styles.app}>
    <Header />

    <Main />

    <NavSidebar />
  </div>
)
