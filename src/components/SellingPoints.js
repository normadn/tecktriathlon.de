import React from "react";
import SellingPointsIcons from "./SellingPointsIcons.js";

import cubes2png from "../assets/img/icons/cubes-2.png";
import judges from "../assets/img/icons/judgesIcon.svg";
import cubes2webp from "../assets/img/icons/cubes-2.webp";
import mentors from "../assets/img/icons/mentorsIcon.svg";
import hackers from "../assets/img/icons/hackersIcon.svg";
import schools from "../assets/img/icons/schoolsIcon.svg";
import challenges from "../assets/img/icons/challengesIcon.svg";
import applications from "../assets/img/icons/applicationsIcon.svg";
import qhacksSellingPointOnejpg from "../assets/img/selling_points/sellingPointElement.jpg";
import qhacksSellingPointTwojpg from "../assets/img/selling_points/sellingPointCode.jpg";
import qhacksSellingPointOnewebp from "../assets/img/selling_points/qhacksSellingPointOne.webp";
import qhacksSellingPointTwowebp from "../assets/img/selling_points/qhacksSellingPointTwo.webp";
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

const SellingPoints = () => (
  <div id="services" css={{ position: "relative" }}>
    <ContentWrapper>
      <div
        css={{
          padding: "143px 0",
          margin: "0 -28px",
          "@media(max-width: 840px)": {
            padding: "143px 0 50px 0"
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
            <h1>Softwareelemente</h1>
            <p css={blurbStyle}>
              Sie wollen ihre Unternehmens-Website erneuern, ihr SEO-Ranking verbessern, ihre Kundendaten aufarbeiten oder Prozesse automatisieren? Wir haben Spezialisten für im Frontend, Backend, Web-Design und der Datenanalyse im Team und können Softwareelemente auf Ihr Unternehmen zugeschnitten entwickeln.  
            </p>
          </div>
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              <source srcSet={qhacksSellingPointOnejpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={qhacksSellingPointOnejpg}
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
              <source srcSet={qhacksSellingPointTwojpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={qhacksSellingPointTwojpg}
                alt="Mentor judging a VR hack"
              />
            </picture>
          </div>
          <div css={flexChildStyle}>
            <h1>Komplettlösungen</h1>
            <p css={blurbStyle}>
              Sie suchen nach einer Digitalisierungsstrategie für ihr Unternehmen? - Da sind sie bei uns genau richtig! Jedes Unternehmen löst andere Herausforderungen. Ein enger Austausch mit Ihnen ist uns folglich wichtig, um Lösungen zu entwickeln, die Ihre Kunden begeistern werden. Wir helfen Ihnen der Konkurrenz einen Schritt voraus zu sein.
            </p>
          </div>
        </div>
        <picture
          css={{
            width: "400px",
            height: "246px",
            position: "absolute",
            bottom: "-140px",
            left: "-60px",
            zIndex: 3,
            "@media(max-width: 1200px)": {
              width: "358px",
              height: "220px",
              bottom: "-120px",
              left: "-40px"
            },
            "@media(max-width: 840px)": {
              display: "none"
            }
          }}
        >
          <source srcSet={cubes2webp} type="image/webp" />
          <source srcSet={cubes2png} type="image/png" />
          <img
            css={{
              width: "400px",
              height: "246px",
              "@media(max-width: 1200px)": {
                width: "358px",
                height: "220px"
              }
            }}
            src={cubes2png}
            alt="Floating cubes"
          />
        </picture>
      </div>
    </ContentWrapper>
  </div>
);

export default SellingPoints;
