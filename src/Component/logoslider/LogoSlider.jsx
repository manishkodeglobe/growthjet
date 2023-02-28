import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./LogoSlider.css";

function Logoslider() {
  const [CounterOn, setCounterOn] = useState(false);
  var settings = {
    autoplay: true,
    loop: true,

    center: true,
    items: 7.5,
    nav: false,
    arrows: false,
    dots: false,
    margin: 10,
    slideTransition: "linear",
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 7.5,
        center: true,
      },

      600: {
        items: 7.5,
        center: true,
      },

      1024: {
        center: true,
        items: 6,
      },

      1366: {
        items: 6,
        center: true,
      },
    },
  };
  return (
    <>
      {" "}
      <div className="container">
        <div className="Logo_slider">
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div className="row">
                <div className="col-5 d-flex align-items-center">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    <div className="txt500plus">
                      <p className="plus_symboles">
                        {CounterOn && (
                          <CountUp
                            start={0}
                            end={500}
                            duration={3}
                            delay={0.5}
                          />
                        )}
                        <strong>+</strong>
                      </p>
                    </div>
                  </ScrollTrigger>
                </div>
                <div className="col-7  d-flex align-items-center logoslider_heading">
                  <h4>
                    Businesses Trust Us <br></br>With Their Growth{" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="White_space_image_left">
                <img src="./images/whitespaceleft.png" alt="whitespace"></img>
              </div>

              <OwlCarousel
                {...settings}
                className="logo_wrapper theme"
                loop
                margin={10}
                nav
              >
                <div className="logo_images">
                  <img src="./images/slide1.png" alt="slider1" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide2.png" alt="slider2" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide1.png" alt="slider3" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide2.png" alt="slider4" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide1.png" alt="slider5" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide2.png" alt="slider6" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide1.png" alt="slider7" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide2.png" alt="slider8" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide1.png" alt="slider9" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide2.png" alt="slider6" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide1.png" alt="slider7" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide2.png" alt="slider8" />
                </div>
                <div className="logo_images">
                  <img src="./images/slide1.png" alt="slider9" />
                </div>
              </OwlCarousel>
              <div className="White_space_image_right">
                <img src="./images/whitespaceright.png" alt="whitespace"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logoslider;
