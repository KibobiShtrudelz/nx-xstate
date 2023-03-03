import { RouterProvider } from 'react-router-dom'

import { router } from '@router'

import styles from './main.module.scss'

export function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <RouterProvider router={router} fallbackElement={<h1>FOLBEK!</h1>} />
    </main>
  )
}
