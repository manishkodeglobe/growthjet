import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import "../Component/FirstTabingScroll.css";

const FirstTabingScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headings = document.querySelectorAll(".tabheading");
    const nums = document.querySelectorAll(".tabscroll-num");
    const head = document.querySelector(".tabhead");
    const numOfTransitions = headings.length + 0.3;

    const singleDuration = 1000;
    const totalDuration = singleDuration * numOfTransitions;

    ScrollTrigger.create({
      pin: head,
      end: "+=" + `${totalDuration}`,
      pinSpacing: true,
    });

    headings.forEach((heading, i) => {
      ScrollTrigger.create({
        id: "heading-st-" + i,
        trigger: heading,
        toggleActions: "play reverse play reverse",

        start: `${singleDuration * i}`,
        end: "+=" + `${singleDuration}`,

        // markers: true,

        onEnter: () => {
          gsap.to([heading, nums[i]], { opacity: 1 });
        },
        onLeave: () => {
          if (i === headings.length - 1) return;
          gsap.to([heading, nums[i]], { opacity: 0 });
        },

        onEnterBack: () => {
          gsap.to([heading, nums[i]], { opacity: 1 });
        },

        onLeaveBack: () => {
          if (i === 0) return;
          gsap.to([heading, nums[i]], { opacity: 0 });
        },
      });
    });
  });
  return (
    <section className="tab_section">
      <div className="container">
        <div class="tabs">
          <header className="Tabing_navigation_scroll">
            <nav className="nav__container__actions">
              <ul className="Tab_scroll_ul row">
                {/* link one */}
                <Link
                  activeClass="active"
                  className="col-sm-3 col-md-4 col-lg-2 Active_scroll_nav_button"
                  spy
                  to="Tab_one"
                >
                  <li>
                    <div className="row">
                      <div className="col-sm-12 text-left">
                        <span className="White_text">01.</span>
                      </div>
                      <div className="col-sm-12 text-left">
                        <h6 className="Tab_headings">
                          Search Engine Optimization
                        </h6>
                      </div>
                    </div>
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  className="col-sm-3 col-md-4 col-lg-2 Active_scroll_nav_button"
                  spy
                  to="Tab_two"
                >
                  <li>
                    <div className="row">
                      <div className="col-sm-12 text-left">
                        <span className="White_text">02.</span>
                      </div>
                      <div className="col-sm-12 text-left">
                        <h6 className="Tab_headings">
                          Pay Per Click(Pais Ads)
                        </h6>
                      </div>
                    </div>
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  className="col-sm-3 col-md-4 col-lg-2 Active_scroll_nav_button"
                  spy
                  to="Tab_three"
                >
                  <li>
                    <div className="row">
                      <div className="col-sm-12 text-left">
                        <span className="White_text">03.</span>
                      </div>
                      <div className="col-sm-12 text-left">
                        <h6 className="Tab_headings">
                          Conversion Rate Optimization
                        </h6>
                      </div>
                    </div>
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  className="col-sm-6 col-lg-2 col-md-6 Active_scroll_nav_button"
                  // smooth
                  spy
                  to="Tab_four"
                >
                  <li>
                    <div className="row">
                      <div className="col-sm-12 text-left">
                        <span className="White_text">04.</span>
                      </div>
                      <div className="col-sm-12 text-left">
                        <h6 className="Tab_headings">Social Media Marketing</h6>
                      </div>
                    </div>
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  className="col-sm-6 col-lg-2 col-md-6 Active_scroll_nav_button"
                  // smooth
                  spy
                  to="Tab_five"
                >
                  <li>
                    <div className="row">
                      <div className="col-sm-12 text-left">
                        <span className="White_text">05.</span>
                      </div>
                      <div className="col-sm-12 text-left">
                        <h6 className="Tab_headings">
                          Email Marketing Services
                        </h6>
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            </nav>
          </header>

          {/* tab 1 */}
          <div className="row scrolling_tab_row">
            <div className="col-sm-6">
              {/* tab-one text */}
              <div className="col-sm-12 vh100 d-dlex-and-center" id="Tab_one">
                <div className="tab_content_wrapper tab_one_ke_liye_top">
                  <div className="Icon_search_engine d-flex m-auto align-items-center">
                    <img
                      class="Tabing_icon"
                      src="./images/Tabiconseo.png"
                      alt="SEO"
                    />
                    <h4 className="allh4_text_sub_headings">
                      Search Engine Optimization (SEO) Services
                    </h4>
                  </div>
                  <p className="Tabing_paragraph">
                    Search Engine Optimization could be your most sustainable
                    and cost-effective source of traffic and revenue. That’ s
                    where we can help. SEO experts at GrowthJet leave no stone
                    unturned to ensure verifiable & trackable results for your
                    SEO campaign.
                  </p>
                  <ul class="our_focus_list_with_icon">
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        KPIs & ROI based reporting to ensure nothing is missed
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>100% trackable campaigns</em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>Top experts working on your project</em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>In depth research to create custom strategy</em>{" "}
                    </li>
                  </ul>
                </div>
              </div>

              {/* coll-two-text */}
              <div className="col-sm-12 vh100 d-dlex-and-center" id="Tab_two">
                <div className="tab_content_wrapper" id="hello">
                  <div className="Icon_search_engine d-flex m-auto align-items-center ">
                    <img
                      class="Tabing_icon"
                      src="./images/paypertabicon.png"
                      alt="SEO"
                    />
                    <h4 className="allh4_text_sub_headings">
                      Pay-Per-Click Advertising (PPC) Services
                    </h4>
                  </div>
                  <p className="Tabing_paragraph">
                    Pay-Per-Click or paid search advertising, is a great way to
                    get online sales, leads, brand awareness, app downloads, and
                    much more! The best part -You only pay when people click on
                    your ad. There's no charge for placement.
                  </p>
                  <ul class="our_focus_list_with_icon">
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>Data driven & AI based campaign optimization</em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Advanced tracking for peak performance & precision
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        100% transparent, research based, & tailored campaigns
                        for your brand
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Landing page optimization & detailed insights
                      </em>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* col-three-text */}
              <div className="col-sm-12 vh100 d-dlex-and-center" id="Tab_three">
                <div className="tab_content_wrapper">
                  <div className="Icon_search_engine d-flex m-auto align-items-center ">
                    <img
                      className="Tabing_icon"
                      src="./images/conservationratetabicon.png"
                      alt="SEO"
                    />
                    <h4 className="allh4_text_sub_headings">
                      Conversion Rate Optimization
                    </h4>
                  </div>
                  <p className="Tabing_paragraph">
                    Say hello to data-driven success, and goodbye to trial &
                    error, with our CRO services. True conversion optimization
                    is not about guesswork or running random tests. It’s a
                    process. CRO experts at GrowthJet go beyond the ordinary
                    measures, to optimise every step in your funnel to ensure
                    your conversions rates are as high as possible.
                  </p>
                  <ul class="our_focus_list_with_icon">
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Higher Return on Ad Spend & Lower Customer Acquisition
                        Cost
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Analytics health check & data driven insights
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>Arrest customer drop-offs & improve UX</em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Generate additional revenue for the same amount of money
                        spent on marketing
                      </em>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* col-four-text */}
              <div className="col-sm-12 vh100 d-dlex-and-center" id="Tab_four">
                <div className="tab_content_wrapper">
                  <div className="Icon_search_engine d-flex m-auto align-items-center ">
                    <img
                      class="Tabing_icon"
                      src="./images/socialmediaicontab.png"
                      alt="SEO"
                    />
                    <h4 className="allh4_text_sub_headings">
                      Social media Marketing
                    </h4>
                  </div>
                  <p className="Tabing_paragraph">
                    Grow your brand with the right social media strategy & care.
                    Our dedicated team of media buyers know exactly what needs
                    to be done to achieve the best ROI from Paid Social & PPC
                    campaigns. We get you best possible results from every penny
                    of your ad spend.
                  </p>
                  <ul class="our_focus_list_with_icon">
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>100% trackable & transparent reporting</em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Data driven insights for multi-platform success
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Campaign creation, management, & optimisation
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>Low CPA & High ROI</em>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* col-five-text */}
              <div className="col-sm-12 vh100 d-dlex-and-center" id="Tab_five">
                <div className="tab_content_wrapper">
                  <div className="Icon_search_engine d-flex m-auto align-items-center ">
                    <img
                      class="Tabing_icon"
                      src="./images/emailicon.jpg"
                      alt="SEO"
                    />
                    <h4 className="allh4_text_sub_headings">
                      Email Marketing Services
                    </h4>
                  </div>
                  <p className="Tabing_paragraph">
                    Email Marketing is a cheap, fast, and highly profitable tool
                    that is a must-have. It is the ultimate relationship &
                    brand-building tool. With over 4 billion of the world’s
                    population owning at least one email address, it’s
                    straightforward, easy-to-use and an excellent way of
                    reaching any customer.
                  </p>
                  <ul class="our_focus_list_with_icon">
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Nurture leads at every stage of the conversion funnel
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Complete strategy design, implementation, & optimization
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        KPI based tailored reporting for 100% transparency
                      </em>{" "}
                    </li>
                    <li>
                      <img src="./images/listtabicon.png"></img>
                      <em>
                        Analytics & automation to achieve explosive results
                      </em>{" "}
                    </li>
                  </ul>
                </div>
              </div>

              {/* row end div */}
            </div>

            {/* images section started */}

            <div className="col-sm-6">
              <div class="tabhead">
                <div class="tabcontent-box">
                  <div class="tabheading" id="heading1">
                    <div id="tab01" class="tab-contents_scroll">
                      <div className="row">
                        <div className="col-sm-12 vh100 d-dlex-and-center">
                          <div className="tab_content_wrapper_img">
                            <img
                              className="Tab_img"
                              src="./images/tab1.png"
                              alt="seo"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* tab 2 */}
                  <div class="tabheading" id="heading2">
                    <div id="tab02" class="tab-contents_scroll">
                      <div className="row">
                        <div className="col-sm-12 vh100 d-dlex-and-center">
                          <div className="tab_content_wrapper_img">
                            <img
                              className="Tab_img"
                              src="./images/tab2.png"
                              alt="Pay Per clicks"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* tab 3 */}
                  <div class="tabheading" id="heading3">
                    <div id="tab03" class="tab-contents_scroll">
                      <div className="row">
                        <div className="col-sm-12 vh100 d-dlex-and-center">
                          <div className="tab_content_wrapper_img">
                            <img
                              className="Tab_img"
                              src="./images/tab3.png"
                              alt="Conversion rate"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* tab 4 */}
                  <div class="tabheading" id="heading4">
                    <div id="tab04" class="tab-contents_scroll">
                      <div className="row">
                        <div className="col-sm-12 vh100 d-dlex-and-center">
                          <div className="tab_content_wrapper_img">
                            <img
                              className="Tab_img"
                              src="./images/tab4.png"
                              alt="social media icons"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* tab 5 */}
                  <div class="tabheading" id="heading5">
                    <div id="tab05" class="tab-contents_scroll">
                      <div className="row">
                        <div className="col-sm-12 vh100 d-dlex-and-center">
                          <div className="tab_content_wrapper_img">
                            <img
                              className="Tab_img"
                              src="./images/tab5.png"
                              alt="Email marketing"
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
};

export default FirstTabingScroll;
