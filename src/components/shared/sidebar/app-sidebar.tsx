'use client'

import type { IconNode } from 'lucide-react'
import { Building, Flag, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

import * as React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarCollapsible } from './sidebar-collapsible/siderbar-collapsible'
import { SidebarNav } from './sidebar-nav/sidebar-nav'

interface Tab {
  title: string
  link: string
  icon: IconNode
}

const navTabs = [
  {
    title: 'Dashboard',
    url: '#',
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
    url: '#',
    icon: Building,
    navSubTabs: [
      {
        title: 'Lorem',
        icon: Flag,
        link: '/companies',
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeTab, setActiveTab] = React.useState(navTabs[0])
  const [activeSubTab, setActiveSubTab] = React.useState(activeTab.navSubTabs[0])
  const pathName = usePathname()
  console.log('pathname', pathName)

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
        activeSubTab={activeSubTab}
        setActiveSubTab={setActiveSubTab}
      />

    </Sidebar>
  )
}
