import { AddButton } from "@/components/add-button";
import { Button } from "@/components/button";
import DataTableColumnsVisibilityDemo from "@/components/table-example";
import { TableObjects } from "@/app/(private)/companies/components/table-objects";
import { ScrollTextIcon } from "lucide-react";
import Link from "next/link";
import StickyHeaderTableDemo from "./components/table-test";

export default function Companies(){
  return (
    <div>
      <div className="flex items-center justify-between">
        <header>
          <h1 className="title">Gestão de empresas</h1>
          <h2 className="subtitle">Acompanhe, gerencie as empresas</h2>
        </header>
        
        <nav className=" centered gap-3 border">
          <Button className="border border-gray-300 centered gap-2">
            <ScrollTextIcon className="text-blue-500"/>
            <p className="text-blue-500">Relatórios</p>
          </Button>
          {/* Testing */}
          <Link href={'/dashboard'}> 
            <AddButton name="Adicionar empresa"/>
          </Link>
        </nav>

      </div>


      {/* Table section */}
      <section className="mt-4">
        <div className="mb-4">
          <AddButton name={"Filtros"} />
        </div>
        <TableObjects />
        {/* <StickyHeaderTableDemo /> */}

      </section>

    </div>
  )
}