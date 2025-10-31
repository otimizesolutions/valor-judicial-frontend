'use client'

import { ListFilterIcon } from 'lucide-react'
import { Header } from '@/components/companies/list/header'
import { Table } from '@/components/companies/list/table'
import { Button } from '@/components/ui/button'
import { fetchAll } from '@/queries/companies'

export default function Companies() {
  const { data: companies, isLoading } = fetchAll()
  console.log('carregando ', isLoading)

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

        <Table data={companies ?? []} />

      </section>
    </div>
  )
}
