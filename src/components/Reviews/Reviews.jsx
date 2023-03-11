import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReview } from 'components/services/fetchMovies';

export default function Reviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetchMovieReview(movieId).then(res => setReview(res.results));
  }, [movieId]);

  if (!review) {
    return;
  }

  return (
    <>
      {review.length > 0 ? (
        <ul>
          {review.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for the movie.</p>
      )}
    </>
  );
}
