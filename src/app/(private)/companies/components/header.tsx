import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <header>
        <h1 className="title">Gestão de empresas</h1>
        <h2 className="subtitle">Acompanhe, gerencie as empresas</h2>
      </header>

      <Link href="/dashboard">
        <Button variant="secondary" size="default">
          <PlusIcon />
          <p>Adicionar Empresa</p>
        </Button>
      </Link>

    </div>
  )
}
