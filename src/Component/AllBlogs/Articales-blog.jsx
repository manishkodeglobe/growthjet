import "./allBlogger.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function BloogArticle() {
  const BllogArticleHeading = "Related Articles";

  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/blogData?_page=1&_limit=3").then((res) => {
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
    <div className="Articles">
      <div className="container">
        <div className="Articles-heading text-center">
          <h2>{BllogArticleHeading}</h2>
        </div>
        <div className="Article-div">
          <div className="blogiing_posts">{displayBlogData}</div>
        </div>
      </div>
    </div>
  );
}

export default BloogArticle;
