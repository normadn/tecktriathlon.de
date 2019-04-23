import React from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import landingImg from "../assets/img/logo/logo-no-text.svg";
import logo from "../assets/img/logo/logo-no-text.svg";
import word from "../assets/img/logo/amsel-tech-word.svg";
import backgroundCubes from "../assets/img/backgrounds/backgroundCubes.svg";

const applyButtonCSS = {
  margin: "25px 0 100px 0",
  "@media(max-width: 820px)": {
    margin: "30px 0 45px auto"
  }
};

const Landing = () => (
  <div
    id=""
    css={{
      width: "100%",
      background: `url(${backgroundCubes}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 600px)": {
        minHeight: "600px"
      }
    }}
  >
    <Header standaloneVersion={false} />
    <ContentWrapper>
      <section
        css={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          "@media(max-width: 820px)": {
            textAlign: "center",
            display: "block"
          }
        }}
      >
        <div
          css={{
            "@media(min-width: 1200px)": {
              paddingRight: "50px",
              paddingTop: "115px"
            },
            "@media (min-width: 821px) and (max-width: 1199px)": {
              paddingRight: "50px",
              paddingTop: "115px"
            },
            "@media (max-width: 820px)": {
              paddingTop: "80px"
            }
          }}
        >
          <img
            src={landingImg}
            css={{
              width: "75vw",
              maxWidth: "350px",
              "@media(min-width: 821px)": { display: "none" }
            }}
            alt="Illustration"
          />
          <br />
          <img
            data-cy="amsel-wordmark"
            src={word}
            css={{
              paddingTop: "40px",
              paddingBottom: "18px",
              width: "100vw",
              maxWidth: "300px",
              "@media(max-width: 820px)": {
                paddingTop: "12px",
                width: "192px",
                paddingBottom: "8px"
              }
            }}
            alt="Amsel Wordmark"
          />
          <h2
            data-cy="qhacks-information"
            css={{
              color: "#00205b",
              fontWeight: 600,
              fontSize: "22px",
              paddingBottom: "30px",
              "@media(max-width: 820px)": {
                paddingBottom: "24px"
              }
            }}
          >
            Triathlon Bissingen
          </h2>
          <h2
            data-cy="qhacks-tagline"
            css={{
              padding: "20px 0 100px",
              color: "#575757",
              fontWeight: 500,
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "20px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
            Website & App Entwicklung
            <br />
            Auf Ihre Bedürfnisse zugeschnitten
          </h2>
          <ActionButton
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={applyButtonCSS}
            link="https://docs.google.com/forms/d/e/1FAIpQLSdjqizoW8smdG5cEZfGd06iQtTLokHvbgeDb5_Tre59X77IyQ/viewform?usp=sf_link"
            type="rounded"
          >
            Anmelden
          </ActionButton> 
        </div>
        <div
          css={{
            position: "relative",
            textAlign: "right",
            display: "flex",
            paddingTop: "84px",
            alignItems: "right",
            "@media(max-width: 820px)": {
              display: "none"
            }
          }}
        >
          <img
            src={landingImg}
            css={{
              paddingLeft: "100px",
              paddingBottom: "40px",
              width: "85%"
            }}
            alt="Amsel Illustration"
          />
        </div>
      </section>
    </ContentWrapper>
  </div>
);

export default Landing;
