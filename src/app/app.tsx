import { RouterProvider } from 'react-router-dom';

import { router } from '../router/router';

import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} fallbackElement={<h1>FOLBEK!</h1>} />;
    </div>
  );
}
