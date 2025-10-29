// import { Command } from 'lucide-react'
import VIcon from '@public/v-icon.svg'
import Image from 'next/image'
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'

export function SidebarNavHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild className="flex justify-center size-12">
            <a href="#">
              <Image src={VIcon} alt="Logo da Valor Judicial" className="size-5" />
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}
