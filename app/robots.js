export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://zerodavinci.com/site.webmanifest',
  };
}
