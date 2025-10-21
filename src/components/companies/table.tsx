import type { ColumnDef } from '@tanstack/react-table'
import type { FetchCompanyResponse } from '@/http/companies/fetch-companies'
import { Edit2, Eye } from 'lucide-react'
import Link from 'next/link'
import { TableObjects } from '@/components/shared/table-objects/table'
import { Button } from '@/components/ui/button'

export function Table({ data: dataJson }: { data: FetchCompanyResponse[] }) {
  const columns: ColumnDef<FetchCompanyResponse>[] = [
    {
      accessorKey: 'company_name',
      header: () => <span className="pl-6">Empresas</span>,
      cell: ({ row }) => (
        <div className="flex flex-col pl-6">
          <p className="font-semibold text-gray-700">{row.original.company_name}</p>
          <p>
            CNPJ:
            {row.original.cnpj}
          </p>
        </div>
      ),
    },
    { accessorKey: 'trade_name', header: 'Nome fantasia' },
    { accessorKey: 'phone', header: 'Celular' },
    { accessorKey: 'address.state', header: 'Estado' },
    { accessorKey: 'address.city', header: 'Cidade' },
    {
      id: 'actions',
      cell: ({ row }) => {
        const companyId = row.original.id || row.index

        return (
          <div className="flex items-center justify-end space-x-5 pr-6">

            {/* Botão Detalhe */}
            <Link href={`companies/${companyId}`} passHref>
              <Button variant="ghost" size="icon">
                <Eye />
              </Button>
            </Link>

            {/* Botão Editar */}
            <Link href={`companies/${companyId}/edit`} passHref>
              <Button variant="ghost" size="icon">
                <Edit2 />
              </Button>
            </Link>
          </div>
        )
      },
    },
  ]
  return (
    <TableObjects columns={columns} dataJson={dataJson} />
  )
}
