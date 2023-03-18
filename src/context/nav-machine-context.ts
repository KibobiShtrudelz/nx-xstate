import { createActorContext } from '@xstate/react'

import { toggleNavMachine } from 'state-machine'

export const NavMachineContext = createActorContext(toggleNavMachine)
