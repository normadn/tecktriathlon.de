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
import qhacksSellingPointOnejpg from "../assets/img/selling_points/sellingPointFist.jpg";
import qhacksSellingPointTwojpg from "../assets/img/selling_points/sellingPointTeam.jpg";
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
            <h1>Einzelwertung</h1>
            <p css={blurbStyle}>
            Mit dieser Veranstaltung soll auch der Personenkreis der Freizeitsportler/innen und Triathlon-Einsteiger/innen angesprochen werden. Die Distanz ist daher für einen Triathlon recht kurz gehalten und eignet sich somit auch für Sportler/innen, die bereits eine Ausdauersportart betreiben und sich nun einmal im Triathlon testen wollen. Natürlich sind auch erfahrene Triathleten/innen, die zu, Saisonende noch einen Volkstriathlon absolvieren wollen, herzlich eingeladen.  
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
            <h1>oder als Team</h1>
            <p css={blurbStyle}>
            Drei Teilnehmer teilen sich nach dem Staffelprinzip den Triathlon. Jeder Teilnehmer legt eine Teilstrecke (Schwimmen, Radfahren oder Laufen) zurück. Bei zwei Teilnehmern läuft der Schwimmer, der zweite Teilnehmer fährt Rad.
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </div>
);

export default SellingPoints;
