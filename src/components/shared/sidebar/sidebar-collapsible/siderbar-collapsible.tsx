import type { SubTab, Tab } from '../interfaces'

import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

interface SidebarCollapsibleProps {
  activeTab: Tab
  activeSubTab: SubTab
}

export function SidebarCollapsible({ activeTab, activeSubTab }: SidebarCollapsibleProps) {
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
            <SidebarMenu className="px-4 flex flex-col gap-2">
              {activeTab.navSubTabs.map(subtab => (
                <SidebarMenuItem key={subtab.title}>
                  <Link
                    href={subtab.link}
                    className="flex flex-col items-start"
                  >
                    <SidebarMenuButton isActive={activeSubTab?.title === subtab.title}>
                      <div className="flex w-full items-center space-x-2 [&>svg]:text-yellow-400">
                        <subtab.icon />
                        <span className="text-xs">{subtab.title}</span>
                      </div>

                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
