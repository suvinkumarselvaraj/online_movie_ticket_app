import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import MovieCards from './MovieCards';
import './CallCards.css'

function CallCards(id) {
  console.log('id is '+id.id);
  let mid = parseInt(id.id);
  console.log(typeof(mid));
  const[{movies,movie__clicked},dispatch] = useStateValue();
    var movie;
    for(var i = 0; i<movies.length;i++)
    {
      if(movies[i].id === mid)
      {
        console.log('present');
        movie = movies[i];
      }

    }
    console.log(movie);    
    
  function handleClick(event){
      dispatch({
        type: 'Add__to__display',
        clicked__movie:event.target.id
      })
  }

   return (
     <div className='callcards__container'>
    <div className='callcards'>
        <div className='callcards__moviecards'>
         <MovieCards 
                id = {movie.id}
                image = {movie.image}
                title = {movie.title}
                genre = {movie.genre}
        />
        </div>
        <div className='callcards__moviedesc'>
            <h2>{movie.rating}</h2>
            <strong>About</strong>
            <p>{movie.descript}</p>
            <p>Run time: {movie.run__time}</p>
            {/* <Link to ={'/movies/'+movie.id+'/'+movie.title+"/book_now"}> */}
          <Link to = {'/movies/book_now'}><button type = "submit"  onClick = {handleClick}  id = {movie.id} className='callcards__button' value = "Book Now">Book now</button>
         </Link>
      </div>
    </div>
    
    </div>
  )
}

export default CallCards