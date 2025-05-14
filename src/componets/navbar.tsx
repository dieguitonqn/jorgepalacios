import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    return (
    <nav className="fixed w-full bg-black border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/"className="flex items-center space-x-2">
            <Image src="/logo.jpeg" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white">Jorge Palacios</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/Agenda" className="text-gray-300 hover:text-white">Agenda</Link>
            <Link href="/Tienda" className="text-gray-300 hover:text-white">Tienda</Link>
            <Link href="/Clases" className="text-gray-300 hover:text-white">Clases</Link>
            <Link href="/Discografia" className="text-gray-300 hover:text-white">Discografía</Link>
            <Link href="/Productora" className="text-gray-300 hover:text-white">Productora</Link>
            <Link href="/Biografia" className="text-gray-300 hover:text-white">Sobre Mí</Link>
            <Link href="/Galeria" className="text-gray-300 hover:text-white">Galería</Link>
          </div>
        </div>
      </nav>
)}