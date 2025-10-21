'use client'

import { ListFilterIcon } from 'lucide-react'

import { useEffect, useState } from 'react'
import { Header } from '@/components/companies/header'
import { Table } from '@/components/companies/table'
import { Button } from '@/components/ui/button'
import { fetchCompanies } from '@/http/companies/fetch-companies'

export default function Companies() {
  const [dataJson, setDataJson] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetchCompanies()
        setDataJson(response.data.results)
      }
      catch (error) {
        console.error('Erro ao buscar empresas:', error)
      }
    }

    getData()
  }, [])

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

        {dataJson && <Table data={dataJson} />}

      </section>

    </div>
  )
}
