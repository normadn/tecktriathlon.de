export default function handler(req, res) {
  const {
    NODE_ENV,
    CONTEXT: NETLIFY_ENV = NODE_ENV
  } = process.env;

  const isProduction = NETLIFY_ENV === 'production';

  if (isProduction) {
    res.setHeader('Content-Type', 'text/plain');
    res.write(`User-agent: *
Allow: /`);
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.write(`User-agent: *
Disallow: /`);
    res.end();
  }
}

