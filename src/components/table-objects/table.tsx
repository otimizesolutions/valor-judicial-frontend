'use client'

import type { ColumnDef } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { PaginationSection } from './pagination-section'

interface TableProps {
  columns: ColumnDef<any>[]
  dataJson: any[]
}

export function TableObjects({ columns, dataJson }: TableProps) {
  // 3. Inicialização do React Table
  const table = useReactTable({
    data: dataJson,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // Habilita a paginação

    // Configuração de 10 itens por página
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
  })

  // --- Renderização do Componente ---
  return (
    <div className="w-full rounded-md border-1">
      <div>
        <Table>
          {/* Cabeçalho da Tabela - Usando a lógica do React Table */}
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          {/* Corpo da Tabela - Usando a lógica de paginação do React Table */}
          <TableBody>
            {/* table.getRowModel().rows retorna APENAS as 10 linhas da página atual */}
            {table.getRowModel().rows?.length
              ? (
                  table.getRowModel().rows.map(row => (
                    <TableRow key={row.id} className="odd:bg-gray-50/20">
                      {row.getVisibleCells().map(cell => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )
              : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      Nenhuma empresa encontrada.
                    </TableCell>
                  </TableRow>
                )}
          </TableBody>
        </Table>
      </div>

      {/* 4. Controles de Paginação (Next e Previous) */}
      <PaginationSection table={table} />

    </div>
  )
}
