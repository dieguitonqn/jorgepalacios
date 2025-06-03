import React from "react";
import { IInfografia } from "../types/infografia";

export const Infografia = ({ description, musicos }: IInfografia) => {
  return (
    <div className="flex flex-col justify-center items-center border-l border-gray-200 dark:border-gray-700 pl-4">
      <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">
        Inforgrafía
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="mt-6 w-full max-w-md">
      {musicos?.length === 0 && (
        <h3 className="text-xl font-semibold mb-3 text-center dark:text-white">Músicos</h3>)}
      <ul className="space-y-2">
        {musicos?.map((musico, index) => (
        <li key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-200">
            {musico.nombre} - <em className="text-gray-500 dark:text-gray-400">{musico.instrumento}</em>
            </span>
            {musico.link && (
            <a
              href={musico.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-150"
            >
              Ver más
            </a>
            )}
          </div>
        </li>
        ))}
      </ul>
    </div>
    </div>
  );
};
