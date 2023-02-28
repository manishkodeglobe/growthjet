import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./banner.css";
import Lottie from "react-lottie";
import Rocect from "../lottie/rc2.json";
import Ppc from "../lottie/ppc.json";
import Cro from "../lottie/cro.json";
import scoalMedia from "../lottie/socialmediamarketing.json";
import EmailMarket from "../lottie/emailMarketing.json";

function Banner() {
  useEffect(() => {
    //    gsap.fromTo(".can", 3, {keyframes:{ x:"random([20, -20, 15, -15])", y:"random([20, -20, 15, -15])"},ease:Power1.easeInOut},{y:"random([10, -10, 15, -15])",repeat:-1,yoyo:true});

    // gsap.to(".can", {
    //   keyframes: {
    //     "0%": { x: -0, y: 10, repeat: -1, ease: "power" },
    //     "75%": { x: 20, y: 20, ease: "power", repeat: -1, yoyo: true },
    //     "100%": {
    //       x: 5,
    //       y: -5,
    //       ease: "none",
    //       repeat: -1,
    //       yoyo: true,
    //       rotation: 0,
    //     },
    //   },
    //   duration: 5,
    // });

    // gsap.from(".can", {
    //   keyframes: [
    //     {
    //       x: -5,
    //       duration: 4,
    //       repeat: -1,
    //       ease: "none",
    //       yoyo: true,
    //       rotation: 30,
    //     },
    //     {
    //       y: -5,
    //       duration: 5,
    //       repeat: -1,
    //       ease: "none",
    //       yoyo: true,
    //       rotation: -20,
    //     },
    //     {
    //       duration: 4,
    //       ease: "none",
    //       yoyo: true,
    //       delay: -0.25,
    //       repeat: -1,
    //       rotation: 45,
    //     },
    //   ],
    // });
    // animation two
    gsap.to(".cans", {
      keyframes: {
        "0%": { x: -5, y: -10, repeat: -1, ease: "power" },
        "75%": { x: 15, y: 15, ease: "power", repeat: -1, yoyo: true },
        "100%": {
          x: 8,
          y: -5,
          ease: "none",
          repeat: -1,
          yoyo: true,
          rotation: 0,
        },
      },
      duration: 4,
    });

    gsap.from(".cans", {
      keyframes: [
        {
          x: -8,
          duration: 4,
          repeat: -1,
          ease: "none",
          yoyo: true,
          rotation: 20,
        },
        {
          y: -7,
          duration: 5,
          repeat: -1,
          ease: "none",
          yoyo: true,
          rotation: -30,
        },
        {
          duration: 3,
          ease: "none",
          yoyo: true,
          delay: -0.25,
          repeat: -1,
          rotation: 65,
        },
      ],
    });
  });

  // banner Heading Animation code
  let bannerTxt = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      bannerTxt,
      { y: 0 },
      {
        y: -10,
        autoAlpha: 1,
        duration: 1.5,
        ease: "power1.out",
        delay: 0.3,
        scrollTrigger: { yoyo: true },
      }
    );
  }, []);
  //  banner paragraph animation code
  let bannerPara = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      bannerPara,
      { y: 0 },
      { autoAlpha: 1, duration: 1, ease: "power1.in", delay: 0.5 }
    );
  });
  // banner button animation code
  let bannerBtn = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      bannerBtn,
      { y: 0 },
      { autoAlpha: 1, duration: 0.5, ease: "power1.in", delay: 0.9 }
    );
  });

  // use opacity fade effect

  let bannerRow = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".banner_mini_icon_effect",
      {},
      { autoAlpha: 1, delay: 1, stagger: 0.3, duration: 2 }
    );
  });

  // mini icons
  let MiniIcons = useRef(null);
  useEffect(() => {
    gsap.utils.toArray(".banner_sub_img").forEach((MiniIcons) => {
      let hover = gsap.fromTo(
        MiniIcons,
        {},
        { paused: true, y: -20, borderColor: "#A259FF" }
      );
      MiniIcons.addEventListener("mouseenter", () => hover.play());
      MiniIcons.addEventListener("mouseleave", () => hover.reverse());
    });
  });

  let rockets = {
    loop: true,
    autoplay: true,
    animationData: Rocect,
  };
  let ppc = {
    loop: true,
    autoplay: true,

    animationData: Ppc,
  };
  let Convertionrate = {
    loop: true,
    autoplay: true,

    animationData: Cro,
  };
  let SocialmediaMarketing = {
    loop: true,
    autoplay: true,

    animationData: scoalMedia,
  };

  let emailmarketss = {
    loop: true,
    autoplay: true,

    animationData: EmailMarket,
  };

  return (
    <section className="Banner_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="Banner_heading">
              Put Your Brand's<br></br> Growth on Autopilot{" "}
            </h1>
          </div>

          <div className="col-sm-12 text-center">
            <p
              ref={(el) => {
                bannerPara = el;
              }}
              className="banner_paragraph"
            >
              GrowthJet is a on-stop platform for all your online marketing
              requirements. We combine strategy, expertise, and Jet Fuel care -
              to design bespoke marketing solutions for your brand . Give your
              brand the boost it deserves.{" "}
            </p>
          </div>

          <div className="col-sm-12 text-center btn_deault">
            <button
              ref={(el) => {
                bannerBtn = el;
              }}
              className="bg-dark ml-auto text-white rounded download_btn_nav "
            >
              Get Started
            </button>
          </div>
        </div>
        {/* row two */}

        <div className="row banner_icons_grid_system">
          <div className=" col  Icon_one_position">
            <div className="banner_lottie_title_wrapper icon_flex_banner mob_round_1_icon">
              <div className="can">
                <Lottie options={rockets} height={70} width={70} />
              </div>
              <div className="banner_icon_headings">
                <h4 className="banner_subtitles">Search Engine optimization</h4>
              </div>
            </div>
          </div>

          <div className=" col icon_flex_banner Icon_two_position">
            <div className="banner_lottie_title_wrapper icon_flex_banner mob_round_2_icon">
              <div className="can">
                <Lottie options={Convertionrate} height={70} width={70} />
              </div>
              <div className="banner_icon_headings">
                <h4 className="banner_subtitles">
                  Conversion rate optimization{" "}
                </h4>
              </div>
            </div>
          </div>

          <div className="  col icon_flex_banner justify-content-center Icon_four_position">
            <div className="banner_lottie_title_wrapper icon_flex_banner mob_round_3_icon">
              <div className="can">
                <Lottie options={emailmarketss} height={70} width={70} />
              </div>
              <div className="banner_icon_headings">
                <h4 className="banner_subtitles">
                  Email Marketing<br></br> Services
                </h4>
              </div>
            </div>
          </div>

          <div className=" col icon_flex_banner Icon_three_position">
            <div className="banner_lottie_title_wrapper icon_flex_banner mob_round_4_icon">
              <div className="can">
                <Lottie options={SocialmediaMarketing} height={70} width={70} />
              </div>
              <div className="banner_icon_headings">
                <h4 className="banner_subtitles">Social Media Marketing</h4>
              </div>
            </div>
          </div>

          <div
            className="col icon_flex_banner Icon_one_position "
            ref={(el) => {
              bannerRow = el;
            }}
          >
            {" "}
            <div className="banner_lottie_title_wrapper icon_flex_banner mob_round_5_icon">
              <div className="can">
                <Lottie options={ppc} height={70} width={70} />
              </div>
              <div className="banner_icon_headings">
                <h4 className="banner_subtitles padding_last_banner_icon">
                  Pay Per Click (paid Ads)
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
