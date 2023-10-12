import axios from "axios";
const API_KEY = "69c173f234db4f98a8e1df0dd7c1a07f";
const BASE_URL = "https://newsapi.org/v2/everything";

const useFetch = async (query, id) => {
  try {
    let url = `${BASE_URL}?q=${query}&apiKey=${API_KEY}`;

    if (id) {
      url += `&id=${id}`;
    }
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export default useFetch;
