export function Button({children, className}){
  return (
    <button className={`px-4 py-3 rounded-lg hover:cursor-pointer ${className}`}>
      {children}
    </button>
  )
}