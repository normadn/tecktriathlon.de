import React from "react";
import moment from "moment";

import ContentWrapper from "./ContentWrapper";
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
  },
  {
    label: "07023 9577753",
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
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          paddingTop: "80px",
          " h3": {
            color: "inherit",
            textTransform: "uppercase"
          },
          [smallScreens]: {
            display: "block",
            textAlign: "center"
          }
        }}
      >
        <div
          css={{
            [smallScreens]: {
              marginLeft: "auto",
              marginRight: "auto"
            },
            maxWidth: "455px"
          }}
        >
          <span>
            <img
              height="34px"
              src={logo}
              css={{ marginBottom: "5px", paddingRight: "13px" }}
              alt="QHacks Crown"
            />
            <img height="37px" src={wordmark} alt="QHacks Wordmark" />
          </span>
          <p
            css={{
              fontSize: "12px",
              lineHeight: "20px",
              paddingTop: "40px",
              paddingRight: "20px",
              paddingBottom: "40px",
              lineHeight: "1.67",
              [smallScreens]: { paddingLeft: "24px", paddingRight: "24px" }
            }}
          >
            Die Software Argentur in Bissingen an der Teck.
          </p>
          
          <div css={{ [smallScreens]: { display: "none" } }}>
            <p
              data-cy="footer-address"
              css={{ ...finePrint, marginBottom: "5px" }}
            >
              Amsel.tech | Amselweg 7, 73266 Bissingen an der Teck
            </p>
            <p
              data-cy="footer-dev-plug"
              css={{ ...finePrint, fontWeight: "400" }}
            >
              {"< />"} with ♡ by Amsel-tech
            </p>
            <p
              data-cy="footer-copyright-notice"
              css={{
                ...finePrint,
                paddingBottom: "32px",
                marginTop: "6px"
              }}
            >
              Copyright © {moment().year()} Amsel.tech
            </p>
          </div>
        </div>
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "80px",
            [smallScreens]: {
              paddingTop: "0px",
              paddingBottom: "50px"
            }
          }}
        >
          <h3>Rechtliches</h3>
          <ul
            css={{
              paddingTop: "30px",
              listStyleType: "none",
              ">li": { paddingBottom: "23px" },
              " a": {
                color: "inherit",
                fontWeight: 600,
                textDecoration: "none",
                ":hover": {
                  color: "#ed253a"
                }
              }
            }}
          >
            {navigateLinks.map(({ label, url, dataCy }) => (
              <li key={url}>
                <a href={url} data-cy={dataCy}>{`${label} ▸`}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            [largeScreens]: {
              paddingTop: "80px"
            },
            [mediumScreens]: {
              paddingTop: "80px"
            }
          }}
        >
          <h3 css={{ [smallScreens]: { display: "none" } }}>Kontakt</h3>
          <div
            css={{
              paddingTop: "30px",
              listStyleType: "none",
              ">div": { paddingBottom: "18px" },
              " a": {
                textDecoration: "none",
                textAlign: "left",
                color: "inherit",
                fontWeight: "bold"
              },
              display: "grid",
              [smallScreens]: {
                marginLeft: "auto",
                marginRight: "auto",
                gridTemplateColumns: "1fr",
                maxWidth: "196px",
                paddingTop: "0px",
                paddingBottom: "60px"
              }
            }}
          >
            {socialLinks.map(({ icon, label, url, dataCy }) => (
              <div
                key={url}
                css={{
                  display: "grid",
                  gridTemplateColumns: "min-content auto",
                  ":hover": {
                    " a": {
                      color: "#ed253a",
                      ">div": {
                        backgroundColor: "#ed253a"
                      }
                    }
                  },
                  [smallScreens]: {
                    display: "block",
                    width: "40px",
                    height: "40px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }
                }}
              >
                <a aria-label={label} href={url} css={{}}>
                  <div
                    css={{
                      backgroundColor: "#e3e3e3",
                      mask: `url(${icon}) no-repeat center center`,
                      maskSize: "100% 100%",
                      width: "28px",
                      height: "28px",
                      marginRight: "16px",
                      marginTop: "-5px",
                      ":hover": {
                        backgroundColor: "#ed253a"
                      },
                      [smallScreens]: {
                        width: "40px",
                        height: "40px"
                      }
                    }}
                  />
                </a>
                <a
                  css={{ [smallScreens]: { display: "none" } }}
                  href={url}
                  data-cy={dataCy}
                >
                  {label}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div
          css={{
            [largeScreens]: { display: "none" },
            [mediumScreens]: { display: "none" }
          }}
        >
          <p
            data-cy="footer-address"
            css={{ ...finePrint, marginBottom: "5px" }}
          >
            Amsel.tech | Amselweg 7, 73266 Bissingen an der Teck
          </p>
          <p
            data-cy="footer-dev-plug"
            css={{ ...finePrint, fontWeight: "400" }}
          >
            {"< />"} with ♡ by Amsel-tech
          </p>
          <p
            data-cy="footer-copyright-notice"
            css={{ ...finePrint, marginTop: "6px", paddingBottom: "32px" }}
          >
            Copyright © {moment().year()} Amsel.tech
          </p>
        </div>
      </div>
    </ContentWrapper>
  </footer>
);

export default Footer;
