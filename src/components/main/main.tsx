import { RouterProvider } from 'react-router-dom'

import { router } from '@router'

import styles from './main.module.scss'

export function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <RouterProvider
        router={router}
        fallbackElement={<h1>We can't load the route right now!</h1>}
      />
    </main>
  )
}
