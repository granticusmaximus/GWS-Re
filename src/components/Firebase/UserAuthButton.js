import React from 'react'
import logo from '../../assets/img/logo.png'
import { signOut } from "firebase/auth"
import { auth } from "../config/firebase"
import { useState } from "react"

function LoggedIn(props) {
  return <a href='/create-post' className='btn btn-outline-success'>Create Post</a>;
}

function Guest(props) {
  return <img src={logo} alt="image description" height={75} width={75}/>;
}

function MenuGreeting(props) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  if (!isAuth) {
    return(
      <Guest />
    );
  } else {
    return <LoggedIn />
  };
}

export default MenuGreeting;