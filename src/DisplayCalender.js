import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DisplayCalender.css';
import {useStateValue} from './StateProvider';

function DisplayCalender() {
  const [value,setValue] = useState(new Date());
  const [val, dispatch] = useStateValue();
  function handleChange(value){
    setValue(value);
    var date__movie = value.toString();
    console.log(date__movie.substring(0,16));
    dispatch({
        type: 'Add__movie__date',
        date:date__movie
    })
  }
  return (
    <div className='calendar'>
      <Calendar className = 'calendar__display' onChange={handleChange} value = {value} maxDate={new Date("2022-3-25")} minDate={new Date()} />
    </div>
  )
}

export default DisplayCalender; 