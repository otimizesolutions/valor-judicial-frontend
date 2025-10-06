import { AlarmClockCheckIcon, ArrowRightIcon } from "lucide-react";

export function HighlightedLink(){
  return (
    <div className="px-6 py-4 border border-gray-100 rounded-lg">
      <div className="centered gap-2">
        <AlarmClockCheckIcon />
        <p className="text-gray-900 w-full">Processos em sua posse</p>
      </div>
      
      <div className="mt-2 centered justify-between!">
        <p className="font-semibold text-4xl text-gray-900">179</p>
        <ArrowRightIcon className="size-10 p-2 rounded-full border border-blue-500 text-blue-500"/>
      </div>

    </div>
  )
}