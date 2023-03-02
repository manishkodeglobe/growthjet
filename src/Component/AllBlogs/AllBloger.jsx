import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./allBlogger.css";
// images
import bloogBanner from "./bloogBanner.png";

function AllBloger() {
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/blogData?_page=1&_limit=9").then((res) => {
      setCurrentPageData(res.data);
    });
  }, []);

  const displayBlogData = currentPageData.map((user, index) => {
    return (
      <>
        <div
          className="blog_posts"
          key={index}
          onClick={() => {
            window.location.href = "#top";
          }}
        >
          <div className="post_wrap">
            <img src={user.icon} alt="blogimagess"></img>
            <div className="Alllog_content">
              <div className="wrappwe">
                <div className=" post_blue_text">
                  <p>{user.field} </p>
                </div>
                <div className="  post_blue_textpost_readingtime">
                  <p> - {user.readingtime}</p>
                </div>
              </div>
              <NavLink
                to={`/single/${user.id}`}
                style={{ textDecoration: "none" }}
              >
                <h2>{user.title}</h2>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="All_Blogs_section">
      <div className="Blog_page_title">
        <h2>Blogs</h2>
      </div>

      <div className="blog_banner">
        <div className="container position_change_on_banner">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center blog_img_banner_mob">
              <img src={bloogBanner} alt="bloogpagebanner"></img>
            </div>
            <div className="col-lg-6">
              <div className="row date_and_author_name_all_blog">
                <div className="col-sm-6 blog_data_banner_text">
                  <p>Tuesday 13 May, 2022</p>
                </div>
                <div className="col-sm-6 blog_data_banner_text">
                  <p>By John Hunau Deo</p>
                </div>
              </div>
              <div className="Single_bloog_title ">
                <h2>How seo important in business growth</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="reed_more_bloog_all">
                  <button className="btn btn-dark">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bloogs */}
      <div className="container">
        <div className="blog_posts">
          <div className="blog_post_title">
            <h2>All Blog Post</h2>
          </div>
          <div className="blogiing_posts">{displayBlogData}</div>

          {/* <SweetPagination
            currentPageData={setCurrentPageData}
            getData={blogData}
            dataPerPage={6}
            getStyle={"style-2"}
            navigation={true}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default AllBloger;
