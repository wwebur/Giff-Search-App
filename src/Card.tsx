import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Dropdown from './Dropdown';
interface Props {
  gif: any;
}

const Card: React.FC<Props> = ({ gif }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const like = ()=> (isLiked) ? setIsLiked(false) : setIsLiked(true)

  return (
    <div className="card">
      <button onClick={like} className='flex m-5 absolute'>
        <FaHeart className={` ${isLiked ? "text-red-500" : "text-gray-300"}`}  size={20} />
      </button>
      <img
        width="100%"
        src={gif.images.fixed_height.url} 
        alt={gif.title} 
      />
      <div className='flex justify-between items-center mx-4'>
        <p className="text-xs my-2 text-gray-300">{gif.title}</p>
        <Dropdown gifUrl={gif.url} />
      </div>
    </div>
  )
}

export default Card
