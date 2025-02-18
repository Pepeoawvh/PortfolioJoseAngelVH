import React from "react";

const HeaderPhoto = () => (
  <header className="grid grid-cols-1 md:grid-cols-[0.71fr,1fr] items-center text-center py-6 mt-20 bg-gray-800 text-white">
    <div className="gap-4 items-center">
      <h1 className="text-2xl md:text-3xl font-bold">José Valdés Hernández</h1>
      <p className="text-lg text-[#FFB300]">Fotógrafo Profesional y Artista Visual</p>
    </div>
    <section className="text-center px-4 md:px-12 py-6">
      <p className="text-sm mx-auto text-left">
        Soy un fotógrafo profesional con más de 12 años de experiencia en distintos géneros fotográficos, especializado en técnicas de larga exposición, fotografía de paisaje y fotografía arquitectónica 360°.
      </p>
    </section>
  </header>
);

export default HeaderPhoto;