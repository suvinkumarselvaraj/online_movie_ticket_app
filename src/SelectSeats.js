import React, {useState,useEffect} from 'react'
import './SelectSeats.css';
import {useStateValue} from './StateProvider';
import {useHistory} from 'react-router-dom';
import MovieCards from './MovieCards';
//go to the backend and receive the seats that are already booked 
// and display in red
function SelectSeats() {
    const navigate = useHistory();
    var count = 0;
        var eachPersonCount=0;
    const [count__seats,setCount] = useState(0);
    const [{seat__array,movie__clicked,movie__name,movies, user, movie__theatre, movie__date, movie__time}, dispatch] = useStateValue();
   useEffect(()=>{
    fetch("http://localhost:8080/tickets/getbookings?movie_name="+movie__clicked+"&theatre_name="+movie__theatre+"&date="+movie__date+"&time="+movie__time)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
   })
    function handleClick(event){
        console.log(event.target.id);
        const id = event.target.id;
        fetch("http://localhost:8080/tickets/markseats?id="+id)
          .then((res) => res.json())
          .then(data => {
            if(data.status === 'success' ){
                console.log('success');
                console.log("im here");
                if(data.seatStatus === 'notbooked'){
                console.log(event.target.style.backgroundColor==="");
                console.log("im here");
                if(event.target.style.backgroundColor ==="")    
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
        
                }
                // console.log(event.target);
            }
          }); 
        console.log(seat__array.length);
       

    }
    
    function changeColor(event){
        //console.log(event.target.style.backgroundColor);
        for(var i = 0; i<10;i++){
              
        }
        
        var i = 0;  
        const bgColor = event.target.style;
        if(bgColor.backgroundColor == "")
        {
            bgColor.backgroundColor = "green";
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
        {   eachPersonCount--;
            bgColor.backgroundColor ="";
            setCount(count__seats-1);
            dispatch({
                type:'Remove__movie__seats',
                item:{
                    id: event.target.id
                }
            })
        }
    }

    function handleSubmission(event){
        if(seat__array.length>0){
            for(var i = 0; i<seat__array.length;i++){
                console.log(document.getElementById(seat__array[i].id).style.backgroundColor = "red");
            console.log(seat__array[i].id);
            }
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
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__3'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        <div className='seat__column__4'>
        {Array(10).fill().map((_,i)=>
        (
            <div className='boxes' onClick={changeColor} id = {count = count+1}>
                        {count}
                </div>
        ))}
        </div>
        
        <div className='book__button__container'>
           <div className='display__seat__counts'>
               <h2>{seat__array?.length}</h2><p>seats marked</p>
           </div>
           {/* <Link to = "/movies/payment"> */}
            <button className = "book__button" type='submit' onClick={handleSubmission}>Click here to proceed</button>
            {/* </Link> */}
        </div>

        
    </div>
  )
}

export default SelectSeats