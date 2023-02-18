import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'
export async function fetchData(url: string) {
  const response = await axios.get(`${BASE_URL + url}`)
  return response.data
}
