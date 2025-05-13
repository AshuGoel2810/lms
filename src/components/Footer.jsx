import React from 'react';
import logo from '../assets/icons/logo.png';

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5">
      <div className="container">
        <div className="row gy-4 border-top border-grey-50">

          {/* Logo and About */}
          <div className="col-md-3">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="edupulse  Logo" height="30" className="me-2" />

            </div>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Get Help */}
          <div className="col-md-3">
            <h6 className="fw-bold">GET HELP</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Contact Us</a></li>
              <li className="d-flex align-items-center">
                <a href="#" className="text-decoration-none text-dark">Latest Articles</a>

              </li>
              <li><a href="#" className="text-decoration-none text-dark">FAQ</a></li>
              <li><a href="/ReviewPage" className="text-decoration-none text-dark">Review</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="col-md-3">
            <h6 className="fw-bold">PROGRAMS</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Art & Design</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Business</a></li>
              <li><a href="#" className="text-decoration-none text-dark">IT & Software</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Languages</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Programming</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="fw-bold">CONTACT US</h6>
            <p className="text-muted mb-1">Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
            <p className="mb-1">Tel: + (123) 2500-567-8988</p>
            <p className="mb-2">Mail: supportlms@gmail.com</p>
            <div className="d-flex gap-2 fs-5">
              <a href="#" className="text-dark"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-pinterest-p"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Copyright */}
        <div className="text-center pb-4 small text-muted">
          © {new Date().getFullYear()} LearnPress LMS | Powered by <span className="fw-bold">EduPulse</span>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        className="btn btn-dark rounded-circle position-fixed bottom-0 end-0 m-4 footer-section"

        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
