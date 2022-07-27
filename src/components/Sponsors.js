import React from "react";

import SponsorLink from "./SponsorLink";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import goll from "../assets/img/sponsors/goll.png";
import wall from "../assets/img/sponsors/wall-neu.png";
import maenner from "../assets/img/sponsors/maenner.png";
import seestueble from "../assets/img/sponsors/seestueble.png";
import mall from "../assets/img/sponsors/mall-logo.jpeg";
import schaefer from "../assets/img/sponsors/schaefer-logo.jpeg";
import goldochsen from "../assets/img/sponsors/goldochsen-logo.jpeg";
import amsel from "../assets/img/sponsors/amsel-tech.png";
import schmidt from "../assets/img/sponsors/schmidt.jpg";
import firstreisebuero from "../assets/img/sponsors/first-reisebuero.jpeg";
import holl from "../assets/img/sponsors/sportHoll.png";
import reweKopp from "../assets/img/sponsors/rewe-kopp.jpeg";

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
              marginTop: "0px",
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
                marginTop: "30px",
                display: "grid",
                gridTemplateColumns: "1fr",
                marginBottom: "50px",
                "@media(max-width: 680px)": {
                  marginBottom: "20px"
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
              marginTop: "110px",
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "80px",
              marginLeft: "10px",
              "@media(max-width: 680px)": {
                marginTop: "0px",
                marginBottom: "30px"
              }
            }}
          >
            <SponsorLink url="https://www.wall-am-markt.de/">
              <img
                src={wall}
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
                alt="Wall am Markt"
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
            <SponsorLink url="https://www.schaefer-metzgerei.de/">
              <img
                src={schaefer}
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
                alt="Metzgerei Schaefer"
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
            <SponsorLink url="https://www.rewe.de/marktseite/dettingen/865862/rewe-markt-kirchheimer-str-138/">
              <img
                src={reweKopp}
                css={{
                  width: "200px",
                  "@media(max-width: 980px)": {
                    width: "200px"
                  },
                  "@media(max-width: 680px)": {
                    width: "150px"
                  },
                  "@media(max-width: 460px)": {
                    width: "150px"
                  }
                }}
                data-cy="test-sponsor-image"
                alt="Rewe Kopp"
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
                  width: "260px",
                  "@media(max-width: 980px)": {
                    width: "260px"
                  },
                  "@media(max-width: 680px)": {
                    width: "180px"
                  },
                  "@media(max-width: 460px)": {
                    width: "140px"
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
              "@media(max-width: 680px)": {
                marginBottom: "30px"
              }
            }}
          >
            <SponsorLink url="https://goldochsen.de/">
              <img
                src={goldochsen}
                css={{
                  width: "320px",
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
                alt="Goldochsen"
              />
            </SponsorLink>
          </div>

          {/* Tera Row 2 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginTop: "30px",
              marginBottom: "80px",
              marginLeft: "10px",
              "@media(max-width: 680px)": {
                marginTop: "0px",
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
          {/* Tera Row 2 */}
        <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginTop: "30px",
              marginBottom: "80px",
              marginLeft: "10px",
              "@media(max-width: 680px)": {
                marginTop: "0px",
                marginBottom: "30px"
              }
            }}
          >
            <SponsorLink url="http://www.schmidt-transporte.com/">
              <img
                src={schmidt}
                css={{
                  width: "500px",
                  "@media(max-width: 980px)": {
                    width: "400px"
                  },
                  "@media(max-width: 680px)": {
                    width: "300px"
                  },
                  "@media(max-width: 460px)": {
                    width: "300px"
                  }
                }}
                data-cy="test-sponsor-image"
                alt="Schmidt Transporte"
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
            <SponsorLink url="https://www.mall-entsorgung.de/">
              <img
                src={mall}
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
                alt="Mall Ensorgung"
              />
            </SponsorLink>
          </div>
        </div>

        {/* Single Row Sponsors */}
        {/* <div
          css={{
            marginTop: "20px",
            marginBottom: "30px",
            "@media(max-width: 680px)": {
              marginBottom: "0px"
            }
          }}
        >
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
        </div> */}

        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
