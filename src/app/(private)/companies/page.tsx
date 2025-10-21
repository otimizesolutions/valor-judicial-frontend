'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { ListFilterIcon } from 'lucide-react'
import { Header } from '@/components/companies/header'
import { Table } from '@/components/companies/table'
import { Button } from '@/components/ui/button'
import { fetchCompanies } from '@/http/companies/fetch-companies'

export default function Companies() {
  const { data: companies } = useSuspenseQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const response = await fetchCompanies()

      return response.data.results
    },
  })

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

        <Table data={companies} />

      </section>
    </div>
  )
}
