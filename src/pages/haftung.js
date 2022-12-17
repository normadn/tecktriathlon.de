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
          Für die Haftung bei der Sportveranstaltung gelten die gesetzlichen Bestimmungen. Der Veranstalter übernimmt keinerlei Haftung bei Unfällen, Diebstählen oder anderen Schadensfällen.
          <br/>
          Durch die Anmeldung erlaubt jeder Teilnehmer, dass Name und Bilder von den Medien und Fotoservice gratis und uneingeschränkt verwendet werden dürfen, soweit dies im Zusammenhang mit der Veranstaltung steht. Dies gilt auch für mitgereiste Angehörige bzw. Betreuer oder Fans.
          <br/>
          Mit der Anmeldung erklärt jeder Teilnehmer dass die Verzichtserklärung und Haftungsfreistellung sorgfältig und im Einzelnen durchgelesen und verstanden wurde und er mit deren Inhalt ausdrücklich einverstanden ist.
          <br/>
          Hinweis laut Datenschutzgesetz: Die Daten werden maschinell gespeichert.
          </p>
        
        </div>
      </ContentWrapper>
    </section>
    <Footer />
  </div>
);
