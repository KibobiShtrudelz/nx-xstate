import * as React from 'react'

import { NavMachineContext } from '@context'

interface NavMachineProviderProps {
  children: JSX.Element | React.ReactNode
}

export function NavMachineProvider({
  children
}: NavMachineProviderProps): JSX.Element {
  return <NavMachineContext.Provider>{children}</NavMachineContext.Provider>
}
