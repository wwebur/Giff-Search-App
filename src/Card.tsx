import {useState} from "react";
import {FaHeart} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import Dropdown from "./Dropdown";
interface Props {
  gif: any;
}

const Card: React.FC<Props> = ({gif}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const like = () => (isLiked ? setIsLiked(false) : setIsLiked(true));

  return (
    <div className="card" data-testid="card">
      <Link href={`/${gif.id}`}>
        <a>
          <img
            alt={gif.title}
            height="100%"
            objectFit="cover"
            src={gif.images.original.webp}
            width="100%"
          />
        </a>
      </Link>
      <div className="flex justify-between gap-2 items-center mx-4">
        <button onClick={like}>
          <FaHeart className={` ${isLiked ? "text-red-500" : "text-gray-300"}`} size={20} />
        </button>
        <p className="text-xs text-center my-2 text-gray-300">{gif.title}</p>
        <Dropdown gifUrl={gif.url} />
      </div>
    </div>
  );
};

export default Card;
