import {GetStaticPaths, GetStaticProps} from "next";

import {trending} from "../src/api";
import {getGifById} from "../src/api";
import GifDetail from "../src/GifDetail";

interface Props {
  gif: any;
}

const Gif: React.FC<Props> = ({gif}) => {
  return (
    <div>
      <GifDetail gif={gif} />
    </div>
  );
};

export default Gif;

type PathType = {
  params: {
    id: string;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const gifs = await trending();
  const paths: PathType[] = gifs.map((gif: any) => {
    return {
      params: {id: gif.id},
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = params?.id;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }
  const gif = await getGifById(id);

  return {
    props: {
      gif,
    },
  };
};
