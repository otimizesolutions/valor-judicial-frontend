"use client"

import citations from "@/mocks/citations.json"
import { EmployeeCitationCard } from "./employee-citation-card"
import { useState } from "react"


export function EmployeeCitation(){
  const [citation, setCitation] = useState(citations[0])

  return (
    <div style={{backgroundImage: `url(${citation.image})`}} className={`bg-no-repeat bg-cover min-h-screen border flex items-end p-8`}>
      <EmployeeCitationCard
        citation={citation}
        setCitationFunction={setCitation}
      />
    </div>
  )
}