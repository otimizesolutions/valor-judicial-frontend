import citations from "@/mocks/citations.json"


export function EmployeeCitation(){
  const first = citations[0]

  function previousCitation(){}
  function nextCitation(){}
  return (
    <div style={{backgroundImage: `url(${first.image})`}} className={`bg-no-repeat bg-cover min-h-screen border flex items-end p-8`}>
      <div className="bg-gray-300">
        <h1>{first.description}</h1>
        <p>{first.name}</p>
        <p>{first.position}</p>
      </div>
    </div>
  )
}