import {GetServerSideProps} from "next";

import {getGifById} from "../src/api";
import GifDetail from "../src/GifDetail";

interface Props {
  gifData: any;
}

const Gif: React.FC<Props> = ({gifData}) => {
  return (
    <div>
      <GifDetail gif={gifData} />
    </div>
  );
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
