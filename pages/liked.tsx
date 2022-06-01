import GoBackButton from "../src/components/goBackButton";
import MasonryComponent from "../src/components/masonry";
import {useAppSelector} from "../src/redux/hooks";

const Liked: React.FC = () => {
  const likedGifs = useAppSelector((state) => state.user.likedGifs);

  return (
    <div className="justify-center align-center mt-20">
      <GoBackButton />
      <h4 className="text-xl text-left pl-2 mb-4 font-bold text-slate-400">🤍 Liked Gifs</h4>
      {likedGifs.length ? (
        <MasonryComponent currentGifs={likedGifs} isHidden={false} />
      ) : (
        <p className="text-slate-400">You dont have liked images</p>
      )}
    </div>
  );
};

export default Liked;
