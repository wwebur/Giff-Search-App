import {useState} from "react";
import {FaSearch} from "react-icons/fa";

import {searchGif} from "../src/api";

import {updateImages} from "./redux/features/imagesSlice";
import {useAppDispatch} from "./redux/hooks";

const Searchbox: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = searchGif(query);

    dispatch(updateImages(response));
  };

  return (
    <form className="flex justify-center my-6" onSubmit={handleSubmit}>
      <input
        className="py-2 px-4 placeholder:text-xl"
        placeholder="Search..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      />
      <button className="px-4 card" type="submit">
        <FaSearch color="white" />
      </button>
    </form>
  );
};

export default Searchbox;
