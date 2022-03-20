import React from 'react'
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
  const history = useHistory();
  function handleClick(event) {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML == 'Sign out') {
      dispatch({
        type: 'Remove__user'
      })
      history.replace("/");
    }
    else {
      history.push("/login");
    }
  }
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to="/">
        <img className='header__image' src='../hotpopcornmovie.png' />
      </Link>
      <input type='text' className='header__input' placeholder="search the movies"></input>
      <button className='header__search__button'>Search</button>
      <div className='header__right'>
        <Link to="/">
          <HomeIcon className='header__home__icon' fontSize='large' />
        </Link>
        <select className='header__select' name="select_region" id="region">
          <option value="coimbatore">Coimbatore</option>
          <option value="chennai">Chennai</option>
          <option value="bangalore">Bangalore</option>
        </select>

        <button name='header__button' className='header__button' onClick={handleClick}>{user ? 'Sign out' : 'Sign in'}</button>


      </div>
    </div>
  )
}

export default Header