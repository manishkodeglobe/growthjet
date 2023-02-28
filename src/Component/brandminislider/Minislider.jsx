import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Minislider() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function minisliderfordesktop() {
      if (window.innerWidth > 900) {
        const minislidertimeline = gsap.timeline();
        minislidertimeline.fromTo(
          ".Minislider_wrapper",
          {},
          {
            autoAlpha: 1,

            scrollTrigger: {
              trigger: ".Minislider_wrapper",
              scrub: true,
              yoyo: true,

              // markers: true,
              start: "top+=-200 center",
              end: "bottom+=200 center",
            },
          }
        );
      } else {
        // for mobile
        // console.log("not working");
      }
    }

    minisliderfordesktop();
    window.addEventListener("resize", minisliderfordesktop);
  });

  return (
    <section className="Minislider pb-0 pt-0">
      <div className="container">
        <div className="row Minislider_wrapper">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-4 d-flex align-items-center counter_minislider_img">
                <img src="./images/500+.png"></img>
              </div>
              <div className="col-sm-8 d-flex align-items-center">
                <p className="Allparagraph ml-4">
                  Businesses Trust Us<br></br> With Their Growth
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="Slider_wrapper">
              <div className="Minislider_spaceWhite">
                <img src="./images/minislidespaceleft.png"></img>
              </div>
              <section class="row d-flex slider p-0">
                <div class="slide col-2">
                  <img src="./images/slickmini2.png" alt="slide1" />
                </div>
                <div class="slide col-2">
                  <img src="./images/slickmini2.png" alt="slide2" />
                </div>
                <div class="slide col-2">
                  <img src="./images/slickmini33.png" alt="slide3" />
                </div>
                <div class="slide col-2">
                  <img src="./images/slickmini4.png" alt="slide4" />
                </div>
                <div class="slide col-2">
                  <img src="./images/slickmini5.png" alt="slide5" />
                </div>
                <div class="slide col-2">
                  <img src="./images/slickmini5.png" alt="slide6" />
                </div>
                <div class="slide col-2">
                  <img src="./images/slickmini5.png" alt="slide6" />
                </div>
                <div class="slide col-2">
                  <img src="./images/slickmini5.png" alt="slide6" />
                </div>
                <div class="slide col-2">
                  <img src="./images/slickmini5.png" alt="slide6" />
                </div>
              </section>
              <div className="Minislider_spaceWhiteright">
                <img src="./images/minislidespaceright.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Minislider;
