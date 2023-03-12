import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import blankImage from '../../images/blank_profile.png';

import { fetchMovieCast } from 'components/services/fetchMovies';

import css from './Cast.module.css';

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
      <ul className={css.castList}>
        {cast.map(({ name, id, character, profile_path }) => {
          const imageSRC = profile_path ? IMAGEURL + profile_path : blankImage;
          return (
            <li className={css.castItem} key={id}>
              <img className={css.castImg} src={imageSRC} alt={name} />
              <div>
                <p>
                  <span className={css.span}>Actor: </span>
                  {name}
                </p>
                <p>
                  <span className={css.span}>Character: </span>
                  {character}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
