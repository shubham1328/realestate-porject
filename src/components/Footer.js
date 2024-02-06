// Footer.js
import React from 'react';
import logo from '../assets/img/icon-estate.png'
import facebook from "../assets/img/icons8-facebook-96.png"
import insta from "../assets/img/icons8-instagram-96.png"

const Footer = () => {
  return (
    <footer className="text-center text-white bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Pune 112<br />City, 410507</p>
            <p>Email: info@realestate.com<br />Phone: +123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={insta} alt="Instagram" /></a>
            {/* <a href="#"><img src="instagram.png" alt="Instagram" /></a> */}
          </div>
        </div>
      </div>
      <hr className="bg-light" />
      <div className='footer-div'>
      <img className="navbar-brand" src={logo} />
      <p className="text-muted">&copy; 2024 RealEstate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
