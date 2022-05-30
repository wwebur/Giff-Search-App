import Masonry from "react-masonry-css";

import Card from "./Card";
import {IGif} from "./types";

interface MasonryProps {
  currentGifs: IGif[];
  hasLikeButton: boolean;
}
const breakpoints = {
  default: 4,
  900: 3,
  700: 2,
  500: 1,
};

const MasonryComponent: React.FC<MasonryProps> = ({currentGifs, hasLikeButton}) => {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {currentGifs.map((item: IGif) => (
        <Card key={item.id} gif={item} hasLikeButton={hasLikeButton} />
      ))}
    </Masonry>
  );
};

export default MasonryComponent;
