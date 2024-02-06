import logo from '../assets/img/icon-estate.png'


function NavBar() {

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img className="navbar-brand" alt="nav-logo" src={logo} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/aboutus">About Us</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/project1" target='blank'>Project 1</a>
          <a className="dropdown-item" href="/project2" target='blank'>Project 2</a>
          <div className="dropdown-divider"></div>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>
  );
}

export default NavBar;