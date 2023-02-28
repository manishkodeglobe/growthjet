import React, { useState } from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true);

  const handleShowHideMenu = () => {
    setShowMenu(!ShowMenu);
  };
  return (
    <div className="Primary_Header">
      <div className="container">
        <div className="Header_Wrapper ">
          <div className="Header_icon">
            <NavLink to="/">
              <img src="./images/Logo.svg" alt="Logo-Img" />
            </NavLink>
          </div>

          <div className="nav_links">
            <div
              className={
                ShowMenu ? "nav_list_wrapper-display_none" : "nav_list_wrapper"
              }
            >
              <div className="wrapper">
                <div className="nav_item">
                  <NavLink onClick={handleShowHideMenu} to="/">
                    Home
                  </NavLink>
                </div>
                <div className="nav_item">
                  <NavLink onClick={handleShowHideMenu} to="/AllBloogPage">
                    All Blogs
                  </NavLink>
                </div>
                <div className="contact_page_button nav_item">
                  <NavLink
                    onClick={handleShowHideMenu}
                    to="/contact"
                    className="btn btn-dark text-white"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="toggle_menu" onClick={handleShowHideMenu}>
              {ShowMenu ? (
                <GiHamburgerMenu size={30} />
              ) : (
                <>
                  <GrFormClose size={40} className="fixed_close_icon" />
                  <img
                    src="./images/Logo.svg"
                    alt="Logo-Img"
                    className="fixed_close_icon logo-icon-fixedd  e"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
