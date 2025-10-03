import { AddButton } from "@/components/add-button";
import { Button } from "@/components/button";
import { ScrollTextIcon, UserRoundSearchIcon } from "lucide-react";

export function Header(){
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="title">Bem vindo, usuário !</h1>
        <h2 className="subtitle">Acompanhe, gerencie seus clientes e processos.</h2>
      </div>
      <nav className=" centered gap-3">
        <Button className="border border-gray-300 centered gap-2">
          <ScrollTextIcon className="text-blue-500"/>
          <p className="text-blue-500">Relatórios</p>
        </Button>
        
        <Button className="border border-gray-300 centered gap-2">
          <UserRoundSearchIcon className="text-blue-500"/>
          <p className="text-blue-500">Consultar</p>
        </Button>

        <AddButton name="Novo processo"/>
      </nav>
    </header>
  )
}