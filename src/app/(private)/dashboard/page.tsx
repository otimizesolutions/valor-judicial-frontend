'use client'

import { AlarmClock, ListFilterIcon, Settings2, TriangleAlert } from 'lucide-react'
import { Header } from '@/components/dashboard/header'
import { HighlightedLink } from '@/components/dashboard/highlighted-link'
import { Table } from '@/components/dashboard/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Dashboard() {
  const links = [
    {
      title: 'Total de processos',
      icon: null,
      quantity: 179,
      link: '#',
    },
    {
      title: 'Processos em sua posse',
      icon: null,
      quantity: 40,
      link: '#',
    },
    {
      title: 'Prazos para hoje',
      icon: TriangleAlert,
      quantity: 7,
      link: '#',
    },
    {
      title: 'Pendências',
      icon: AlarmClock,
      quantity: 179,
      link: '#',
    },
  ]
  return (
    <div className="m-8">
      <Header />

      <section className="mt-6 grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {
          links.map((link) => {
            return (
              <HighlightedLink
                key={link.title}
                title={link.title}
                icon={link.icon}
                quantity={link.quantity}
              />
            )
          })
        }
      </section>

      <section className="mt-4">
        <div className="mb-4 flex justify-between items-center">
          <Button variant="secondary" size="sm">
            <ListFilterIcon />
            Filtros
          </Button>

          <div className="flex items-center space-x-4">
            <Input />
            <Button size="sm">
              <Settings2 />
              Customizar
            </Button>
          </div>

        </div>

        <Table />

      </section>

    </div>
  )
}
