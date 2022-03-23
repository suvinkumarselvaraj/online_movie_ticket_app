import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {useHistory,Link} from 'react-router-dom';

function CompletePayment() {
  const [{seat__array,movie__time,movie__theatre, movie__date,movies, movie__clicked,user},dispatch] = useStateValue();
  let movie;
  for(var i = 0; i<movies.length;i++){
    if(movies[i].id === parseInt(movie__clicked))
    {
      movie = movies[i];
      break;
    }
  }
  function displaySeats(){
    return (
      <div>
    {seat__array.map(element => <span>{element.id} /</span>)}
    </div>
    )
   }
  return (
    <div className='payment'>
    <div className='payment__container'>
        <h2>THERE YOU GO!!! Please provide a screenshot of this ticket during the arrival</h2><br />
        <div className='total__items'>
          Total seats booked: {seat__array.length}
          <br></br>
          <span>Seat number: </span>
          <br></br>
          {displaySeats()}
          <div className='currency__format'>
         <CurrencyFormat
        renderText={(value)=>(
            
            <h3 className="payment__total">Ticket cost: ₹{seat__array.length*100}</h3>
            
        )}
        decimalScale={2}
        value = {3}
        displayType= {"text"}
        thousandSeparator = {true}
        prefix = {"$"}
        /> 
        </div>
        <strong>{movie.title}</strong>
        <p>Movie start time: {movie__time}</p>
        <p>Booked at: {movie__date.substring(0,16)}</p>
        <p>Venue: {movie__theatre}</p>
        </div>
        </div>
        <Link to = "/DisplayBooking">
        <button type = 'submit'>SHOW MY BOOKINGS</button>
        </Link>
        </div>

  )
}

export default CompletePayment