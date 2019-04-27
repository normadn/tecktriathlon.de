import React from "react";
import SignUpForm from "./SignUpForm";
import ContentWrapper from "./ContentWrapper";

import circuits from "../assets/img/backgrounds/marathon.png";

const MailingListSignup = (props) => (
  <section
    css={{
      width: "100%",
      color: "white",
      minHeight: "230px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `url(${circuits}) no-repeat center center`,
      backgroundSize: "cover"
    }}
  >
  </section>
);

export default MailingListSignup;
