import React from "react";

import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentWrapper from "../components/ContentWrapper";

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
        minHeight: "90vh"
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
            Haftungsausschluss
          </h1>
          {/* <p
            css={{
              fontSize: "24px",
              color: "#00205b",
              fontWeight: "600",
              marginBottom: "10px"
            }}
          >
            Haftungausschluss
          </p> */}
          <div
            css={{
              fontSize: "16px",
              color: "#000000",
              lineHeight: "20px",
              marginBottom: "10px"
            }}
          >
            Mit meiner Anmeldung erkenne ich die genannten Ordnungen und die
            Bedingungen des Ausrichters gemäß der Ausschreibung als verbindlich
            an.
          </div>
          <ol
            css={{
              fontSize: "16px",
              color: "#000000",
              lineHeight: "20px",
              marginBottom: "10px",
              paddingLeft: "20px"
            }}
          >
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Veranstalter übernimmt keine Haftung für Unfälle, Diebstähle
              oder sonstige Schadensfälle. Der Veranstalter haftet nur für
              vorsätzliche und grob fahrlässige Pflichtverletzungen.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Die Teilnahme erfolgt auf eigenes Risiko. Mir ist bekannt, dass
              ich eine risikobehaftete Sportart ausübe und ein hohes Maß an
              Eigenverantwortung übernehme. Ich erkläre, dass ich die für den
              Wettbewerb notwendige Ausdauer und Gesundheit habe. Ich stelle den
              Veranstalter und Ausrichter von sämtlichen Haftungsansprüchen
              frei, sofern diese nicht über die gesetzliche Haftpflicht gedeckt
              sind. Hierin inkludiert sind alle Ansprüche, die ich/meine
              Erben/sonstige berechtigte Dritte wegen erlittener Verletzungen
              oder im Todesfall geltend machen können. Ebenso stelle ich
              Veranstalter und Ausrichter von allen Haftungsansprüchen gegenüber
              Dritten frei, soweit diese aufgrund meiner Teilnahme Schaden
              erleiden.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Für die technische Sicherheit meiner Ausrüstung bin ich selbst
              verantwortlich.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Bei Änderungen in der Durchführung der Veranstaltung aufgrund
              höherer Gewalt oder behördlichen Anordnungen oder Abbruch des
              Wettkampfes durch Polizei oder wegen Gewitters habe ich keinen
              Anspruch auf Startgeldrückerstattung oder Schadenersatz.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Die Haftung des Veranstalters und Ausrichters, auch gegenüber
              Dritten, ist beschränkt auf Vorsatz und grobe Fahrlässigkeit. Dies
              gilt auch für die vom Veranstalter eingesetzten Firmen und Helfer.
              Die Haftung des Veranstalters für andere Schäden als solche aus
              der Verletzung des Lebens, des Körpers oder der Gesundheit ist
              ausgeschlossen, soweit sie nicht auf einer vorsätzlichen oder grob
              fahrlässigen Pflichtverletzung des Veranstalters, oder seines
              gesetzlichen Vertreters oder Erfüllungsgehilfen beruht.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Veranstalter haftet nicht für Ausrüstungsgegenstände, die in
              der Wechselzone abhanden kommen oder für andere abhanden gekommene
              Gegenstände der Teilnehmer soweit sie nicht auf einer
              vorsätzlichen oder grob fahrlässigen Pflichtverletzung des
              Veranstalters, oder seines gesetzlichen Vertreters oder
              Erfüllungsgehilfen beruht. Sie sollten daher gegen Diebstahl
              versichert sein.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Ich verpflichte mich, die Straßenverkehrsordnung einzuhalten, den
              Weisungen der Beauftragten des Veranstalters Folge zu leisten und
              an einer der beiden Wettkampfbesprechungen teilzunehmen. Die
              Positionierung eines Postens an einer Gefahrenstelle setzt auf
              keinen Fall die STVO außer Kraft.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Die bei der Anmeldung vom Teilnehmer angegebenen persönlichen
              Daten werden gespeichert und nur zur Durchführung und Abwicklung
              der Veranstaltung verarbeitet. Der Teilnehmer erklärt sich damit
              einverstanden, dass die in der Meldung genannten Daten für die
              Zeitnahme, Platzierung und Ergebnisse erfasst und weitergegeben
              sowie die im Zusammenhang mit der Veranstaltung gemachten und ihn
              darstellenden Fotos, Filmaufnahmen und Interviews ohne
              Vergütungsanspruch veröffentlicht werden dürfen. Der Veranstalter
              darf Bilder und Namen des Teilnehmers für Druckwerke aller Art
              auch für Werbezwecke für zukünftige Veranstaltungen, kostenlos und
              uneingeschränkt verwenden.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Weder Zuschauer, Betreuer oder Gäste der Veranstaltung dürfen
              aufgenommene Fotos, Film- oder Tonaufnahme für kommerzielle Zwecke
              verwenden. Der Veranstalter untersagt jegliche weitere Vermarktung
              durch Fotografen und Bilderdienste, die keine vertragliche
              Vereinbarung mit dem Veranstalter getroffen haben.
            </li>
          </ol>
          <div>
            Hiermit erkenne ich die Bedingungen der Ausschreibung und den
            Haftungsausschluss an.
          </div>
        </div>
      </ContentWrapper>
    </section>
    <Footer />
  </div>
);
