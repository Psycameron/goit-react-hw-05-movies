import { useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchSearchMovies } from 'components/services/fetchMovies';

import css from './Movies.module.css';

export default function Movies() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    try {
      const { results } = await fetchSearchMovies(query);

      setHits(results);
    } catch (error) {
      console.log(`🚀 ~ fetchData ~ error:`, error);
    }
  };

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handlerSearchSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Введи запрос для поиска');
    }

    fetchData();

    setQuery('');
  };

  return (
    <>
      <form className={css.SearchForm} onSubmit={handlerSearchSubmit}>
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
        {hits.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
