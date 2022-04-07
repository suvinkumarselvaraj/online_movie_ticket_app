import React, {useState,useEffect} from 'react'
import './SelectSeats.css';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {useHistory} from 'react-router-dom';
import MovieCards from './MovieCards';
//go to the backend and receive the seats that are already booked 
// and display in red
function SelectSeats() {
    const navigate = useHistory();
    const [bookedSeats,setBookedSeats] = useState([]);
    var count = 0;
        var eachPersonCount=0;
    const [count__seats,setCount] = useState(0);
    const [{seat__array,movie__clicked,movie__name,movies, user, movie__theatre, movie__date, movie__time}, dispatch] = useStateValue();
   useEffect(()=>{
    fetch("http://localhost:8080/tickets/getbookings?movie_name="+movie__clicked+"&theatre_name="+movie__theatre+"&date="+movie__date+"&time="+movie__time)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setBookedSeats(data);   
    })
   },[])
    function handleClick(event){
        console.log(event.target.id);
        const id = event.target.id;
       console.log(id);

                if(event.target.style.backgroundColor ==="" && sessionStorage.getItem("name"))    
                {
                    event.target.style.backgroundColor = "green";
                    console.log(eachPersonCount);
                    setCount(count__seats+1);
                    dispatch({
                    type:'Add__movie__seats',
                    item:{
                    id: event.target.id
                }
              })
             }
             else
             if(event.target.style.backgroundColor === "green")
             {
                 eachPersonCount--;
                event.target.style.backgroundColor = "";
                setCount(count__seats-1);
                dispatch({
                    type:'Remove__movie__seats',
                    item:{
                        id: event.target.id
                    }
                })

             }
             else
             if(event.target.style.backgroundColor === "red"){
                 alert('this seat is already reserved');
             }
             else{
                 alert("sigin in to book the seats");
             }
        
                }
                // console.log(event.target);
           
        console.log(seat__array);
    function handleSubmission(event){
       if(user && seat__array.length > 0){
            navigate.push('/movies/payment');
        }
    else
    if(user && seat__array.length === 0){
        alert('Select your seats before proceeding');
    }
    else
    alert('Please signin to book your tickets');
    }

    function fillSeats(){
        console.log(document);
        for(var i = 0; i<bookedSeats.length;i++) {
            document.getElementById(bookedSeats[i].seat_no).style.backgroundColor = "red";
        }
    }
  return (
    <div className='select__seats'>
        
        <div className='seat__column__1'>
        {Array(10).fill().map((_,i)=>
        (

            <div className='boxes' onClick={handleClick} id = {count = count+1}>
                {count}
                </div>
        ))}
        </div>

        <div className='seat__column__2'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={handleClick} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__3'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={handleClick} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={handleClick} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={handleClick} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={handleClick} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={handleClick} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={handleClick} id = {count = count+1}>
                        {count}
                </div>
        ))}
        {fillSeats()}
        </div>
        
        <div className='book__button__container'>
           <div className='display__seat__counts'>
               <h2>{seat__array?.length}</h2><p>seats marked</p>
           </div>
         
            <button className = "book__button" type='submit' onClick={handleSubmission}>Click here to proceed</button>
         
        </div>

        
    </div>
  )
}

export default SelectSeats