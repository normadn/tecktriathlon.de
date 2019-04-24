import React from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import landingImg from "../assets/img/logo/tvb-small.png";
import logo from "../assets/img/logo/logo-no-text.svg";
import word from "../assets/img/logo/teck-triathlon.svg";
import backgroundCubes from "../assets/img/backgrounds/backgroundCubes.svg";

const applyButtonCSS = {
  margin: "5px 0 50px 0",
  "@media(max-width: 820px)": {
    margin: "5px 0 20px auto"
  }
};

const Landing = () => (
  <div
    id=""
    css={{
      width: "100%",
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
            Volkstriathlon in Bissingen an der Teck
          </h2>
          <h2
            data-cy="qhacks-tagline"
            css={{
              padding: "20px 0 50px",
              color: "#575757",
              fontWeight: 500,
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "10px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
            Am 28.08.2019 - Das Fun Event für Jung und Alt
            <br />
            Teilnahme einzeln oder als Team möglich
          </h2>
          <ActionButton
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={applyButtonCSS}
            link="https://forms.gle/aj93xZaareggDn2Y6"
            type="rounded"
          >
            Zur Einzelwertung anmelden
          </ActionButton> 
          
          <br />

          <ActionButton
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={applyButtonCSS}
            link="https://forms.gle/eQiaWeY8k3MEcLvP6"
            type="rounded"
          >
            Zur Teamwertung anmelden
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
