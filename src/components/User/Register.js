import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { auth } from "../Auth/firebase";
import {useAuthValue} from '../Auth/AuthContext'
import "../../App.css";
import { Input } from "reactstrap";
import { Row } from "react-bootstrap";

function Register() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className='center'>
      <br />
      <br />
      <hr/>
      <div className='register register__container'>
        <h1>Register</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={register} name='registration_form'>
          <Row>
            <Input 
              type='email' 
              value={email}
              placeholder="Enter your email"
              required
              onChange={e => setEmail(e.target.value)}/>
            <br />
            <br/>
            <Input 
              type='password'
              value={password} 
              required
              placeholder='Enter your password'
              onChange={e => setPassword(e.target.value)}/>
            <br />
            <br/>
            <Input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}/>
          </Row>
          <br/>
          <button className="btn btn-outline-success" type='submit'>Register</button>
        </form>
        <span>
          Already have an account?  
          <Link to='/login'>login</Link>
        </span>
      </div>
    </div>
  )
}

export default Register;