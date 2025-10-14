import type { ReactNode } from 'react'
import { AppSidebar } from '@/components/shared/sidebar/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '360px',
        }
      }

    >
      <AppSidebar />
      <SidebarInset>
        <main>
          <SidebarTrigger />
          {children}
        </main>

      </SidebarInset>
    </SidebarProvider>
  )
}
