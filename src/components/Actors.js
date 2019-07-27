import React from 'react';
import { actors } from '../data';

const actorsArr = (actors) => {
  return actors.map(actor => {
    return (
      <div className="actor">
        <p>Name: {actor.name}</p>
        <ul>
          {actor.movies.map(actor => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsArr(actors)}
    </div>
  );
};

export default Actors;
