import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { fetchMovieById } from 'components/services/fetchMovies';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);

  const handleGoBackButton = () => {
    navigate(location.state.from);
  };

  if (!movie) {
    return;
  }

  const { genres, overview, poster_path, title, vote_average } = movie;
  const movieGenres = genres.map(genre => genre.name).join(' ');
  const userScore = Math.round((Number(vote_average) * 100) / 10);

  return (
    <div>
      <button type="button" onClick={handleGoBackButton}>
        Go back
      </button>
      <div>
        <img src={IMAGEURL + poster_path} alt="poster img" />
        <h2>{title}</h2>
        <p>User score: {userScore}%</p>
        <h3>Overviews</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{movieGenres}</p>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
