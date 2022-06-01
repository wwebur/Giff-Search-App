import {ParsedUrlQuery} from "querystring";

import {GetServerSideProps} from "next";

import {getGifById} from "../src/api";
import GifDetail from "../src/components/gif/GifDetail";
import {IGif} from "../src/types";

interface Props {
  gifData: IGif;
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

const Gif: React.FC<Props> = ({gifData}) => {
  return <GifDetail gif={gifData} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.params as IParams;

  const gifData = await getGifById(id);

  return {
    props: {gifData},
  };
};

export default Gif;
