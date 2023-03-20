import { useTranslation } from 'react-i18next'

import { Sidebar } from '@components'

import { NavMachineContext } from '../../context'

export const NavSidebar = (): JSX.Element => {
  const [state, send] = NavMachineContext.useActor()

  const { t } = useTranslation()

  const isSidebarVisible = state.value === 'visible'

  const onHideSidebar = () => send(`HIDE_SIDEBAR`)

  return (
    <Sidebar
      position="left"
      showCloseIcon={false}
      style={{ width: '75%' }}
      visible={isSidebarVisible}
      onHide={onHideSidebar}
    >
      <div>
        <h2>{t('navMenu.laptops')}</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </Sidebar>
  )
}
