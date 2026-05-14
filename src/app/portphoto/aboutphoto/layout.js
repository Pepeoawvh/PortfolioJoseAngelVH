export const metadata = {
  title: "Sobre el Fotógrafo — José Angel Valdés Hernández | Valparaíso",
  description:
    "Fotógrafo profesional titulado en el Instituto Arcos (2017). Especializado en larga exposición, light painting con láser, paisaje, arquitectura 360° y postproducción digital. Valparaíso, Chile.",
  alternates: {
    canonical: "/portphoto/aboutphoto",
  },
  openGraph: {
    title: "Sobre el Fotógrafo — José Angel Valdés Hernández",
    description:
      "Especialista en larga exposición, light painting, paisaje y fotografía 360°. Titulado Instituto Arcos, Viña del Mar 2017.",
    url: "https://joseangelportfolio.vercel.app/portphoto/aboutphoto",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "José Angel Valdés Hernández — Fotógrafo Profesional",
      },
    ],
  },
};

export default function AboutPhotoLayout({ children }) {
  return children;
}
