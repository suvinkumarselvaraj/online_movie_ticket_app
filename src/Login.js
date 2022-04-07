import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { v4 as uuidv4 } from 'uuid';
import './Login.css'
function Login() {
  var choice;

  const [{ user }, dispatch] = useStateValue();

  var navigate = useHistory();
  function handleClick(event) {
    console.log(event.target.name);
    if (event.target.name === 'signup') {
      choice = 'signup';
    }
    else
    {
      choice = 'signin';
    }
  }
      //handling signup
// <!------------------------------------------------------------!>
  function handleSubmit(event) {
    event.preventDefault();
    console.log('inside handle submit area');
    var data = new FormData(event.target);
    console.log(choice);
    if (data.get("username") == '' || data.get("password") == '')
      alert('Please fill your credentials');
    else {
      if (choice === 'signup') {
        console.log("inside signup area");
        console.log(data.get("username"));
        fetch("http://localhost:8080/tickets/signup?id=" + uuidv4() + "&username=" + data.get("username") + "&password=" + data.get("password"), { crossDomain: true })
          .then((res) => res.json())
          .then(data => {
            if (data.status === "success") {
              console.log('inserted succesfully');
              dispatch({
                type: 'Add__user',
                name: data.user
              });
              sessionStorage.setItem("name",data.user);
              navigate.push("/");
            } else {
              alert("There is an account already linked with the same username "+data.uname);
            }
          });
      }
      else {
        //handling signin---------------------------------------------------------
          if(choice === 'signin'){
            fetch("http://localhost:8080/tickets/signin?username="+ data.get("username") + "&password=" + data.get("password"))
            .then((res) => res.json())
            .then(data=>{
                if(data.status === 'success'){
                  console.log(data.uname);
                  dispatch({
                    type: 'Add__user',
                    name: data.uname
                  });
                  sessionStorage.setItem("name",data.uname);
                  
                  navigate.push('/');
                } else{
                    if(data.status === "failure")
                    {
                    alert("Create an account in order to sign-in");
                    }
                  }
          })
        }
      }

      
//handling signin ends---------------------------------------------------

      }
  }

  //handling signup ends ----------------------------------------------------------
  return <div className='login'>
    <Link to='/'>
      <img className='login__logo'
        src="../hotpopcornmovie.png" />
    </Link>
    <div className='login__container'>
      <h1>Sign-in/Sign-up</h1>
      <form onSubmit={handleSubmit}>
        <h5>E-mail</h5>
        <input type="text" name="username" />
        <h5>Password</h5>
        <input type="password" name='password' />
        <button name='signin' className='login__signInButton' onClick={handleClick}>Sign in</button>

        <p>
          By signing-in you agree to the booking-app conditions of Use & Sale, Please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
        </p>
        <button className='login__registerButton' name='signup' onClick={handleClick}>Create your account</button>
      </form>
    </div>

  </div>

}

export default Login