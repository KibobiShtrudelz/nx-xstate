import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'

import { App } from './app/app'
// import { NavMachineProvider } from '@providers'

import i18n from './locales/i18n'
import { NavMachineProvider } from 'providers/state.provider'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <NavMachineProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </NavMachineProvider>
  </React.StrictMode>
)
