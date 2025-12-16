import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="shortcut icon" href="/favicon-tvb.ico" />
        <meta name="description" content="Jedermann Triathlon am Fuße der Teck" />
        <meta name="keywords" content="Teck, Triathlon, Volkstriathlon, Tecktriathlon" />
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
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

