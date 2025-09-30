import { Button } from "./button";
import { PlusIcon } from "lucide-react"


interface AddButtonProps {
  name: string, 
  //Teria que pensar em como seria feito para adicionar outras propriedades
  // Exemplo: Href e onSubmit. 
}


export function AddButton({name}: AddButtonProps){
  return (
    <Button className="centered gap-2 bg-blue-600 text-white text-sm">
      <PlusIcon className="text-yellow-300" />
      {name}
    </Button>
  )
}