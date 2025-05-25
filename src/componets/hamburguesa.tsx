"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export const Hamburguesa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col items-center">
      <button onClick={toggleMenu} className="text-white focus:outline-none z-50">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-800/95 flex flex-col items-center justify-center z-40">

          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            aria-label="Cerrar menú"
          >
            {/* <FaTimes /> */}
          </button>
          <ul className="flex flex-col space-y-6 text-center text-2xl mt-10">
            <li>
              <Link href="/Agenda" className="text-gray-300 hover:text-white hover:bg-gray-500 px-6 py-2 rounded" onClick={toggleMenu}>
                Agenda
              </Link>
            </li>
            <li>
              <Link href="/Reviews" className="text-gray-300 hover:text-white hover:bg-gray-500 px-6 py-2 rounded" onClick={toggleMenu}>
                Reseñas
              </Link>
            </li>
            <li>
              <Link href="/Tienda" className="text-gray-300 hover:text-white hover:bg-gray-500 px-6 py-2 rounded" onClick={toggleMenu}>
                Tienda
              </Link>
            </li>
            <li>
              <Link href="/Clases" className="text-gray-300 hover:text-white hover:bg-gray-500 px-6 py-2 rounded" onClick={toggleMenu}>
                Clases
              </Link>
            </li>
            <li>
              <Link href="/Discografia" className="text-gray-300 hover:text-white hover:bg-gray-500 px-6 py-2 rounded" onClick={toggleMenu}>
                Discografía
              </Link>
            </li>
            <li>
              <Link href="/Productora" className="text-gray-300 hover:text-white hover:bg-gray-500 px-6 py-2 rounded" onClick={toggleMenu}>
                Productora
              </Link>
            </li>
            <li>
              <Link href="/Biografia" className="text-gray-300 hover:text-white hover:bg-gray-500 px-6 py-2 rounded" onClick={toggleMenu}>
                Biografía
              </Link>
            </li>
            <li>
              <Link href="/Galeria" className="text-gray-300 hover:text-white hover:bg-gray-500 px-6 py-2 rounded" onClick={toggleMenu}>
                Galería
              </Link>
            </li>
                        <li>
              <Link href="/Videos" className="text-gray-300 hover:text-white hover:bg-gray-500 px-6 py-2 rounded" onClick={toggleMenu}>
                Videos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
