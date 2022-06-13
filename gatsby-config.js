const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://amsel.tech',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const allowCrawling = {
  policy: [{ userAgent: '*' }],
  sitemap: null
};

const disallowCrawling = {
  policy: [{ userAgent: '*', disallow: ['/'] }],
  sitemap: null,
  host: null
};

module.exports = {
  siteMetadata: {
    siteUrl,
    title: "Teck Triathlon | Volkstriathlon in Bissingen an der Teck"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    "gatsby-plugin-glamor",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-139155654-1',
        },
        environments: ['production']
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Teck Triathlon | Volkstriathlon in Bissingen an der Teck",
        short_name: "Tecktriathlon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/assets/img/logo/tvb-squared.png"
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: allowCrawling,
          development: disallowCrawling,
          'branch-deploy': disallowCrawling,
          'deploy-preview': disallowCrawling
        }
      }
    }
  ]
};
