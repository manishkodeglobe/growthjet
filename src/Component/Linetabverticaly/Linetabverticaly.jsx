import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap-trial/dist/gsap";
import { DrawSVGPlugin } from "gsap-trial/dist/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import VerticallyLineTabMobile from "./verticallyLineTabMobile";
import "./MobileVertcileLineTab.css";

function Linetabvertically() {
  useEffect(() => {
    console.clear();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(MotionPathPlugin);
    gsap.defaults({ ease: "none" });

    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.0,
          autoAlpha: 1,
          scale: 1,
        },
      })
      .to(".ball02, .text01", {}, 0.0)
      .to(".ball03, .text02", {}, 0.45)
      .to(".ball04, .text03", {}, 0.95);

    const main = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg",
          // pin: true,
          scrub: true,
          yoyo: true,
          start: "top-=400px",
          end: "bottom-=700",
        },
      })
      .to(".ball01", { duration: 0.1, autoAlpha: 1 })
      .from(".theLine", { drawSVG: "1%" }, 0)
      .to(
        ".ball01",

        {
          drawSVG: "100%",
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      )
      .add(pulses, 0);
  });

  return (
    <>
      <div className="LineTab">
        <div className="container">
          <h1 class="Line_Tabbing_section_heading text-center">
            Using GrowthJet for your marketing needs<br></br> is easy. Here is
            how it works.
          </h1>
          <div className="Mobile_vertically_lineTab">
            <VerticallyLineTabMobile />
          </div>
          <div className="row vh100 vertically_Line_for_desktop">
            <div className="col-sm-2 d-flex align-items-center">
              <div className="svg_container">
                <svg
                  id="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  // viewBox="0 0 600 1200"
                >
                  <path
                    class="theLine"
                    d="M17,200 v540"
                    fill="none"
                    stroke="black"
                    stroke-width="2px"
                  />

                  <path class="line01 line" d="M 10 200  100 200"></path>
                  <path class="line02 line" d="M 10 480  100 400"></path>
                  <path class="line03 line" d="M 10 780  100 600"></path>

                  {/*                   
                  <text class="text01" x="40" y="208">
                    You create a brief
                  </text>
                  <text class="text02" x="40" y="480">
                    We assemble the best team
                  </text>
                  <text class="text03" x="40" y="745">
                    Track progress on your dashboard
                  </text> */}

                  <circle
                    class="ball ball01"
                    r="10"
                    cx="17"
                    cy="201"
                    fill="black"
                    stroke="black"
                    stroke-width="1"
                  ></circle>
                  <circle
                    class="ball ball02"
                    r="10"
                    cx="17"
                    cy="201"
                    fill="black"
                    stroke="black"
                    stroke-width="1"
                  ></circle>
                  <circle
                    class="ball ball03"
                    r="10"
                    cx="17"
                    cy="480"
                    fill="black"
                    stroke="black"
                    stroke-width="1"
                  ></circle>
                  <circle
                    class="ball ball04"
                    r="10"
                    cx="17"
                    cy="740"
                    fill="black"
                    stroke="black"
                    stroke-width="1"
                  ></circle>
                </svg>
              </div>
            </div>
            <div className="col-sm-10   justify-content-center align-items-center">
              <text className="text01" M="10 200  100 200">
                <div className="row LineTabtop">
                  <div className="col-sm-6 d-flex align-items-center">
                    <div className="row wrapper_s">
                      <div className="col-lg-4">
                        <h2 className="draw_section_heading">
                          You create a brief
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        {" "}
                        <p className="Allparagraph">
                          Schedule a quick call with our analysts, to get a free
                          preliminary quote within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <img
                      class="imgtabss"
                      src="./images/linetab1.jpg"
                      alt="Line tab 1"
                    />
                  </div>
                </div>
              </text>

              <text className="text02" x="30" y="390">
                <div className="row LineTabtop">
                  <div className="col-sm-6 d-flex align-items-center">
                    <div className="row wrapper_s">
                      <div className="col-lg-4">
                        <h2 className="draw_section_heading">
                          You create a brief
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        {" "}
                        <p className="Allparagraph">
                          Schedule a quick call with our analysts, to get a free
                          preliminary quote within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <img
                      class="imgtabss"
                      src="./images/linetab2.jpg"
                      alt="linetab 2"
                    />
                  </div>
                </div>
              </text>

              <text className="text03" x="30" y="590">
                <div className="row LineTabtop">
                  <div className="col-sm-6 d-flex align-items-center">
                    <div className="row wrapper_s">
                      <div className="col-lg-4">
                        <h2 className="draw_section_heading">
                          You create a brief
                        </h2>
                      </div>
                      <div className="col-lg-8">
                        {" "}
                        <p className="Allparagraph">
                          Schedule a quick call with our analysts, to get a free
                          preliminary quote within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <img
                      class="imgtabss"
                      src="./images/linetab3.jpg"
                      alt="line tab 3"
                    />
                  </div>
                </div>
              </text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Linetabvertically;
