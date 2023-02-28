// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./verticleslider.css";

function VerticleSlider() {
  var settings = {
    autoplay: true,
    vertical: true,
    infinite: true,

    slidesToShow: 1,
    delay: 100,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 2000,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="verticle_slider_wrapper">
        <div className="container">
          <div className="Verticle_slide_Heading text-center">
            <h2>Our Focus?</h2>
          </div>
          <div className="slick_slides_wrap_with_color">
            <Slider {...settings}>
              <div className="slick_slides_verticle">
                <h3>MORE SALES</h3>
              </div>
              <div className="slick_slides_verticle">
                <h3>MORE LEADS</h3>
              </div>
              <div className="slick_slides_verticle">
                <h3>LOW CPA</h3>
              </div>
              <div className="slick_slides_verticle">
                <h3>HAPPY CLIENT</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticleSlider;
