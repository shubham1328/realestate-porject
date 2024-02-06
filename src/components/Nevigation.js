// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Define your navigation component
function Navigation() {
  return (
    <Router>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/project1" target="_blank">Project 1</Link>
          <Link className="dropdown-item" to="/project2" target="_blank"> Project 2</Link>
          <div className="dropdown-divider"></div>
        </div>
      </li>

      {/* Define routes */}
      <Route path="/project1" component={Project1} />
      <Route path="/project2" component={Project2} />
    </Router>
  );
}

// Define your Project1 component
function Project1() {
  return (
    <div>
      <h2>Project 1</h2>
      <p>This is Project 1.</p>
    </div>
  );
}

// Define your Project2 component
function Project2() {
  return (
    <div>
      <h2>Project 2</h2>
      <p>This is Project 2.</p>
    </div>
  );
}

// Export your navigation component
export default Navigation;
