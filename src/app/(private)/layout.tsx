import { ReactNode } from "react"

export default function PrivateLayout({children}: {children: ReactNode}){
  return (
    <div className="m-8">
      {children}
    </div>
  )
}