import Image from "next/image";
import {FaLink} from "react-icons/fa";

import {IGif} from "../../types";
import GoBackButton from "../goBackButton";

import Dropdown from "./Dropdown";

interface Props {
  gif: IGif;
}

const GifDetail: React.FC<Props> = ({gif}) => {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <GoBackButton />
      <h1 className="my-10 text-2xl text-slate-300 font-semibold">{gif.title}</h1>
      <div className="flex gap-20">
        <Image alt={gif.title} height={400} objectFit="cover" src={gif.image} width={400} />
        <div className="flex flex-col gap-5">
          <Dropdown gifUrl={gif.url} text="Share" />
          <button
            className="px-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 text-sm font-semibold rounded-md items-center flex gap-4"
            onClick={() => navigator.clipboard.writeText(gif.embedUrl)}
          >
            <FaLink className="bg-slate-300 px-1 rounded-md" size={25} />
            <p className="font-semibold text-slate-300 text-lg">Link</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GifDetail;
