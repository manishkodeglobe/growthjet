import { NavLink } from "react-router-dom";
import React from "react";
import "./footer.css";

import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbBrandTelegram } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

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
              <p className="footer_paragraph">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam{" "}
              </p>
              <div className="Social_media_icon">
                <NavLink to="/">
                  <FaFacebookF size={15} />
                </NavLink>
                <NavLink to="/">
                  <ImLinkedin2 size={15} />
                </NavLink>
                <NavLink to="/">
                  <AiFillYoutube size={15} />
                </NavLink>
                <NavLink to="/">
                  <AiFillInstagram size={15} />
                </NavLink>
              </div>
            </div>
            <div className="col-sm-3 pb-5">
              <div className="Footer_headings">
                <h4>Links</h4>
              </div>
              <ul className="Footer_links">
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
            <div className="col-sm-3 pb-5">
              <div className=" Footer_headings">
                <h4>Company</h4>
              </div>
              <ul className="Footer_links">
                <li>
                  <NavLink to="/">Home</NavLink>
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
            <div className="col-sm-3 addressing_mobile_padding">
              <div className=" Footer_headings">
                <h4>Address</h4>
              </div>
              <div className="footer_icon_wrappers">
                <div className="pr-2  ">
                  <NavLink className="">
                    <div className="footer_icon_svg">
                      <HiOutlineLocationMarker size={17} />
                    </div>
                  </NavLink>
                </div>
                <div className="Footer_paragraph">
                  <p>
                    134 N 4th Street Brooklyn<br></br> NY 11249, USA
                  </p>
                </div>
              </div>
              <div className="footer_icon_wrappers">
                <div className="pr-2">
                  <NavLink className="footer_icon_svg">
                    <div className="footer_icon_svg">
                      <TbBrandTelegram size={17} />
                    </div>
                  </NavLink>
                </div>
                <div className="Footer_paragraph">
                  <p>info@Designocracy</p>
                </div>
              </div>
              <div className="footer_icon_wrappers">
                <div className="pr-2">
                  <NavLink className="footer_icon_svg">
                    <div className="footer_icon_svg">
                      <FiPhoneCall size={17} />
                    </div>
                  </NavLink>
                </div>
                <div className=" Footer_paragraph">
                  <p>+41 79 2894470</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CopyRight">
          <div className="container text-center CopyRight_date">
            <p>©{copyRightDate}growthjet All rights reserved. </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
