import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavMenu from './components/UI/NavMenu'
import Footer from './components/UI/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Project from './components/pages/Projects'
import Blog from './components/pages/Blogs'
function App() {
  return (
    <div>
      <br/>
      <NavMenu />
        <Router>
              <Routes>
                <Route exact path='/' element={<Home />}/>
                {/* <Route path="/login" element={<Login setIsAuth={setIsAuth} />} /> */}
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/blogs' element={<Blog />} />
                {/* <Route path='/create-post' element={<CreatePost setIsAuth={isAuth} />} /> */}
              </Routes>
        </Router>
      <div className='bottom'>
        <Footer />
      </div>
    </div>
  );
}

export default App;