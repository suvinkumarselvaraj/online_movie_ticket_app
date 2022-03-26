import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import MovieCards from './MovieCards';
import './CallCards.css'
function CallCards(id) {
  
  const [datas,setData] = useState();
  useEffect(()=>{
    console.log('hey im in');
    console.log(id.id);
    fetch('http://localhost:8080/tickets/moviedescription?id='+id.id)
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setData(data);
    })
  },[]);

  const[{movies,movie__clicked},dispatch] = useStateValue();
    
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
         {console.log(datas)}
        
           <MovieCards 
           id = {datas?.index}
           image = {datas?.image}
           title = {datas?.title}
           genre = {datas?.genre}
          />
        
         
        </div>
        <div className='callcards__moviedesc'>
          
            <h2>{datas?.rating}</h2>
            <strong>About</strong>
            <p>{datas?.outline}</p>
            <p>Run time: {datas?.runtime}</p> 
         <Link to = {'/movies/book_now/'+datas?.index}><button type = "submit"  onClick = {handleClick}  id = {datas?.index} className='callcards__button' value = "Book Now">Book now</button>
         </Link>      
           </div>
    </div>
    
    </div>
  )

}

export default CallCards