import React from 'react'
import './SendTickets.css';
function SendTickets({movie__name,venue,booked,seats,cost}) {
  return (
    <div className='send__tickets'>
        <div className='left'>
            <span>{movie__name}</span>
            <br></br>
            <span>{venue}</span>
            <br/>
            <span>{booked }</span>
            <br>
            </br>
            <span>{seats}</span>
            <br></br>
            <span>{cost}</span>
        </div>
    </div>
  )
}

export default SendTickets