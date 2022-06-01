import Link from "next/link";
import {FaHeart} from "react-icons/fa";

import {useAppSelector} from "../../redux/hooks";

import LoginButton from "./LoginButton";

const UserInfo: React.FC = () => {
  const user = useAppSelector((state) => state.user.username);
  const likedGifsQuantity = useAppSelector((state) => state.user.likedGifs);

  return (
    <div className="flex items-center text-xs gap-4">
      <div>
        <p className="mb-1" id="login-hello">
          Hello, {user}
        </p>
        {likedGifsQuantity.length ? (
          <Link href="/liked">
            <a>
              <div className="text-xs flex gap-5">
                <div className="relative">
                  <FaHeart className="text-gray-300" size={16} />
                  <p className="bg-red-400 px-1 rounded-full absolute bottom-0 mr-[-14px] mt-[-4px] right-0">
                    {likedGifsQuantity.length}
                  </p>
                </div>
                <p>Liked gifs</p>
              </div>
            </a>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <LoginButton />
    </div>
  );
};

export default UserInfo;
