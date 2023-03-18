import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { App } from './app/app'
// import { NavMachineProvider } from '@providers'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { NavMachineProvider } from 'providers/state.provider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <NavMachineProvider>
      <App />
    </NavMachineProvider>
  </React.StrictMode>
)
