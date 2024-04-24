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
import reuschwald from "../assets/img/reuschwald.png";
import haupthaar from "../assets/img/sponsors/haupthaar.jpg";
import outhunt from "../assets/img/sponsors/Outhu.png";
import burgteck from "../assets/img/sponsors/burg-Teck-Logo.png";
import enzo from "../assets/img/sponsors/pizzeria-Altobelli.png";
import marienapo from "../assets/img/sponsors/marien-apotheke.jpg";

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
                      width: "230px"
                    },
                    "@media(max-width: 680px)": {
                      width: "170px"
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
                marginTop: "00px",
                marginBottom: "40px",
                marginLeft: "10px",
                "@media(max-width: 680px)": {
                  marginTop: "30px",
                  marginBottom: "30px"
                }
              }}
            >
              <SponsorLink url="http://www.out-hunt.de/">
                <img
                  src={outhunt}
                  css={{
                    width: "350px",
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
                  alt="Schmidt Transporte"
                />
              </SponsorLink>
            </div>

            {/* Tera Row 3 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr",
                marginTop: "10px",
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
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr",
                marginTop: "-60px",
                marginBottom: "20px",
                marginLeft: "10px",
                "@media(max-width: 680px)": {
                  marginTop: "0px",
                  marginBottom: "20px"
                }
              }}
            >
              <SponsorLink url="https://www.haupthaar.com/">
                <img
                  src={haupthaar}
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
                  alt="Haupthaar"
                />
              </SponsorLink>
            </div>

            {/* Tera Row 3 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr",
                marginTop: "20px",
                marginBottom: "20px",
                "@media(max-width: 680px)": {
                  marginBottom: "40px"
                }
              }}
            >
              <SponsorLink url="https://www.reuschwald.de/">
                <img
                  src={reuschwald}
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
                  alt="Reuschwald"
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
              <SponsorLink url="https://www.tv-bissingen.de/hauptverein/gaststaetten">
                <img
                  src={enzo}
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
                  alt="Pizzeria Altobelli"
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
              <SponsorLink url="https://www.burg-teck-alb.de/gastronomie/">
                <img
                  src={burgteck}
                  css={{
                    width: "350px",
                    "@media(max-width: 980px)": {
                      width: "350px"
                    },
                    "@media(max-width: 680px)": {
                      width: "190px"
                    },
                    "@media(max-width: 460px)": {
                      width: "170px"
                    }
                  }}
                  data-cy="test-sponsor-image"
                  alt="Burg Teck"
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
                marginBottom: "20px"
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
              <SponsorLink url="https://www.marienapotheke-bissingen.de/">
                <img
                  src={marienapo}
                  css={{
                    width: "700px",
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
                  alt="Marienapotheke Bissingen"
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
                marginBottom: "20px"
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
                  alt="Outhunt"
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
