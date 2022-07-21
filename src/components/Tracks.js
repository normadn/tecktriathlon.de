import React from "react";

import sellingPointOnejpg from "../assets/img/selling_points/fahrradstrecke.png";
import sellingPointTwojpg from "../assets/img/selling_points/laufstrecke.png";
import fahrradtrack from "../assets/img/selling_points/fahrradstrecke-2.jpeg";
import lauftrack from "../assets/img/selling_points/laufstrecke-2.jpeg";
import ContentWrapper from "./ContentWrapper";

const twoColumnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginBottom: "48px"
};

const flexChildStyle = {
  flex: 1,
  textAlign: "center",
  minWidth: "300px",
  margin: "0 28px 32px 28px",
  maxWidth: "510px"
};

const blurbStyle = {
  margin: "32px auto",
  fontSize: "15px",
  lineHeight: "24px",
  maxWidth: "500px"
};

const imgStyle = {
  maxHeight: "320px",
  maxWidth: "475px",
  width: "100%"
};

const Tracks = () => (
  <div id="strecken" css={{ position: "relative", backgroundColor: "#f8f8f8",}}>
    <ContentWrapper>
      <div
        css={{
          padding: "100px 0",
          margin: "0 -28px",
          "@media(max-width: 840px)": {
            padding: "100px 0 50px 0"
          }
        }}
      >
        <div
          css={{
            ...twoColumnStyle,
            flexWrap: "wrap"
          }}
        >
          <div css={flexChildStyle}>
            <h1>Fahrradstrecke</h1>
            <p css={blurbStyle}>
              Die Strecke führt einmal am Rande Bissingens entlang und hat zehn Streckenposten, teilweise mit Verpflegung für die Radfahrer. Die Strecke wird entsprechend markiert, sodass auch auswärtige den Weg ohne Probleme finden können.
            </p>
            <div css={blurbStyle}>
              Fun fact: Die Fahrradstrecke 2022 ist neu, da wir keine Genehmigung für die 2019er Strecke bekommen haben.
            </div>

            {/* <div
              css={{
                margin: "auto auto auto auto",
                "@media(max-width: 1115px)": {
                  height: "20vw"
                },
                "@media(max-width: 715px)": {
                  height: "50vw"
                }
              }}
            >
              <iframe
                title="Bissingen an der Teck"
                src="https://www.youtube.com/embed/n_lMQIyXzwA?rel=0&amp;controls=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                css={{
                  width: "400px",
                  height: "221px",
                  "@media(max-width: 1215px)": {
                    width: "100%",
                    height: "225px"
                  },
                  "@media(max-width: 615px)": {
                    paddingTop: "40px",
                    width: "100%",
                    height: "100%"
                  }
                }}
              />
            </div> */}
          </div>
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              <source srcSet={fahrradtrack} type="image/jpg" />
              <img
                css={imgStyle}
                src={fahrradtrack}
                alt="html css"
              />
            </picture>
          </div>
        </div>
        <div
          css={{
            ...twoColumnStyle,
            flexWrap: "wrap-reverse",
            marginBottom: 0
          }}
        >
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              <source srcSet={lauftrack} type="image/jpg" />
              <img
                css={imgStyle}
                src={lauftrack}
                alt="Mentor judging a VR hack"
              />
            </picture>
          </div>
          <div css={flexChildStyle}>
            <h1>Laufstrecke</h1>
            <p css={blurbStyle}>
            Die Strecke führt hoch zum Bissinger Wasserfall und über den Bauernhof zurück. Bitte beachten: Am Waldanfang führt die Strecke direkt nach rechts und nicht links, wie eingezeichnet, den Berg hoch. Die Strecke wird entsprechend markiert, sodass auch auswertige den Weg ohne Probleme finden können.
            </p>
            <div
              css={{
                margin: "auto auto auto auto",
                "@media(max-width: 1115px)": {
                  height: "20vw"
                },
                "@media(max-width: 715px)": {
                  height: "50vw"
                }
              }}
            >
              <iframe
                title="Bissingen an der Teck"
                src="https://www.youtube.com/embed/O-Y-aRBuc4k?rel=0&amp;controls=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                css={{
                  width: "400px",
                  height: "221px",
                  "@media(max-width: 1215px)": {
                    width: "100%",
                    height: "225px"
                  },
                  "@media(max-width: 615px)": {
                    paddingTop: "40px",
                    width: "100%",
                    height: "100%"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </div>
);

export default Tracks;
