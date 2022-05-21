import Link from "next/link";
import {FaTwitter} from "react-icons/fa";

import useLocalStorage from "./useLocalStorage";

interface Props {
  isLogin: boolean;
}

const LoginButton: React.FC<Props> = ({isLogin}) => {
  const [removeValue] = useLocalStorage("gifUser", "");
  const url = isLogin ? "/" : "/login";

  return (
    <Link href={url}>
      <a>
        <button
          className="flex items-center border rounded-md px-4 py-1 font-semibold hover:text-slate-500 text-xs md:text-md"
          id="login-button"
          onClick={isLogin ? removeValue : console.log("hello")}
        >
          <FaTwitter className="mr-2" size={16} />
          {isLogin ? "Logout" : "Login"}
        </button>
      </a>
    </Link>
  );
};

export default LoginButton;
