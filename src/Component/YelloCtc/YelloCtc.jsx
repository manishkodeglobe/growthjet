import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import yelloCtcImg from "./yelloctcimg.png";

import "./YelloCtc.css";

const YelloCtc = () => {
  return (
    <div className="yelloCTCsection">
      <div className="container">
        <div className="Yello_ctc">
          <div className="row">
            <div className="col-sm-8 yello_banner_content">
              <h2>
                If we don’t give you at least a 200% RETURN on your marketing
                spent, we work for free.*
              </h2>
              <p>
                Once you experience the GrowthJet magic, you’ll never work with
                another agency.{" "}
              </p>
              <button className="btn btn-dark Yello_ctc_button">
                get started
              </button>
            </div>
            <div className="col-sm-4 width_100_in_mob">
              <div className="image_change_with_ease_slides">
                <img src={yelloCtcImg} alt="imageslideease"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YelloCtc;
