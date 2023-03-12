import React, { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { fetchMovieById } from 'components/services/fetchMovies';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { genres, overview, release_date, poster_path, title, vote_average } =
    movie;
  const movieGenres = genres.map(genre => genre.name).join(' ');
  const userScore = Math.round((Number(vote_average) * 100) / 10);
  const releaseDate = release_date.slice(0, 4);
  const prevLocation = location.state?.from ?? '/';

  return (
    <div>
      <Link state={{ from: location }} to={prevLocation}>
        <button type="button">Go back</button>
      </Link>

      <div>
        <img src={IMAGEURL + poster_path} alt="poster img" />
        <h2>
          {title} ({releaseDate})
        </h2>
        <p>User score: {userScore}%</p>
        <h3>Overviews</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{movieGenres}</p>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link state={{ from: prevLocation }} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link state={{ from: prevLocation }} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
