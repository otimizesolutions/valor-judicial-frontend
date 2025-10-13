import { ArrowRightIcon } from 'lucide-react'

export function HighlightedLink({ title, icon: Icon, quantity }) {
  return (
    <div className="px-6 py-4 border border-gray-100 rounded-lg">
      <div className="centered gap-2">
        {Icon && (<Icon className="text-yellow-300" />)}
        <p className="text-gray-900 w-full">{title}</p>
      </div>

      <div className="mt-2 centered justify-between!">
        <p className="font-semibold text-4xl text-gray-900">{quantity}</p>
        <ArrowRightIcon className="size-10 p-2 rounded-full border border-blue-500 text-blue-500" />
      </div>

    </div>
  )
}
