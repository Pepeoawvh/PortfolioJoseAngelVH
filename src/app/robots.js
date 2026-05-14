export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://joseangelportfolio.vercel.app/sitemap.xml',
    host: 'https://joseangelportfolio.vercel.app',
  }
}
