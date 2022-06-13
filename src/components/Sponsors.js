import React from "react";

import SponsorLink from "./SponsorLink";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import goll from "../assets/img/sponsors/goll.png";
import leilani from "../assets/img/sponsors/finca-leilani.png";
import maenner from "../assets/img/sponsors/maenner.png";
import seestueble from "../assets/img/sponsors/seestueble.png";
import amsel from "../assets/img/sponsors/amsel-tech.png";
import schmidt from "../assets/img/sponsors/schmidt.jpg";
import firstreisebuero from "../assets/img/sponsors/first-reisebuero.jpeg";
import holl from "../assets/img/sponsors/sportHoll.png";

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

          {/* 2x Grid */}
          <div
            css={{
              marginTop: "70px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "20px",
              "@media(max-width: 500px)": {
                gridTemplateColumns: "1fr",
                marginTop: "30px",
                marginBottom: "10px"
              }
            }}
          >
            {/* Tera Row 1 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr",
                marginBottom: "50px",
                "@media(max-width: 680px)": {
                  marginBottom: "30px"
                }
              }}
            >
              <SponsorLink url="https://www.backstube-goll.de/">
                <img
                  src={goll}
                  css={{
                    width: "400px",
                    "@media(max-width: 980px)": {
                      width: "300px"
                    },
                    "@media(max-width: 680px)": {
                      width: "300px"
                    },
                    "@media(max-width: 460px)": {
                      width: "250px",

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
              gridTemplateColumns: "1fr",
              marginBottom: "80px",
              marginLeft: "10px",
              "@media(max-width: 680px)": {
                marginBottom: "30px"
              }
            }}
          >
            <SponsorLink url="https://www.finca-leilani.de/">
              <img
                src={leilani}
                css={{
                  width: "340px",
                  "@media(max-width: 980px)": {
                    width: "320px"
                  },
                  "@media(max-width: 680px)": {
                    width: "220px"
                  },
                  "@media(max-width: 460px)": {
                    width: "170px"
                  }
                }}
                data-cy="test-sponsor-image"
                alt="Finca Leilani"
              />
            </SponsorLink>
          </div>

          {/* Tera Row 2 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "80px",
              marginLeft: "10px",
              "@media(max-width: 680px)": {
                marginBottom: "30px"
              }
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

          {/* Tera Row 3 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "80px",
              "@media(max-width: 680px)": {
                marginBottom: "30px"
              }
            }}
          >
            <SponsorLink url="http://seestueble.com">
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
              marginBottom: "40px",
              "@media(max-width: 680px)": {
                marginBottom: "30px"
              }
            }}
          >
            <SponsorLink url="https://amsel.tech">
              <img
                src={amsel}
                css={{
                  width: "320px",
                  "@media(max-width: 980px)": {
                    width: "320px"
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
              marginBottom: "50px",
              marginLeft: "35px",
              "@media(max-width: 680px)": {
                marginBottom: "30px"
              }
            }}
          >
            <SponsorLink url="https://www.first-reisebuero.de/">
              <img
                src={firstreisebuero}
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
                alt="First Reisebuero"
              />
            </SponsorLink>
          </div>

        </div>

        {/* Single Row Sponsors */}
        <div
          css={{
            marginTop: "20px",
            marginBottom: "30px",
            "@media(max-width: 680px)": {
              marginBottom: "0px"
            }
          }}
        >
          {/* Tera Row 3 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "60px",
              "@media(max-width: 680px)": {
                marginBottom: "30px"
              }
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
              "@media(max-width: 680px)": {
                marginBottom: "30px"
              }
            }}
          >
            <SponsorLink url="http://www.schmidt-transporte.com/">
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
        </div>

        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
