import "./globals.css";
import { jost } from './ui/fonts';

export const metadata = {
  title: "JVH Portafolio",
  description: "NextJS Proyect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#20202a] scrollbar-track-[#191923]">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`bg-[#191923] ${jost.className} `}>
        {children}
      </body>
    </html>
  );
}