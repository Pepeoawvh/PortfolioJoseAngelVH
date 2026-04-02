"use client";
import React, { useState } from "react";
import { firestoreDB } from "../../firebase/config.js";

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestoreDB.collection("formularioPortafolio").add(formData);
      alert("Mensaje enviado, te contactaré lo antes posible ;)");
    } catch (error) {
      console.error(error);
      alert("No se pudo enviar el mensaje ;( inténtalo nuevamente");
    }
  };

  return (
    <div className="animate-fade animate-delay-300 grid justify-items-center w-full">
      <form
        className="grid items-center w-full gap-3 row-start-auto sm:w-full sm:ml-16 sm:px-3 shadow-sm"
        id="form"
        onSubmit={handleSubmit}
      >
        {/* Nombre */}
        <input
          className="text-gray-400 px-2 form bg-[#20202a] rounded-md focus:outline-none"
          type="text"
          id="nombre"
          name="nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          autoComplete="name"
          minLength={2}
          maxLength={45}
        />

        {/* Teléfono (opcional) */}
        <input
          className="text-gray-400 px-2 bg-[#20202a] rounded-md focus:outline-none "
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Telefono 9 4321 5678 (opcional)"
          maxLength={12}
          minLength={9}
          pattern="\d*"
        />

        {/* Correo */}
        <input
          className="text-gray-400 px-2 bg-[#20202a] rounded-md focus:outline-none "
          type="email"
          id="correo"
          name="correo"
          required
          value={formData.correo}
          onChange={handleChange}
          placeholder="Correo suco@rreo.cl"
          autoComplete="email"
        />

        {/* Mensaje */}
        <textarea
          className="text-gray-400 px-2 bg-[#20202a] rounded-md h-24 focus:outline-none resize-none"
          id="mensaje"
          name="mensaje"
          required
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Aquí tu mensaje"
          minLength={10}
          maxLength={1000}
        />
        <button
          className="h-8 mt-6 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-md transition-colors hover:bg-lime-400 "
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
