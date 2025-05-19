
import React from "react";
import Image from "next/image";

export const Review = ({
  nombre,
  fecha,
  texto,
  imagen,
}: {
  nombre: string;
  fecha: string;
  texto: string;
  imagen?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border-b border-gray-300">
        {imagen && (
        <Image
          src={imagen}
          alt={nombre}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover"
          priority
        />
        )}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{nombre}</h3>
        <p className="text-sm text-orange-300/80">{fecha}</p>
        <p className="mt-2 italic font-thin">{texto}</p>
      </div>
    </div>
  );
}
export default Review;

