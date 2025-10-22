'use client'

import type { SubTab, Tab } from './interfaces'
import { Building, Flag, Home } from 'lucide-react'

import { usePathname } from 'next/navigation'
import * as React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarCollapsible } from './sidebar-collapsible/siderbar-collapsible'
import { SidebarNav } from './sidebar-nav/sidebar-nav'

const navTabs: Tab[] = [
  {
    title: 'Dashboard',
    icon: Home,
    navSubTabs: [
      {
        title: 'Recuperações Judiciais',
        icon: Flag,
        link: '/dashboard',
      },
      {
        title: 'Empresas',
        icon: Building,
        link: '/companies',
      },
    ],
  },
  {
    title: 'Cadastros',
    icon: Building,
    navSubTabs: [
      {
        title: 'Lorem',
        icon: Flag,
        link: '/companiess',
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname().split('/')[1]
  function getActiveTabs(): [Tab, SubTab] {
    let openedTab: Tab
    let openedSubTab: SubTab

    for (const tab of navTabs) {
      for (const subTab of tab.navSubTabs) {
        if (subTab.link.replace('/', '') === pathName) {
          openedTab = tab
          openedSubTab = subTab

          return [openedTab, openedSubTab]
        }
      }
    }
    openedTab = navTabs[0]
    openedSubTab = openedTab.navSubTabs[0]

    console.log('Pathname não encontrado ', pathName)

    return [openedTab, openedSubTab]
  }

  const [openedTab, openedSubTab] = getActiveTabs()
  const [activeTab, setActiveTab] = React.useState(openedTab)

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      <SidebarNav
        navTabs={navTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <SidebarCollapsible
        activeTab={activeTab}
        activeSubTab={openedSubTab}
      />

    </Sidebar>
  )
}
