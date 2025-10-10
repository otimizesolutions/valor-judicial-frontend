'use client'

import type { IconNode } from 'lucide-react'
import { ArchiveX, Building, Command, File, Flag, Home, Inbox, Send, Trash2 } from 'lucide-react'
import * as React from 'react'

import { NavUser } from '@/components/nav-user'
import { Label } from '@/components/ui/label'
import {
  SidebarHeader as SH,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Switch } from '@/components/ui/switch'
import { SidebarCollapsible } from './sidebar-collapsible/siderbar-collapsible'
import { SidebarHeader } from './sidebar-nav/header'
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
    isActive: true,
    navSubTabs: [
      {
        title: 'Recuperações Judiciais',
        icon: <Flag />,
        link: 'dashboard',
      },
      {
        title: 'Minhas Atividades',
        icon: <Flag />,
        link: 'companies',
      },
    ],
  },
  {
    title: 'Cadastros',
    url: '#',
    icon: Building,
    isActive: false,
    navSubTabs: [
      {
        title: 'Empresas',
        icon: <Flag />,
        link: 'companies',
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeTab, setActiveTab] = React.useState(navTabs[0])
  const [activeSubTab, setActiveSubTab] = React.useState(activeTab.navSubTabs[0])

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
        activeSubTab={activeTab}
      />

    </Sidebar>
  )
}
