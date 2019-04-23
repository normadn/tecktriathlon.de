import React from "react";
import SignUpForm from "./SignUpForm";
import ContentWrapper from "./ContentWrapper";

import circuits from "../assets/img/backgrounds/circuitsGrey.png";

const MailingListSignup = (props) => (
  <section
    css={{
      width: "100%",
      color: "white",
      minHeight: "130px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `#11203F url(${circuits}) no-repeat center center`,
      backgroundSize: "cover"
    }}
  >
    <ContentWrapper>
      <p
        data-cy="mailing-list-cta"
        css={{
          fontWeight: 700,
          marginTop: "20px",
          marginBottom: "28px",
          fontSize: "22px",
          "@media screen and (max-width: 860px)": {
            fontSize: "16px"
          },
          lineHeight: "28px",
          textAlign: "center"
        }}
      >
        Teck
      </p>
    </ContentWrapper>
  </section>
);

export default MailingListSignup;
