"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function Detalle({ space, onClose }: any) {
  if (!space) return null;

  const [selectedImage, setSelectedImage] = useState(space.photos[0]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* CONTENEDOR */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0A0A0A] w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
        >
          {/* BOTÓN CERRAR */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* IMAGEN PRINCIPAL + MINIATURAS */}
            <div className="p-6 flex flex-col items-center">
              <img
                src={selectedImage}
                alt="preview"
                className="w-full h-[330px] md:h-[380px] object-cover rounded-xl border border-white/10"
              />

              {/* MINIATURAS */}
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {space.photos.map((photo: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(photo)}
                    className={`w-[70px] h-[70px] rounded-lg overflow-hidden border ${
                      selectedImage === photo
                        ? "border-white"
                        : "border-white/20"
                    }`}
                  >
                    <img
                      src={photo}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* INFO DEL ESPACIO */}
            <div className="p-8 space-y-6">
              <div>
                <p className="text-[11px] tracking-[0.3em] text-gray-400 uppercase">
                  Detalles del espacio
                </p>
                <h2 className="text-3xl font-black uppercase tracking-tight mt-1">
                  {space.title}
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {space.description}
              </p>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h3 className="text-sm font-bold tracking-wide uppercase text-white/80 mb-2">
                  Medidas y capacidad
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {space.medidas}
                </p>
              </div>

              {/* Botón extra opcional */}
              <button
                onClick={onClose}
                className="w-full py-3 bg-white text-black font-bold tracking-wider rounded-xl hover:bg-gray-200 transition"
              >
                Cerrar Detalles
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
