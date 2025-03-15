"use client";
import React, { useState, useEffect } from "react";
import { firestoreDB } from "../../../firebase/config.js";

const FormPhoto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "comercial",
    presupuestoEstimado: "",
    fechaEstimada: "",
    mensaje: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Validación de email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validación de teléfono
  const validatePhone = (phone) => {
    const re = /^\d{9,12}$/;
    return re.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Validaciones
    if (!validateEmail(formData.email)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Por favor, ingresa un email válido"
      });
      return;
    }

    if (formData.telefono && !validatePhone(formData.telefono)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "El número de teléfono debe tener entre 9 y 12 dígitos"
      });
      return;
    }

    // Validación anti-spam
    if (formData.mensaje.includes('http') || formData.mensaje.includes('www')) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Por favor, no incluyas enlaces en el mensaje"
      });
      return;
    }

    try {
      // Recopilar metadatos
      const metadata = {
        userAgent: window.navigator.userAgent,
        idioma: window.navigator.language,
        plataforma: window.navigator.platform,
        pantalla: {
          width: window.screen.width,
          height: window.screen.height
        },
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        fechaEnvio: new Date(),
        origen: document.referrer || 'directo'
      };

      // Obtener IP del usuario
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();

      await firestoreDB.collection("formularioFotografia").add({
        ...formData,
        metadata,
        estado: 'pendiente',
        leido: false,
        IP: ipData.ip,
        fechaEnvio: new Date(),
        ultimaActualizacion: new Date()
      });
      
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Resetear el formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoProyecto: "comercial",
        presupuestoEstimado: "",
        fechaEstimada: "",
        mensaje: "",
      });

      alert("¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente."
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300]"
            required
            minLength={2}
            maxLength={45}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300]"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300]"
            pattern="\d*"
            minLength={9}
            maxLength={12}
          />
        </div>
        <div>
          <label htmlFor="tipoProyecto" className="block text-sm font-medium text-gray-300 mb-1">
            Tipo de Proyecto
          </label>
          <select
            id="tipoProyecto"
            name="tipoProyecto"
            value={formData.tipoProyecto}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300]"
            required
          >
            <option value="comercial">Fotografía Comercial</option>
            <option value="eventos">Eventos</option>
            <option value="retrato">Retratos</option>
            <option value="arquitectura">Arquitectura</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="presupuestoEstimado" className="block text-sm font-medium text-gray-300 mb-1">
            Presupuesto Estimado
          </label>
          <select
            id="presupuestoEstimado"
            name="presupuestoEstimado"
            value={formData.presupuestoEstimado}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300]"
            required
          >
            <option value="">Selecciona un rango</option>
            <option value="0-100000">Menos de $100.000</option>
            <option value="100000-300000">$100.000 - $300.000</option>
            <option value="300000-500000">$300.000 - $500.000</option>
            <option value="500000+">Más de $500.000</option>
          </select>
        </div>
        <div>
          <label htmlFor="fechaEstimada" className="block text-sm font-medium text-gray-300 mb-1">
            Fecha Estimada del Proyecto
          </label>
          <input
            type="date"
            id="fechaEstimada"
            name="fechaEstimada"
            value={formData.fechaEstimada}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300]"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-1">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#FFB300] focus:ring-1 focus:ring-[#FFB300]"
          required
          minLength={10}
          maxLength={1000}
          placeholder="Describe tu proyecto o idea..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status.submitting}
        className={`w-full ${
          status.submitting 
            ? 'bg-gray-500 cursor-not-allowed' 
            : 'bg-[#FFB300] hover:bg-[#cc8f00]'
        } text-white py-2 px-4 rounded-md transition-colors duration-300 font-medium`}
      >
        {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {status.error && (
        <p className="text-red-500 text-sm mt-2">{status.error}</p>
      )}
      {status.submitted && (
        <p className="text-green-500 text-sm mt-2">
          ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
        </p>
      )}
    </form>
  );
};

export default FormPhoto;