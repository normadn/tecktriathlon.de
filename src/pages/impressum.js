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
            Impressum
          </h1>
          <p
            css={{ fontSize: "24px", color: "#00205b", fontWeight: "600", marginBottom: "10px"}}
          >
            Angaben gemäß § 5 TMG
          </p>
          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
            Saade Ventures GmbH <br/>
            Frankenweg 4 <br/>
            71263 Weil der Stadt <br/>
            <br/>
            Handelsregister: HRB755587 <br/>
            Registergericht: Amtsgericht Leonberg <br/>
            <br/>
            Vertreten durch die Geschäftsführer: <br/>
            Norman Saade <br/>
          </p>

          <p
            css={{ fontSize: "24px", color: "#00205b", fontWeight: "600", marginBottom: "10px"}}
          >
            Kontakt
          </p>
          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
            Telefon: +49 160 2584882 <br/>
            E-Mail: norman@saadeventures.com 
          </p>

          <p
          css={{ fontSize: "24px", color: "#00205b", fontWeight: "600", marginBottom: "10px"}}
          >
            Umsatzsteuer
          </p>
          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/>
            DE305516952
          </p>

          <p
            css={{ fontSize: "24px", color: "#00205b", fontWeight: "600", marginBottom: "10px"}}
          >
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </p>
          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
            Norman Saade
            Amselweg 7
            73266 Bissingen an der Teck
          </p>

          <p
            css={{ fontSize: "24px", color: "#00205b", fontWeight: "600", marginBottom: "10px"}}
          >
            Streitschlichtung
          </p>
          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum.
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <p
            css={{ fontSize: "24px", color: "#00205b", fontWeight: "600", marginBottom: "10px"}}
          >
            Haftung für Inhalte
          </p>
          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <p
            css={{ fontSize: "24px", color: "#00205b", fontWeight: "600", marginBottom: "10px"}}
          >
            Haftung für Links
          </p>
          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <p
            css={{ fontSize: "24px", color: "#00205b", fontWeight: "600", marginBottom: "10px"}}
          >
            Urheberrecht
          </p>
          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <p
            css={{ fontSize: "16px", color: "#000000", lineHeight: "20px", marginBottom: "10px" }}
          >
           Quelle: https://www.e-recht24.de
          </p>
        
        </div>
      </ContentWrapper>
    </section>
    <Footer />
  </div>
);
