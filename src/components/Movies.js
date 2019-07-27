import React from 'react';
import { movies } from '../data';

const movieArr = (movies) => {
  return movies.map(movie => {
    return (
      <div className="movie">
        <p>Title: {movie.title}</p>
        <p>Time: {movie.time}</p>
        <ul>
          Genres: {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movieArr(movies)}
    </div>
  );
};

export default Movies;
