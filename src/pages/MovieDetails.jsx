import React, { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import blankImage from '../images/white_image.png';

import { fetchMovieById } from 'components/services/fetchMovies';

import css from './MovieDetails.module.css';

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
  const movieGenres = genres.map(genre => genre.name).join(', ');
  const userScore = Math.round((Number(vote_average) * 100) / 10);
  const releaseDate = release_date.slice(0, 4);
  const prevLocation = location.state?.from ?? '/';
  const imageSRC = poster_path ? IMAGEURL + poster_path : blankImage;

  return (
    <div className={css.wrapper}>
      <Link state={{ from: location }} to={prevLocation}>
        <button className={css.backBtn} type="button">
          Go back
        </button>
      </Link>

      <div className={css.movieCard}>
        <img className={css.poster} src={imageSRC} alt="poster img" />
        <div className={css.movieInfo}>
          <h2>
            {title} ({releaseDate})
          </h2>
          <p>User score: {userScore}%</p>
          <h3>Overviews</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{movieGenres}</p>
        </div>
      </div>
      <div className={css.addInfo}>
        <h3>Additional information</h3>
        <ul>
          <li className={css.addInfoItem}>
            <Link
              className={css.addInfoLink}
              state={{ from: prevLocation }}
              to="cast"
            >
              Cast
            </Link>
          </li>
          <li className={css.addInfoItem}>
            <Link
              className={css.addInfoLink}
              state={{ from: prevLocation }}
              to="reviews"
            >
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
