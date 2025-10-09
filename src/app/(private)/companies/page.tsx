'use client'

import { ListFilterIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Header } from './components/header'
import { Table } from './components/table'

export default function Companies() {
  return (
    <div>
      <Header />

      {/* Table section */}
      <section className="mt-4">
        <div className="mb-4">
          <Button variant="secondary">
            <ListFilterIcon />
            Filtros
          </Button>
        </div>

        <Table />

        {/* <TableObjects /> */}
        {/* <StickyHeaderTableDemo /> */}

      </section>

    </div>
  )
}
