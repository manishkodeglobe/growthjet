import React from "react";
import "./banner.css";

function HeroBanner() {
  return (
    <>
      <div className="Hero_banner">
        <div className="container">
          <div className="Home_page_banner_Main_heading">
            <h1> Put Your Brand's Growth on Autopilot</h1>
            <p>
              GrowthJet is a on-stop platform for all your online marketing
              requirements. We combine strategy, expertise, and Jet Fuel care -
              to design bespoke marketing solutions for your brand. Give your
              brand the boost it deserves.
            </p>
            <button className="btn btn-dark">Get Started</button>
          </div>

          <div className="Banner_serives_icons">
            <div className="banner_icons banner_icon_one">
              <img src="./images/banner1.png" alt="banner-icon1"></img>
              <h4>Search Engine Optimization</h4>
            </div>
            <div className="banner_icons banner_icon_two">
              <img src="./images/banner1.png" alt="banner-icon1"></img>
              <h4>Conversion Rate Optimization</h4>
            </div>
            <div className="banner_icons banner_icon_three">
              <img src="./images/banner1.png" alt="banner-icon1"></img>
              <h4>Email Marketing Service</h4>
            </div>
            <div className="banner_icons banner_icon_four">
              <img src="./images/banner1.png" alt="banner-icon1"></img>
              <h4>Social Media Marketing</h4>
            </div>
            <div className="banner_icons banner_icon_five">
              <img src="./images/banner1.png" alt="banner-icon1"></img>
              <h4>Pay Per Click (Paid Ads)</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
