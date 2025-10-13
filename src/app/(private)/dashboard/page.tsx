'use client'

import { AlarmClock, ListFilterIcon, TriangleAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from './components/header'
import { HighlightedLink } from './components/highlighted-link'
import { Table } from './components/table'

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
                title={link.title}
                icon={link.icon}
                quantity={link.quantity}
              />
            )
          })
        }
      </section>

      <section className="mt-4">
        <div className="mb-4">
          <Button variant="secondary">
            <ListFilterIcon />
            Filtros
          </Button>
        </div>

        <Table />

      </section>

    </div>
  )
}
