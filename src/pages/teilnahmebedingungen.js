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
            Teilnahmebedingungen
          </h1>
          <div
            css={{
              fontSize: "24px",
              color: "#00205b",
              fontWeight: "600",
              marginTop: "20px",
              marginBottom: "10px"
            }}
          >
            Teilnahmeberechtigung
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
              Eine Anmeldung ist ausschließlich über die Website
              www.tecktriathlon.de möglich.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Startberechtigt sind Personen im Alter von 18 Jahren und älter,
              eine Vereinszugehörigkeit ist nicht erforderlich. Minderjährige
              müssen nur eine Einverständniserklärung der Eltern mitbringen.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Das Teilnehmerlimit wird pro Veranstaltung auf 150 Teilnehmer
              festgesetzt, eine Nachmeldemöglichkeit besteht nicht.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Die Teilnahme ist ein persönliches Recht und nicht auf einen
              Dritten übertragbar.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Veranstalter kann vor Ort nochmals die Bestätigung der
              Anerkennung der Teilnahmebedingungen durch eigenhändige
              Unterschrift verlangen.
            </li>
          </ol>
          <div
            css={{
              fontSize: "24px",
              color: "#00205b",
              fontWeight: "600",
              marginTop: "20px",
              marginBottom: "10px"
            }}
          >
            Gesundheit des Teilnehmers und Gefahren
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
              Der Teilnehmer nimmt an der Veranstaltung auf eigenes Risiko teil
              und erklärt verbindlich, dass er körperlich fit ist, für den
              Wettkampf ausreichend trainiert hat und keine gesundheitlichen
              Bedenken gegen die Teilnahme bestehen. Der Teilnehmer verpflichtet
              sich, ggfs. vorher durch ärztliche Untersuchung festzustellen,
              dass gesundheitliche Bedenken für eine Teilnahme nicht bestehen
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Dem Teilnehmer ist bekannt, dass die Teilnahme am Teck Triathlon
              Gefahren in sich birgt und das Risiko ernsthafter Verletzungen bis
              hin zu tödlichen Unfällen und Eigentumsbeschädigungen nicht
              ausgeschlossen werden kann.
            </li>
          </ol>
          <div
            css={{
              fontSize: "24px",
              color: "#00205b",
              fontWeight: "600",
              marginTop: "20px",
              marginBottom: "10px"
            }}
          >
            Pflichten des Teilnehmers
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
              Der Teilnehmer ist verpflichtet den Hinweisen und Vorgaben des
              Veranstalters sowie den Anweisungen der Hilfskräfte sowie den
              Kräften der örtlichen Sicherheitsbehörden ohne Einschränkung Folge
              zu leisten. Der Veranstalter ist berechtigt, bei
              Zuwiderhandlungen, welche den ordnungsgemäßen Ablauf der
              Veranstaltung stören oder die Sicherheit der Teilnehmer gefährden
              können, jederzeit den Teilnehmer von der Veranstaltung
              auszuschließen.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Teilnehmer ist verpflichtet, sich mit den Wettkampfstrecken
              vertraut zu machen. Er akzeptiert mit seiner Teilnahme die vom
              Veranstalter vorgegebenen Strecken so wie sie am Wettkampftag
              sind.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Die Verantwortung für die einwandfreie Ausrüstung trägt der
              Teilnehmer, er hat insbesondere während des Radfahrens einen
              entsprechenden Helm zu tragen.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Teilnehmer erklärt sich damit einverstanden, dass er während
              des Wettbewerbs auf seine Kosten medizinisch behandelt wird, falls
              das bei Auftreten von Verletzungen im Falle eines Unfalls und/oder
              bei Erkrankungen im Verlauf des Rennens ratsam sein sollte. Sollte
              eine medizinische Behandlung erforderlich werden, erklärt sich der
              Teilnehmer auch hiermit im Voraus einverstanden. Dem Teilnehmer
              ist bekannt, dass die Kosten für ärztliche Dienstleistungen nicht
              im Startgeld enthalten sind und ihm gegenüber nach den üblichen
              ärztlichen Tarifen direkt berechnet werden. Insoweit ist es Sache
              des Teilnehmers für eine ausreichende Versicherungsdeckung zu
              sorgen. Eine Haftung des Veranstalters ist hierfür ausgeschlossen.
            </li>
          </ol>
          <div
            css={{
              fontSize: "24px",
              color: "#00205b",
              fontWeight: "600",
              marginTop: "20px",
              marginBottom: "10px"
            }}
          >
            Haftungsausschluss
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
              Die Teilnahme am Teck Triathlon erfolgt auf eigenes Risiko.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Die Haftung des Veranstalters und/oder seiner Erfüllungsgehilfen
              ist, auch gegenüber Dritten auf Vorsatz und grobe Fahrlässigkeit
              beschränkt. Die Haftung ist für andere Schäden als solche aus der
              Verletzung des Lebens, des Körpers oder der Gesundheit
              ausgeschlossen soweit sie nicht auf einer vorsätzlichen oder grob
              fahrlässigen Pflichtverletzung des Veranstalters und/oder dessen
              Erfüllungsgehilfen beruht.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Veranstalter übernimmt keine Haftung für gesundheitliche
              Risiken des Teilnehmers im Zusammenhang mit der Teilnahme an der
              Veranstaltung.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Teilnehmer ist für seine persönlichen Wertgegenstände und die
              Wettkampfausrüstung alleine verantwortlich. Der Veranstalter
              haftet nicht für Ausrüstungsgegenstände oder andere abhanden
              gekommene Gegenstände und Bekleidungsstücke der Teilnehmer
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Teilnehmer stellt den Veranstalter sowie dessen Erfüllungs-
              und Verrichtungsgehilfen von jeglicher Haftung gegenüber Dritten
              frei, soweit diese Dritten Schäden in Folge des Teck Triathlon
              erleiden.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Haftungsausschluss bzw. die Haftungsbegrenzung gilt auch für
              Ansprüche, die Erben oder sonstige Dritte aufgrund von erlittenen
              Verletzungen oder im Todesfall geltend machen können.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Mit der Anmeldung zum Teck Triathlon bestätigt der Teilnehmer, die
              Verzichtserklärung, die Haftungsfreistellung und das Reglement
              gelesen und verstanden zu haben und diese vollumfänglich
              anzuerkennen
            </li>
          </ol>
          <div
            css={{
              fontSize: "24px",
              color: "#00205b",
              fontWeight: "600",
              marginTop: "20px",
              marginBottom: "10px"
            }}
          >
            Ausfall und Änderung der Veranstaltung, Nichtteilnahme
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
              Der Veranstalter ist berechtigt, den Ablauf der Veranstaltung
              abzuändern, zeitlich verzögert zu starten oder abzusagen, wenn die
              Bedingungen am Wettkampftag dies erforderlich machen.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Bei einem Ausfall oder einer Änderung der Veranstaltung aufgrund
              höherer Gewalt, behördlicher Anordnung, Änderungen der
              Genehmigungen, Bedingungen der Wettkampfstrecke oder aus jedem
              anderen Grund, der außerhalb der Kontrolle des Veranstalters
              liegt, hat der Teilnehmer keinen Anspruch auf Rückerstattung des
              Startgeldes und/oder Ersatz sonstiger Schäden, wie An- und
              Abreisekosten oder Hotelkosten.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Bei Nichtteilnahme, auch bei Krankheit, besteht kein Anspruch auf
              Rückerstattung der Startgebühr. Das gilt auch, wenn der Teilnehmer
              gegenüber dem Veranstalter zuvor seine Nichtteilnahme oder einen
              berechtigten Rücktritt erklärt.
            </li>
          </ol>
          <div
            css={{
              fontSize: "24px",
              color: "#00205b",
              fontWeight: "600",
              marginTop: "20px",
              marginBottom: "10px"
            }}
          >
            Datenerhebung und Datenverwertung, Nutzung der Bildrechte und
            Tonrechte
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
              Der Teilnehmer ist einverstanden, dass die in der Anmeldung
              gemachten und die später hochgeladenen bzw. eingereichten
              personenbezogene Angaben erfasst, gespeichert und insbesondere an
              vom Veranstalter beauftragte Unternehmen (z.B. kommerzielle Dritte
              zur Zeitmessung) weitergegeben werden, um dort zur Durchführung
              der Veranstaltung verarbeitet werden.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Teilnehmer ist einverstanden, dass seine persönlichen Daten
              aus der Anmeldung und die später von ihm
              hochgeladenen/eingereichten Daten im Internet öffentlich
              zugänglich sind.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Der Teilnehmer ist einverstanden, dass im Rahmen der Veranstaltung
              gemachte Fotos und Filmaufnahmen ohne Anspruch auf Vergütung
              uneingeschränkt vervielfältigt, verbreitet und veröffentlicht
              werden dürfen. Der Teilnehmer räumt dem Veranstalter ein, die
              Rechte an dem zur Verfügung gestellten Bild- und Tonmaterial
              unbeschränkt zu nutzen, ohne dass eine entgeltliche Verpflichtung
              gegenüber dem Teilnehmer begründet wird.
            </li>
          </ol>
          <div
            css={{
              fontSize: "24px",
              color: "#00205b",
              fontWeight: "600",
              marginTop: "20px",
              marginBottom: "10px"
            }}
          >
            Schlussbemerkungen
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
              Es gilt das Recht der Bundesrepublik Deutschland.
            </li>
            <li
              css={{
                marginBottom: "10px"
              }}
            >
              Sollten einzelne Bestimmungen dieser Bedingungen ganz oder
              teilweise unwirksam sein oder werden, berührt das die Wirksamkeit
              der übrigen Regelungen nicht. Eine unwirksame oder nichtige
              Bestimmung oder eines Teils einer Bestimmung wird durch eine
              solche Regelung ersetzt, die gesetzmäßig ist und dem Sinn und
              Zweck der beanstandenden Norm am nächsten kommt.
            </li>
          </ol>
        </div>
      </ContentWrapper>
    </section>
    <Footer />
  </div>
);
