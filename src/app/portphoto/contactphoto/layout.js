export const metadata = {
  title: "Contacto Fotografía — José Angel Valdés | Valparaíso, Chile",
  description:
    "Contrata a José Angel Valdés para proyectos fotográficos. Fotografía de paisaje, arquitectura, producto, retrato y larga exposición. Disponible en Valparaíso, Chile.",
  alternates: {
    canonical: "/portphoto/contactphoto",
  },
  openGraph: {
    title: "Contacto — Fotografía Profesional | José Angel Valdés",
    description:
      "Fotografía comercial y artística en Valparaíso, Chile. Paisaje, arquitectura 360°, producto y larga exposición.",
    url: "https://joseangelportfolio.vercel.app/portphoto/contactphoto",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto fotográfico — José Angel Valdés Hernández",
      },
    ],
  },
};

export default function ContactPhotoLayout({ children }) {
  return children;
}
