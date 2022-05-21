import axios from "axios";

const LIMIT_GIF = 20;
const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.giphy.com/v1/gifs`;

async function trending() {
  try {
    return await axios
      .get(`${BASE_URL}/trending`, {
        params: {
          api_key: API_KEY,
          limit: LIMIT_GIF,
        },
      })
      .then((response) => response.data.data);
  } catch (error) {
    console.error(error);
  }
}

async function searchGif(query: string) {
  try {
    return await axios
      .get(`${BASE_URL}/search`, {
        params: {
          api_key: API_KEY,
          limit: LIMIT_GIF,
          q: query,
        },
      })
      .then((res) => console.log(res.data));
  } catch (error) {
    console.error(error);
  }
}

async function getGifById(gif_id: string) {
  try {
    return await axios
      .get(`${BASE_URL}/${gif_id}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => res.data.data);
  } catch (error) {
    console.error(error);
  }
}

export {trending, searchGif, getGifById};
//https://api.giphy.com/v1/gifs/search?api_key=YuJk7enKH0yFvIAHCWzLeAFWmEBjOBRO&q=messi&limit=25
