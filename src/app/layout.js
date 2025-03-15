import "./globals.css";
import { jost } from './ui/fonts';

export const metadata = {
  title: "José Angel Valdés | Desarrollo Web & Fotografía",
  description: "Portafolio profesional de José Angel Valdés, especialista en desarrollo web y fotografía",
  keywords: "desarrollo web, fotografía, diseño, portfolio, frontend, NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#64ffda]/40 scrollbar-track-[#191923] selection:bg-[#64ffda]/30 selection:text-white">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#191923" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className={`bg-[#191923] ${jost.className} text-gray-300 antialiased overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}