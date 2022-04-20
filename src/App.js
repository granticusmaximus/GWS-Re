import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from "react"
import NavMenu from './components/UI/NavMenu'
import {Container} from 'react-bootstrap'
import Footer from './components/UI/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Project from './components/pages/Projects'
import Blog from './components/pages/Blogs'
import CreatePost from './components/pages/CreatePost'

function App() {
  return (
    <div>
      <br/>
      <NavMenu />
      <Container>
        <Router>
              <Routes>
                <Route exact path='/' element={<Home />}/>
                {/* <Route path="/login" element={<Login setIsAuth={setIsAuth} />} /> */}
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/blogs' element={<Blog />} />
                <Route path='/create-post' element={<CreatePost setIsAuth={isAuth} />} />
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