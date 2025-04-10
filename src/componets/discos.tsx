import Image from "next/image";
import React from "react";
import { IDisco } from "@/types/disco";
import { FaSpotify } from "react-icons/fa";
import * as motion from "motion/react-client";

export const Disco = (disco:IDisco) => {
    return (
        <motion.div whileHover={{scale: 1.1}} className="text-center px-2 py-4 flex justify-center items-center ">

           
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
                        className="flex items-center justify-center gap-1 mx-auto max-w-1/2 mx-auto  bg-amber-700 bg-opacity-50 hover:bg-opacity-100 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        <FaSpotify className="text-green-500 rounded-full text-2xl bg-black"/>
                        Escuchar
                    </a>
                </div>
                
            
        </motion.div>
    );
}