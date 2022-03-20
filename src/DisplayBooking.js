import React from 'react'
import {useStateValue} from './StateProvider';


function DisplayBooking() {

    var arrayOfMovies;
    const[{user},dispatch] = useStateValue();
  function fetchBooking(){
    fetch('http://localhost:8080/tickets/display?username='+user)
    .then(res=>res.json())
    .then(data => {
    if(data.status==='success'){
      console.log('succeeded');
      console.log(data);
  }
  else{
    console.log('failed');
  }

})
  }
  return (
    <div>
        {fetchBooking()}
    </div>
  )
}

export default DisplayBooking