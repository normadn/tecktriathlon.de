import React from "react";
import fetch from "unfetch";
import Helmet from "react-helmet";
import ApolloClient from "apollo-boost";
import * as Sentry from "@sentry/browser";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import FAQs from "../components/FAQs";
import pjson from "../../package.json";
import BriefSummary from "../components/BriefSummary";
import SellingPoints from "../components/SellingPoints";
import Footer from "../components/Footer";
import Podcast from "../components/Podcast";
import Landing from "../components/Landing";
import Sponsors from "../components/Sponsors";
import Speakers from "../components/Speakers";
import EventSchedule from "../components/EventSchedule";
import MailingListSignup from "../components/MailingListSignup";
import HackerTestimonials from "../components/HackerTestimonials";

import favicon from "../assets/img/icons/favicon-amsel.ico";
import sharingImage from "../assets/img/logo/logo-with-text.svg";

export default () => {
  let environment = process.env.NETLIFY_ENV;

  switch (environment) {
    case "deploy-preview":
      environment = "development";
    case "branch-deploy":
      environment = "staging";
    case "production":
      environment = "production";
    default:
      environment = "development";
  }

  if (environment !== "development") {
    // Sentry.init({
    //   environment,
    //   release: pjson.version,
    //   dsn: "https://fcd2394efcca4752b9b9b6742861e882@sentry.io/1317531"
    // });
  }

  const BASE_URL = "https://app.qhacks.io/graphql";

  const apolloClient = new ApolloClient({
    uri: BASE_URL,
    fetch
  });

  return (
    <ApolloProvider client={apolloClient}>
      <div css={{ overflowX: "hidden" }}>
        <Helmet
          title="Amsel.tech | Software Agentur an der Teck"
          meta={[
            {
              name: "description",
              content:
                "Amsel.tech ist die Software Argentur in Bissingen an der Teck"
            },
            {
              name: "keywords",
              content:
                "Sotware, Agentur, Bissingen, Teck"
            },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0"
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              property: "og:url",
              content: "https://amsel.tech/"
            },
            {
              property: "og:title",
              content: "Amsel.tech | Software Agentur an der Teck"
            },
            {
              property: "og:image",
              content: sharingImage
            },
            {
              property: "og:description",
              content:
                "Amsel.tech ist die Software Argentur in Bissingen an der Teck. Website und App Entwicklung vor Ihrer Haustür."
            },
            {
              property: "og:site_name",
              content: "Amsel.tech"
            },
            {
              property: "og:locale",
              content: "de_DE"
            }
          ]}
          link={[
            {
              rel: "shortcut icon",
              href: `${favicon}`
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          <Landing />
          <SellingPoints/>
          <Sponsors />
          <FAQs />
          {/*<MailingListSignup />
          <HackerTestimonials />
          <Speakers />
          <EventSchedule />
          <Podcast />*/}
          <BriefSummary/>
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  );
};
