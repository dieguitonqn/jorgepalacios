'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Hamburguesa } from './hamburguesa';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const pathname = usePathname();
    return (
    <nav className="fixed w-full bg-black border-b border-gray-800 z-50 top-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpeg" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white">Jorge Palacios</span>
          </Link>
          <div className="hidden md:flex space-x-3">
            <Link href="/Agenda" className={`text-gray-300 hover:text-white hover:bg-gray-500 rounded-md px-2 py-1 ${pathname === '/Agenda' ? ' bg-gray-500 text-white' : ''}`}>Agenda</Link>
            <Link href="/Tienda" className={`text-gray-300 hover:text-white hover:bg-gray-500 rounded-md px-2 py-1${pathname === '/Tienda' ? ' bg-gray-500 text-white' : ''}`}>Tienda</Link>
            <Link href="/Clases" className={`text-gray-300 hover:text-white hover:bg-gray-500 rounded-md px-2 py-1${pathname === '/Clases' ? ' bg-gray-500 text-white' : ''}`}>Clases</Link>
            <Link href="/Discografia" className={`text-gray-300 hover:text-white hover:bg-gray-500 rounded-md px-2 py-1${pathname === '/Discografia' ? ' bg-gray-500 text-white' : ''}`}>Discografía</Link>
            <Link href="/Productora" className={`text-gray-300 hover:text-white hover:bg-gray-500 rounded-md px-2 py-1${pathname === '/Productora' ? ' bg-gray-500 text-white' : ''}`}>Productora</Link>
            <Link href="/Biografia" className={`text-gray-300 hover:text-white hover:bg-gray-500 rounded-md px-2 py-1${pathname === '/Biografia' ? ' bg-gray-500 text-white' : ''}`}>Biografía</Link>
            <Link href="/Galeria" className={`text-gray-300 hover:text-white hover:bg-gray-500 rounded-md px-2 py-1${pathname === '/Galeria' ? ' bg-gray-500 text-white' : ''}`}>Galería</Link>
          </div>
          <div className="block md:hidden"><Hamburguesa /></div>
        </div>
      </nav>
)}