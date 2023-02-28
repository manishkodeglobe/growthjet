import React from "react";
import "./header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Primary_Header">
      <div className="container">
        <div className="Header_Wrapper ">
          <div className="Header_icon">
            <NavLink to="/">
              <img src="./images/Logo.svg" alt="Logo-Img" />
            </NavLink>
          </div>
          <div className="nav_list">
            <div className="nav_links">
              <div className="nav_list_wrapper">
                <div className="nav_item ">
                  <NavLink to="/">Home</NavLink>
                </div>

                <div className="nav_item ">
                  <NavLink to="/services">Services</NavLink>
                </div>
              </div>
              <div className="contact_page_button">
                <NavLink to="/contact" className="btn btn-dark text-white">
                  Contact Us
                </NavLink>
              </div>

              <div className="toggle_menu">
                <img
                  className="toggler_icon mobile-open-icon"
                  name="menu-outline"
                  src="./images/mobile-toggle-icon.png"
                  alt="toggle_icon"
                ></img>
                {/* <img
                  onClick={() => setShowMenu(false)}
                  className="toggler_icon mobile-close-icon"
                  name="close-outline"
                  src="./images/close_FILL0_wght400_GRAD0_opsz48.png"
                  alt="toggle_icon"
                ></img> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
