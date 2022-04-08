import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './user/Dashboard'
import Register from './user/Register'
import VerifyEmail from './user/VerifyEmail'
import Login from './user/Login'
import Home from './components/Front/Home'
import {useState, useEffect} from 'react'
import { AuthProvider } from './config/AuthContext'
import { auth } from './config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import NavMenu from './UI/NavMenu'
import {Container} from 'react-bootstrap'
import About from './components/Front/About'
import Footer from './UI/Footer'
import Contact from './components/Front/Contact'
import Project from './components/Front/Projects'
import AuthError from './components/error.component'

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
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/auth-error' element={<AuthError/>} />
              </Routes>  
            </AuthProvider>
        </Router>
      </Container>
      <div className='bottom'>
        <Footer />
      </div>
    </div>
  );
}

export default App;