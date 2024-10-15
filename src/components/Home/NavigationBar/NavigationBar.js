import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import logo from "../../../logo_preffered.v2.cropped.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Navbar expand="lg">
              <Navbar.Brand href="/">
                <img src={logo} className="img-fluid" alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  {/* <Link to="#home" className="nav-link">
                    Home
                  </Link>
                  <Link to="#service" className="nav-link">
                    Our Services
                  </Link>
                  <Link to="#portfolio" className="nav-link">
                    Portfolio
                  </Link>
                  <Link to="#contact" className="nav-link">
                    Contact Us
                  </Link> */}
                  {/* <Link to="/login" className="nav-link">Login</Link> */}
                  <HashLink
                    to="/"
                    className="nav-link"
                  >
                    Home
                  </HashLink>
                  <HashLink
                    to="#service"
                    className="nav-link"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    Our Services
                  </HashLink>
                  <HashLink
                    to="#portfolio"
                    className="nav-link"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                   Portfolio
                  </HashLink>
                  <HashLink
                    to="#contact"
                    className="nav-link"
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    Contact Us
                  </HashLink>

                  {/* Services */}
                  {/* <HashLink to="services" className="nav-link">
                    Services
                  </HashLink> */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
