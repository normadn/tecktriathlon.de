import React from "react";

import SponsorLink from "./SponsorLink";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import goll from "../assets/img/sponsors/goll.png";
import maenner from "../assets/img/sponsors/maenner.png";
import seestueble from "../assets/img/sponsors/seestueble.png";
import amsel from "../assets/img/sponsors/amsel-tech.png";
import schmidt from "../assets/img/sponsors/schmidt.jpg";
import ecenter from "../assets/img/sponsors/ecenterKirchheim.png";
import holl from "../assets/img/sponsors/sportHoll.png";


import tdLogo from "../assets/img/sponsors/td.svg";
import qicLogo from "../assets/img/sponsors/qic.svg";
import dclLogo from "../assets/img/sponsors/dcl.svg";
import eceLogo from "../assets/img/sponsors/ece.svg";
import cseLogo from "../assets/img/sponsors/cse.svg";
// import amsLogo from "../assets/img/sponsors/ams.svg";
import iganLogo from "../assets/img/sponsors/seestueble.jpg";
import mmieLogo from "../assets/img/sponsors/mmie.svg";
import snapLogo from "../assets/img/sponsors/snap.svg";
import telusLogo from "../assets/img/sponsors/telus.svg";
import mlhLogo from "../assets/img/sponsors/mlhText.svg";
import githubLogo from "../assets/img/sponsors/github.svg";
import sketchLogo from "../assets/img/sponsors/sketch.svg";
import ritualLogo from "../assets/img/sponsors/ritual.svg";
import loopioLogo from "../assets/img/sponsors/loopio.svg";
import apolloLogo from "../assets/img/sponsors/apollo.svg";
import googleLogo from "../assets/img/sponsors/google.svg";
import indicoLogo from "../assets/img/sponsors/indico.svg";
import sodexoLogo from "../assets/img/sponsors/sodexo.svg";
import pccLogo from "../assets/img/sponsors/pcc.png";
import ratehubLogo from "../assets/img/sponsors/ratehub.svg";
import sunLifeLogo from "../assets/img/sponsors/goll.png";
import wolframLogo from "../assets/img/sponsors/wolfram.svg";
import wakeupsLogo from "../assets/img/sponsors/wakeups.svg";
import deloitteLogo from "../assets/img/sponsors/deloitte.svg";
import balsamiqLogo from "../assets/img/sponsors/balsamiq.svg";
import kingstonLogo from "../assets/img/sponsors/kingston.svg";
import bloombergLogo from "../assets/img/sponsors/bloomberg.svg";
import consensysLogo from "../assets/img/sponsors/consensys.svg";
import ycombinator from "../assets/img/sponsors/ycombinator.svg";
import orangeGateLogo from "../assets/img/sponsors/orangeGate.svg";
import scotiabankLogo from "../assets/img/sponsors/scotiabank.svg";
import onePasswordLogo from "../assets/img/sponsors/1password.svg";
import stickermuleLogo from "../assets/img/sponsors/stickermule.svg";
import nationalBankLogo from "../assets/img/sponsors/nationalbank.svg";
import launchAcademyLogo from "../assets/img/sponsors/launchAcademy.svg";
import schoolOfComputingLogo from "../assets/img/sponsors/schoolOfComputing.svg";
import ramenVenturesLogo from "../assets/img/sponsors/ramenVentures.png";
import shopifyLogo from "../assets/img/sponsors/shopify.svg";
import foundersBetaLogo from "../assets/img/sponsors/foundersBeta.png";
import coinsquareLogo from "../assets/img/sponsors/coinsquare.png";
import munvoLogo from "../assets/img/sponsors/munvo.png";
import asusAmsEngSocLogo from "../assets/img/sponsors/asusAmsEngSoc.png";

const Sponsors = () => (
  <section
    id="sponsoren"
    css={{
      backgroundColor: "#ffffff",
      " img": {
        transition: "0.3s",
        ":hover": {
          transform: "scale(1.1)"
        }
      }
    }}
  >
    <ContentWrapper>
      <div
        css={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          paddingTop: "80px"
        }}
      >
        {/* Sponsors */}
        <div>
          <h1>Sponsoren</h1>

          {/* Tera */}
          <div
            css={{
              marginTop: "70px",
              marginBottom: "80px",
              "@media(max-width: 460px)": {
                marginBottom: "60px"
              }
            }}
          >
            {/* Tera Row 1 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr",
                marginBottom: "80px",
                "@media(max-width: 460px)": {
                  marginBottom: "40px"
                },
                "@media(max-width: 980px)": {
                  marginBottom: "60px"
                }
              }}
            >
              <SponsorLink url="https://www.backstube-goll.de/">
                <img
                  src={goll}
                  css={{
                    width: "500px",
                    "@media(max-width: 980px)": {
                      width: "400px"
                    },
                    "@media(max-width: 680px)": {
                      width: "300px"
                    },
                    "@media(max-width: 460px)": {
                      width: "250px"
                    }
                  }}
                  data-cy="test-sponsor-image"
                  alt="Backstube Goll"
                />
              </SponsorLink>
            </div>

            {/* Tera Row 2 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr"
              }}
            >
              <SponsorLink url="https://www.maenner-containerdienst.de/">
                <img
                  src={maenner}
                  css={{
                    width: "500px",
                    "@media(max-width: 980px)": {
                      width: "400px"
                    },
                    "@media(max-width: 680px)": {
                      width: "300px"
                    },
                    "@media(max-width: 460px)": {
                      width: "250px"
                    }
                  }}
                  data-cy="test-sponsor-image"
                  alt="Maenner Container"
                />
              </SponsorLink>
            </div>
          </div>

          {/* Tera Row 3 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "80px",
            }}
          >
            <SponsorLink url="http://see-stueble.de/st/">
              <img
                src={seestueble}
                css={{
                  width: "500px",
                  "@media(max-width: 980px)": {
                    width: "400px"
                  },
                  "@media(max-width: 680px)": {
                    width: "300px"
                  },
                  "@media(max-width: 460px)": {
                    width: "250px"
                  }
                }}
                data-cy="test-sponsor-image"
                alt="Seestueble"
              />
            </SponsorLink>
          </div>

          {/* Tera Row 4 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "80px",
            }}
          >
            <SponsorLink url="https://amsel.tech">
              <img
                src={amsel}
                css={{
                  width: "350px",
                  "@media(max-width: 980px)": {
                    width: "350px"
                  },
                  "@media(max-width: 680px)": {
                    width: "200px"
                  },
                  "@media(max-width: 460px)": {
                    width: "150px"
                  }
                }}
                data-cy="test-sponsor-image"
                alt="Amsel.tech"
              />
            </SponsorLink>
          </div>

          {/* Tera Row 3 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "80px",
            }}
          >
            <SponsorLink url="https://www.facebook.com/pages/category/Cargo---Freight-Company/Schmidt-Transporte-GmbH-236242266579529/">
              <img
                src={schmidt}
                css={{
                  width: "800px",
                  "@media(max-width: 980px)": {
                    width: "600px"
                  },
                  "@media(max-width: 680px)": {
                    width: "400px"
                  },
                  "@media(max-width: 460px)": {
                    width: "300px"
                  }
                }}
                data-cy="test-sponsor-image"
                alt="Schimdt Transporte"
              />
            </SponsorLink>
          </div>

          {/* Tera Row 3 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "80px",
            }}
          >
            <SponsorLink url="https://www.sport-holl.de/">
              <img
                src={holl}
                css={{
                  width: "500px",
                  "@media(max-width: 980px)": {
                    width: "400px"
                  },
                  "@media(max-width: 680px)": {
                    width: "300px"
                  },
                  "@media(max-width: 460px)": {
                    width: "250px"
                  }
                }}
                data-cy="test-sponsor-image"
                alt="Sport Holl"
              />
            </SponsorLink>
          </div>

          {/* Tera Row 3 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "80px",
            }}
          >
            <SponsorLink url="https://www.edeka.de/eh/s%C3%BCdwest/e-center-kirchheim-teck-stuttgarter-stra%C3%9Fe-1/index.jsp">
              <img
                src={ecenter}
                css={{
                  width: "500px",
                  "@media(max-width: 980px)": {
                    width: "400px"
                  },
                  "@media(max-width: 680px)": {
                    width: "300px"
                  },
                  "@media(max-width: 460px)": {
                    width: "250px"
                  }
                }}
                data-cy="test-sponsor-image"
                alt="Ecenter Kirchheim Teck"
              />
            </SponsorLink>
          </div>

          </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
