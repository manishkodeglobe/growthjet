import React from "react";
import "./owl.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Owl = () => {
  var settings = {
    autoplay: true,
    loop: true,
    center: true,
    items: 4,

    dots: false,
    margin: 10,
    slideTransition: "linear",
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1.5,
        center: true,
      },

      600: {
        items: 2,
        center: true,
      },

      1024: {
        center: true,
        items: 3,
      },

      1366: {
        items: 4,
        center: true,
      },
    },
  };

  return (
    <div className="Testimonials_slider container-fluid">
      <div className="Testimoniales-heading text-center">
        <h2>People are talking</h2>
      </div>
      <OwlCarousel {...settings} className="owl-theme" loop margin={10} nav>
        <div className="Test_slides">
          <div className="test_content">
            <p>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit{" "}
            </p>
            <div className="Wrapper_Testimoanials_detal">
              <div className="testmonial_icon">
                <img src="./images/test4.png" alt="testimonial1"></img>
              </div>
              <div className="d-flex align-items-center author_annd_field">
                <div>
                  <div className="team_member_names">
                    <p>1Jonathan Taylor</p>
                  </div>
                  <div className="team_member_field">
                    <p>CEO at Creativex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Test_slides">
          <div className="test_content">
            <p>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit{" "}
            </p>
            <div className="Wrapper_Testimoanials_detal">
              <div className=" testmonial_icon">
                <img src="./images/test.png" alt="testimonial1"></img>
              </div>
              <div className="d-flex align-items-center author_annd_field">
                {" "}
                <div>
                  <div className="team_member_names">
                    <p>2Jonathan Taylor</p>
                  </div>
                  <div className="team_member_field">
                    <p>CEO at Creativex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Test_slides">
          <div className="test_content">
            <p>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit{" "}
            </p>
            <div className="Wrapper_Testimoanials_detal">
              <div className=" testmonial_icon">
                <img src="./images/test2.png" alt="testimonial1"></img>
              </div>
              <div className="d-flex align-items-center author_annd_field">
                {" "}
                <div>
                  <div className="team_member_names">
                    <p>3Jonathan Taylor</p>
                  </div>
                  <div className="team_member_field">
                    <p>CEO at Creativex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Test_slides">
          <div className="test_content">
            <p>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit{" "}
            </p>
            <div className="Wrapper_Testimoanials_detal">
              <div className=" testmonial_icon">
                <img src="./images/test3.png" alt="testimonial1"></img>
              </div>
              <div className="d-flex align-items-center author_annd_field">
                <div>
                  <div className="team_member_names">
                    <p>4Jonathan Taylor</p>
                  </div>
                  <div className="team_member_field">
                    <p>CEO at Creativex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Test_slides">
          <div className="test_content">
            <p>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit{" "}
            </p>
            <div className="Wrapper_Testimoanials_detal">
              <div className=" testmonial_icon">
                <img src="./images/test4.png" alt="testimonial1"></img>
              </div>
              <div className="d-flex align-items-center author_annd_field">
                <div>
                  <div className="team_member_names">
                    <p>5Jonathan Taylor</p>
                  </div>
                  <div className="team_member_field">
                    <p>CEO at Creativex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Test_slides">
          <div className="test_content">
            <p>
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit{" "}
            </p>
            <div className="Wrapper_Testimoanials_detal">
              <div className="testmonial_icon">
                <img src="./images/test.png" alt="testimonial1"></img>
              </div>
              <div className="d-flex align-items-center author_annd_field">
                <div>
                  <div className="team_member_names">
                    <p>6Jonathan Taylor</p>
                  </div>
                  <div className="team_member_field">
                    <p>CEO at Creativex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      ;
    </div>
  );
};

export default Owl;
