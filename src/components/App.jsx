import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from './NotFound/NotFound';
import MovieDetails from '../pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
