"use client";
import { motion } from "framer-motion";

const servicios = [
  { titulo: "Eventos Sociales", desc: "Bodas, fiestas y reuniones inolvidables." },
  { titulo: "Espacios Empresariales", desc: "Conferencias y talleres profesionales." },
  { titulo: "Recreación y Deportes", desc: "Piscina, canchas y zonas verdes." },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-gradient text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold mb-3">{s.titulo}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
