import React from "react";
// import logo   from '../../public/image/logo-m1.jpeg';
import logo from "../image/logo-dark-3.jpg";

// React Fontawesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="logo..."></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}></FontAwesomeIcon>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="clients">
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
