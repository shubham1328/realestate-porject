import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project1 from './components/Project1';
import Project2 from './components/Projects';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/project1" element={<Project2/>} /> {/* New route for Project1 */}
          <Route path="/project2" element={<Project1 />} /> {/* New route for Project2 */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

