import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-8 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src="images/logo.png" height="85px" alt="" />
              </a>
              <div className="footer-contact pt-3 text-start">
                <p>3800 Faisalabad, Punjab, Pakistan</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+92 316-7013172</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@wpcorex.com</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links text-start">
              <h4 className="heading-col">Useful Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links text-start">
              <h4 className="heading-col">Our Services</h4>
              <ul>
                <li>
                  <a>Web Design</a>
                </li>
                <li>
                  <a>Web Development</a>
                </li>
                <li>
                  <a>Product Management</a>
                </li>
                <li>
                  <a>Marketing</a>
                </li>
                <li>
                  <a>Graphic Design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">COREX</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
