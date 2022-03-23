import React,{useState} from 'react'
import SelectSeats from './SelectSeats';
import {useStateValue} from './StateProvider';
import SendTickets from './SendTickets';

//1. write a logic to find the number of fields to the given query
//2. send fetch request one by one in order to avoid receiving items on bulk 
//3. acheive this using the count variable obtained at line 1
function DisplayBooking() {
    const [cost, setCost] = useState(0);
    const [count, setCount] = useState(0);
    const [movie,setMovie] = useState(null);
    const [theatre_name, setTheatre] = useState(null);
    const [booked,setBooked] = useState(null);
    const [venue, setVenue] = useState(null);
    const [time, setTime] = useState(null);
    const [seats, setSeats] = useState(null);
    var arrayOfMovies;
    const[{user},dispatch] = useStateValue();
    var visited = 0;

  //go to this url only once and do not go again 
  //finding the total data set count 
    console.log("inside function ");
    fetch('http://localhost:8080/tickets/display?username='+user)
    .then(res=>res.json())
    .then(data => {
    if(data.status==='success'){
      console.log('succeeded');
      console.log(data.cost);
      // console.log(data.count);
      setCount(data.count);
     
  }
  else{
    console.log('failed');
  }
})

  function fetchBooking(){
    fetch('http://localhost:8080/tickets/sendbooking?username='+user+'&count='+visited)
    .then(res=>res.json())
    .then(data => {
    if(data.status==='success'){
      visited = visited+1;
      console.log(visited);
      console.log('succeeded');
      console.log(data.cost);
      setMovie(data.movie_name);
      setTheatre(data.theatre);
      setSeats(data.seats);
      setBooked(data.booked);
      setVenue(data.venue);
      setTime(data.time);
      setCost(data.cost);
  }
  else{
    console.log('failed');
    return;
  }
})
return (<SendTickets movie__name = {movie}
                    venue = {venue}
                    time = {time}
                    seats = {seats}
                    cost = {cost}
                    />)}
  return (
    <div>
        {
        Array(count).fill().map((_, i) =>
                    (
                      fetchBooking()
                    ))
        }
    </div>
  )
}

export default DisplayBooking