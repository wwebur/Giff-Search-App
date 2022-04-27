import { useState } from "react"
import { FaSearch } from 'react-icons/fa'
import { searchGif } from "../src/api"

const Searchbox: React.FC = () => {
  const [query, setQuery] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    searchGif(query)
    console.log(query)
  }
  
  return (
    <form className="flex justify-center my-6" onSubmit={handleSubmit}>
      <input className="py-2 px-4 placeholder:text-xl" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setQuery(e.target.value)} placeholder="Search..." />
      <button className="px-4 card" type="submit"><FaSearch color="white" /></button>
    </form>
  )
}

export default Searchbox
