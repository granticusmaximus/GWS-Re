import './App.css'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavMenu from './components/UI/NavMenu'
import Footer from './components/UI/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Project from './components/pages/Projects'
import Posts from './components/pages/Posts'
import * as ROUTES from './components/constants/routes'
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
                <Route path={ROUTES.BLOG} element={<Posts/>} />
              </Routes>
        </Router>
      <div className='bottom'>
        <Footer />
      </div>
    </div>
  );
}

export default App;