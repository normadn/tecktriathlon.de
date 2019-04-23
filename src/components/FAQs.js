import React from "react";
import ContentWrapper from "./ContentWrapper";

const questionsAndAnswers = [
  {
    question: "Wie teuer ist eine neue Website?",
    answer:
      "Das ist natürlich vom Umfang abhängig. Erfahrungsgemäß zwischen 3-10k €."
  },
  {
    question: "Wie kann ich euch vertrauen, dass ihr meine Kundendaten nicht an Dritte weitergebt?",
    answer: (
      <span>
        Wir stellen höchste Ansprüche an das Thema Datensicherheit. Siehe auch {" "}
        <a
          href="https://amsel.tech/Impressum"
          rel="external noopener"
          target="_blank"
        >
          /Datenschutz
        </a>
      </span>
    )
  },
  {
    question: "Was könnt ihr alles entwickeln?",
    answer: "Websiten, Apps (Mobile, Progressive Web-Apps), Datenbankstrukturen, Analytic-Dashboards und Prozessautomatisierungen."
  },
  {
    question: "Welche Programmiersprachen benutzt ihr dafür?",
    answer:
      "Bei Websites und Web-Apps benutzen wir gerne ReactJS; Im Mobile Bereich können wir sowohl native als auch react-native. Zur Datenanalyse benutzen wir Python und im Backend hauptsächlich Golang."
  },
  {
    question: "Warum heißt ihr Amsel.tech?",
    answer:
      "Wir wohnen im Amselweg 7 in Bissingen an der Teck (fast wie Tech), lieben Vögel und Technik. Alles zusammen ergab den Namen :)"
  } //,
  // {
  //   question: "How do I apply?",
  //   answer:
  //     "Applications will roll out at the end of November, so make sure to stay in the loop by following our social media pages or signing up for our newsletter (link to top). You don't need to be an expert hacker or to have been to a hackathon before - we just want to see what makes you creative and unique!"
  // }
];

const linkCss = {
  textDecoration: "underline",
  color: "#c81c2e",
  fontWeight: "400"
};

const FAQs = () => (
  <section id="faq" css={{ backgroundColor: "#ffffff" }}>
    <ContentWrapper>
      <div
        css={{
          padding: "110px 0 114px 0",
          "@media(max-width: 780px)": {
            padding: "64px 0 120px 0"
          }
        }}
      >
        <h1>Häufig gestellte Fragen</h1>
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
