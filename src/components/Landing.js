import React from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import landingImg from "../assets/img/logo/tvb-logo.svg";
import logo from "../assets/img/logo/logo-no-text.svg";
import word from "../assets/img/logo/tecktriathlon.svg";
import backgroundCubes from "../assets/img/backgrounds/backgroundCubes.svg";

const applyButtonCSS = {
  margin: "5px 0 30px 0",
  "@media(max-width: 820px)": {
    margin: "5px 0 15px auto"
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
          marginBottom: "60px",
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
              paddingTop: "75px"
            },
            "@media (min-width: 821px) and (max-width: 1199px)": {
              paddingRight: "50px",
              paddingTop: "75px"
            },
            "@media (max-width: 820px)": {
              paddingTop: "80px"
            }
          }}
        >
          <img
            src={landingImg}
            css={{
              width: "70vw",
              maxWidth: "300px",
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
            data-cy="qhacks-information"
            css={{
              color: "#575757",
              fontWeight: 600,
              fontSize: "20px",
              paddingBottom: "30px",
              "@media(max-width: 820px)": {
                paddingBottom: "24px"
              }
            }}
          >
            Es ist egal wie schnell du bist. 
            <br />
            Du schlägst alle die zuhause bleiben!
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
            Vielen Dank für eure Teilnahme 2019!
            <br />
            2020 geht es in die 2. Runde
          </h2>      
          
          <br />

          <ActionButton
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={applyButtonCSS}
            link="https://forms.gle/7x51UMv5ZxD1cRHt9"
            type="rounded"
          >
            Interesse für 2020
          </ActionButton> 

          <br />

          <ActionButton
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={applyButtonCSS}
            link="https://drive.google.com/file/d/1RBSphejbaEhTGZkylImfajuLVTflteL1/view?usp=sharing"
            type="rounded"
          >
            Ziel- und Zwischenzeiten 2019
          </ActionButton> 
        </div>
        <div
          css={{
            position: "relative",
            textAlign: "right",
            display: "flex",
            paddingTop: "85px",
            alignItems: "right",
            "@media(max-width: 820px)": {
              display: "none"
            }
          }}
        >
          <img
            src={landingImg}
            css={{
              paddingTop: "35px",
              paddingLeft: "50px",
              paddingBottom: "20px",
              width: "85%"
            }}
            alt="TVB logo"
          />
        </div>
      </section>
    </ContentWrapper>
  </div>
);

export default Landing;
