import React, {useState,useEffect} from 'react'
import './ValimaiBooking.css';
import { Link, useHistory} from 'react-router-dom';
import MovieCards from './MovieCards';

import './DisplayCalender.css';
import { useStateValue } from './StateProvider';


function ValimaiBooking(id) {
    const history = useHistory();
    const [{time,movies,movie__clicked,movie__theatre, movie__date, movie__id}, dispatch] = useStateValue("");
  
    const[datas, setData] = useState();
    const[theatres, setTheatre] = useState([]);
    const[dates,setDates] = useState([]);
    const[timings,setTimings] = useState([]);
    
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
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    if(value!="default"){
    theatre = value;
    console.log(theatre);
    console.log(value); 
    dispatch({
        type:'Add__movie__theatre__info',
        theatre__info:theatre
       })
   
       fetch("http://localhost:8080/tickets/getdates?movie_id="+id.id+"&theatre_name="+theatre )
       .then(res =>res.json())
       .then(data =>{
           console.log(data);
           setDates(data);
           document.querySelectorAll('.valimai__calendar')[0].style.display = "block";
       })    
    } 
    else
       {
            document.querySelectorAll('.valimai__calendar')[0].style.display = "none";
       }
}
    const handleClick = (event)=>{
      
        
    }
   function showDiv(event){ 
      

    }

    function registerTiming(event){
        var select = document.getElementById('movie__time');
        console.log(select);
        var value = select.options[select.selectedIndex].value;
        console.log(value);
        if(value!="default"){
        dispatch({
            type:'Add__movie__timing',
            time__movie: value
        })
            history.push('/movies/seats');
        }

    }
    function registerDate(event){
    var select = document.getElementById('movie__dates');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    if(value!="default"){
    dispatch({
        type: 'Add__movie__date',
        date: value
    })
    console.log(theatres);
    fetch('http://localhost:8080/tickets/gettimings?movie_id='+id.id+'&theatre_name='+movie__theatre+'&date='+value)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        setTimings(data);
        document.querySelectorAll('.valimai__available__time')[0].style.display="block";
    })
}
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
                <div className='valimai__theatre__info'>
                    <label for = "theater_select">Choose a theatre: </label>
                    <select className = 'theatre__select' id = "theatre__names" onChange={registerTheatre} >
                        <option value = "default">--</option>
                        {
                        theatres?.map(theatress =>(
                            <option  value = {theatress.theatre_name}>{theatress.theatre_name}</option>
                        ))
                        }
                    </select>
                </div>
            <div className='valimai__calendar' id = 'valimai__calendar__id' >               
                <label for = "date__select">Pick a date available from the list </label>
                    <select className = 'date__select' id = "movie__dates" onChange = {registerDate} >
                        <option value = "default">--</option>
                        {
                        dates?.map(datess =>(
                            <option  value = {datess.date}>{datess.date}</option>
                        ))
                        }
                    </select>

                {/* {
                    theatress?.map(theatresss=>(
                        <button className ='dates' onClick={showTimings}>{theatresss.date}</button>
                    ))
                } */}
            </div>
                <div className='valimai__available__time'>
                
                <label for = "time__select">Show timings </label>
                    <select className = 'time__select' id = "movie__time" onChange = {registerTiming} >
                        <option value = "default">--</option>
                        {
                        theatres?.map(timing =>(
                            <option  value = {timing.time}>{timing.time}</option>
                        ))
                        }
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ValimaiBooking       