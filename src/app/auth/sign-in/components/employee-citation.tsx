"use client"

import citations from "@/mocks/citations.json"
import { EmployeeCitationCard } from "./employee-citation-card"
import { useState } from "react"


export function EmployeeCitation(){
  const [citation, setCitation] = useState(citations[0])

  return (
    <div style={{backgroundImage: `url(${citation.image})`}} className={`hidden bg-no-repeat bg-cover min-h-screen border xl:flex items-end p-8 transition-discrete duration-700`}>
      <EmployeeCitationCard
        citation={citation}
        setCitationFunction={setCitation}
      />
    </div>
  )
}