import React from "react";
import SignUpForm from "./SignUpForm";
import ContentWrapper from "./ContentWrapper";

import circuits from "../assets/img/backgrounds/cover.svg";

const MailingListSignup = (props) => (
  <section
    css={{
      width: "100%",
      color: "white",
      minHeight: "340px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `url(${circuits}) no-repeat center center`,
      backgroundSize: "100% auto",
      "@media(max-width: 840px)": {
        minHeight: "150px",
        backgroundSize: "cover",
      }
    }}
  >
  </section>
);

export default MailingListSignup;
