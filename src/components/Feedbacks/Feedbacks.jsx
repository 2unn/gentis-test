import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { quotesTag, gridDots } from "../../assets";
import { feedbacks } from "../../constants";

import "./feedbacks.css";

const Feedbacks = () => {
  const mainRef = useRef();
  const thumbsRef = useRef();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const mainOptions = {
    arrows: false,
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    height: "10rem",
  };

  const thumbsOptions = {
    arrows: false,
    type: "loop",
    perPage: 5,
    gap: 70,
    updateOnMove: true,
    autoWidth: true,
    pagination: false,
    focus: "center",
    isNavigation: true,
    breakpoints: {
      767: {
        perPage: 3,
        gap: 40,
      },
    },
  };

  return (
    <div className="feedbacks">
      <div className="container">
        <div>
          <img className="feedbacks__grid-dots" src={gridDots} alt="" />
          <img className="feedbacks__grid-dots" src={gridDots} alt="" />
        </div>
        <h2 className="h2">
          Let’s hear
          <br />
          What they says
        </h2>
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-7">
            <Splide
              className="feedback_main-slide"
              options={mainOptions}
              ref={mainRef}
              aria-label="Feedbacks"
            >
              {feedbacks.map((el, i) => (
                <SplideSlide key={i}>
                  <div className="text-md">{el.feedback}</div>
                </SplideSlide>
              ))}
            </Splide>
            <Splide
              className="feedback_thumb-slide"
              options={thumbsOptions}
              ref={thumbsRef}
              aria-label="Feedbacks"
            >
              {feedbacks.map((el, i) => (
                <SplideSlide key={i}>
                  <div className="feedback_thumb-slide-box">
                    <div className="feedback_thumb-slide-img-wrapper">
                      <img src={el.avatar} alt="" />
                    </div>
                    <div className="feedback_thumb-slide-name">
                      <h3 className="h3">{el.name}</h3>
                      <p>{el.position}</p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>

            <div className="feedback_main-slide-quotes-wrapper">
              <img
                className="feedback_main-slide-quotes"
                src={quotesTag}
                alt=""
              />
              <img
                className="feedback_main-slide-quotes"
                src={quotesTag}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
