import {FaHeart} from "react-icons/fa";
import Link from "next/link";
import {useRouter} from "next/router";

import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {userDeletedLikedGif, userLikedGif} from "../../redux/features/userSlice";
import {likedImage, unlikedImage} from "../../redux/features/imagesSlice";
import {IGif} from "../../types";

import Dropdown from "./Dropdown";
interface Props {
  gif: IGif;
  isHidden: boolean;
}

const Card: React.FC<Props> = ({gif, isHidden}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.isLogin);
  const router = useRouter();

  const like = () => {
    if (!user) {
      router.push("/login");
    } else if (gif.isLiked) {
      dispatch(
        userDeletedLikedGif({
          ...gif,
          isLiked: false,
        }),
      );
      dispatch(unlikedImage(gif.id));
    } else {
      dispatch(
        userLikedGif({
          ...gif,
          isLiked: true,
        }),
      );
      dispatch(likedImage(gif.id));
    }
  };

  return (
    <div className="card relative" data-testid="card">
      <Link href={`/${gif.id}`}>
        <a>
          <img alt={gif.title} height="100%" src={gif.image} width="100%" />
        </a>
      </Link>
      {isHidden ? (
        <></>
      ) : (
        <div className="flex justify-between gap-2 items-center mx-4">
          <button onClick={like}>
            <FaHeart className={` ${gif.isLiked ? "text-red-500" : "text-gray-300"}`} size={20} />
          </button>
          <p className="text-xs text-center my-2 text-gray-300">{gif.title}</p>
          <Dropdown gifUrl={gif.url} />
        </div>
      )}
    </div>
  );
};

export default Card;
