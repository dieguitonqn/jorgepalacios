import Link from "next/link";
import React from "react";
import { Event } from "@/types/event";
import CalendarCards from "@/componets/eventCard";
import { Disco } from "@/componets/discos";
const events: Event[] = [
  {
    id: '1',
    date: new Date('2025-10-16'),
    title: 'Tour Acústico 2025',
    location: 'Neuquén',
    venue: 'Cine Teatro Español',
    ticketLink: 'https://example.com/tickets',
  },
  {
    id: '2',
    date: new Date('2025-10-23'),
    title: 'Tour Acústico 2025',
    location: 'General Roca',
    venue: 'Teatro El Círculo',
    ticketLink: 'https://example.com/tickets',
  },
  {
    id: '3',
    date: new Date('2025-10-30'),
    title: 'Tour Acústico 2025',
    location: 'Villa Regina',
    venue: 'Teatro La Comedia',
    ticketLink: 'https://example.com/tickets',
  },
  // Más eventos...
];


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section
        className="pt-20 pb-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative h-120"
        style={{
          backgroundImage: `url('/Jorge/_NZO1352 copia 2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.9) 70%)',
        zIndex: 1,
          }}
        ></div>
        <div className="container mx-auto px-4 py-32 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-white">Jorge Palacios</h1>
          <p className="text-xl mb-8 text-gray-300">Explorando la música a través de las seis cuerdas</p>
        </div>
      </section>

      {/* Sección de agenda de fechas y eventos */}
      <section className="py-16 bg-gray-950">
        <div className="container flex flex-col mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Agenda de Fechas y Eventos</h2>
          <CalendarCards events={events}/>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Concierto en Madrid</h3>
              <p className="text-gray-300">Fecha: 15 de Noviembre, 2023</p>
              <p className="text-gray-300">Lugar: Teatro Real</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Masterclass en Barcelona</h3>
              <p className="text-gray-300">Fecha: 20 de Noviembre, 2023</p>
              <p className="text-gray-300">Lugar: Conservatorio del Liceu</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Festival de Guitarra</h3>
              <p className="text-gray-300">Fecha: 25 de Noviembre, 2023</p>
              <p className="text-gray-300">Lugar: Auditorio Nacional</p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="py-16 ">
        <div>
          <h1 className=" text-3xl font-bold text-center mb-12 text-white ">Discografía</h1>
        </div>
        <div className="flex flex-wrap justify-between max-w-2/4 mx-auto">
          <Disco 
            title="Río Paradiso"
            description=" Album 2022 "
            imageUrl="/Albumes/rioparadiso.jpeg"
            audioUrl="https://open.spotify.com/album/3BlqYgJh0p3zb9FcvqBM1i?si=0UMerkPTQradLasD_eTAnw"
           />
           <Disco
            title="Escordando"
            description="Almbum 2019"
            imageUrl="/Albumes/escordando.jpeg"
            audioUrl="https://open.spotify.com/album/7KHIT5BYMSHELdLtwu59PI?si=ef-tj-n1TPmBKVZHXxGNyQ"
           />
           <Disco
            title="Respiraluz"
            description="Almbum 2019"
            imageUrl="/Albumes/respiraluz.jpeg"
            audioUrl="https://open.spotify.com/album/2kA1Zg3LVMLCRam2qDDB54?si=ydTbR7afSQqvPHgJiA2klw"
           />
        </div>
      </section>

      {/* Técnicas Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Técnicas Especializadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Fingerpicking</h3>
              <p className="text-gray-300">Dominio completo de técnicas de fingerpicking, desde patrones básicos hasta arreglos complejos.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Tapping</h3>
              <p className="text-gray-300">Técnicas avanzadas de tapping a dos manos para crear texturas únicas y melodías complejas.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-white">Armonía Aplicada</h3>
              <p className="text-gray-300">Comprensión profunda de la armonía y su aplicación práctica en la guitarra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reseñas Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Lo que dicen mis alumnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <p className="font-semibold text-white">María García</p>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-300">&ldquot;Las clases con Jorge han transformado completamente mi forma de tocar la guitarra. Su método es único y efectivo.&rdquo;</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="ml-4">
                  <p className="font-semibold text-white">Carlos Rodríguez</p>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-300">&ldquot;Increíble experiencia de aprendizaje. Jorge no solo enseña técnica, sino que transmite su pasión por la música.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">¿Listo para comenzar tu viaje musical?</h2>
          <p className="mb-8 text-gray-300">Contáctame para clases personalizadas o colaboraciones</p>
          <Link href="/contacto" className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
}
