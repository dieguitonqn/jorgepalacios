import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Jorge Palacios</h1>
          <p className="text-xl mb-8 text-gray-300">Explorando la música a través de las seis cuerdas</p>
        </div>
      </section>

      {/* Técnicas Section */}
      <section className="py-16 bg-gray-900">
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
              <p className="text-gray-300">"Las clases con Jorge han transformado completamente mi forma de tocar la guitarra. Su método es único y efectivo."</p>
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
              <p className="text-gray-300">"Increíble experiencia de aprendizaje. Jorge no solo enseña técnica, sino que transmite su pasión por la música."</p>
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
