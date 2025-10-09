import { Button } from "@/components/ui/button";
import { TableObjects } from "@/app/(private)/companies/components/table-objects";
import { PlusIcon, ListFilterIcon } from "lucide-react";
import Link from "next/link";

export default function Companies(){
  return (
    <div>
      <div className="flex items-center justify-between">
        <header>
          <h1 className="title">Gestão de empresas</h1>
          <h2 className="subtitle">Acompanhe, gerencie as empresas</h2>
        </header>
        
        <Link href={'/dashboard'}> 
          <Button variant="secondary" size="default">
            <PlusIcon />
            <p>Adicionar Empresa</p>
          </Button>
        </Link>

      </div>


      {/* Table section */}
      <section className="mt-4">
        <div className="mb-4">
          <Button variant={"secondary"}>
            <ListFilterIcon />
            Filtros
          </Button>
        </div>
        <TableObjects />
        {/* <StickyHeaderTableDemo /> */}

      </section>

    </div>
  )
}