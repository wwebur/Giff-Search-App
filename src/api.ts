import axios from "axios";

const LIMIT_GIF = 20;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    limit: LIMIT_GIF,
  },
});

async function trending() {
  try {
    const response = await axiosInstance.get("/trending");

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

async function searchGif(query: string) {
  try {
    const response = await axiosInstance.get("/search", {
      params: {
        q: query,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getGifById(gif_id: string) {
  try {
    const response = await axiosInstance.get(`/${gif_id}`);

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export {trending, searchGif, getGifById};
