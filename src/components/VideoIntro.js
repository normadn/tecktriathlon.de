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
          gridTemplateColumns: "1fr auto",
          alignItems: "stretch",
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
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
            paddingRight: "43px",
            "@media (max-width: 920px)": { paddingRight: "0px" }
          }}
        >
          <h1 css={{ paddingTop: "2px" }}>Teck Triathlon Aftermovie</h1>
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
            Es war ein Fest!! Sei auch dieses Mal wieder dabei, egal ob als
            Zuschauer oder als Teilnehmer. Wir freuen uns auf dich.
          </p>
          <div
            css={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minHeight: 0,
              "@media(max-width: 1115px)": {
                display: "none"
              }
            }}
          >
            <div
              css={{
                width: "100%",
                aspectRatio: "16 / 9"
              }}
            >
              <iframe
                title="Teck Triathlon 2024"
                src="https://www.youtube.com/embed/EM3rFj5PN5c?si=CKfMgbDjIdLVK3cl"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                css={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  border: 0
                }}
              />
            </div>
          </div>
        </div>
        <div
          css={{
            margin: 0,
            width: "400px",
            maxWidth: "100%",
            overflow: "hidden",
            "@media(max-width: 1115px)": {
              paddingTop: "40px"
            }
          }}
        >
          <iframe
            title="Teck Triathlon 2026"
            src="https://www.instagram.com/p/DcyI_lWsUTq/embed"
            frameBorder="0"
            scrolling="no"
            allow="autoplay; encrypted-media; clipboard-write"
            allowFullScreen
            loading="lazy"
            css={{
              display: "block",
              width: "400px",
              height: "740px",
              maxWidth: "100%",
              border: 0,
              "@media(max-width: 1115px)": {
                width: "100%",
                height: "680px"
              }
            }}
          />
        </div>
      </div>
    </ContentWrapper>
  </div>
);

export default VideoIntro;
