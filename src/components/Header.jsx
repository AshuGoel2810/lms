import React from 'react';
import logo from '/assets/icons/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../style/header.css';

const Header = () => {
  return (
    <motion.div
      className='container'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <Link to="/">
              <motion.img
                alt='logo'
                src={logo}
                className="logo-img"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            <ul className="navbar-nav mb-2 mb-lg-0">
              {[
                { name: "Home", path: "/" },
                { name: "Courses", path: "/CoursePage" },
                { name: "Blog", path: "/BlogPage" },
                { name: "Contact Us", path: "/ContactUs" },
                { name: "Premium Theme", path: "/Progress" }
              ].map((item, index) => (
                <motion.li
                  className="nav-item"
                  key={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link className="nav-link custom-nav-link" to={item.path}>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <form className="d-flex">
              <motion.div
                className='d-flex align-items-center gap-2 auth-links'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link className='text-decoration-none text-dark' to="/login">Login</Link> /
                <Link className='text-decoration-none text-dark' to="/register">Register</Link>
              </motion.div>
            </form>

          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Header;
