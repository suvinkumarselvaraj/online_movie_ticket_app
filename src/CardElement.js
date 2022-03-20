import React from 'react'
import './CardElement.css'
function CardElement() {
  return (
    <div className='card__element'>
        <small>Card number</small>
        <input className='input' type='text' placeholder = 'Enter your card number'></input>
        <input className ='input' type = 'text' placeholder='Name of the card'></input>
        <div className='bottom__container'>
            <div className='expiry'>
                <input type ='text' className='exp' placeholder='MM'></input>
                <input type ='text' className='exp' placeholder='YY'></input>
                <input type='text'  className='exp' placeholder = 'CVV'></input>
            </div>
        </div>
    </div>
  )
}

export default CardElement