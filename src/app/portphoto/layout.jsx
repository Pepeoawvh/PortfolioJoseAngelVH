import NavbarPhoto from "./components/NavbarPhoto";
import FooterPhoto from "./components/FooterPhoto";
import { PhotoProvider } from "./context/PhotoContext";
import DropdownSection from "./components/DropdownSection";

export const metadata = {
  title: "Fotografía Profesional — José Angel Valdés | Valparaíso, Chile",
  description:
    "Portafolio fotográfico de José Angel Valdés Hernández. Especialista en larga exposición, light painting con láser, paisaje y fotografía 360°. Titulado Instituto Arcos, Viña del Mar 2017.",
  alternates: {
    canonical: "/portphoto",
  },
  openGraph: {
    title: "Fotografía Profesional — José Angel Valdés",
    description:
      "Portafolio fotográfico. Larga exposición, light painting, paisaje y arquitectura 360°. Valparaíso, Chile.",
    url: "https://joseangelportfolio.vercel.app/portphoto",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portafolio fotográfico de José Angel Valdés Hernández",
      },
    ],
  },
};

export default function PortPhotoLayout({ children }) {
  return (
    <PhotoProvider>
      <div className="relative h-full bg-[#0a0a0a] text-gray-50 overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full z-50">
          <NavbarPhoto />
        </div>

        <DropdownSection />

        <main className="relative z-0 pt-[80px]">{children}</main>

        <FooterPhoto />
      </div>
    </PhotoProvider>
  );
}
