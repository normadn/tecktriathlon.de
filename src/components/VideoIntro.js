import React from "react";

import ContentWrapper from "./ContentWrapper";

import cubes1webp from "../assets/img/icons/cubes-1.webp";
import cubes1png from "../assets/img/icons/cubes-1.png";

const caretCSS = (backgroundColor) => ({
  backgroundColor,
  width: "26px",
  height: "4px"
});

const VideoIntro = () => (
  <div
    id="bissingen"
    css={{
      position: "relative",
      width: "100%",
      background: "#ffffff",
      paddingTop: "0px",
      paddingBottom: "40px"
    }}
  >
    <ContentWrapper>
      <div
        css={{
          background: "#ffffff",
          display: "grid",
          gridTemplateColumns: "auto auto",
          padding: "60px 55px 60px 55px",
          margin: "0 auto 0 auto",
          borderRadius: "8px",
          boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
          border: "solid 1px #e8e8e8",
          "@media(max-width: 750px)": {
            padding: "32px 24px 32px 24px"
          },
          "@media(max-width: 1115px)": {
            display: "block"
          }
        }}
      >
        <div
          css={{
            paddingRight: "43px",
            "@media (max-width: 920px)": { paddingRight: "0px" }
          }}
        >
          <h1 css={{ paddingTop: "2px" }}>Teck Triathlon 2024</h1>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "auto auto 1fr",
              gridColumnGap: "4px",
              padding: "13px 0px 27px 0px"
            }}
          >
            <div css={caretCSS("#00205b")} />
            <div css={caretCSS("#c81c2e")} />
            <div css={caretCSS("#fedb01")} />
          </div>
          <p css={{ lineHeight: "24px", fontColor: "#000000" }}>
            Es war ein Fest!! Sei auch dieses Jahr wieder dabei, egal ob als
            Zuschauer oder als Teilnehmer. Wir freuen uns auf dich.
          </p>
        </div>
        <div
          css={{
            margin: "auto auto auto auto",
            "@media(max-width: 1115px)": {
              height: "40vw"
            },
            "@media(max-width: 715px)": {
              height: "50vw"
            }
          }}
        >
          <iframe
            title="Bissingen an der Teck"
            src="https://www.youtube.com/embed/EM3rFj5PN5c?si=CKfMgbDjIdLVK3cl"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            css={{
              width: "500px",
              height: "281px",
              "@media(max-width: 1215px)": {
                width: "400px",
                height: "225px"
              },
              "@media(max-width: 1115px)": {
                paddingTop: "40px",
                width: "100%",
                height: "100%"
              }
            }}
          />
        </div>
      </div>
    </ContentWrapper>
  </div>
);

export default VideoIntro;
