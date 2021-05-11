import React from "react";
import SignUpForm from "./SignUpForm";
import ContentWrapper from "./ContentWrapper";

import circuits from "../assets/img/backgrounds/cover.svg";

const MailingListSignup = (props) => (
  <section
    css={{
      width: "100%",
      color: "white",
      minHeight: "280px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `url(${circuits}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 840px)": {
        minHeight: "150px"
      }
    }}
  >
  </section>
);

export default MailingListSignup;
