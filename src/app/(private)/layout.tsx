import type { ReactNode } from 'react'
import { AppSidebar } from '@/components/shared/sidebar/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '360px',
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger />
        <main className="m-8">
          {children}
        </main>

      </SidebarInset>
    </SidebarProvider>
  )
}
