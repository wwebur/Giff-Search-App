import axios from "axios"

const LIMIT_GIF = 30
const API_KEY = process.env.API_KEY
const API_URL = `https://api.giphy.com/v1/gifs/trending?&limit=${LIMIT_GIF}`

async function trending() {
  try {
    return await axios.get(API_URL, {
      params: {
        "api_key": API_KEY,
        "limit": LIMIT_GIF,
      },
    })
      .then(response => response.data.data)
  } catch (error) {
    console.error(error)
  }
}

async function search( query: string ) {
  try {
    return await axios.get(API_URL, {
      params: {
        "q": query,
        "api_key": API_KEY,
        "limit": LIMIT_GIF,
      }
    })
      .then(res => res.data)
  } catch (error) {
    console.error(error)
  }
}

export {trending, search}
