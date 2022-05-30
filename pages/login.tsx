import {useForm, SubmitHandler} from "react-hook-form";
import {useRouter} from "next/router";

import {userLogin} from "../src/redux/features/userSlice";
import {useAppDispatch} from "../src/redux/hooks";
import usersDatabase from "../src/users";
import auth from "../src/utils/auth";
import {User, UserInput} from "../src/types";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<UserInput>();
  const router = useRouter();
  //const user = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<UserInput> = (userInput) => {
    const existUser: User | undefined = auth(usersDatabase, userInput);

    if (existUser) {
      router.push("/");
      dispatch(userLogin(userInput));
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="max-w-xs mt-60 mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        id="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            {...register("username", {required: true})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            placeholder="Username"
            type="text"
          />
          <p className="text-left	text-xs self-start text-gray-300">John Doe</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", {required: true})}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="**********"
            type="password"
          />
          <p className="text-left	text-xs self-start text-gray-300 mb-3">123456</p>
          {(errors.password?.type || errors.username?.type) === "required" && (
            <p className="text-red-500 text-xs italic" id="login-error">
              Complete all required fields.
            </p>
          )}
        </div>
        <div className="">
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">2022 Advanced JS Study Group.</p>
    </div>
  );
};

export default Login;
