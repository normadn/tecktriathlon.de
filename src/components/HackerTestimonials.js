import React, { Component } from "react";
import MediaQuery from "react-responsive";

import ContentWrapper from "./ContentWrapper";
import TestimonialList from "./TestimonialList.js";
import TestimonialsBlurb from "./TestimonialsBlurb";
import TestimonialListCompressed from "./TestimonialListCompressed.js";
import TestimonialsBlurbCompressed from "./TestimonialsBlurbCompressed";

import stichler from "../assets/img/testimonials/stichler.jpg";
import hieke from "../assets/img/testimonials/hieke.jpg";

const testimonials = [
  {
    name: "Pascal Stichler",
    project: "Carl",
    projectLink: "https://www.carlfinance.de/",
    image: stichler,
    text:
      "Wir arbeiten bereits seit einem halben Jahr mit Amsel.tech zusammen und planen die Zusammenarbeit weiter fortzusetzen. In den letzten Monaten haben wir einige Web-Apps entwickeln lassen und sind von der zielgerichteten Umsetzung des Teams begeistert."
  },
  {
    name: "Clemens Hieke",
    project: "Konstaplan",
    projectLink: "",
    image: hieke,
    text:
      "Wir sind ein Igenieurbüro und möchten unsere Resourcen nicht mit Software-entwicklung verschwenden. Mit Amsel.tech entwickeln wir aktuell eine Rundumlösung für unseren online Auftritt. Bisher sind wir mit den Leistungen des Teams sehr zufrieden!"
  }
];

class HackerTestimonials extends Component {
  state = {
    currentTestimonial: 0
  };

  nextTestimonial() {
    this.setState({
      currentTestimonial: Math.min(
        this.state.currentTestimonial + 1,
        testimonials.length - 1
      )
    });
  }

  prevTestimonial() {
    this.setState({
      currentTestimonial: Math.max(this.state.currentTestimonial - 1, 0)
    });
  }

  render() {
    const blurb = (
      <span>
        Amsel.tech liefert
        <br />
        Schauen Sie was unsere Kunden zu sagen haben
      </span>
    );
    return (
      <section
        id="referenzen"
        css={{
          overflowX: "hidden"
        }}
      >
        <ContentWrapper>
          <MediaQuery query="screen and (min-width: 1000px)">
            <div
              css={{
                height: "575px",
                position: "relative"
              }}
            >
              <TestimonialsBlurb
                nextTestimonial={() => this.nextTestimonial()}
                prevTestimonial={() => this.prevTestimonial()}
                firstTestimonial={!this.state.currentTestimonial}
                lastTestimonial={
                  this.state.currentTestimonial === testimonials.length - 1
                }
                text={blurb}
              />
              <TestimonialList
                currentTestimonial={this.state.currentTestimonial}
                testimonials={testimonials}
              />
            </div>
          </MediaQuery>
          <MediaQuery query="screen and (max-width: 1000px)">
            <div css={{ margin: "0 0 80px 0" }}>
              <TestimonialsBlurbCompressed text={blurb} />
              <TestimonialListCompressed
                currentTestimonial={this.state.currentTestimonial}
                testimonials={testimonials}
              />
            </div>
          </MediaQuery>
        </ContentWrapper>
      </section>
    );
  }
}

export default HackerTestimonials;
