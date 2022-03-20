import React from 'react'
import SelectSeats from './SelectSeats'
import './DisplaySeats.css';
import {useStateValue} from './StateProvider';

function DisplaySeats() {
  const [{movie__time,movies,movie__theatre, movie__date,movie__clicked},dispatch] = useStateValue();
  let movie = null;
  for(var i = 0; i<movies.length;i++){
      if(movies[i].id === parseInt(movie__clicked))
      {
          movie = movies[i];
      }
  }

  return (
    <div className='display__seats'>
      <div className='display__left__details'>
        
        <strong>{movie.title.toUpperCase()}</strong>
        <p>Show time: {movie__time}</p>
        <p>Show date: {movie__date.substring(0,10)}</p>
        <p>Venue: {movie__theatre}</p>
      </div>
      <div className='display__right__details'>
      <SelectSeats/>
      </div>
    </div>
  )
}

export default DisplaySeats