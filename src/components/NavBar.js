import logo from '../assets/img/icon-estate.png'


function NavBar() {

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img className="navbar-brand" src={logo} />
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
          <a className="dropdown-item" href="#" target='blank'>Project 1</a>
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




// <Navbar expand="lg" className={ "scrolled"}>
// <Container>
// <Navbar.Brand href="/">
//       <img src={logo} alt="Logo" />
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav">
//       <span className="navbar-toggler-icon"></span>
//     </Navbar.Toggle>
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="ms-auto">
//         <Nav.Link href="#home" className={'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//         <Nav.Link href="#skills" className={'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
//         <Nav.Link href="#projects" className={ 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
//         {/* <Nav.Link href={resume} className={ 'navbar-link'} download="Shubham's Resume">Resume download</Nav.Link> */}
//       </Nav>
//       <span className="navbar-text">
//         <div className="social-icon">
//           <a href="https://www.linkedin.com/in/shubham-ovhal" target='blank'><img src={''} alt="" /></a>
//           <a href="https://github.com/shubham1328" target='blank'><img src={''} alt="" /></a>
//           <a href="https://www.youtube.com/@lifebelike8533" target='blank'><img src={''} alt="" /></a>
//         </div>
//         {/* <HashLink to='#connect'> */}
//           <button className="vvd"><span>Let’s Connect</span></button>
//         {/* </HashLink> */}
//       </span>
//     </Navbar.Collapse>
// </Container>
// </Navbar>