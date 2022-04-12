import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import NavMenu from './components/UI/NavMenu'
import {Container} from 'react-bootstrap'
import About from './components/pages/About'
import Footer from './components/UI/Footer'
import Contact from './components/pages/Contact';
import Project from './components/pages/Projects';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    
    <div>
      <br/>
      <NavMenu />
      <Container>
        <Router>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Project />} />
              </Routes>
        </Router>
      </Container>
      <div className='bottom'>
        <Footer />
      </div>
    </div>
  );
}

export default App;