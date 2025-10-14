import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'

export function SidebarCollapsible({ activeTab, activeSubTab, setActiveSubTab }) {
  /* This is the second sidebar */
  /* We disable collapsible and let it fill remaining space */
  return (
    <Sidebar collapsible="none" className="hidden flex-1 md:flex bg-blue-600">
      <SidebarHeader className="gap-3.5 p-4">
        <div className="flex w-full items-center justify-between">
          <div className="text-white text-base font-medium">
            {activeTab?.title}
          </div>

        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {activeTab.navSubTabs.map(subtab => (
                <SidebarMenuItem key={subtab.title}>
                  <SidebarMenuButton
                    onClick={() => {
                      setActiveSubTab(subtab)
                    }}
                    isActive={activeSubTab?.title === subtab.title}
                  >
                    <a
                      href={subtab.link}
                      className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 p-4 text-sm leading-tight whitespace-nowrap"
                    >
                      <div className="flex w-full items-center space-x-2 [&>svg]:text-yellow-400">
                        <subtab.icon />
                        <span className="text-xs">{subtab.title}</span>
                      </div>

                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
