import React from 'react';
import { directors } from '../data';

const directorsArr = (directors) => {
  return directors.map(director => {
    return (
      <div className="director">
        <p>Name: {director.name}</p>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsArr(directors)}
    </div>
  );
}

export default Directors
