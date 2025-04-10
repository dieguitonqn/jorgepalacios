import Image from "next/image";
import React from "react";
import { IDisco } from "@/types/disco";


export const Disco = (disco:IDisco) => {
    return (
        <div className="text-center px-2 py-4 flex justify-center items-center ">

           
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 border border-gray-200 dark:border-gray-700">
                    <Image
                        src={disco.imageUrl}
                        alt="Disco 1"
                        width={250}
                        height={250}
                        className="w-full h-auto rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">{disco.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {disco.description}
                    </p>
                    <a
                        href={disco.audioUrl}
                        target="_blank"
                        className="inline-block bg-amber-700 bg-opacity-50 hover:bg-opacity-100 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        Escuchar
                    </a>
                </div>
                
            
        </div>
    );
}