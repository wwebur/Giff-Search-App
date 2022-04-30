import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaTwitter } from "react-icons/fa";
import useLocalStorage from "../src/useLocalStorage";
import users from "../src/users"

interface Inputs {
  username: string;
  password: string;
};

interface User {
  id: string;
  username: string;
  password: string;
  fullname: string;
};

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const [userDatabase, setUserDatabase] = useState<User[]>([])
  const [user, setUser] = useLocalStorage("gifUser", "")

  useEffect(()=> {
    setUserDatabase(JSON.parse(users))
    console.log(users)
  },[])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const existUser: User | undefined = userDatabase.find(user => user.username === data.username)
    setUser(user)
    console.log(user)
}

  return (
    <div className="max-w-xs">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="username"
          >
            Username
          </label>
          <input {...register("username", { required: true, })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" 
            type="text" 
            placeholder="Username" 
          />
        </div>
        <div className="mb-6">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="password"
          >
            Password
          </label>
          <input {...register("password", { required: true, })} 
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="**********" 
          />
          {errors.password?.type === 'required' && <p className="text-red-500 text-xs italic">Password is required.</p>}
          
        </div>
        <div className="">
          <div className="flex items-center justify-between">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="submit"
            >
              Sign In
            </button>
            <a 
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" 
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <p className="my-4">or Login with</p>
          <button 
            className="text-white flex items-center border justify-center rounded-md w-full py-3 font-semibold bg-[#1DA1F2] text-xs hover:bg-[#55ACEF] md:text-md"
          >
            <FaTwitter className="mr-2" size={16} />
            Twitter
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Advanced JS Study Group.
      </p>
    </div>
  );
}

export default Login