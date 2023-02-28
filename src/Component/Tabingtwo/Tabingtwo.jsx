import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import "./tabingtwo.css";

function Tabingscrolltwo() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headingss = document.querySelectorAll(".tabheadings");
    const nums = document.querySelectorAll(".tabscroll-num");
    const heads = document.querySelector(".tabheadss");
    const numOfTransitions = headingss.length;

    // const singleDurations = 900;
    let singleDurations = window.innerHeight;
    const totalDurations = singleDurations * numOfTransitions;

    ScrollTrigger.create({
      pin: heads,
      end: "+=" + `${totalDurations}`,
      pinSpacing: true,
    });

    headingss.forEach((headingss, i) => {
      ScrollTrigger.create({
        id: "headingss-st-" + i,
        trigger: headingss,
        toggleActions: "play reverse play reverse",

        start: `${singleDurations * i}`,
        end: "+=" + `${singleDurations}`,

        // markers: true,

        onEnter: () => {
          gsap.to([headingss, nums[i]], { opacity: 1 });
        },
        onLeave: () => {
          if (i === headingss.length - 1) return;
          gsap.to([headingss, nums[i]], { opacity: 0 });
        },

        onEnterBack: () => {
          gsap.to([headingss, nums[i]], { opacity: 1 });
        },

        onLeaveBack: () => {
          if (i === 0) return;
          gsap.to([headingss, nums[i]], { opacity: 0 });
        },
      });
    });
  });

  return (
    <section className="tab_section_two">
      <div className="container">
        <div className="Tab_center_heading text-center">
          <h1 className="Scroll_tab_two_heading pb-4">
            How does the jet take off?
          </h1>
        </div>

        <div class="tabs">
          <header className="Tabing_navigation_scroll_two">
            <nav className="nav__container__actions text-center">
              <ul className="Tab_scroll_ul_two ">
                {/* link one */}

                <Link
                  activeClass="active_two"
                  className="Active_scroll_nav_button_two"
                  spy
                  to="Tabbing_two_-one"
                >
                  <li>
                    <div className="row">
                      <div className="col-sm-12  ">
                        <h6 className="Tab_headings_two">Plan</h6>
                      </div>
                    </div>
                  </li>
                </Link>

                <Link
                  activeClass="active_two"
                  className="Active_scroll_nav_button_two"
                  to="Tabbing_two_-two"
                  spy
                >
                  <li>
                    <div className="row">
                      <div className="col-sm-12  ">
                        <h6 className="Tab_headings_two">Implement</h6>
                      </div>
                    </div>
                  </li>
                </Link>

                <Link
                  activeClass="active_two"
                  className="Active_scroll_nav_button_two"
                  to="Tabbing_two_-three"
                  spy
                >
                  <li>
                    <div className="row">
                      <div className="col-sm-12  ">
                        <h6 className="Tab_headings_two">Optimize</h6>
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            </nav>
          </header>

          {/* tab 1 */}
          <div className="row tabbing_two_row">
            <div className="col-sm-6">
              {/* tab-one text */}
              <div
                className="col-sm-12 vh100 d-flex align-items-center"
                id="Tabbing_two_-one"
              >
                <div className="">
                  <div className="">
                    <h5 className="blue_text">Plan</h5>

                    <h4 className="Tab_two_headingss">
                      Sed ut perspiciatis unde omnis iste
                    </h4>
                  </div>
                  <p className="Tabing_two_description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae abSed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae abSed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque
                  </p>
                  <button class="btn btn-dark Yello_ctc_button">
                    Get Started
                  </button>
                </div>
              </div>

              {/* coll-two-text */}
              <div
                className="col-sm-12 vh100 d-flex align-items-center"
                id="Tabbing_two_-two"
              >
                <div className="">
                  <div className="">
                    <h5 className="blue_text">Implement</h5>

                    <h4 className="Tab_two_headingss">
                      Sed ut perspiciatis unde omnis iste
                    </h4>
                  </div>
                  <p className="Tabing_two_description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae abSed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae abSed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque
                  </p>
                  <button class="btn btn-dark Yello_ctc_button">
                    Get Started
                  </button>
                </div>
              </div>
              {/* col-three-text */}
              <div
                className="col-sm-12 vh100 d-flex align-items-center"
                id="Tabbing_two_-three"
              >
                <div className=" ">
                  <div className="">
                    <h5 className="blue_text">Optimize</h5>

                    <h4 className="Tab_two_headingss">
                      Sed ut perspiciatis unde omnis iste
                    </h4>
                  </div>
                  <p className="Tabing_two_description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae abSed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae abSed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque
                  </p>
                  <button class="btn btn-dark Yello_ctc_button">
                    Get Started
                  </button>
                </div>
              </div>

              {/* row end div */}
            </div>

            {/* images section started */}

            <div className="col-sm-6">
              <div class="tabheadss">
                <div class="tabcontent-box">
                  <div class="tabheadings" id="heading1_img_tab_two">
                    <div id="tab01" class="tab-contents_scroll">
                      <div className="row">
                        <div className="col-sm-12 vh100  ">
                          <div className="tab_content_wrapper_img_two">
                            <img
                              className="Tab_img"
                              id="tab_twoimg"
                              src="./images/planning.png"
                              alt="seo"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* tab 2 */}
                  <div class="tabheadings" id="heading2">
                    <div id="tab02" class="tab-contents_scroll">
                      <div className="row">
                        <div className="col-sm-12 vh100  ">
                          <div className="tab_content_wrapper_img_two">
                            <img
                              className="Tab_img"
                              src="./images/implement.png"
                              alt="seo"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* tab 3 */}

                  <div class="tabheadings" id="heading5">
                    <div id="tab05" class="tab-contents_scroll">
                      <div className="row">
                        <div className="col-sm-12 vh100  ">
                          <div className="tab_content_wrapper_img_two">
                            <img
                              className="Tab_img"
                              src="./images/optimize.png"
                              alt="seo"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabingscrolltwo;
