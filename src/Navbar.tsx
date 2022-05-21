import Image from "next/image";
import {FaTwitter, FaUser} from "react-icons/fa";
import Link from "next/link";

import useLocalStorage from "./useLocalStorage";
import LoginButton from "./LoginButton";

const Navbar: React.FC = () => {
  const [user, setUser, removeValue] = useLocalStorage("gifUser", "");

  console.log("este es el user", user);

  return (
    <nav className="flex justify-between items-center mx-4">
      <Link href="/">
        <a className="w-40 md:w-full flex items-center">
          <Image alt="frontend cafe logo" height={50} src="/logotype-fec.svg" width={200} />
        </a>
      </Link>
      <div className="flex gap-4 text-slate-300">
        {user === "" ? <LoginButton isLogin={false} /> : <LoginButton isLogin={true} />}
      </div>
    </nav>
  );
};

export default Navbar;
