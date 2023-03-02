import React from "react";
import { NavLink } from "react-router-dom";
import "./latestBlog.css";

// images

import latestBlog1 from "./latestblog1.png";
import latestBlog2 from "./latestblog2.png";
import latestBlog3 from "./latestblog3.png";
// bloicon2

import latestBlogicon1 from "./blogicon1.png";
import latestBlogicon2 from "./blogicon2.png";
import latestBlogicon3 from "./blogicon3.png";
// start
function Latestblog() {
  const latestblogsdata = [
    {
      id: 1,
      Image: latestBlog1,
      title: "11 Reasons To Hire A Mobile App Development Company",
      icon: latestBlogicon1,
      bloogername: "Regina Fox",
    },
    {
      id: 2,
      Image: latestBlog2,
      title: "Web App Vs. Mobile App Development - Which Should You Choose?",
      icon: latestBlogicon2,
      bloogername: "Regina Fox",
    },
    {
      id: 3,
      Image: latestBlog3,
      title: "How To Build An Outstanding Mobile App [Flutter Dev Tools]",
      icon: latestBlogicon3,
      bloogername: "Regina Fox",
    },
  ];
  return (
    <section className="Latest_blog">
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-5 col-sm-12 col-md-12 blog_content_heading">
            <h5 class="blue_text pb-3">Latest Blogs</h5>
            <h4 className="Scroll_tab_two_heading cpb-20">
              Sed ut perspiciatis unde omnis iste
            </h4>
            <p className="bloogs_paragraph_homepage">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam{" "}
            </p>

            <div className="Latest_blog_icons d-flex pb-5 pt-5">
              <i class="fa-solid fa-arrow-left Latest_blog_arrow"></i>
              <i
                class="fa-solid fa-arrow-right Latest_blog_arrow"
                aria-hidden="true"
              ></i>
            </div>
            <div className="Bloogs_button">
              <NavLink
                onClick={() => {
                  window.location.href = "#top";
                }}
                className="btn btn-dark"
                to="/AllBloogPage"
              >
                More Blogs
              </NavLink>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 col-md-12">
            {latestblogsdata.map((blog, i) => (
              <div className="Latest-BlogItems_row row">
                <div className="Latest_blogs-images col-sm-2">
                  <img src={blog.Image} alt="sgdki"></img>
                </div>

                <div className="Blog_contentss  align-items-center col-sm-10">
                  <h6 className="h6_heading">{blog.title}</h6>
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle  Latest_blog_img_icons"
                      src={blog.icon}
                      alt="imagryf"
                    ></img>
                    <span className="pl-3 latest_blog_span">
                      {blog.bloogername}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latestblog;
