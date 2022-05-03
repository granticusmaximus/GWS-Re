import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavMenu from './components/UI/NavMenu'
import Footer from './components/UI/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Project from './components/pages/Projects'
import * as ROUTES from './components/constants/routes'
import AllPosts from './components/pages/AllPosts'
import OnePost from './components/pages/OnePost';

function App() {
  return (
    <div>
      <br/>
      <NavMenu />
        <Router>
              <Routes>
                <Route exact path={ROUTES.HOME} element={<Home />}/>
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.CONTACT} element={<Contact />} />
                <Route path={ROUTES.PROJECTS} element={<Project />} />
                <Route path={ROUTES.BLOG} element={<AllPosts />} />
                <Route path={ROUTES.SINGLE_POST} element={<OnePost/>} />
              </Routes>
        </Router>
      <div className='bottom'>
        <Footer />
      </div>
    </div>
  );
}

export default App;