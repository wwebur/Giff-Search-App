import {useRouter} from "next/router";

import {userLogout} from "./redux/features/userSlice";
import {useAppDispatch, useAppSelector} from "./redux/hooks";

const LoginButton: React.FC = () => {
  const user = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    Boolean(user) ? dispatch(userLogout()) : router.push("/login");
  };

  return (
    <button
      className="card flex items-center border rounded-none px-4 py-1 font-semibold hover:text-slate-500 hover:bg-slate-300 text-xs md:text-md"
      id="login-button"
      onClick={handleClick}
    >
      {Boolean(user) ? "Logout" : "Login"}
    </button>
  );
};

export default LoginButton;
