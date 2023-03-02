import React from "react";
import VerticleSlider from "../VerticleSlider/verticleslider";
import Logoslider from "../logoslider/LogoSlider";
import Lottie from "react-lottie";
import Rocect from "../lottie/rc2.json";
import Ppc from "../lottie/ppc.json";
import Cro from "../lottie/cro.json";
import scoalMedia from "../lottie/social.json";
import EmailMarket from "../lottie/emailMarketing.json";
import "./mobtabScroll.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AiFillCheckCircle } from "react-icons/ai";
// all images
import seoImage from "./seobig.png";
import ppcbig from "./ppcbig.png";
import emailMarketingBig from "./emailBigs.png";
import socialMediaBig from "./scoialmedia.png";
import crobig from "./crobig.png";

const TabScrolonmobile = () => {
  let rockets = {
    loop: true,
    autoplay: true,
    animationData: Rocect,
  };
  let ppc = {
    loop: true,
    autoplay: true,

    animationData: Ppc,
  };
  let Convertionrate = {
    loop: true,
    autoplay: true,

    animationData: Cro,
  };
  let SocialmediaMarketing = {
    loop: true,
    autoplay: true,

    animationData: scoalMedia,
  };

  let emailmarketss = {
    loop: true,
    autoplay: true,
    animationData: EmailMarket,
  };
  return (
    <section className="blogs_mobile">
      <div className="container">
        <Logoslider />
        <VerticleSlider />
        <Tabs>
          <TabList>
            <Tab>
              <div className=" tab-a col-sm-4 p-0 " data-id="tabmob1">
                <h6 class="Tab_mob_headings Tab_headings">
                  Search Engine Optimization
                </h6>
              </div>
            </Tab>
            <Tab>
              <div className=" tab-a col-sm-4 p-0    " data-id="tabmob2">
                <h6 class="Tab_mob_headings Tab_headings">
                  Pay Per Click(Pais Ads)
                </h6>
              </div>
            </Tab>

            <Tab>
              <div className=" tab-a col-sm-4 p-0    " data-id="tabmob3">
                <h6 class="Tab_mob_headings Tab_headings">
                  Conversion Rate Optimization
                </h6>
              </div>
            </Tab>

            <Tab>
              <div className=" tab-a col-sm-6 p-0   " data-id="tabmob4">
                <h6 class="Tab_mob_headings Tab_headings">
                  Social Media Marketing
                </h6>
              </div>
            </Tab>

            <Tab>
              <div className=" tab-a  col-sm-6 p-0 " data-id="tabmob5">
                <h6 class="Tab_mob_headings Tab_headings">
                  Email Marketing Services
                </h6>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <div class="tab tab-active" data-id="tabmob1">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="" id="tabmob1">
                    <div className="tab_content_wrapper tab_one_ke_liye_top">
                      <div className="Icon_search_engine d-flex align-items-center">
                        <Lottie options={rockets} height={100} width={100} />
                        <h4 className="allh4_text_sub_headings">
                          Search Engine Optimization (SEO) Services
                        </h4>
                      </div>
                      <p className="Allparagraph p-0">
                        Search Engine Optimization could be your most
                        sustainable and cost-effective source of traffic and
                        revenue. That’ s where we can help. SEO experts at
                        GrowthJet leave no stone unturned to ensure verifiable &
                        trackable results for your SEO campaign.
                      </p>
                      <ul class="our_focus_list_with_icon">
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            KPIs & ROI based reporting to ensure nothing is
                            missed
                          </li>
                        </div>
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>100% trackable campaigns</li>
                        </div>
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>Top experts working on your project</li>
                        </div>
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>In depth research to create custom strategy</li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <img
                    class="Mobile_tab_img"
                    src={seoImage}
                    alt="Email marketing"
                  />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div class="tab tab-active" data-id="tabmob1">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="" id="tabmob1">
                    <div className="tab_content_wrapper tab_one_ke_liye_top">
                      <div className="Icon_search_engine d-flex align-items-center">
                        <Lottie options={ppc} height={100} width={100} />
                        <h4 className="allh4_text_sub_headings">
                          Pay-Per-Click Advertising (PPC) Services
                        </h4>
                      </div>
                      <p className="Allparagraph p-0">
                        Pay-Per-Click or paid search advertising, is a great way
                        to get online sales, leads, brand awareness, app
                        downloads, and much more! The best part -You only pay
                        when people click on your ad. There's no charge for
                        placement.
                      </p>
                      <ul class="our_focus_list_with_icon">
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>Data driven & AI based campaign optimization</li>
                        </div>
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            Advanced tracking for peak performance & precision
                          </li>
                        </div>
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            100% transparent, research based, & tailored
                            campaigns for your brand
                          </li>
                        </div>
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>Landing page optimization & detailed insights</li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <img
                    class="Mobile_tab_img"
                    src={ppcbig}
                    alt="Email marketing"
                  />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div class="tab tab-active" data-id="tabmob1">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="" id="tabmob1">
                    <div className="tab_content_wrapper tab_one_ke_liye_top">
                      <div className="Icon_search_engine d-flex align-items-center">
                        <Lottie
                          options={Convertionrate}
                          height={100}
                          width={100}
                        />
                        <h4 className="allh4_text_sub_headings">
                          Conversion Rate Optimization
                        </h4>
                      </div>
                      <p className="Allparagraph p-0">
                        Say hello to data-driven success, and goodbye to trial &
                        error, with our CRO services. True conversion
                        optimization is not about guesswork or running random
                        tests. It’s a process. CRO experts at GrowthJet go
                        beyond the ordinary measures, to optimise every step in
                        your funnel to ensure your conversions rates are as high
                        as possible.
                      </p>
                      <ul class="our_focus_list_with_icon">
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            Higher Return on Ad Spend & Lower Customer
                            Acquisition
                          </li>
                        </div>
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>Analytics health check & data driven insights</li>
                        </div>{" "}
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>Arrest customer drop-offs & improve UX</li>
                        </div>{" "}
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            Generate additional revenue for the same amount of
                            money spent on marketing
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <img
                    class="Mobile_tab_img"
                    src={crobig}
                    alt="Email marketing"
                  />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div class="tab tab-active" data-id="tabmob1">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="" id="tabmob1">
                    <div className="tab_content_wrapper tab_one_ke_liye_top">
                      <div className="Icon_search_engine d-flex align-items-center">
                        <Lottie
                          options={SocialmediaMarketing}
                          height={100}
                          width={100}
                        />
                        <h4 className="allh4_text_sub_headings">
                          Social media Marketing
                        </h4>
                      </div>
                      <p className="Allparagraph p-0">
                        Grow your brand with the right social media strategy &
                        care. Our dedicated team of media buyers know exactly
                        what needs to be done to achieve the best ROI from Paid
                        Social & PPC campaigns. We get you best possible results
                        from every penny of your ad spend.
                      </p>
                      <ul class="our_focus_list_with_icon">
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>100% trackable & transparent reporting</li>
                        </div>{" "}
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            Data driven insights for multi-platform success
                          </li>
                        </div>
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>Campaign creation, management, & optimisation</li>
                        </div>{" "}
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>Low CPA & High ROI</li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <img
                    class="Mobile_tab_img"
                    src={socialMediaBig}
                    alt="Email marketing"
                  />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div class="tab tab-active" data-id="tabmob1">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="" id="tabmob1">
                    <div className="tab_content_wrapper tab_one_ke_liye_top">
                      <div className="Icon_search_engine d-flex align-items-center">
                        <Lottie
                          options={SocialmediaMarketing}
                          height={100}
                          width={100}
                        />
                        <h4 className="allh4_text_sub_headings">
                          Email Marketing Services
                        </h4>
                      </div>
                      <p className="Allparagraph p-0">
                        Email Marketing is a cheap, fast, and highly profitable
                        tool that is a must-have. It is the ultimate
                        relationship & brand-building tool. With over 4 billion
                        of the world’s population owning at least one email
                        address, it’s straightforward, easy-to-use and an
                        excellent way of reaching any customer.
                      </p>
                      <ul class="our_focus_list_with_icon">
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            Nurture leads at every stage of the conversion
                            funnel
                          </li>
                        </div>{" "}
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            Complete strategy design, implementation, &
                            optimization
                          </li>
                        </div>{" "}
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            KPI based tailored reporting for 100% transparency
                          </li>
                        </div>{" "}
                        <div className="d-flex   check_icons_li">
                          <AiFillCheckCircle />
                          <li>
                            Analytics & automation to achieve explosive results
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <img
                    className="Mobile_tab_img"
                    src={emailMarketingBig}
                    alt="tab-1"
                  ></img>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default TabScrolonmobile;
