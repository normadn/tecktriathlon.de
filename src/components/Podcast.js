import React from "react";

import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import circuits from "../assets/img/backgrounds/circuitsGrey.png";
import podcastwebp from "../assets/img/icons/podcastIcon.webp";
import podcastpng from "../assets/img/icons/getInTouch.png";

const Podcast = () => (
  <section id="kontakt">
    <div
      css={{
        paddingBottom: "133px",
        width: "100%",
        position: "relative"
      }}
    >
      <ContentWrapper>
        <div
          css={{
            position: "relative",
            padding: "60px 72px 60px 72px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
            border: "solid 1px #e8e8e8",
            display: "grid",
            gridTemplateColumns: "min-content auto",
            "@media (max-width: 1128px)": { display: "block" },
            padding: "40px 5% 40px 5%"
          }}
        >
          <div
            css={{
              "@media (max-width: 1128px)": { textAlign: "center" }
            }}
          >
            <picture
              css={{
                "@media (max-width: 1128px)": {
                  width: "100%"
                },
                maxWidth: "290px"
              }}
            >
              <source srcSet={podcastpng} type="image/png" />
              <img
                css={{
                  "@media (max-width: 1128px)": {
                    width: "100%"
                  },
                  maxWidth: "290px"
                }}
                src={podcastpng}
                alt="Headphones connected to phone"
              />
            </picture>
          </div>
          <div
            css={{
              textAlign: "left",
              paddingLeft: "64px",
              "@media (max-width: 1128px)": {
                paddingLeft: "0px",
                paddingTop: "46px",
                textAlign: "center"
              }
            }}
          >
            <form name="contact" method="POST" data-netlify="true">
              <h1 css={{ paddingBottom: "24px", paddingTop: "10px" }}>
                Kontaktanfrage
              </h1>

              <input
                placeholder="Ihr Name"
                type="text"
                name="name"
                css={{
                  width: "80%",
                  flexGrow: 2,
                  padding: "0 16px",
                  height: "48px",
                  lineHeight: "48px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  marginBottom: "15px"
                }}
                aria-label="Ihr Name"
              />

              <input
                placeholder="Ihre Email Addresse"
                type="email"
                name="email"
                css={{
                  width: "80%",
                  flexGrow: 2,
                  padding: "0 16px",
                  height: "48px",
                  lineHeight: "48px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  marginBottom: "15px"
                }}
                aria-label="Ihre Email Addresse"
              />

              <div
                css={{
                  width: "100%",
                  "@media screen and (max-width: 1128px)": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }
                }}
              >
                <ActionButton
                  type="submit"
                  foregroundColor="#00205b"
                  backgroundColor="#ffffff"
                >
                  Senden
                </ActionButton>
              </div>
            </form>
          </div>
        </div>
      </ContentWrapper>
    </div>
    <div
      css={{
        marginTop: "-315px",
        height: "315px",
        zIndex: "-1",
        position: "relative",
        background: `url(${circuits}) no-repeat center center`,
        backgroundSize: "cover",
        borderTop: "solid #dbdbdb 3px"
      }}
    />
  </section>
);

export default Podcast;
