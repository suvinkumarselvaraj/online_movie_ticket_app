import React,{useState} from 'react'
import {useStateValue} from './StateProvider';

//1. write a logic to find the number of fields to the given query
//2. send fetch request one by one in order to avoid receiving items on bulk 
//3. acheive this using the count variable obtained at line 1
function DisplayBooking() {
    const [cost, setCost] = useState(0);
    var arrayOfMovies;
    const[{user},dispatch] = useStateValue();
  function fetchBooking(){
    fetch('http://localhost:8080/tickets/display?username='+user)
    .then(res=>res.json())
    .then(data => {
    if(data.status==='success'){
      console.log('succeeded');
      // arrayOfMovies = JSON.parse(data);
      // console.log('array'+arrayOfMovies);
      // console.log(arrayOfMovies);
      console.log(data.cost);
      setCost(data.cost);
      
  }
  else{
    console.log('failed');
  }
})
return (<div><p>{cost}</p></div>);}
  return (
    <div>
        {fetchBooking()}
        {cost}
    </div>
  )
}

export default DisplayBooking