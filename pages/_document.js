import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

// Create emotion cache for SSR
const getEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};

export default class Document extends React.Component {
  render() {
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
          {/* Inject Emotion styles for SSR */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = getEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await ctx.renderPage();
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

