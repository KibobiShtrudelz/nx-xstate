import { useMachine } from '@xstate/react';

import NxWelcome from './nx-welcome';

import { toggleMachine } from '../state-machine';

// import styles from './app.module.scss';

export function App() {
  const [state, send] = useMachine(toggleMachine);
  console.log('state', state.context);

  // const active = state.matches('active');

  return (
    <>
      <button
        onClick={() => send({ type: 'INCREMENT', value: 99, time: new Date() })}
      >
        {state.value === 'inactive'
          ? 'Click to activate'
          : 'Active! Click to deactivate'}
      </button>

      <button type="button" onClick={() => null}>
        LAINA
      </button>

      <NxWelcome title="learning-nx" />
      <div />
    </>
  );
}

export default App;
