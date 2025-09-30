import { AddButton } from "@/components/add-button";
import { Button } from "@/components/button";
import { ScrollTextIcon } from "lucide-react";

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

        <AddButton name="Adicionar empresa"/>
      </nav>

    </div>
  )
}