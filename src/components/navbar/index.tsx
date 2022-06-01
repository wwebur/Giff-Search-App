import Image from "next/image";
import Link from "next/link";

import {useAppSelector} from "../../redux/hooks";

import LoginButton from "./LoginButton";
import UserInfo from "./UserInfo";

const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.user.username);

  return (
    <nav className="flex justify-between items-center mx-4">
      <Link href="/">
        <a className="w-40 flex items-center">
          <Image alt="frontend cafe logo" height={50} src="/logotype-fec.svg" width={200} />
        </a>
      </Link>
      <div>
        <div className=" text-slate-300">{Boolean(user) ? <UserInfo /> : <LoginButton />}</div>
      </div>
    </nav>
  );
};

export default Navbar;
