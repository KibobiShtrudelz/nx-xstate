import clsx from 'clsx'
import * as React from 'react'

import styles from './hamburger-menu.module.scss'

const { useState } = React

export function HamburgerMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  function handleMenuClick(e: React.MouseEvent<HTMLDivElement>) {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.hamburgerMenu} onClick={handleMenuClick}>
      <div className={clsx(styles.stick, isOpen && styles.open)} />

      <div className={clsx(styles.stick, styles[isOpen ? 'open' : 'close'])} />

      <div className={clsx(styles.stick, isOpen && styles.open)} />
    </div>
  )
}
