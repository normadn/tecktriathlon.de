import React from "react";
import Head from "next/head";

import FAQs from "../src/components/FAQs";
import VideoIntro from "../src/components/VideoIntro";
import BriefSummary from "../src/components/BriefSummary";
import SellingPoints from "../src/components/SellingPoints";
import Footer from "../src/components/Footer";
import Podcast from "../src/components/Podcast";
import Landing from "../src/components/Landing";
import Sponsors from "../src/components/Sponsors";
import Speakers from "../src/components/Speakers";
import EventSchedule from "../src/components/EventSchedule";
import MailingListSignup from "../src/components/MailingListSignup";
import HackerTestimonials from "../src/components/HackerTestimonials";
import Tracks from "../src/components/Tracks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Teck Triathlon | Volkstriathlon in Bissingen an der Teck</title>
        <meta
          name="description"
          content="Jedermann Triathlon am Fuße der Teck"
        />
        <meta
          name="keywords"
          content="Teck, Triathlon, Volkstriathlon, Tecktriathlon"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tecktriathlon.de" />
        <meta
          property="og:title"
          content="Teck Triathlon | Volkstriathlon in Bissingen an der Teck"
        />
        <meta property="og:image" content="/sharing-triathlon.png" />
        <meta
          property="og:description"
          content="26.08.2023 - Der Cross-Country Triathlon bei dem der Spaß im Vordergrund steht :)"
        />
        <meta property="og:site_name" content="Teck Triathlon" />
        <meta property="og:locale" content="de_DE" />
      </Head>
      <div css={{ overflowX: "hidden" }}>
        <div>
          <Landing />
          <VideoIntro />
          <SellingPoints />
          <Sponsors />
          <BriefSummary />
          <FAQs />
          <Tracks />
          {/*<MailingListSignup />
          <HackerTestimonials />
          <Speakers />
          <EventSchedule />
          <Podcast />*/}
          <Footer />
        </div>
      </div>
    </>
  );
}

