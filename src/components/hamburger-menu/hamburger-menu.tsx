import * as React from 'react'

import clsx from 'clsx'

import { NavMachineContext } from '../../context'

import styles from './hamburger-menu.module.scss'

export function HamburgerMenu(): JSX.Element {
  const [state, send] = NavMachineContext.useActor()

  const isSidebarVisible = state.value === 'visible'

  function handleMenuClick(e: React.MouseEvent<HTMLDivElement>) {
    send(`${!isSidebarVisible ? 'SHOW' : 'HIDE'}_SIDEBAR`)
  }

  return (
    <div className={styles.hamburgerMenu} onClick={handleMenuClick}>
      <div className={clsx(styles.stick, isSidebarVisible && styles.open)} />

      <div
        className={clsx(
          styles.stick,
          styles[isSidebarVisible ? 'open' : 'close']
        )}
      />

      <div className={clsx(styles.stick, isSidebarVisible && styles.open)} />
    </div>
  )
}
