import React from "react";
import "./tabbingtwomobile.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// images

import Planning from "./planning.png";
import Implement from "./implement.png";
import Optimize from "./optimize.png";

function Tabingtwomobile() {
  return (
    <section className="blogs_mobile">
      <div className="container">
        <div className="Tab_center_heading text-center">
          <h1 className="Scroll_tab_two_heading pb-4">
            How does the jet take off?
          </h1>
        </div>
        <Tabs>
          <TabList>
            <div className="Tab_Wraps">
              <Tab
                _active={{ border: "0px" }}
                _selected={{ color: "white", bg: "#A259FF" }}
              >
                Plan
              </Tab>
              <Tab _selected={{ color: "white", bg: "#A259FF" }}>Implement</Tab>
              <Tab _selected={{ color: "white", bg: "#A259FF" }}>Optimize</Tab>
            </div>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>
                {" "}
                <div className="col-sm-12" id="Tabbing_two_-one">
                  <div className="tab_content_wrapper  pt-4 ">
                    <div className="">
                      <h5 className="blue_text">Plan</h5>

                      <h4 className="allh4_text_sub_headings">
                        Sed ut perspiciatis unde omnis iste
                      </h4>
                    </div>
                    <p className="Allparagraph">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae abSed ut perspiciatis unde omnis
                      iste natus error sit voluptatem accusantium doloremque Sed
                      ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae abSed ut perspiciatis unde omnis iste
                      natus error sit voluptatem accusantium doloremque
                    </p>
                    <button class="btn btn-dark">Get Started</button>
                  </div>
                </div>
                <div className="col-sm-12">
                  <img
                    className="Mobile_tab_img"
                    id="tab_twoimg"
                    src={Planning}
                    alt="seo"
                  ></img>
                </div>
              </p>
            </TabPanel>
            <TabPanel>
              <div className="col-sm-12" id="Tabbing_two_-one">
                <div className="tab_content_wrapper  pt-4 ">
                  <div className="">
                    <h5 className="blue_text">Implement</h5>

                    <h4 className="allh4_text_sub_headings">
                      Sed ut perspiciatis unde omnis iste
                    </h4>
                  </div>
                  <p className="Allparagraph">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae abSed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae abSed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque
                  </p>
                  <button class="btn btn-dark">Get Started</button>
                </div>
              </div>
              <div className="col-sm-12">
                <img
                  className="Mobile_tab_img"
                  id="tab_twoimg"
                  src={Implement}
                  alt="seo"
                ></img>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="col-sm-12" id="Tabbing_two_-one">
                <div className="tab_content_wrapper  pt-4 ">
                  <div className="">
                    <h5 className="blue_text">Optimize</h5>

                    <h4 className="allh4_text_sub_headings">
                      Sed ut perspiciatis unde omnis iste
                    </h4>
                  </div>
                  <p className="Allparagraph">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae abSed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae abSed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque
                  </p>
                  <button class="btn btn-dark">Get Started</button>
                </div>
              </div>
              <div className="col-sm-12">
                <img
                  className="Mobile_tab_img"
                  id="tab_twoimg"
                  src={Optimize}
                  alt="seo"
                ></img>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  );
}

export default Tabingtwomobile;
