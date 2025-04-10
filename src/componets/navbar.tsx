import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    return (
    <nav className="fixed w-full bg-black border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/file.svg" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white">Jorge Palacios</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/tienda" className="text-gray-300 hover:text-white">Tienda</Link>
            <Link href="/galeria" className="text-gray-300 hover:text-white">Clases Particulares</Link>
            <Link href="/galeria" className="text-gray-300 hover:text-white">Galería</Link>
            <Link href="/productora" className="text-gray-300 hover:text-white">Productora</Link>
            <Link href="/sobre-mi" className="text-gray-300 hover:text-white">Sobre Mí</Link>
            <Link href="/contacto" className="text-gray-300 hover:text-white">Contacto</Link>
          </div>
        </div>
      </nav>
)}