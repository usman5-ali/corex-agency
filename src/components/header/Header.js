import React from "react";
// import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header id="header" className="header fixed-top shadow-sm py-2">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo (Left) */}
          <div className="logo d-flex align-items-center text-decoration-none">
            {/* Mobile (xs: <576px) */}

            <Nav.Link as={Link} to="/" className="nav-link img-nav-link">
              <img
                src="images/logo.png"
                className="img-fluid  "
                alt="COREX Logo"
              />
            </Nav.Link>
            {/* <Nav.Link
              as={Link}
              to="/About"
              className={`nav-link ${
                location.pathname === "/About" ? "active" : ""
              }`}
            >
              <img
              src="images/logo.png"
              className="img-fluid  "
              alt="COREX Logo"
           
            />
            </Nav.Link>
               <Nav.Link
              as={Link}
              to="/About"
              className={`nav-link ${
                location.pathname === "/About" ? "active" : ""
              }`}
            >
              <img
              src="images/logo.png"
              className="img-fluid  "
              alt="COREX Logo"
  
            />
            </Nav.Link> */}
          </div>
          {/* Desktop Nav (hidden on mobile) */}
          {/* <nav className="d-none d-xl-block">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="testimonials.html">
                  TESTIMONIALS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav> */}
          <Nav className="d-none d-xl-flex header-nav">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              className={`nav-link ${
                location.pathname === "/About" ? "active" : ""
              }`}
            >
              ABOUT US
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Services"
              className={`nav-link ${
                location.pathname === "/Services" ? "active" : ""
              }`}
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={`nav-link ${
                location.pathname === "/portfolio" ? "active" : ""
              }`}
            >
              PORTFOLIO
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Testimonials"
              className={`nav-link ${
                location.pathname === "/Testimonials" ? "active" : ""
              }`}
            >
              TESTIMONIALS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Contact"
              className={`nav-link ${
                location.pathname === "/Contact" ? "active" : ""
              }`}
            >
              CONTACT US
            </Nav.Link>
          </Nav>
          <button
            className="btn btn-toggle d-xl-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <i className="bi bi-list me-1" />
          </button>
        </div>
        {/* Offcanvas Mobile Menu */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="mobileMenu"
          aria-labelledby="mobileMenuLabel"
        >
          <div className="offcanvas-header">
            <a
              href="index.html"
              className="logo d-flex align-items-center text-decoration-none"
            >
              {/* Mobile (xs: <576px) */}
              <img
                src="images/logo.png"
                className="img-fluid d-block d-sm-none"
                alt="COREX Logo"
                style={{ maxHeight: 35 }}
              />
              {/* Tablet (sm: ≥576px and <768px) */}
              <img
                src="images/logo.png"
                className="img-fluid d-none d-sm-block d-md-none"
                alt="COREX Logo"
                style={{ maxHeight: 50 }}
              />
              {/* Desktop (md: ≥768px) */}
              <img
                src="images/logo.png"
                className="img-fluid d-none d-md-block"
                alt="COREX Logo"
                style={{ maxHeight: 80 }}
              />
            </a>
            <button
              type="button"
              className="btn-close custom-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
               <ul className="nav flex-column">
      <li className="nav-item">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          HOME
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
        >
          ABOUT US
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/services"
          className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
        >
          SERVICES
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={`nav-link ${location.pathname === "/portfolio" ? "active" : ""}`}
        >
          PORTFOLIO
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/testimonials"
          className={`nav-link ${location.pathname === "/testimonials" ? "active" : ""}`}
        >
          TESTIMONIALS
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
        >
          CONTACT US
        </Link>
      </li>
    </ul>

            
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
