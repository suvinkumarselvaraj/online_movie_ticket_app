import React, {useState,useEffect} from 'react'
import './ValimaiBooking.css';
import { Link } from 'react-router-dom';
import MovieCards from './MovieCards';
import DisplayCalendar from './DisplayCalender';
import './DisplayCalender.css';
import { useStateValue } from './StateProvider';

function ValimaiBooking(id) {
    const [{time,movies,movie__clicked,movie__theatre}, dispatch] = useStateValue("");
    
    const[datas, setData] = useState();
    const[theatres, setTheatre] = useState([]);
    useEffect(()=>{
         fetch("http://localhost:8080/tickets/moviedescription?id="+id.id)
         .then(res => res.json())
         .then(data =>{
            console.log(data.description);
            setData(data);
         })

         fetch("http://localhost:8080/tickets/gettheatre?movie_id="+id.id)
         .then(res =>res.json())
         .then(data =>{
             console.log(data);
             setTheatre(data);
         })
        
    },[])
    var theatre = null;
    function registerTheatre(event){

    var select = document.getElementById('theatre__names');
    if(select!='--'){
    var value = select.options[select.selectedIndex].value;
    theatre = value;
    console.log(theatre);
    console.log(value); 
    dispatch({
        type:'Add__movie__theatre__info',
        theatre__info:theatre
       })
       
       document.querySelectorAll('.valimai__calendar')[0].style.display = "block";
    }
}
    

    let movie ;

    for(var i = 0; i<movies.length;i++){
        if(movies[i].id === parseInt(movie__clicked))
            {
                movie = movies[i];
            }
    }
    
    console.log(movie);
    const handleClick = (event)=>{
        dispatch({
            type: 'Add__movie__timing',
            time__movie: event.target.innerHTML
        })
        
    }
   function showDiv(event){ 
      

    }
    function showTimings(event){
        document.querySelectorAll('.valimai__available__time')[0].style.display="block";
    }

  return (
    <div className='valimai'>
        <h2>Book now to watch {datas?.title} at your favorite theatre</h2>
        <div className='valimai__container'>
            <div className='valimai__image'>
            <MovieCards 
                id = {datas?.id}
                image = {datas?.image}
                title = {datas?.title}
                genre = {datas?.genre}
        />
            </div>
            <div className='valimai__instructions'>
                <p>{datas?.description}</p>
            </div>
            <div className='valimai__right__info'>
                <div className='valimai__theatre__info' onClick={showDiv}>
                    <label for = "theater_select">Choose a theatre: </label>
                    <select className = 'theatre__select' name = "theatre__name" id = "theatre__names" onChange= {registerTheatre} >
                        <option value = "default">--</option>

                        {
                        theatres?.map(theatre =>(
                            <option  value = {theatre.movie} >{theatre.movie}</option>
                        ))
                        }
                    </select>
                </div>
            <div className='valimai__calendar' id = 'valimai__calendar__id' onClick={showTimings}>
                <p>Pick a date from the calendar</p>
                <DisplayCalendar/>
            </div>
                <div className='valimai__available__time'>
                    <Link to = '/movies/seats'>
                    <button className = "timing__button" type = "submit" onClick={handleClick}>10:00 AM</button>
                    <button className = "timing__button" type = "submit" onClick={handleClick}>02:00 PM</button>
                    <button className = "timing__button" type = "submit" onClick={handleClick}> 06:30 PM</button>
                    <button className = "timing__button" type = "submit" onClick={handleClick}>10:00 PM</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ValimaiBooking       