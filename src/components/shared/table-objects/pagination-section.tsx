'use client'

import { Button } from '@/components/ui/button'

export function PaginationSection({ table }: { table: any }) {
  return (
    <div className="flex items-center justify-between py-4 px-6 border-t">
      <div className="space-x-2">
        {/* Botão ANTERIOR */}
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>

        {/* Botão PRÓXIMO */}
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próximo
        </Button>

      </div>
      {/* Status da Paginação: Página X de Y */}
      <div className="text-sm text-muted-foreground">
        Página
        {' '}
        {table.getState().pagination.pageIndex + 1}
        {' '}
        de
        {' '}
        {table.getPageCount()}
      </div>
    </div>
  )
}
