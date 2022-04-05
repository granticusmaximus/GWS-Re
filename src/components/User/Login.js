import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Auth/firebase";
import { useAuthValue } from '../Auth/AuthContext'
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import "../../App.css";
import { Row } from "react-bootstrap"
import { Input } from 'reactstrap'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/')
    }
    })
    .catch(err => setError(err.message))
  }

  return(
    <div className='center'>
      <br />
      <br />
      <hr/>
      <div className='login login__container'>
        <h1>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form'>
          <Row>
            <Input 
              type='email' 
              value={email}
              required
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}/>
            <br />
            <br/>
            <Input 
              type='password'
              value={password}
              required
              placeholder='Enter your password'
              onChange={e => setPassword(e.target.value)}/>
          </Row>
          <br/>
          <button className="btn btn-outline-success" type='submit'>Login</button>
        </form>
        <p>
          Don't have and account? 
        </p>
        <p>
          <Link to='/register'>Create one here</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;