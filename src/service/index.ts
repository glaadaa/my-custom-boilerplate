import axios from 'axios';

export async function fetchPosts () {
  return await axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => res.data);
}
