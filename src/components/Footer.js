import React from "react";
import moment from "moment";

import ContentWrapper from "./ContentWrapper";
import SponsorLink from "./SponsorLink";
import SignUpForm from "../components/SignUpForm";

import mail from "../assets/img/icons/socialMail.svg";
import twitter from "../assets/img/icons/socialTwitter.svg";
import logo from "../assets/img/logo/amsel-logo-bird-small-white-new.svg";
import facebook from "../assets/img/icons/socialFacebook.svg";
import instagram from "../assets/img/icons/socialInstagram.svg";
import wordmark from "../assets/img/logo/amsel-tech-word-white.svg";
import MediaQuery from "react-responsive";

const navigateLinks = [
  {
    label: "Impressum",
    url: "/impressum",
    dataCy: "footer-2018-link"
  },
  {
    label: "Datenschutz",
    url: "/impressum",
    dataCy: "footer-lhd-link"
  }
];

const socialLinks = [
  {
    icon: mail,
    url: "mailto:norman@amsel.tech",
    label: "norman@amsel.tech",
    dataCy: "footer-email-link"
  }
];

const finePrint = {
  color: "#bebebe",
  fontSize: "12px"
};

const [smallScreens, mediumScreens, largeScreens] = [
  "@media(max-width: 950px)",
  "@media (min-width: 950px) and (max-width: 1200px)",
  "@media(min-width: 1200px)"
];

const Footer = () => (
  <footer css={{ backgroundColor: "#11213f", color: "#ffffff" }}>
    <ContentWrapper>
      <div
        css={{
          display: "block",
          textAlign: "center"
        }}
      >
        <div
          css={{
            paddingTop: "20px",
            paddingBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "455px"
          }}
        >
        <p
            css={{
              fontSize: "12px",
              lineHeight: "20px",
              paddingBottom: "10px",
              lineHeight: "1.67",
              [smallScreens]: { paddingLeft: "24px", paddingRight: "24px" }
            }}
          >
            {"< />"} with ♡ by
          </p>
          <SponsorLink url="https://amsel.tech">
            <span>
              <img
                height="34px"
                src={logo}
                css={{ marginBottom: "5px", paddingRight: "13px" }}
                alt="QHacks Crown"
              />
              <img height="37px" src={wordmark} alt="QHacks Wordmark" />
            </span>
          </SponsorLink>

        </div>
    
        
      </div>
    </ContentWrapper>
  </footer>
);

export default Footer;
