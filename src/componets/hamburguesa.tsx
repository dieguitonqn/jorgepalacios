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
      <button onClick={toggleMenu} className="text-white focus:outline-none">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="flex mt-4">
          <ul className="flex flex-col space-y-2 text-left text-xs">
            <li>
              <Link href="/Agenda" className="text-gray-300 hover:text-white hover:bg-gray-500">
                Agenda
              </Link>
            </li>
            <li>
              <Link href="/Tienda" className="text-gray-300 hover:text-white hover:bg-gray-500">
                Tienda
              </Link>
            </li>
            <li>
              <Link href="/Clases" className="text-gray-300 hover:text-white hover:bg-gray-500">
                Clases
              </Link>
            </li>
            <li>
              <Link
                href="/Discografia"
                className="text-gray-300 hover:text-white hover:bg-gray-500"
              >
                Discografía
              </Link>
            </li>
            <li>
              <Link
                href="/Productora"
                className="text-gray-300 hover:text-white hover:bg-gray-500"
              >
                Productora
              </Link>
            </li>
            <li>
              <Link
                href="/Biografia"
                className="text-gray-300 hover:text-white hover:bg-gray-500"
              >
                Biografía
              </Link>
            </li>
            <li>
              <Link href="/Galeria" className="text-gray-300 hover:text-white hover:bg-gray-500">
                Galería
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
