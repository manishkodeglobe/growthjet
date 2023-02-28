import React from "react";
import "../Component/footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  const copyRightDate = new Date().getFullYear();
  return (
    <section className="Footer_section" id="#footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 Footer_paragraph pb-4">
              <div className="brand-logo Footer_headings text-primary">
                <NavLink to="/">
                  <img src="./images/footerlogo.svg" alt="mainFooterlogo"></img>
                </NavLink>
              </div>
              <div className="footer_all_same_content">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam
                </p>
              </div>

              <div className="Social_media_icon">
                <NavLink to="/">
                  <div className="social_icons">
                    <img
                      src="./images/footerfacebook.svg"
                      alt="footerfaceboookicon"
                    ></img>
                  </div>
                </NavLink>
                <NavLink to="/">
                  <div className="social_icons">
                    <img
                      src="./images/footerlinkden.svg"
                      alt="footerfaceboookicon"
                    ></img>
                  </div>
                </NavLink>
                <NavLink to="/">
                  <div className="social_icons">
                    <img
                      src="./images/footerYoutube.svg"
                      alt="footeryoutube"
                    ></img>
                  </div>
                </NavLink>
                <NavLink to="/">
                  <div className="social_icons">
                    <img
                      src="./images/footerinstagram.svg"
                      alt="footerinstagram"
                    ></img>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col-sm-3 pb-4">
              <div className="Footer_headings">
                <h4>Links</h4>
              </div>
              <ul className="Footer_links footer_all_same_content pl-0">
                <li>
                  <NavLink to="/career">Career</NavLink>
                </li>
                <li>
                  <NavLink to="/Privacypolicy">Privacy policy</NavLink>
                </li>
                <li>
                  <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/termsofuse"> Terms of use</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 pb-4">
              <div className="Footer_headings">
                <h4>Company</h4>
              </div>
              <ul className="Footer_links footer_all_same_content pl-0">
                <li>
                  <NavLink to="/Termsofuse"> Terms of use</NavLink>
                </li>
                <li>
                  <NavLink to="/AboutUs">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/Services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/Portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/Industries">Industries</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 pb-4">
              <div className="Footer_headings">
                <h4>Address</h4>
              </div>
              <div className="d-flex">
                <div className="pr-4">
                  <NavLink to="/">
                    {" "}
                    <img src="./images/footerlocation.svg" alt="location"></img>
                  </NavLink>
                </div>
                <div className="footer_all_same_content">
                  <p>134 N 4th Street Brooklyn NY 11249, USA</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="pr-4">
                  {" "}
                  <NavLink to="/">
                    {" "}
                    <img src="./images/footermailicon.svg" alt="mails"></img>
                  </NavLink>
                </div>
                <div className="footer_all_same_content">
                  <p>info@Designocracy</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="pr-4">
                  <NavLink to="/">
                    {" "}
                    <img
                      src="./images/footercallicon.svg"
                      alt="footercalling"
                    ></img>
                  </NavLink>
                </div>
                <div className="footer_all_same_content">
                  <p>+41 79 2894470</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="CopyRight">
        <div className="container text-center CopyRight_date">
          <p>©{copyRightDate}growthjet All rights reserved. </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
