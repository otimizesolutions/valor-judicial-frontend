import { AddButton } from "@/components/add-button";
import { Button } from "@/components/button";
import { ScrollTextIcon } from "lucide-react";
import Link from "next/link";

export default function Companies(){
  return (
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
  )
}