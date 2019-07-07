import React from "react";
import ContentWrapper from "./ContentWrapper";

const questionsAndAnswers = [
  {
    question: "Wo findet die Veranstaltung statt?",
    answer:
      "Lauwiesenweg 3, 73266 Bissingen an der Teck"
  },
  {
    question: "Wieviele Startplätze gibt es und gibt es ein Mindestalter?",
    answer: "100 Startplätze stehen zur Verfügung und jeder kann mitmachen. Die Teilnahme ist altersunabhängig."
  },
  {
    question: "Bis wann kann ich mich anmelden?",
    answer:
      "Bis 2 Wochen vor dem Veranstaltungstermin. So können wir sicher stellen, dass wir auch eure T-Shirts bis dahin fertig bekommen."
  },
  {
    question: "Wie sind die Distanzen bei den einzelnen Disziplinen?",
    answer:
      "Schwimmen: 400 m; Radfahren: ca. 12 km; Laufen: ca. 6 km"
  },
  {
    question: "Wo führt die Rad- und Laufstrecke entlang?",
    answer:
      <span>
      Hier die {" "}
      <a
        href="https://drive.google.com/open?id=1paNI9DLHiosCX4ZGB2VMEt9JZ0F3k70f&usp=sharing"
        rel="external noopener"
        target="_blank"
      >
        Radstrecke 
      </a>
      <br/>
      Bzw. falls der Link Bei euch nicht geht: {" "}
      <a
        href="https://drive.google.com/file/d/18ix0Uj0Qt7xzmFMabhcr_ytr1LZStk29/view?usp=sharing"
        rel="external noopener"
        target="_blank"
      >
        Radstrecke Link 2
      </a>
      <br/>
      ... und hier die {" "}
      <a
        href="https://drive.google.com/open?id=16tmMdiTLbklomoKu8y-B1xdYq55zxUeV&usp=sharing"
        rel="external noopener"
        target="_blank"
      >
        Laufstrecke
      </a>
      <br/>
      Bzw. falls der Link Bei euch nicht geht: {" "}
      <a
        href="https://drive.google.com/file/d/1H7uDI33TBHNkrE_dq7cnWiBW_Rd_y4N3/view?usp=sharing"
        rel="external noopener"
        target="_blank"
      >
        Laufstrecke Link 2 
      </a>
    </span>
  },
  {
    question: "Brauche ich ein Rennrad oder ein Mountainbike?",
    answer:
      "Ein Mountainbike. Die Strecke führt über Feld- und Schotterwege."
  },
  {
    question: "Wie hoch ist das Startgeld?",
    answer: 
      "Einzelwertung: 25€; Staffelwertung: 25€ pro Person"
  },
  {
    question: "Wie kann ich das Startgeld bezahlen?",
    answer: 
      "Am Besten einfach via diesem Paypal-Link: https://www.paypal.me/tecktriathlon. Alternativ kann auch via Überweisung bezahlt werden. IBAN: DE18611500200008160227; Eigentümer: Faustball Bissingen;"
  },
  {
    question: "Wann und wo ist die Startnummernausgabe?",
    answer:
      "Um 9:00 – 9:45 Uhr am Sportplatz in Bissingen an der Teck"
  },
  {
    question: "Wann beginnt das Rennen?",
    answer:
      "Um 10:00 Uhr am Sportplatz Bissingen an der Teck in 10er Gruppen, Abstand 15 Minuten. Gruppeneinteilung laut Aushang. Startberechtigung nur in der eingeteilten Gruppe."
  },
  {
    question: "Welches sportliches Ausgangsniveau wird benötigt?",
    answer:
      "Um bei einem Volkstriathlon an den Start zu gehen, genügt, wenn du allgemein sportlich aktiv bist, eventuell auch als Ball- oder Mannschaftssportler. Eine Ausdauergrundlage ist natürlich ideal."
  },
  {
    question: "Wie sieht es mit der Haftung aus?",
    answer: (
      <span>
        Jeder haftet für sich selbst. Eine genauere Erläuterung findet ihr unter {" "}
        <a
          href="/haftung"
          rel="external noopener"
          target="_blank"
        >
          /haftung
        </a>
      </span>
    )
  },
  {
    question: "Wieviel Vorbereitungszeit sollte ich einplanen?",
    answer:
      "Als Vorbereitungszeit auf einen Volkstriathlon genügen 4 bis 6 Wochen."
  },
  {
    question: "Brauche ich spezielles Triathlon-Equipment?",
    answer:
      "Spezielles Triathlon-Equipment wie ein Neoprenanzug oder ein Moutainbike sind nicht zwingend erforderlich. Ein Helm ist jedoch Pflicht."
  },
  {
    question: "Welche Leistungen sind im Preis inbegriffen?",
    answer:
      "T-Shirt, Finishergeschenk, warme Duschen, Wettkampfverpflegung inkl.  Bananen und Isotonic Sports Drink, Festzelt mit Verpflegung kalt/warm, tolle Stimmung, Siegerehrungen, Startplatzübertragung im Krankheitsfall"
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
