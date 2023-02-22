import { Board } from '../components';

import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <Board />

      <Board />
    </div>
  );
}
