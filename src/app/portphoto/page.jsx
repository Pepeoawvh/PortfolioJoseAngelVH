"use client";
import CarruselCircular from "../components/CarruselCircular";

const PortPhoto = () => {
  return (
    <div className="grid h-screen">
      <h1 className="text-center pt-4">Hola, Gracias por visitar mi portafolio personal</h1>

      <div className="grid sm:h-64 md:justify-items-center">
        <CarruselCircular
          width="100%"
          height="300px"
        />
      </div>
      <h2 className="text-center px-12">
        Soy Fotógrafo profesional y desarrollador web.
        Aquí exhíbo mi trabajo personal y mis intereses en torno a la
        fotografía, contáctame si quieres comentar o hablar sobre algún tema o
        proyecto.
      </h2>
      <div className="grid grid-cols-3 gap-4 px-12">
        <button className="bg-primary-600 h-12 rounded-full">
          <span>Fotolibros</span>
        </button>
        <button className="bg-primary-600 h-12 rounded-full z-40">Proyectos</button>
        <button className="bg-primary-600 h-12 rounded-full">Material Educativo</button>
      </div>
    </div>
  );
};

export default PortPhoto;