'use client'

import { ListFilterIcon } from 'lucide-react'

import { Header } from '@/components/companies/header'
import { Table } from '@/components/companies/table'
import { Button } from '@/components/ui/button'

export default function Companies() {
  return (
    <div className="m-8">
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

      </section>

    </div>
  )
}
