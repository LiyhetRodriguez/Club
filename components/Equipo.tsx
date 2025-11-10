"use client";
import { motion } from "framer-motion";

const espacios = [
  { nombre: "Terraza", img: "/espacio1.jpg", desc: "Ideal para reuniones sociales." },
  { nombre: "Auditorio", img: "/espacio2.jpg", desc: "Perfecto para conferencias y talleres." },
  { nombre: "Piscina", img: "/espacio3.jpg", desc: "Ambiente fresco para eventos familiares." },
  { nombre: "Zona Verde", img: "/espacio4.jpg", desc: "Espacio natural para actividades recreativas." },
  { nombre: "Ejecutivo", img: "/espacio5.jpg", desc: "Ambiente elegante y reservado." },
];

export default function Espacios() {
  return (
    <section id="espacios" className="py-24 bg-[#101010] text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Nuestros Espacios</h2>
        <div className="flex overflow-x-auto gap-6 scrollbar-hide">
          {espacios.map((e, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md"
            >
              <img src={e.img} alt={e.nombre} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{e.nombre}</h3>
                <p className="text-gray-400 text-sm">{e.desc}</p>
                <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium">
                  Reservar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
