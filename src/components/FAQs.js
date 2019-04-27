import React from "react";
import ContentWrapper from "./ContentWrapper";

const questionsAndAnswers = [
  {
    question: "Wo findet die Veranstaltung statt?",
    answer:
      "Lauwiesenweg 3, 73266 Bissingen an der Teck"
  },
  {
    question: "Wie hoch ist das Startgeld?",
    answer: 
      "Einzelwertung: 20€; Staffelwertung: 20€ pro Person"
  },
  {
    question: "Wieviele Startplätze gibt es und gibt es ein Mindestalter?",
    answer: "100. Jeder kann mitmachen, egal wie alt oder jung er ist."
  },
  {
    question: "Bis wann kann ich mich anmelden?",
    answer:
      "Bis 2 Wochen vor dem Veranstaltungstermin. So können wir sicher stellen, dass wir auch eure Tshirts bis dahin fertig bekommen."
  },
  {
    question: "Wie sind die Distanzen bei den einzelnen Disziplinen?",
    answer:
      "Schwimmen: 400 m; Radfahren: ca. 20 km; Laufen: ca. 6 km"
  },
  {
    question: "Wann und wo ist die Startnummernausgabe?",
    answer:
      "Um 12:00 – 12:45 Uhr am Sportplatz Bissigen an der Teck"
  },
  {
    question: "Wann beginnt das Rennen?",
    answer:
      "Um 13:00 Uhr am Sportplatz Bissingen an der Teck in 10 Gruppen, Abstand 15 Minuten. Gruppeneinteilung laut Aushang. Startberechtigung nur in der eingeteilten Gruppe."
  },
  {
    question: "Welches sportliches Ausgangsniveau wird benötigt?",
    answer:
      "Um bei einem Volkstriathlon an den Start zu gehen, genügt, wenn Sie allgemein sportlich aktiv sind, eventuell auch als Ball- oder Mannschaftssportler. Eine Ausdauergrundlage ist natürlich ideal."
  },
  {
    question: "Wieviel Vorbereitungszeit sollte ich einplanen?",
    answer:
      "Als Vorbereitungszeit auf einen Volkstriathlon genügen 4 bis 6 Wochen."
  },
  {
    question: "Brauche ich spezielles Triathlon-Equipment?",
    answer:
      "Spezielles Triathlon-Equipment wie ein Neoprenanzug oder ein Rennrad sind nicht zwingend erforderlich. Ein Helm ist jedoch Pflicht."
  },
  {
    question: "Welche Leistungen sind im Preis inbegriffen?",
    answer:
      "T-Shirt, Finshergeschenk, Warme Duschen, Wettkampfverpflegung inkl.  Bananen und Isotonic Sports Drink, Festzelt mit Verpflegung kalt/warm, Tolle Stimmung, Siegerehrungen, Startplatzübertragung im Krankheitsfall"
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
              Kontaktiert uns einfach {" "}
              <a
                rel="external noopener"
                target="_blank"
                css={linkCss}
                href="mailto:norman@amsel.tech"
              >
                norman@amsel.tech
              </a>{" "}
              oder unter 07023 9577753
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default FAQs;
