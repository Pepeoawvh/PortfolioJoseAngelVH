import "./globals.css";
import { jost } from './ui/fonts';
import { Suspense } from 'react';

// Metadata mejorada y expandida para Next.js App Router
export const metadata = {
  title: "José Angel Valdés Hernández | Desarrollo Web & Fotografía Profesional",
  description: "Portafolio de José Angel Valdés Hernández — Desarrollador Web Fullstack y Fotógrafo Profesional con base en Valparaíso, Chile. Proyectos con React, Next.js, Node.js y especialización en larga exposición y light painting.",
  keywords: [
    "desarrollo web fullstack", "desarrollador web Chile", "React developer", "Next.js",
    "fotografía profesional Chile", "fotógrafo Valparaíso", "light painting", "larga exposición",
    "fotografía 360", "portfolio creativo", "Node.js", "MongoDB", "fotografía paisaje Chile"
  ],
  authors: [{ name: 'José Angel Valdés Hernández' }],
  creator: 'José Angel Valdés Hernández',
  publisher: 'José Angel Valdés Hernández',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://joseangelportfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'José Angel Valdés Hernández | Desarrollo Web & Fotografía Profesional',
    description: 'Portafolio de Desarrollador Web Fullstack y Fotógrafo Profesional. Valparaíso, Chile.',
    url: 'https://joseangelportfolio.vercel.app',
    siteName: 'Portafolio de José Angel Valdés Hernández',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'José Angel Valdés Hernández — Desarrollador Web Fullstack y Fotógrafo Profesional',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Angel Valdés Hernández | Desarrollo Web & Fotografía Profesional',
    description: 'Portafolio de Desarrollador Web Fullstack y Fotógrafo Profesional. Valparaíso, Chile.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
  },
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
        {/* Skip link — WCAG 2.4.1: permite saltar al contenido principal con teclado */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-medium focus:rounded"
        >
          Saltar al contenido principal
        </a>
        <Suspense fallback={<div role="status" aria-live="polite" className="min-h-screen flex items-center justify-center">Cargando...</div>}>
          <div className="min-h-screen flex flex-col">
            <div id="main-content" className="flex-grow">
              {children}
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}