import React from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakerSlider from "./SpeakerSlider";
import Mentors from "./Mentors";

import cubes3webp from "../assets/img/icons/cubes-3.webp";
import cubes3png from "../assets/img/icons/cubes-3.png";
import norman from "../assets/img/speakers/norman1.jpg";
import andrei from "../assets/img/speakers/andrei.jpg";
import sina from "../assets/img/speakers/sina2.jpg";

import ContentWrapper from "./ContentWrapper";

const speakers = [
  {
    name: "Norman Saade",
    title: "Software-Entwickler",
    description:
      "Norman's Spezialgebiete sind Mobile Apps, Websiten und Datenanalyse. Er ist studierte Wirtschaftsingenieur (KIT, Master of Science) und hat bereits mehrere eigene Unternehmen gegründet und auch für Firmen wie z.B. Google gearbeitet, wo er auch Andrei kennenlernte. In seiner Freizeit liebt er es viel Zeit in der Natur zu verbringen und sich sportlich zu fordern.",
    image: norman
  },
  {
    name: "Andrei Duma",
    title: "Software-Entwickler",
    description:
      "Andrei ist Vollblut Software Entwickler. Am Liebsten konzentriert er sich auf Backend-Anwendungen, aber auch im Frontend ist er zu Hause. Er hat Informatik studiert und nebenbei vier Praktika bei Google absolviert bevor er für mehrere Jahre für Adobe arbeitete. Andrei ist passionierter Bergsteiger und reist in seiner Freizeit gerne um die Welt.",
    image: andrei
  },
  {
    name: "Sina Eitel",
    title: "Web-Designerin",
    description:
      "Sina designt in ihrer Freizeit gerne Logos, Flyer und Web-Anwendungen, aber auch sie kann im Frontend Hand anlegen. Sie ist das Organisationtalent im Team und sorgt mit ihrem Lachen stets für gute Stimmung. Beruflich ist Sina als Polizistin unterwegs und bringt hier Verbrecher zur Strecke.",
    image: sina
  }
];

const Speakers = () => (
  <section
    css={{
      backgroundColor: "#f8f8f8",
      position: "relative"
    }}
    id="team"
  >
    <ContentWrapper>
      <h1
        css={{
          paddingTop: "112px",
          paddingBottom: "48px",
          textAlign: "center",
          position: "relative",
          zIndex: "3",
          "@media(max-width: 820px)": {
            paddingTop: "100px",
            paddingBottom: "24px"
          }
        }}
      >
        amsel.tech Team
      </h1>
      {/* Desktop */}
      <div
        css={{
          display: "grid",
          position: "relative",
          zIndex: 3,
          maxWidth: speakers.length * 500,
          marginLeft: "auto",
          marginRight: "auto",
          gridTemplateColumns: speakers
            .map(() => "1fr ")
            .reduce((a, b) => a + b),
          "@media(max-width: 1120px)": {
            display: "none"
          }
        }}
      >
        {speakers.map((speaker) => (
          <SpeakerCard {...speaker} key={speaker.name} />
        ))}
      </div>
      {/* Mobile */}
      <div
        css={{
          paddingBottom: "30px",
          "@media(min-width: 1120px)": { display: "none" }
        }}
      >
        <SpeakerSlider speakers={speakers} />
      </div>
      <picture
        css={{
          zIndex: "1",
          width: "235px",
          height: "289px",
          position: "absolute",
          bottom: "-250px",
          right: "62px",
          display: "block",
          "@media(max-width: 1000px)": {
            display: "none"
          }
        }}
      >
        <source srcSet={cubes3webp} type="image/webp" />
        <source srcSet={cubes3png} type="image/png" />
        <img
          css={{
            "@media(max-width: 1000px)": {
              display: "none"
            }
          }}
          src={cubes3png}
          alt="Floating cubes"
        />
      </picture>
      {/*<Mentors /> */}
    </ContentWrapper>
  </section>
);

export default Speakers;
