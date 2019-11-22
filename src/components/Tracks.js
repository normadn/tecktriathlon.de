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
import sellingPointOnejpg from "../assets/img/selling_points/sellingPointFist.jpg";
import sellingPointTwojpg from "../assets/img/selling_points/sellingPointTeam.jpg";
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
            <h1>Radstrecke</h1>
            <p css={blurbStyle}>
            Die Strecke führt einmal um die Teck herum und hat 4 Verpflegungstationen.  
            </p>
          </div>
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              <source srcSet={sellingPointOnejpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={sellingPointOnejpg}
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
              <source srcSet={sellingPointTwojpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={sellingPointTwojpg}
                alt="Mentor judging a VR hack"
              />
            </picture>
          </div>
          <div css={flexChildStyle}>
            <h1>Laufstrecke</h1>
            <p css={blurbStyle}>
            Die Strecke führt hoch zum Bissinger Wasserfall und über den Bauernhof zurück.  
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </div>
);

export default Tracks;
