import type { Dispatch, SetStateAction } from 'react'
import type { Tab } from '../interfaces'
import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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

interface SidebarNavProps {
  navTabs: Tab[]
  activeTab: Tab
  setActiveTab: Dispatch<SetStateAction<Tab>>
}

export function SidebarNav({ navTabs, activeTab, setActiveTab }: SidebarNavProps) {
  /* This is the first sidebar */
  /* We disable collapsible and adjust width to icon. */
  /* This will make the sidebar appear as icons. */
  const { setOpen } = useSidebar()
  const { data: session } = useSession()
  const userPhoto = session?.user.photo

  return (
    <Sidebar
      collapsible="none"
      className="lg:min-w-20 lg:max-w-20 lg:items-center"
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
                    className="px-2.5 md:px-3 size-12 flex justify-center"
                  >
                    <item.icon className="" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Avatar className="size-10">
          <AvatarImage src={userPhoto} />
          <AvatarFallback />
        </Avatar>
      </SidebarFooter>
    </Sidebar>
  )
}
