import React from "react";

const TestimonialsBlurbCompressed = (props) => {
  return (
    <div css={{ textAlign: "center", marginBottom: "10px" }}>
      <h1 css={{ marginTop: "32px", marginBottom: "16px" }}>
        Referenzen
      </h1>
      <p
        css={{
          fontSize: "20px",
          fontWeight: 500,
          "@media(max-width: 600px)": {
            fontSize: "18px"
          }
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default TestimonialsBlurbCompressed;
