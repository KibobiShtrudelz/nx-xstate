import { useMachine } from '@xstate/react';

import NxWelcome from './nx-welcome';

import { toggleMachine } from '../state-machine';

// import styles from './app.module.scss';

export function App() {
  const [state, send] = useMachine(toggleMachine);

  // const active = state.matches('active');

  return (
    <>
      <button onClick={() => send('TOGGLE')}>
        {state.value === 'inactive'
          ? 'Click to activate'
          : 'Active! Click to deactivate'}
      </button>

      <NxWelcome title="learning-nx" />
      <div />
    </>
  );
}

export default App;
