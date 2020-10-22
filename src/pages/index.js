import React from "react";
import fetch from "unfetch";
import Helmet from "react-helmet";
import ApolloClient from "apollo-boost";
import * as Sentry from "@sentry/browser";
import { ApolloProvider } from "react-apollo";
import CookieConsent from 'react-cookie-consent';

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
import Tracks from "../components/Tracks";

import favicon from "../assets/img/icons/favicon-tvb.ico";
import sharingImage from "../assets/img/logo/sharing-tvb.png";

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
          title="Teck Triathlon | Volkstriathlon in Bissingen an der Teck"
          meta={[
            {
              name: "description",
              content:
                "Jedermann Triathlon am Fuße der Teck"
            },
            {
              name: "keywords",
              content:
                "Triathlon, Volkstriathlon, Teck"
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
              content: "https://tecktriathlon.de"
            },
            {
              property: "og:title",
              content: "Teck Triathlon | Volkstriathlon in Bissingen an der Teck"
            },
            {
              property: "og:image",
              content: sharingImage
            },
            {
              property: "og:description",
              content:
                "Der Cross-Country Triathlon bei dem der Spaß im Vordergrund steht :)"
            },
            {
              property: "og:site_name",
              content: "Teck Triathlon"
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
          <html lang="de" />
        </Helmet>
        <div>
          <Landing />
          <MailingListSignup />
          <SellingPoints/>
          <Sponsors />
          <BriefSummary/>
          <FAQs />
          <Tracks />
          {/*<MailingListSignup />
          <HackerTestimonials />
          <Speakers />
          <EventSchedule />
          <Podcast />*/}
          <Footer />
        </div>
        <CookieConsent
          location="bottom"
          enableDeclineButton
          buttonText="Einverstanden"
          declineButtonText="Nein Danke"
          style={{ background: "#11213f" }}
          buttonStyle={{ background: "#ffffff" , color: "#11213f", fontSize: "13px" }}
          declineButtonStyle={{ background: "#ffffff" , color: "#11213f", fontSize: "13px" }}
          cookieName="gatsby-gdpr-google-analytics">
          Wir möchten Cookies verwenden, um unsere Website zu verbessern
        </CookieConsent>
      </div>
    </ApolloProvider>
  );
};
