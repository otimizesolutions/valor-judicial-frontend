import citations from "@/mocks/citations.json"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Dispatch, SetStateAction } from "react";


interface Citation {
  id: number;
  description: string;
  name: string;
  position: string;
  image: string;

}

interface EmployeeCitationCardProps {
  citation: Citation
  setCitationFunction: Dispatch<SetStateAction<Citation>>
}

export function EmployeeCitationCard({citation, setCitationFunction}: EmployeeCitationCardProps ){
  function nextCitation(){
    const currentIndex = citations.findIndex(c => c.id === citation.id);
    const nextIndex = (currentIndex + 1) % citations.length
    setCitationFunction(citations[nextIndex])
    
  }
  function previousCitation(){
    const currentIndex = citations.findIndex(c => c.id === citation.id);
    const nextIndex = (currentIndex - 1 + citations.length) % citations.length;
    setCitationFunction(citations[nextIndex])

  }
  return (
    <div className="px-5 py-6 bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl">
      <p className="font-poppins font-semibold font-white text-3xl text-white">{citation.description}</p>
      <p className="mt-4 font-poppins font-semibold text-2xl text-yellow-200">{citation.name}</p>
      <div className="flex justify-between">
        <p className="mt-3 font-lato text-white">{citation.position}</p>
        <div className="flex gap-8">
          <button onClick={previousCitation} className="p-4 border hover:bg-white/10 border-white rounded-full"><ArrowLeft className="text-white" /></button>
          <button onClick={nextCitation} className="p-4 border hover:bg-white/10 border-white rounded-full"><ArrowRight className="text-white" /></button>
        </div>

      </div>

    </div>
  )
}