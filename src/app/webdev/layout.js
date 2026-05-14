export const metadata = {
  title: "Desarrollo Web Fullstack — José Angel Valdés | Valparaíso, Chile",
  description:
    "Portafolio de desarrollo web fullstack de José Angel Valdés Hernández. Proyectos con React, Next.js, Node.js y MongoDB. Desarrollador freelance disponible en Chile.",
  alternates: {
    canonical: "/webdev",
  },
  openGraph: {
    title: "Desarrollo Web Fullstack — José Angel Valdés",
    description:
      "Proyectos fullstack con React, Next.js, Node.js y MongoDB. Valparaíso, Chile.",
    url: "https://joseangelportfolio.vercel.app/webdev",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portafolio de Desarrollo Web de José Angel Valdés Hernández",
      },
    ],
  },
};

export default function WebDevLayout({ children }) {
  return children;
}
