import Image from "next/image"
import { FaTwitter } from 'react-icons/fa'

const Navbar: React.FC = () => {
  
  return (
    <nav className="flex justify-between items-center mx-4">
      <div className="w-40 md:w-full flex items-center">
        <Image height={50} width={200} alt="frontend cafe logo" src="/logotype-fec.svg" />
      </div>
      <div className="flex gap-4 text-slate-300">
        <button className="flex items-center border rounded-md px-4 py-1 font-semibold hover:text-slate-500 text-xs md:text-md"><FaTwitter className="mr-2" size={16} />Login</button>
      </div>
    </nav>
  )
}

export default Navbar
