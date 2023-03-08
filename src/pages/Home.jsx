import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchPopularMovies } from 'components/services/fetchMovies';

function Home() {
  const [hits, setHits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchPopularMovies();

        setHits(results);
      } catch (error) {
        console.log(`🚀 ~ fetchData ~ error:`, error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
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

export default Home;
