'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se puede manejar el envío del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-gray-700 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-slate-300">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          rows={4}
          required
        />
      </div>
      <div className="mb-4">
        {/* Aquí se puede integrar la verificación de humano de Cloudflare */}
        <div id="cf-turnstile" className="my-4"></div>
      </div>
      <button
        type="submit"
        className="w-full bg-orange-400/50 text-white py-2 px-4 rounded-md hover:bg-orange-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;