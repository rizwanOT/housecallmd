// Served at /robots.txt. Well-behaved crawlers follow this; abusive ones are
// blocked in src/middleware.js.
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', crawlDelay: 2 },
      {
        // Heavy SEO/data crawlers that add load but no patients.
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'PetalBot', 'Bytespider', 'BLEXBot', 'DataForSeoBot', 'serpstatbot'],
        disallow: '/',
      },
    ],
    host: 'https://housecallmd.com',
  };
}
