import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { SidebarNavHeader } from './header'

// interface SidebarNavProps {
//   navTabs:
// }

export function SidebarNav({ navTabs, activeTab, setActiveTab }) {
  /* This is the first sidebar */
  /* We disable collapsible and adjust width to icon. */
  /* This will make the sidebar appear as icons. */
  const { setOpen } = useSidebar()
  return (
    <Sidebar
      collapsible="none"
      className="w-[calc(var(--sidebar-width-icon)+1px)]!"
    >
      <SidebarNavHeader />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {navTabs.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    onClick={() => {
                      setActiveTab(item)
                      setOpen(true)
                    }}
                    isActive={activeTab?.title === item.title}
                    className="px-2.5 md:px-2"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}
