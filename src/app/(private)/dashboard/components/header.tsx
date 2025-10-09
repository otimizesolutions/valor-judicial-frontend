import { PlusIcon, ScrollTextIcon, UserRoundSearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header(){
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="title">Bem vindo, usuário !</h1>
        <h2 className="subtitle">Acompanhe, gerencie seus clientes e processos.</h2>
      </div>
      <nav className=" centered gap-3">
        <Button>
          <ScrollTextIcon />
          <p >Relatórios</p>
        </Button>
        
        <Button>
          <UserRoundSearchIcon />
          <p>Consultar</p>
        </Button>

        <Button variant={"secondary"}>
          <PlusIcon />
          <p>Novo Processo</p>
        </Button>
      </nav>
    </header>
  )
}