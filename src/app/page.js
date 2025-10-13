"use client";
import Welcome from "./components/ui/Welcome";
import NavbarIntro from "./components/layout/NavbarIntro";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="flex select-none flex-col min-h-screen bg-[#0a1914]">
      <NavbarIntro />
      <main className="flex-grow flex flex-col">
        <div className="relative flex-grow">
          <Welcome />
        </div>
      </main>
      <Footer />
    </div>
  );
}