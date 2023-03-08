import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6bc3884873d8f590ffada24647960cbf';

axios.defaults.baseURL = BASE_URL;

export async function fetchPopularMovies() {
  try {
    const response = `/trending/movie/day?api_key=${API_KEY}`;

    const { data } = await axios.get(response);

    return data;
  } catch (error) {
    console.log(`🚀 ~ fetchPopularMovies ~ error:`, error);
  }
}

export async function fetchSearchMovies(query) {
  try {
    const response = `search/movie?query=${query}&api_key=${API_KEY}`;

    const { data } = await axios.get(response);

    return data;
  } catch (error) {
    console.log(`🚀 ~ fetchPopularMovies ~ error:`, error);
  }
}
