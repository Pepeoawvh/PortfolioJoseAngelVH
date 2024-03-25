"use client";
import React, { useState } from "react";
import { firestoreDB } from "../../firebase/config.js"

const Form = () => {
  // Creamos un estado para guardar los datos del formulario
  const [datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  // Creamos una función para manejar el cambio de los inputs
  const handleChange = (e) => {
    // Actualizamos el estado con el valor del input
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Creamos una función, proceso asincrono, para manejar el envío del formulario
  const handleSubmit = async (e) => {
    // Evitamos el comportamiento por defecto del formulario
    e.preventDefault();
    // Intentar conectarse a la colección de bbdd, y agrega nuevo doc
    try {
      await firestoreDB.collection("formularioPortafolio").add(datos);
      alert("Mensaje enviado ;)");
    } catch (error) {
      alert("No se pudo enviar ;( intentalo nuevamente");
      console.log(error)
    }
  };

  return (
    <div className="grid justify-items-center w-full">
      <form className="grid items-center w-full gap-3 row-start-auto sm:w-full sm:ml-16 sm:px-3 shadow-sm" id="form"
      onSubmit={handleSubmit}>
        <input className="text-gray-400 px-2 form bg-[#20202a] rounded-md focus:outline-none"
          type="text"
          id="nombre"
          name="nombre" required
          value={datos.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          autoComplete="name"
          minLength={2}
          maxLength={45}
        />

        <input className="text-gray-400 px-2 bg-[#20202a] rounded-md focus:outline-none "
          type="tel"
          id="telefono"
          name="telefono"
          value={datos.telefono}
          onChange={handleChange}
          placeholder="Telefono 9 4321 5678 (opcional)"
          maxLength={12}
          minLength={9}
          pattern="\d*"
        />
        <input className="text-gray-400 px-2 bg-[#20202a] rounded-md focus:outline-none "
          type="email"
          id="correo"
          name="correo" required
          value={datos.correo}
          onChange={handleChange}
          placeholder="Correo suco@rreo.cl"
          autoComplete="email"
        />
        <input className="text-gray-400 px-2 bg-[#20202a] rounded-md h-24 focus:outline-none items-start "
          type="text"
          id="mensaje"
          name="mensaje" required
          value={datos.mensaje}
          onChange={handleChange}
          placeholder="Aqui tu mensaje"
          minLength={10}
          maxLength={1000}
        />
        <button className="h-8 mt-6 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-md transition-colors hover:bg-lime-400 " type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
