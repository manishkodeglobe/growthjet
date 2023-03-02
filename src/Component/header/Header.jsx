import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <NavLink to="/">
            <img src="./images/Logo.svg" alt="Logo-Img" />
          </NavLink>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#x"
            aria-expanded="false"
          >
            <img
              className="navbar-toggler-icon toggler_icon mobile-open-icon"
              name="menu-outline"
              src="./images/mobile-toggle-icon.png"
              alt="toggle_icon"
            ></img>
          </button>
          <div className="navbar-collapse collapse" id="x">
            <div class="container">
              <ul className="nav navbar-nav d-flex align-items-center">
                <li className="nav-item">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog">Blogs</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/AllBloogPage">All Blogs</NavLink>
                </li>
                <NavLink to="/contact" className="btn btn-dark text-white">
                  Contact Us
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
