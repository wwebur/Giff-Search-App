import {GetServerSideProps} from "next";

import {getGifById} from "../src/api";
import GifDetail from "../src/GifDetail";
import {IGif} from "../src/types";

interface Props {
  gifData: IGif;
}

const Gif: React.FC<Props> = ({gifData}) => {
  console.log(gifData);

  return <GifDetail gif={gifData} />;
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const {params} = context;
  const {id} = params;
  const gifData = await getGifById(id);

  return {
    props: {gifData},
  };
};

export default Gif;
