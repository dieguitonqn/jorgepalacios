"use client";
import Image from "next/image";
import React from "react";
import { IDisco } from "@/types/disco";
import { FaInfo, FaSpotify } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Infografia } from "./infografia";

export const Disco = (disco: IDisco) => {
  const [toogleInfo, setToogleInfo] = React.useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="text-center flex-col md:flex-row px-2 py-4 flex justify-center items-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 m-5"
    >
      <div className="rounded-lg shadow-md p-3">
        <Image
          src={disco.imageUrl}
          alt="Disco 1"
          width={250}
          height={250}
          className="w-full h-auto rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          {disco.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {disco.description}
        </p>
        <button
          className="flex items-center mx-auto my-2 bg-green-800/50 px-2 py-1 hover:bg-green-500/50 rounded-md"
          onClick={() => {
            setToogleInfo(!toogleInfo);
          }}
        >
          <FaInfo /> Info
        </button>
        <a
          href={disco.audioUrl}
          target="_blank"
          className="flex items-center justify-center gap-1  w-full mx-auto  bg-amber-700 bg-opacity-50 hover:bg-opacity-100 text-white px-4 py-2 rounded-md transition-colors "
        >
          <FaSpotify className="text-green-500 rounded-full text-2xl bg-black" />
          Escuchar
        </a>
      </div>
    <AnimatePresence mode="sync">
      {toogleInfo && (
        <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -20 }}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
        >
        <Infografia
          title={disco.title}
          description={disco.descripcionLarga!}
        />
        </motion.div>
      )}
    </AnimatePresence>
    </motion.div>
  );
};
