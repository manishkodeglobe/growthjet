import Footer from "../Component/Footer/Footer";
import Header from "../Component/header/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const ErrorPage = () => {
  useEffect(() => {
    function playvideos() {
      const videos = document.getElementById("backgroundvideo");
      videos.play();
    }
    playvideos();
    window.addEventListener("onload", playvideos);
  });

  return (
    <>
      <Header />

      <div className="container-fluid m-0 p-0 errorsection">
        <div className="container Error_sectionWrapper">
          <div className="ErrorPage_content">
            <div className="Error_Messeage">
              <span>4</span>
              <span>0</span>
              <span>4</span>
              <p className="Allparagraph p-0 pb-5">
                The page You Requested Could Not Found!<br></br>Please Click
                This Button For open HomePage!
              </p>

              <Link to="/HomePage" type="button" className="Error_btn">
                Click
              </Link>
            </div>
          </div>
        </div>
        <div className="ErrorVideo">
          <video id="backgroundvideo" loop autoplay width="100%" height="100%">
            <source src="./Video/ErrorVideo2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;
