import Image from "next/image"
import { FaTwitter, FaUser } from 'react-icons/fa'
import Link from "next/link"
import useLocalStorage from "./useLocalStorage"

const Navbar: React.FC = () => {
  const [user, setUser, removeValue] = useLocalStorage("gifUser", "")
  console.log("este es el user", user)  
  
  return (
    <nav className="flex justify-between items-center mx-4">
      <Link href="/">
        <a className="w-40 md:w-full flex items-center">
          <Image 
            height={50} 
            width={200} 
            alt="frontend cafe logo" 
            src="/logotype-fec.svg" 
          />
        </a>
      </Link>
      <div className="flex gap-4 text-slate-300">
        {
          (user === "") ?         
          <button 
            className="flex items-center border rounded-md px-4 py-1 font-semibold hover:text-slate-500 text-xs md:text-md"
          >
            <FaTwitter className="mr-2" size={16} />
            Login
        </button> 
        :
        <button 
          className="flex items-center border rounded-md px-4 py-1 font-semibold hover:text-slate-500 text-xs md:text-md"
          onClick={removeValue}
        >
          <FaUser className="mr-2" size={16} />
          Logout
        </button> 
        }
      </div>
    </nav>
  )
}

export default Navbar
