import { useState } from "react"

const Searchbox: React.FC = () => {
  const [query, setQuery] = useState<string>("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    console.log(query)
  }
  
  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <input className="rounded-sm px-2" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setQuery(e.target.value)} placeholder="Buscar..." />
      <button className="rounded-md px-2 bg-red-500" type="submit">Buscar</button>
    </form>
  )
}

export default Searchbox
