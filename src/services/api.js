import axios from "axios";
import { BASE_URL, API_KEY } from "../config/apiConfig";

export const fetchMovies = async (type, category) => {
  try {
    const url = `${BASE_URL}/${type}/${category}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchResults = async (keyword, category) => {
  try {
    const url = `${BASE_URL}/search/${category}?api_key=${API_KEY}&query=${keyword}`;
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
};
