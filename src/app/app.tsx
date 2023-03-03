import { Main, Header } from '@components'

import styles from './app.module.scss'

export function App() {
  return (
    <div className={styles.app}>
      <Header />

      <Main />
    </div>
  )
}
