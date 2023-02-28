import React, { useState } from "react";
import "./SimpleTabbing.css";
import ReactReadMoreReadLess from "../../../node_modules/react-read-more-read-less/build/index";

const SimpleTabbing = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      image: "./images/Tabwithhover1.jpg",
      title: "Peak performance, every time",
      content:
        "Industry experts filtered down to the top 1%, to ensure that your project is always in the right hands",
    },
    {
      id: 2,
      image: "./images/Tabwithhover2.jpg",
      title: "Fastest way to scale your brand's growth",
      content:
        "Your one stop solution for all your growth related requirements. All campaigns are 100% trackable, transparent, and ROI focused. ",
    },
    {
      id: 3,
      image: "./images/Tabwithhover3.jpg",
      title: "Seamless delivery powered by technology",
      content:
        "In depth research, continuous optimization, and bespoke solutions that actually work. Say goodbye to old-fashioned briefings, campaigns, and processes which yielded no or next-to-no results. With GrowthJet, Experience the power of performance marketing.",
    },
  ];

  const handleTabClick = (e) => {
    if (e.target.id !== "") {
      setCurrentTab(e.target.id);
    }
  };

  function changeState(id) {
    setCurrentTab(id);
  }

  return (
    <div className="Pure_Main_tabbing">
      <div className="container">
        <div className="center_headings text-center pb-5">
          <h2 className="Scroll_tab_two_heading">
            Why 1000+ brands trust their<br></br> marketing needs
          </h2>
        </div>
        <div className="Tabbing_Wrapper_Hover">
          <div className="row simple_tabbing_row_mob">
            <div className="col-sm-12 col-lg-6 col-md-12">
              {" "}
              <div className="content_tabbing">
                {tabs.map((tab, i) => (
                  <div key={i}>
                    {console.log(currentTab, tab.id)}

                    {currentTab == tab.id && (
                      <div className="Card_tabbing_image">
                        <img src={tab.image} alt="Card_tabbing"></img>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-12 tabbing_cards">
              {" "}
              <div className="tabs_new">
                {tabs.map((tab, i) => (
                  <div
                    className="card tab_content_manage "
                    onMouseOver={handleTabClick}
                    onClick={() => changeState(tab.id)}
                    key={i}
                    id={tab.id}
                    disabled={currentTab === `${tab.id}`}
                  >
                    <h4 className="Tabbing_three_simple_heading">
                      {tab.title}
                    </h4>
                    <p className="Tabing_two_description">
                      {" "}
                      <ReactReadMoreReadLess
                        charLimit={105}
                        readMoreText={"more"}
                        readLessText={"less"}
                      >
                        {tab.content}
                      </ReactReadMoreReadLess>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTabbing;
