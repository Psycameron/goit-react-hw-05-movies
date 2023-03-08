import { Routes, Route, Link } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from './NotFound/NotFound';
import MovieDetails from '../pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <header>
        <nav style={{ height: 50 }}>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
