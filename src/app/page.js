"use client";
import Welcome from "./components/Welcome";
import NavbarIntro from "./components/NavbarIntro";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-min h-full bg-[#191923] ">
      <NavbarIntro />
      <main className="">
          <Welcome />
      </main>
      <Footer />
    </div>
  );
}