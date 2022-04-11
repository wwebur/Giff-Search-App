import { useState } from "react"

const Searchbox: React.FC = () => {
  const [query, setQuery] = useState<string>("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    console.log(query)
  }
  
  return (
    <form className="justify-center" onSubmit={handleSubmit}>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setQuery(e.target.value)} placeholder="Buscar..." />
      <button type="submit">Buscar</button>
    </form>
  )
}

export default Searchbox
