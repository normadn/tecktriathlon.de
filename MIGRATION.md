# Migration from Gatsby to Next.js

This project has been migrated from Gatsby to Next.js. Here are the key changes:

## What Changed

### Project Structure
- **Pages**: Moved from `src/pages/` to `pages/` (Next.js convention)
- **Components**: Remain in `src/components/` (no changes needed)
- **Static Assets**: Remain in `src/assets/` (Next.js webpack handles imports)
- **Public Assets**: Static files like manifest, icons remain in `public/`

### Dependencies
- **Removed**: All Gatsby-specific packages (`gatsby`, `gatsby-plugin-*`, `glamor`)
- **Added**: Next.js, @emotion/react (replaces glamor for CSS-in-JS), @apollo/client (updated from react-apollo)
- **Updated**: React to v18, other dependencies updated to compatible versions

### Configuration Files
- **next.config.js**: Replaces `gatsby-config.js` and `gatsby-node.js`
- **.babelrc**: Configured for Next.js with Emotion support
- **pages/_app.js**: Replaces Gatsby's root component, handles Apollo Client and global providers
- **pages/_document.js**: Handles HTML document structure and meta tags

### CSS-in-JS
- **Glamor** → **Emotion**: Components now use `@emotion/react` instead of `glamor`
- The `css` prop syntax remains the same, so components didn't need major changes

### Scripts
- `gatsby develop` → `npm run dev` (or `next dev`)
- `gatsby build` → `npm run build` (or `next build`)
- `gatsby serve` → `npm run start` (or `next start`)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Run development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Build for production:
   ```bash
   npm run build
   # or
   yarn build
   ```

## Environment Variables

The following environment variables are used (same as before):
- `NETLIFY_ENV` / `CONTEXT`: Environment context (production, development, etc.)
- `URL` / `NETLIFY_SITE_URL`: Production site URL
- `DEPLOY_PRIME_URL`: Deploy preview URL

## Notes

- **Apollo Client**: Updated to use `@apollo/client` instead of `react-apollo`
- **Analytics**: Google Analytics is now handled via Next.js Script component
- **Robots.txt**: Now dynamically generated via API route based on environment
- **404 Page**: Link updated to point to `/` instead of external URL

## Testing

The test setup should still work, but you may need to update:
- Jest configuration for Next.js
- Cypress tests to point to `http://localhost:3000` instead of `http://localhost:8000`

## Deployment

For Netlify deployment, you may need to update your build command:
- Build command: `npm run build` or `next build`
- Publish directory: `.next` (or configure Netlify to use Next.js preset)

