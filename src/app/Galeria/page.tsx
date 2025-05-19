'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

// Listado de fotos (ejemplo, puedes agregar/quitar)
const fotosColor = [
  '/Jorge/_NZO1324 copia.jpg',
  '/Jorge/_NZO1352 copia.jpg',
  '/Jorge/_NZO1352 copia 2.jpg',
  '/Jorge/_NZO1352 copia 3.jpg',
  '/Jorge/_NZO1392 copia.jpg',
  '/Jorge/_NZO1392o copia.jpg',
  '/Jorge/_NZO1439 copia.jpg',
  '/Jorge/_NZO1460 copia.jpg',
  '/Jorge/_NZO1466 copia.jpg',
  '/Jorge/_NZO1477 copia.jpg',
];
const fotosBN = [
  '/Jorge/T1.png',
  '/Jorge/T2.png',
  '/Jorge/T3.png',
  '/Jorge/T4.png',
  '/Jorge/T5.png',
  '/Jorge/T6.png',
  '/Jorge/T7.png',
  '/Jorge/T8.png',
  '/Jorge/T9.png',
  '/Jorge/T10.png',
];

// SwiperCore.use([Navigation]);

function Page() {
  const [tab, setTab] = useState<'color' | 'bn'>('color');
  const [modalOpen, setModalOpen] = useState(false);
  const [fotoIndex, setFotoIndex] = useState(0);
  const fotos = tab === 'color' ? fotosColor : fotosBN;

  const openModal = (idx: number) => {
    setFotoIndex(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center mt-20">Galería de fotos</h1>
      <div className="tabs flex gap-4 my-10 mx-auto justify-center ">
        <button
          className={`px-4 py-2 rounded hover:bg-orange-600/75 transition-colors ${
            tab === 'color'
              ? 'bg-orange-700/50 text-slate-200 font-bold ring-1 ring-orange-400/50 shadow-sm shadow-red-400'
              : 'bg-gray-800 text-white'
          }`}
          onClick={() => setTab('color')}
        >
          <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400 mr-2 align-middle" />
          Color
        </button>
        <button
          className={`px-4 py-2 rounded hover:bg-gray-600/75 transition-colors ${
            tab === 'bn'
              ? 'bg-gray-600 text-white shadow-sm shadow-slate-200 font-bold ring-1 ring-gray-400/50'
              : 'bg-gray-800 text-white'
          }`}
          onClick={() => setTab('bn')}
        >
          Blanco y negro
        </button>
      </div>
      <div className="galeria-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:w-10/12 mx-auto">
        {fotos.map((src, idx) => (
          <Image
            width={300}
            height={300}
            key={src}
            src={src}
            alt="Foto galería"
            className="galeria-thumb cursor-pointer object-cover w-full h-40 rounded shadow"
            // quality={100}
            onClick={() => openModal(idx)}
          />
        ))}
      </div>
      {modalOpen && (
        <div className="galeria-modal fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-2 right-2 text-white text-2xl z-10"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              <FaTimes />
            </button>
            <Swiper
              initialSlide={fotoIndex}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              onSlideChange={swiper => setFotoIndex(swiper.activeIndex)}
              className="galeria-swiper"
            >
              {fotos.map((src) => (
                <SwiperSlide key={src}>
                  <Image
                    width={400}
                    height={600}
                    src={src}
                    alt="Foto grande"
                    className="w-full h-[60vh] object-contain rounded"
                    // quality={100}
                  />
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-10">
                <FaChevronLeft />
              </div>
              <div className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-10">
                <FaChevronRight />
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
