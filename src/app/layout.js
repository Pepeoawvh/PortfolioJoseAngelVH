import Navbar from "./components/Navbar";
import WspButton from "./components/WspButton.jsx";
import Footer from "./components/Footer";
import "./globals.css";
import {jost} from './ui/fonts'

export const metadata = {
  title: "JVH Portafolio",
  description: "NextJS Proyect",
};


export default function RootLayout({ children }) {

  return (
    <html className={`  w-100 overflow-x-hidden bg-[#191923]`} lang="en">
<body className={`bg-[#191923] ${jost.className}`}>
    <Navbar />
        {children}
        <Footer />
        <WspButton />
      </body>
    </html>
  );
}
