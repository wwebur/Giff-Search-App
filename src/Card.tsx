import {useState} from "react";
import {FaHeart} from "react-icons/fa";
import Link from "next/link";

import Dropdown from "./Dropdown";
import {useAppDispatch} from "./redux/hooks";
import {userDeletedLikedGif, userLikedGif} from "./redux/features/userSlice";
import {IGif} from "./types";
interface Props {
  gif: IGif;
  hasLikeButton: boolean;
}

const Card: React.FC<Props> = ({gif, hasLikeButton}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const like = () => {
    if (isLiked) {
      setIsLiked(false);
      dispatch(
        userDeletedLikedGif({
          ...gif,
          isLiked: false,
        }),
      );
    } else {
      setIsLiked(true);
      dispatch(
        userLikedGif({
          ...gif,
          isLiked: true,
        }),
      );
    }
  };

  return (
    <div className="card relative" data-testid="card">
      <Link href={`/${gif.id}`}>
        <a>
          <img alt={gif.title} height="100%" src={gif.image} width="100%" />
        </a>
      </Link>
      <div className="flex justify-between gap-2 items-center mx-4">
        <button className={hasLikeButton ? "" : "hidden"} onClick={like}>
          <FaHeart className={` ${isLiked ? "text-red-500" : "text-gray-300"}`} size={20} />
        </button>
        <p className="text-xs text-center my-2 text-gray-300">{gif.title}</p>
        <Dropdown gifUrl={gif.url} />
      </div>
    </div>
  );
};

export default Card;
