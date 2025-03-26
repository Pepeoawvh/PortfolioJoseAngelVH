import "./globals.css";
import { jost } from './ui/fonts';
import { Suspense } from 'react';
import Script from 'next/script';

// Metadata mejorada y expandida para Next.js App Router
export const metadata = {
  title: "José Angel Valdés | Desarrollo Web & Fotografía",
  description: "Portfolio profesional de José Angel Valdés. Especialista en desarrollo web frontend y React. Fotógrafo con experiencia en paisaje y retrato. Soluciones digitales creativas y personalizadas.",
  keywords: [
    "desarrollo web", "frontend developer", "fotografía profesional", "diseño UI/UX", 
    "portfolio creativo", "Next.js", "React developer", "diseño web", "fotografía paisaje",
    "desarrollador web Chile", "diseñador web", "fotógrafo profesional Chile"
  ],
  authors: [{ name: 'José Angel Valdés' }],
  creator: 'José Angel Valdés',
  publisher: 'José Angel Valdés',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://joseangelportfolio.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'es-CL': '/es',
      'en-US': '/en',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'José Angel Valdés | Desarrollo Web & Fotografía',
    description: 'Portfolio profesional con trabajos destacados en desarrollo frontend y fotografía de paisaje y retrato.',
    url: 'https://joseangelportfolio.vercel.app',
    siteName: 'Portfolio de José Angel Valdés',
    images: [
      {
        url: 'https://joseangelportfolio.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'José Angel Valdés - Portfolio Profesional',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Angel Valdés | Desarrollo Web & Fotografía',
    description: 'Portfolio profesional con proyectos de desarrollo web y fotografía artística',
    images: ['https://joseangelportfolio.vercel.app/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="es" 
      className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#64ffda]/40 scrollbar-track-[#191923] selection:bg-[#64ffda]/30 selection:text-white"
    >
      <head>
        {/* Los elementos meta los gestiona Next.js automáticamente basados en el objeto metadata */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Etiquetas para combatir el contenido duplicado */}
        <link rel="canonical" href="https://joseangelportfolio.vercel.app" />

        {/* Información estructurada schema.org para mejor indexación */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "mainEntity": {
                "@type": "Person",
                "name": "José Angel Valdés",
                "url": "https://joseangelportfolio.vercel.app",
                "image": "https://joseangelportfolio.vercel.app/images/profile.jpg",
                "sameAs": [
                  "https://www.linkedin.com/in/jose-angel-valdes-hernandez/",
                  "https://github.com/Pepeoawvh",
                  "https://www.instagram.com/joseangel.vh/"
                ],
                "jobTitle": ["Desarrollador Web Frontend", "Fotógrafo"],
                "knowsAbout": ["React", "Next.js", "UI/UX", "Fotografía", "Diseño Web", "JavaScript", "TailwindCSS", "Diseño Responsive", "Edición de Imagen", "HTML5/CSS3"],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                }
              }
            })
          }}
        />
        
        {/* Añadimos una metadata adicional para la navegación segura */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </head>
      <body className={`bg-[#191923] ${jost.className} text-gray-300 antialiased overflow-x-hidden`}>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </Suspense>
      </body>
    </html>
  );
}