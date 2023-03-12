import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { fetchSearchMovies } from 'components/services/fetchMovies';

import css from './Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // const fullPath = location.pathname + location.search;
  const movieName = searchParams.get('query');

  useEffect(() => {
    const fetchData = async () => {
      if (!movieName) {
        return;
      }

      try {
        const movies = await fetchSearchMovies(movieName);
        setMovies(movies.results);
      } catch (error) {
        console.log(`🚀 ~ fetchData ~ error:`, error);
      }
    };
    fetchData();
  }, [movieName]);

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSearchSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Введи запрос для поиска');
    }

    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);

    setQuery('');
  };

  return (
    <>
      <form className={css.SearchForm} onSubmit={handleSearchSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleQueryChange}
        />

        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
