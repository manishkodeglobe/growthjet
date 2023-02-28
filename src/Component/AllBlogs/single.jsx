import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import bubble from "./skybubble.png";
import ctcRocket from "./flyingrocketsvg.svg";

import BloogArticle from "./Articales-blog";

const Single = () => {
  const { id } = useParams();

  const [showDataServer, SetShowSData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/blogData/${id}`).then((res) => {
      SetShowSData(res.data);
    });
  }, [id]);

  return (
    <div className="Blogger-page ">
      <div className="Blog-Page_single_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-4  single_blog_banner_wrapper">
              <div className="one_part_singleblog_banner">
                <img src={showDataServer.icon} alt="Blog-Banner"></img>
              </div>
            </div>
            <div className="col-sm-8 container_flex_single_blog">
              <div className="Blog-banner-headings">
                <h4>
                  <span>{showDataServer.field}</span>-
                  {showDataServer.readingtime}
                </h4>
                <h1>{showDataServer.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* text-section */}
      <div className="Bloging-text-section ">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="SideBar-Section">
                <div className="Author-names Author-names-date-social-headings">
                  <h5>Author</h5>
                  <p>{showDataServer.author}</p>
                </div>
                <div className="Date Author-names-date-social-headings">
                  <h5>Date</h5>
                  <p>{showDataServer.date}</p>
                </div>
                <div className="Categary Author-names-date-social-headings">
                  <h5>Category</h5>
                  <p>{showDataServer.field}</p>
                </div>
                <div className="Share-withSocial-media Author-names-date-social-headings">
                  <h5>Share</h5>
                  <div className="icons">
                    <p>f</p>
                    <p>in</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="paragraphs-Blog-Text">
                <em>
                  Do you want to learn everything about SEO? Before I teach you
                  how it works and how to do it, let’s first go over the
                  definition of SEO, and then we will dive into how SEO works.
                </em>
                <p>
                  The ultimate goal of this article is to help you understand
                  the ins and outs of search so you can optimize your content to
                  rank higher on Google and get more eyeballs on your posts.
                </p>
                <h3>Core Elements of SEO: On-Page SEO and Off-Page SEO</h3>
                <p>
                  On-page SEO is about building content to improve your
                  rankings. This comes down to incorporating keywords into your
                  pages and content, writing high-quality content regularly,
                  making sure your metatags and titles are keyword-rich and
                  well-written, among other factors.
                </p>
                <p>
                  Off-page SEO is the optimization happening off of your website
                  itself, such as earning backlinks. This part of the equation
                  involves building relationships and creating content people
                  want to share. Though it takes a lot of legwork, it’s integral
                  to SEO success.{" "}
                </p>

                <div className="YelloCtc">
                  <h1>
                    If we don’t give you at least a 200% RETURN on your
                    marketing spend, we work for free.*
                  </h1>
                  <p>
                    Once you experience the GrowthJet magic, you’ll never work
                    with another agency.
                  </p>
                  <button className="btn btn-dark">Get Started</button>
                </div>
                <h3>SEO Strategies: Black Hat Vs. White Hat</h3>
                <p>
                  I’ve always played the long-term entrepreneurial game, and I
                  believe it’s the way to go. However, this isn’t the case with
                  everyone. Some people would rather take the quick gains and
                  move onto something else.
                </p>
                <p>
                  When it comes to SEO, going for quick gains is often referred
                  to as “black hat SEO.” People who implement black hat SEO tend
                  to use sneaky tactics like keyword stuffing and link scraping
                  to rank quickly. It might work for the short-term and get you
                  some traffic to your site, but after a while, Google ends up
                  penalizing and even blacklisting your site so you’ll never
                  rank.
                </p>
                <p>
                  On the other hand, white hat SEO is the way to build a
                  sustainable online business. If you do SEO this way, you’ll
                  focus on your human audience.
                </p>
                <p>
                  You’ll try to give them the best content possible and make it
                  easily accessible by playing according to the search engine’s
                  rules.
                </p>
                <p>
                  <strong>
                    <b>Duplicate content:</b>{" "}
                  </strong>
                  When someone tries to rank for a certain keyword, they might
                  duplicate content on their site to try and get that keyword in
                  their text over and over again. Google penalizes sites that do
                  this.
                </p>
                <p>
                  <strong>
                    <b>Invisible text and keyword stuffing:</b>
                  </strong>{" "}
                  Years ago, a black hat strategy was to include a ton of
                  keywords at the bottom of your articles but make them the same
                  color as the background. This strategy will get you
                  blacklisted very quickly. The same goes for stuffing in
                  keywords where they don’t belong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Blue-Ctc">
        <div className="container Blog-ctwrapper">
          <h1 className="Blogg_ctc-heading">
            Let’s Check!<br></br> Your Website Performance
          </h1>
          <div class="ctc_form">
            <form class="form-inline blog_single_form_flex">
              <div class="form-group mb-2">
                <input
                  type="password"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group margin_for_email   mb-2">
                <input
                  type="Email"
                  class="form-control"
                  id="Email"
                  placeholder="Email"
                />
              </div>
              <button type="submit" class="btn btn-dark mb-2">
                Submit
              </button>
            </form>
            <div className="Plan-image">
              <img src={ctcRocket} alt="rocketsvgs" />
            </div>
          </div>
        </div>
        <div className="cloud-image">
          <img src={bubble} alt="bubble" />
        </div>
      </div>
      <BloogArticle />
    </div>
  );
};

export default Single;
