import React from "react";
import "../Testimonial/testimonials.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
  var settings = {
    centerMode: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 700,
    autoplay: true,
    // centerPadding: "220px",
    slidesToShow: 3.9,
    slidesToScroll: 0,
    pauseOnHover: false,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "35px",
        },
      },
      {
        breakpoint: 962,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "35px",
        },
      },
    ],
  };
  return (
    <>
      <div className="Testimonials_slider container-fluid">
        <div className="Testimoniales-heading text-center">
          <h2>People are talking</h2>
        </div>
        <Slider {...settings}>
          <div className="Test_slides">
            <div className="test_content">
              <p>
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit{" "}
              </p>
              <div className="Wrapper_Testimoanials_detal">
                <div className="testmonial_icon">
                  <img src="./images/test4.png" alt="testimonial1"></img>
                </div>
                <div className="d-flex align-items-center">
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
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit{" "}
              </p>
              <div className="Wrapper_Testimoanials_detal">
                <div className=" testmonial_icon">
                  <img src="./images/test.png" alt="testimonial1"></img>
                </div>
                <div className="d-flex align-items-center">
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
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit{" "}
              </p>
              <div className="Wrapper_Testimoanials_detal">
                <div className=" testmonial_icon">
                  <img src="./images/test2.png" alt="testimonial1"></img>
                </div>
                <div className="d-flex align-items-center">
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
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit{" "}
              </p>
              <div className="Wrapper_Testimoanials_detal">
                <div className=" testmonial_icon">
                  <img src="./images/test3.png" alt="testimonial1"></img>
                </div>
                <div className="d-flex align-items-center">
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
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit{" "}
              </p>
              <div className="Wrapper_Testimoanials_detal">
                <div className=" testmonial_icon">
                  <img src="./images/test4.png" alt="testimonial1"></img>
                </div>
                <div className="d-flex align-items-center">
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
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit{" "}
              </p>
              <div className="Wrapper_Testimoanials_detal">
                <div className="  testmonial_icon">
                  <img src="./images/test.png" alt="testimonial1"></img>
                </div>
                <div className="d-flex align-items-center">
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
        </Slider>
      </div>
    </>
  );
}

export default Testimonials;
