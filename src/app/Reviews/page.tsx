import React from "react";
import { Review } from "./components/review";

function Reviews() {
  return (
    <div>
      <h1 className="text-4xl mx-auto flex justify-center">Reseñas</h1>
      <div className="flex flex-col gap-4 mt-10 mx-auto w-full md:max-w-2xl">
        <Review
          nombre="Juan Pérez"
          fecha="12 de enero de 2023"
          texto="La clase fue increíble, aprendí mucho y Jorge es un gran profesor."
          imagen="/gray-male-avatar.png"
        />
        <Review
          nombre="María López"
          fecha="15 de febrero de 2023"
          texto="Recomiendo a Jorge al 100%. Su forma de enseñar es única."
          imagen="/gray-female-avatar.png"
        />
        <Review
          nombre="Carlos García"
          fecha="20 de marzo de 2023"
          texto="Las clases son muy dinámicas y divertidas. ¡Gracias, Jorge!"
          imagen="/gray-male-avatar.png"
        />
      </div>
    </div>
  );
}

export default Reviews;
