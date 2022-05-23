import Image from "next/image";
import Link from "next/link";

import LoginButton from "./LoginButton";
import {useAppSelector} from "./redux/hooks";

const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.user.username);

  console.log("este es el user", user);

  return (
    <nav className="flex justify-between items-center mx-4">
      <Link href="/">
        <a className="w-40 flex items-center">
          <Image alt="frontend cafe logo" height={50} src="/logotype-fec.svg" width={200} />
        </a>
      </Link>
      <div className="flex gap-4 text-slate-300">
        {Boolean(user) ? (
          <div className="flex items-center text-xs gap-4">
            <p id="login-hello">Hello, {user}</p>
            <LoginButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
