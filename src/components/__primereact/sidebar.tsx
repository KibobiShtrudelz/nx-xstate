import { Sidebar as PrimeSidebar, SidebarProps } from 'primereact/sidebar'

export function Sidebar({ children, ...rest }: SidebarProps): JSX.Element {
  return <PrimeSidebar {...rest}>{children}</PrimeSidebar>
}
