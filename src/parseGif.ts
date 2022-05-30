import {IGif} from "./types";

export default function parseGif(gifList: any): IGif[] {
  const parseGifList: IGif[] = gifList.map((gif: any) => ({
    id: gif.id,
    url: gif.url,
    title: gif.title,
    image: gif.images.original.webp,
    embedUrl: gif.embed_url,
    isLiked: false,
  }));

  return parseGifList;
}
