import axios from "axios";

import {parseGifList, parseSingleGif} from "./utils/parseGif";
import {IGif} from "./types";

const LIMIT_GIF = 20;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs`;

const requester = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    limit: LIMIT_GIF,
  },
});

async function trending() {
  try {
    const response = await requester.get("/trending");
    const data: IGif[] = parseGifList(response.data.data);

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function searchGif(query: string) {
  try {
    const response = await requester.get("/search", {
      params: {
        q: query,
      },
    });

    const data: IGif[] = parseGifList(response.data.data);

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getGifById(gif_id: string) {
  try {
    const response = await requester.get(`/${gif_id}`);
    const data: IGif = parseSingleGif(response.data.data);

    return data;
  } catch (error) {
    console.error(error);
  }
}

export {trending, searchGif, getGifById};
