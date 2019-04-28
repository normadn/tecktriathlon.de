import React from "react";

import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentWrapper from "../components/ContentWrapper";
import ActionButton from "../components/ActionButton";
import notFoundImg from "../assets/img/icons/404.svg";

export default () => (
  <div
    css={{
      backgroundColor: "#f8f8f8",
      minHeight: "100vh",
      bottomMargin: "20px"
    }}
  >
    <Header standaloneVersion={true} />
    <section
      css={{
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "90vh",
      }}
    >
      <ContentWrapper>
        <div
          css={{
            paddingTop: "120px",
            paddingBottom: "50px"
          }}
        >
          <h1
            css={{
              textAlign: "center",
              fontSize: "44px",
              marginBottom: "20px",
              fontWeight: "700",
              "@media(max-width: 980px)": {
                fontSize: "38px"
              }
            }}
          >
            Haftung
          </h1>
          <p
            css={{ fontSize: "24px", color: "#00205b", fontWeight: "600", marginBottom: "10px"}}
          >
            Die Teilnahme erfolgt auf eigenes Risiko.
          </p>
          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
          
            Die Haftung des Veranstalters und Ausrichters  auch gegenüber Dritten ist beschränkt auf Vorsatz und grobe Fahrlässigkeit. Dies gilt auch für die vom Veranstalter eingesetzten Firmen und Helfer. <br/>
            Die Haftung des Veranstalters für andere Schäden als solche aus der Verletzung des Lebens, des Körpers oder der Gesundheit ist ausgeschlossen, soweit sie nicht auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung des Veranstalters, oder seines gesetzlichen Vertreters oder Erfüllungsgehilfen beruht. <br/>
            Der Veranstalter haftet nicht für Ausrüstungsgegenstände, die in der Wechselzone abhandenkommen oder für andere abhanden gekommene Gegenstände der Teilnehmer, soweit sie nicht auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung des Veranstalters, oder seines gesetzlichen Vertreters oder Erfüllungsgehilfen beruht. <br/>
            Mit Empfang der Startnummer erklärt der Teilnehmer verbindlich, dass gegen seine Teilnahme keine gesundheitlichen Bedenken bestehen <br/>
          </p>
        
        </div>
      </ContentWrapper>
    </section>
    <Footer />
  </div>
);
