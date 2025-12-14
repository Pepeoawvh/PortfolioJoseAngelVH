"use client";
import { sourceSansPro } from "../ui/fonts";
import Carrusel from "./components/Carrusel";

export default function PortPhoto() {
  return (
    <div className={`flex flex-col ${sourceSansPro.className}`}>
      <main className="flex-grow bg-[#0a0a0a]">
        <div className="px-4">
          <div className="max-w-6xl mx-auto  animate-fade animate-once animate-duration-300">
            <Carrusel />
          </div>
        </div>
      </main>
    </div>
  );
}
