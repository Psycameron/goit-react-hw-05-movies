import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import blankImage from '../../images/blank_profile.png';

import { fetchMovieCast } from 'components/services/fetchMovies';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      <ul>
        {cast.map(({ name, id, character, profile_path }) => {
          const imageSRC = profile_path ? IMAGEURL + profile_path : blankImage;
          return (
            <li key={id}>
              <img src={imageSRC} alt={name} />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
