import type { LucideIcon } from 'lucide-react'

export interface SubTab {
  title: string
  icon: LucideIcon
  link: string
}

export interface Tab {
  title: string
  icon: LucideIcon
  navSubTabs: SubTab[]
}
