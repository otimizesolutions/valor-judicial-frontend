import type { ColumnDef } from '@tanstack/react-table'
import { Edit2, Eye, Users } from 'lucide-react'
import Link from 'next/link'
import { TableObjects } from '@/components/shared/table-objects/table'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export function Table() {
  const dataJson = [
    {
      empresa: 'Lumina Tecnologia Ltda',
      cnpj: '12.345.678/0001-90',
      data_protocolo: '25/09/2025',
      data_deferimento: '24/09/2025',
      n_processo: '5750019-72.2025.8.09.0003',
      natureza: 'Recuperação Judicial',
      aj: 'Tales Gomes',
      protocolo: '2025/0004789-0',
      vara: 'Goiânia (GO)',
      porcentagem: 75,
      status_texto: 'Segundo edital publicado',
    },
    {
      empresa: 'Verdelive Sustentabilidade S.A.',
      cnpj: '23.456.789/0001-01',
      data_protocolo: '10/09/2025',
      data_deferimento: '24/09/2025',
      n_processo: '5750020-55.2025.8.09.0003',
      natureza: 'Recuperação Judicial',
      aj: 'Tales Gomes',
      protocolo: '2025/0004789-0',
      vara: 'Goiânia (GO)',
      porcentagem: 75,
      status_texto: 'Segundo edital publicado',
    },
    {
      empresa: 'Nexus Consultoria Empresarial Ltda.',
      cnpj: '34.567.890/0001-12',
      data_protocolo: '02/09/2025',
      data_deferimento: '24/09/2025',
      n_processo: '5750021-41.2025.8.09.0003',
      natureza: 'Recuperação Judicial',
      aj: 'Tales Gomes',
      protocolo: '2025/0004789-0',
      vara: 'Goiânia (GO)',
      porcentagem: 75,
      status_texto: 'Segundo edital publicado',
    },
    {
      empresa: 'Solare Energia Renovável EIRELI',
      cnpj: '45.678.901/0001-23',
      data_protocolo: '27/08/2025',
      data_deferimento: '24/09/2025',
      n_processo: '5750023-13.2025.8.09.0003',
      natureza: 'Recuperação Judicial',
      aj: 'Tales Gomes',
      protocolo: '2025/0004789-0',
      vara: 'Goiânia (GO)',
      porcentagem: 25,
      status_texto: 'Segundo edital publicado',
    },
    {
      empresa: 'Horizonte Logística Integrada S.A.',
      cnpj: '56.789.012/0001-34',
      data_protocolo: '20/08/2025',
      data_deferimento: '24/09/2025',
      n_processo: '5750024-98.2025.8.09.0003',
      natureza: 'Recuperação Judicial',
      aj: 'Dobson Vicentini',
      protocolo: '2025/0004789-0',
      vara: 'Goiânia (GO)',
      porcentagem: 30,
      status_texto: 'Segundo edital publicado',
    },
    {
      empresa: 'Vita Farma Distribuidora Ltda.',
      cnpj: '67.890.123/0001-45',
      data_protocolo: '14/08/2025',
      data_deferimento: '24/09/2025',
      n_processo: '5750025-24.2025.8.09.0003',
      natureza: 'Recuperação Judicial',
      aj: 'Dobson Vicentini',
      protocolo: '2025/0004789-0',
      vara: 'Goiânia (GO)',
      porcentagem: 50,
      status_texto: 'Segundo edital publicado',
    },
    {
      empresa: 'Presidente Soluções Bancárias LTDA',
      cnpj: '78.901.234/0001-56',
      data_protocolo: '04/08/2025',
      data_deferimento: '24/09/2025',
      n_processo: '5750026-80.2025.8.09.0003',
      natureza: 'Recuperação Judicial',
      aj: 'Dobson Vicentini',
      protocolo: '2025/0004789-0',
      vara: 'Goiânia (GO)',
      porcentagem: 75,
      status_texto: 'Segundo edital publicado',
    },
  ]

  const columns: ColumnDef<Company>[] = [
    {
      accessorKey: 'empresa',
      header: () => <span className="pl-6">Empresas</span>,
      cell: ({ row }) => (
        <div className="flex flex-col pl-6">
          <p className="font-semibold text-gray-700">{row.original.empresa}</p>
          <p>
            CNPJ:
            {row.original.cnpj}
          </p>
        </div>
      ),
    },
    { accessorKey: 'data_protocolo', header: 'Data do protocolo' },
    { accessorKey: 'data_deferimento', header: 'Data do deferimento' },
    { accessorKey: 'n_processo', header: 'N processo' },
    { accessorKey: 'natureza', header: 'Natureza' },
    { accessorKey: 'aj', header: 'AJ' },
    { accessorKey: 'protocolo', header: 'Protocolo' },
    { accessorKey: 'vara', header: 'Vara' },
    {
      accessorKey: 'porcentagem',
      header: 'Porcentagem',
      cell: ({ row }) => { return <Progress value={row.original.porcentagem} /> },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        // O row.original.id seria ideal aqui, mas estamos usando row.index como no seu exemplo
        const companyId = row.original.id || row.index

        return (
          <div className="flex items-center justify-end space-x-2 pr-6">

            {/* Botão Detalhe */}
            <Link href={`companies/${companyId}`} passHref>
              <Button variant="ghost" size="icon">
                <Users />
              </Button>
            </Link>

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
