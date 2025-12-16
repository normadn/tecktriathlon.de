import React from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";
import { getImageUrl } from "../utils/imageHelper";

import landingImg from "../assets/img/logo/tecktriathlon-hero-new.svg";
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
          marginBottom: "20px",
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
              paddingTop: "90px"
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
            src={getImageUrl(landingImg)}
            css={{
              width: "70vw",
              maxWidth: "300px",
              "@media(min-width: 821px)": { display: "none" }
            }}
            alt="Illustration"
          />
          <br />
          <h1
            css={{
              paddingTop: "40px",
              paddingBottom: "18px",
              fontSize: "40px",
              "@media(max-width: 820px)": {
                paddingTop: "12px",
                paddingBottom: "8px"
              }
            }}
          >
            Teck Triathlon
          </h1>
          <h2
            data-cy="qhacks-information"
            css={{
              color: "#020066",
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
            Du schlägst alle, die zuhause bleiben!
          </h2>
          {/* <div>
            <ActionButton
              backgroundColor="#ffffff"
              foregroundColor="#00205b"
              style={applyButtonCSS}
              link="https://drive.google.com/file/d/1ZSAgpRH4Ox_MujTCiuJ_N2C4CAdI7_1m/view?usp=sharing"
              type="rounded"
            >
              Ergebnisse 2024
            </ActionButton>
          </div> */}
          <h2
            css={{
              padding: "20px 0 30px",
              color: "#575757",
              fontWeight: 800,
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "10px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
            Leider kann der Teck Triathlon 2025 nicht stattfinden.
          </h2>
          <h2
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
            29.08.2026 - Save the Date für die 5. Auflage!
          </h2>
          {/* <h2
            css={{
              padding: "20px 0 30px",
              color: "#575757",
              fontWeight: 800,
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "10px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
            Termin: 31.08.2024
          </h2>
          <h2
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
            Wir sagen Danke für 175 Anmeldungen !!
          </h2> */}
          {/* <div>
            <ActionButton
              backgroundColor="#ffffff"
              foregroundColor="#00205b"
              style={applyButtonCSS}
              link="https://forms.gle/di1Fyk7mgzV2U49c7"
              type="rounded"
            >
              Warteliste
            </ActionButton>
          </div> */}
          {/* <div>
            <ActionButton
              backgroundColor="#ffffff"
              foregroundColor="#00205b"
              style={applyButtonCSS}
              link="https://forms.gle/Uy27qiQ98PfYuEnw7"
              type="rounded"
            >
              Einzelanmeldung
            </ActionButton>
          </div>
          <div>
            <ActionButton
              backgroundColor="#ffffff"
              foregroundColor="#00205b"
              style={applyButtonCSS}
              link="https://forms.gle/SkjqfVHgdZtkuGBk6"
              type="rounded"
            >
              Teamanmeldung
            </ActionButton> 
          </div> */}
          <div>
            <ActionButton
              backgroundColor="#ffffff"
              foregroundColor="#00205b"
              style={applyButtonCSS}
              link="https://forms.gle/tSx5PphgqKxK4KPG9"
              type="rounded"
            >
              Interesse Teck Triathlon 2026
            </ActionButton>
          </div>
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
            src={getImageUrl(landingImg)}
            css={{
              paddingTop: "35px",
              paddingLeft: "50px",
              paddingBottom: "20px",
              width: "90%"
            }}
            alt="TVB logo"
          />
        </div>
      </section>
    </ContentWrapper>
  </div>
);

export default Landing;
