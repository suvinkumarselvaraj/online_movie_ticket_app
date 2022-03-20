import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCards.css';
import {useHistory} from 'react-router-dom';
import { useStateValue } from './StateProvider';
function MovieCards({id,image,title,genre}) {
      const navigate = useHistory();
      const [movie__clicked, dispatch] = useStateValue();
      const idTracker = id;
      console.log(idTracker);
      
      var name =title;
      name = name.replace(/ +/g,"").toLowerCase();
      console.log(name);
      function handleClick(event){
        console.log('movie id and title that you clicked is '+event.target.id+' '+event.target.title);
        dispatch({
          type: 'Add__to__display',
          clicked__movie: event.target.id
        })
        console.log(idTracker);
        console.log(name);
        // navigate.push("/movies/"+idTracker+"/"+name);
      }
  
  
  return (
    <div className='movie__cards'>
        <div className='movie__des'>
           <Link to ={"/movies/"+idTracker}> <img name = {title} id = {id} className='movie__image' src = {image} alt = "" onClick={handleClick}>
            </img>
            </Link>
            
            <section className='movie__text__des'>
            <h3>{title}</h3>
            <p>{genre}</p>
            </section>
        </div>    
    </div>

  )
}

export default MovieCards