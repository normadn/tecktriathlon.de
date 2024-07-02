import React from "react";
import ContentWrapper from "./ContentWrapper";

const questionsAndAnswers = [
  {
    question: "Wo findet die Veranstaltung statt?",
    answer: "Lauwiesenweg 3, 73266 Bissingen an der Teck"
  },
  {
    question: "Wieviele Startplätze gibt es und gibt es ein Mindestalter?",
    answer:
      "175 Startplätze stehen zur Verfügung und jeder kann mitmachen. Die Teilnahme ist altersunabhängig. Minderjährige müssen nur eine Einverständniserklärung der Eltern mitbringen."
  },
  {
    question: "Bis wann kann ich mich anmelden?",
    answer:
      "Bis 2 Wochen vor Veranstaltungstermin, falls noch Plätze vorhanden. So können wir sicherstellen, dass wir auch eure T-Shirts bis dahin fertig bekommen."
  },
  {
    question: "Wie sind die Distanzen bei den einzelnen Disziplinen?",
    answer: "Schwimmen: 400 m; Radfahren: ca. 12 km; Laufen: ca. 6 km"
  },
  {
    question: "Wo führt die Rad- und Laufstrecke entlang?",
    answer: (
      <span>
        Hier findet ihr Informationen zu den <a href="#strecken">Strecken</a>{" "}
        (Link klicken)
      </span>
    )
  },
  {
    question: "Wo findet die Schwimmdisziplin statt?",
    answer: "Im Bissinger See."
  },
  {
    question: "Brauche ich ein Rennrad oder ein Mountainbike?",
    answer:
      "Ein Mountainbike. Die Strecke führt über Feld- und Schotterwege. E-Bikes sind nicht erlaubt."
  },
  {
    question: "Können wir auch zu Zweit an der Staffelwertung teilnehmen?",
    answer:
      "Ja, das geht auch! Bitte klickt dafür auf den Link 'TEAM-ANMELDUNG'. Beim dritten Teilnehmer einfach 'Zweierteam' ausfüllen und beim Bezahlen (logischerweise) auch nur für zwei Teilnehmer überweisen."
  },
  {
    question: "Wie hoch ist das Startgeld?",
    answer: "Einzelwertung: 35€; Staffelwertung: 35€ pro Person."
  },

  {
    question: "Wie kann ich das Startgeld bezahlen?",
    answer:
      "Am Besten einfach via diesem Paypal-Link: https://www.paypal.me/tecktriathlon. Alternativ kann auch via Überweisung bezahlt werden. IBAN: DE18611500200008160227; Eigentümer: Faustball Bissingen"
  },
  {
    question: "Wann und wo ist die Startnummernausgabe?",
    answer: "Um 9:00 – 9:45 Uhr am Sportplatz in Bissingen an der Teck"
  },
  {
    question: "Wann beginnt das Rennen?",
    answer:
      "Um 10:00 Uhr am Sportplatz Bissingen an der Teck in 12er Gruppen, Abstand 15 Minuten. Gruppeneinteilung laut Aushang. Startberechtigung nur in der eingeteilten Gruppe."
  },
  {
    question: "Welches sportliche Ausgangsniveau wird benötigt?",
    answer:
      "Um bei einem Volkstriathlon an den Start zu gehen, genügt, wenn du allgemein sportlich aktiv bist, eventuell auch als Ball- oder Mannschaftssportler. Eine Ausdauergrundlage ist natürlich ideal."
  },
  {
    question: "Wie sind die Teilnahmebedingungen?",
    answer: (
      <span>
        Siehe{" "}
        <a href="/teilnahmebedingungen">
          www.tecktriathlon.de/teilnahmebedingungen
        </a>
      </span>
    )
  },
  {
    question:
      "Wird der Tecktriathlon nach den Regularien der DTU durchgeführt?",
    answer: "Nein, wir orientieren uns lediglich an den Disziplinen."
  },
  {
    question: "Brauche ich spezielles Triathlon-Equipment?",
    answer:
      "Spezielles Triathlon-Equipment wie ein Neoprenanzug oder ein Moutainbike sind nicht zwingend erforderlich. Ein Helm ist jedoch Pflicht."
  },
  {
    question: "Welche Leistungen sind im Preis inbegriffen?",
    answer:
      "T-Shirt (S - 3XL), Finishergeschenk, warme Duschen, Wettkampfverpflegung inkl.  Bananen und Isotonic Sports Drink, Festzelt mit Verpflegung kalt/warm, tolle Stimmung, Siegerehrungen."
  }
];

const linkCss = {
  textDecoration: "underline",
  color: "#c81c2e",
  fontWeight: "400"
};

const FAQs = () => (
  <section id="informationen" css={{ backgroundColor: "#ffffff" }}>
    <ContentWrapper>
      <div
        css={{
          padding: "110px 0 114px 0",
          "@media(max-width: 780px)": {
            padding: "64px 0 120px 0"
          }
        }}
      >
        <h1>Alle Informationen zur Veranstaltung</h1>
        <div
          css={{
            paddingTop: "36px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            "@media(max-width: 1190px)": {
              display: "block"
            }
          }}
        >
          {questionsAndAnswers.map(({ question, answer }) => (
            <div
              key={question}
              css={{
                padding: "0px 64px 40px 0px",
                "@media(max-width: 780px)": {
                  paddingRight: "24px"
                }
              }}
            >
              <h2
                css={{
                  paddingBottom: "10px",
                  fontWeight: "500"
                }}
              >
                {question}
              </h2>
              <p
                css={{ fontSize: "14px", color: "#000000", lineHeight: "20px" }}
              >
                {answer}
              </p>
            </div>
          ))}
          <div css={{ paddingTop: "12px" }}>
            <h2 css={{ paddingBottom: "10px", fontWeight: "500" }}>
              Ihr habt noch mehr Fragen?
            </h2>
            <p css={{ fontSize: "14px", color: "#000000", lineHeight: "20px" }}>
              Kontaktiert uns einfach{" "}
              <a
                rel="external noopener"
                target="_blank"
                css={linkCss}
                href="mailto:alex@tecktriathlon.de"
              >
                alex@tecktriathlon.de
              </a>{" "}
              oder{" "}
              <a
                rel="external noopener"
                target="_blank"
                css={linkCss}
                href="mailto:patrick@tecktriathlon.de"
              >
                patrick@tecktriathlon.de
              </a>
              . Alternativ telefonisch unter 01578 1764211.
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default FAQs;
