import axios from "axios"

const LIMIT_GIF = 20
const API_KEY = process.env.API_KEY
const BASE_URL = `https://api.giphy.com/v1/gifs`

async function trending() {
  try {
    return await axios.get(`${BASE_URL}/trending`, {
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
    return await axios.get(`${BASE_URL}/search`, {
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

export { trending, search }