import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "./firebase";
import logo from '../../assets/img/logo.png'

function LoggedIn(props) {
  return <a href='/dashboard' className='btn btn-outline-success'>Dashboard</a>;
}

function Guest(props) {
  return <img src={logo} alt="image description" height={75} width={75}/>;
}

function MenuGreeting(props) {
  const [user] = useAuthState(getAuth);
  if (user) {
    return <LoggedIn />;
  } else {
    return <Guest />
  };
}

export default MenuGreeting;