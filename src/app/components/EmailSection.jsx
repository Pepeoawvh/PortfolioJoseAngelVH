"use client";
import Form from "./Form";
const EmailSection = () => {
  return (
    <section
      id="contact"
      className="animate-fade animate-delay-300 grid md:grid-cols-2 py-20 sm:pt-40 gap-4 relative px-12"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Conversemos</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}Me encantaría
          participar en proyectos novedosos con equipos creativos y
          comprometidos. ¡Hablemos! Tengo experiencia en el area de las artes
          visuales, fotografía y diseño, desde donde puedo aportar con un enfoque
          diferente a distintos grupos de trabajo.
          Visita mis redes sociales.
          Si tienes alguna idea o proyecto en mente, no dudes en contactarme.
        </p>
      </div>

      <Form />
      <p>Tambien puedes contactarme a través de mis redes sociales o por WhatsApp presionando el icono de la barra inferior.</p>

    </section>
  );
};

export default EmailSection;
