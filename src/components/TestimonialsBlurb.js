import React from "react";

import leftArrow from "../assets/img/icons/leftArrow.svg";
import rightArrow from "../assets/img/icons/rightArrow.svg";

const TestimonialsBlurb = (props) => {
  const arrowStyle = {
    border: "none",
    height: "20px",
    width: "40px"
  };

  const blurbStyle = {
    lineHeight: "1.6",
    fontWeight: 500,
    fontSize: "20px"
  };

  return (
    <div
      css={{
        width: "50%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "right"
      }}
    >
      <div css={{ marginRight: "64px" }}>
        <h1 css={{ marginBottom: "30px" }}>Referenzen</h1>
        <p css={{ ...blurbStyle }}>{props.text}</p>
        <div css={{ marginTop: "65px" }}>
          <input
            onClick={() => props.prevTestimonial()}
            css={{
              ...arrowStyle,
              marginRight: "64px",
              opacity: props.firstTestimonial ? 0.2 : 1
            }}
            type="image"
            src={leftArrow}
            alt="Go to previous testimonial"
          />
          <input
            onClick={() => props.nextTestimonial()}
            css={{
              ...arrowStyle,
              opacity: props.lastTestimonial ? 0.2 : 1
            }}
            type="image"
            src={rightArrow}
            alt="Go to next testimonial"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBlurb;
