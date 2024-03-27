import Navbar from "./components/Navbar";
import "./globals.css";
import WspButton from "./components/WspButton.jsx";
import {jost} from './ui/fonts'
export const metadata = {
  title: "JVH Portafolio",
  description: "NextJS Proyect",
};

export default function RootLayout({ children }) {
  return (
    <html className={`  w-100 overflow-x-hidden bg-[#191923]`} lang="en">
      <Navbar />
      <body className={`bg-[#191923] ${jost.className}`}>
        {children}
        <WspButton />
      </body>
    </html>
  );
}
