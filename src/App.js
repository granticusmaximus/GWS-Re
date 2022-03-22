import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/User/Dashboard'
import Register from './components/User/Register'
import VerifyEmail from './components/User/VerifyEmail'
import Login from './components/User/Login'
import Home from './components/Front/Home'
import {useState, useEffect} from 'react'
import {AuthProvider} from './components/Auth/AuthContext'
import {auth} from './components/Auth/firebase'
import {onAuthStateChanged} from 'firebase/auth'
import NavMenu from './components/UI/NavMenu'
import {Container} from 'react-bootstrap'
import Reset from './components/User/Reset'
import About from './components/Front/About'
import Footer from './components/UI/Footer'
import Contact from './components/Front/Contact';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    
    <div>
      <br/>
      <NavMenu />
      <Container>
        <Router>
            <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path='/verify-email' element={<VerifyEmail />} /> 
                <Route path='/reset' element={<Reset/>} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact/>} />
              </Routes>  
            </AuthProvider>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}

export default App;