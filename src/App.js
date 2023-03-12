import profile_pic from './home/Pugazhenthi Thaniarasu I R.jpeg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Skills from "./home/skills";
import Qualification from "./home/qualifications";
import Project from "./home/projects";
import Home from "./home/home";
import Internship from "./home/internships";
function App() {
  return (
    <div className="App">
      <Router>
      <nav className="home_top">
            <div><h1>Pugazhenthi Thaniarasu I R</h1></div>
                <div className="nav">
                  <Link to="/">Home</Link>
                  <Link to="/project">Project</Link>
                  <Link to="/skill">Skills</Link>
                  <Link to="/qualification">Qualification</Link>
                  <Link to="/internship">Internships</Link>
            </div>
      </nav>
      <div className='home_bottom'>
        <div className="profile">
          <div>
            <img src={profile_pic} alt="Profile-Pic" width="180px" height="180px"></img>
          </div>
          <div className="prof_top">
            <p><strong>Pugazhenthi Thaniarasu I R</strong></p>
            <p>UG - ECE</p>
          </div>
          <table>
            <tr>
              <th>Contact:</th>
              <td>9500231687</td>
            </tr>
            <tr>
              <th>Gmail:</th>
              <td>pugazhenthiir2002@gmail.com</td>
            </tr>
            <tr>
              <th>Gender:</th>
              <td>Male</td>
            </tr>
            <tr>
              <th>D.O.B:</th>
              <td>11/10/2002</td>
            </tr>
            <tr>
              <th>Martial Status:</th>
              <td>Single</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>3/2A, Anna Nagar, Sirumugai - 641302</td>
            </tr>
          </table>
        </div>
        <div className="details">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/skill" element={<Skills/>}/>
            <Route path="/qualification" element={<Qualification/>}/> 
            <Route path="/project" element={<Project/>}/>
            <Route path="/internship" element={<Internship/>}/>
          </Routes>
        </div>
      </div>
      </Router>
      <footer>
                <div className="foot">
                    <div className="foot-text">© 2023 Pugazhenthi Thaniarasu I R</div>
                    <div className="foot-right">|
                        <a href="https://www.linkedin.com/in/pugazhenthi-i-r/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin fa-lg"></i></a>
                        <a href="https://github.com/pugazhenthi2002" target="_blank" rel="noreferrer"><i class="fa fa-github fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/pugazhenthi-i-r/" target="_blank" rel="noreferrer"><i class="fa fa-instagram fa-lg"></i></a>
                        
                    </div>
                </div>
            </footer>
    </div>
  );
}

export default App;
