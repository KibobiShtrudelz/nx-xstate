import { HamburgerMenu } from '@components'

import styles from './header.module.scss'

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <span className={styles.brand}>Snuki Computers</span>

      <HamburgerMenu />
    </header>
  )
}
