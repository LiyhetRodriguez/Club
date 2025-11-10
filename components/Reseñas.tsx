"use client";
import { motion } from "framer-motion";

const reseñas = [
  { nombre: "Leidy Rojas", texto: "Excelente servicio, lo volvería a usar." },
  { nombre: "Jeimi Páez", texto: "Buen servicio y atención amable." },
  { nombre: "Antonio López", texto: "Recomendado 100%, experiencia excelente." },
];

export default function Reseñas() {
  return (
    <section id="reseñas" className="py-24 bg-[#121317] text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Testimonios</h2>
        <div className="flex overflow-x-auto gap-6 scrollbar-hide justify-center">
          {reseñas.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md"
            >
              <p className="text-gray-300 italic mb-3">“{r.texto}”</p>
              <h3 className="font-semibold">{r.nombre}</h3>
              <p className="text-yellow-400 mt-1">★★★★★</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}