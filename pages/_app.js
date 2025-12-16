import React from "react";
import CookieConsent from "react-cookie-consent";
import Head from "next/head";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import "../src/pages/index.css";

// Create emotion cache
const clientSideEmotionCache = createCache({ key: "css", prepend: true });

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  const environment = process.env.NETLIFY_ENV || "development";

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {environment === "production" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=UA-139155654-1`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-139155654-1', {
                  page_path: window.location.pathname
                });
              `
            }}
          />
        </>
      )}
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText="Einverstanden"
        declineButtonText="Nein Danke"
        style={{ background: "#020066" }}
        buttonStyle={{
          background: "#ffffff",
          color: "#020066",
          fontSize: "13px"
        }}
        declineButtonStyle={{
          background: "#ffffff",
          color: "#020066",
          fontSize: "13px"
        }}
        cookieName="gatsby-gdpr-google-analytics"
      >
        Wir möchten Cookies verwenden, um unsere Website zu verbessern
      </CookieConsent>
    </CacheProvider>
  );
}

export default MyApp;

