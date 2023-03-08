import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Movies</a>
        </nav>
      </header>
      <h1>Trending today</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
