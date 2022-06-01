import {IGif} from "../types";

export function parseGifList(gifList: any): IGif[] {
  const parseGifList: IGif[] = gifList.map((gif: any) => ({
    id: gif.id,
    url: gif.url,
    title: gif.title,
    image: gif.images.fixed_height.url,
    embedUrl: gif.embed_url,
    isLiked: false,
  }));

  return parseGifList;
}

export function parseSingleGif(gif: any): IGif {
  return {
    id: gif.id,
    url: gif.url,
    title: gif.title,
    image: gif.images.fixed_height.url,
    embedUrl: gif.embed_url,
    isLiked: false,
  };
}
