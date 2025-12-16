const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://amsel.tech',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  env: {
    NETLIFY_ENV: NETLIFY_ENV,
    SITE_URL: siteUrl,
  },
  // Redirects can be added here if needed
  // async redirects() {
  //   return [];
  // },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

