import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6bc3884873d8f590ffada24647960cbf';

axios.defaults.baseURL = BASE_URL;

// get popular movies

export async function fetchPopularMovies() {
  try {
    const response = `/trending/movie/day?api_key=${API_KEY}`;

    const { data } = await axios.get(response);

    return data;
  } catch (error) {
    console.log(`🚀 ~ fetchPopularMovies ~ error:`, error);
  }
}

//get movies by query

export async function fetchSearchMovies(query) {
  try {
    const response = `search/movie?query=${query}&api_key=${API_KEY}`;

    const { data } = await axios.get(response);

    return data;
  } catch (error) {
    console.log(`🚀 ~ fetchPopularMovies ~ error:`, error);
  }
}

// get movie by Id

export async function fetchMovieById(movieId) {
  try {
    const response = `/movie/${movieId}?api_key=${API_KEY}`;

    const { data } = await axios.get(response);

    return data;
  } catch (error) {
    console.log(`🚀 ~ fetchPopularMovies ~ error:`, error);
  }
}

// get movie cast

export async function fetchMovieCast(movieId) {
  try {
    const response = `/movie/${movieId}/credits?api_key=${API_KEY}`;

    const { data } = await axios.get(response);

    return data;
  } catch (error) {
    console.log(`🚀 ~ fetchPopularMovies ~ error:`, error);
  }
}

// get movie review

export async function fetchMovieReview(movieId) {
  try {
    const response = `/movie/${movieId}/reviews?api_key=${API_KEY}`;

    const { data } = await axios.get(response);
    console.log(`🚀 ~ fetchMovieReview ~ data:`, data);

    return data;
  } catch (error) {
    console.log(`🚀 ~ fetchPopularMovies ~ error:`, error);
  }
}
