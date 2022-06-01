import Masonry from "react-masonry-css";

import {IGif} from "../../types";
import Card from "../gif/Card";

interface MasonryProps {
  currentGifs: IGif[];
  isHidden: boolean;
}
const breakpoints = {
  default: 4,
  900: 3,
  700: 2,
  500: 1,
};

const MasonryComponent: React.FC<MasonryProps> = ({currentGifs, isHidden}) => {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {currentGifs.map((item: IGif) => (
        <Card key={item.id} gif={item} isHidden={isHidden} />
      ))}
    </Masonry>
  );
};

export default MasonryComponent;
