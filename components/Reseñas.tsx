"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    text: "Una experiencia impecable. El diseño, el ambiente y la ejecución del evento superaron cualquier expectativa.",
    author: "Camila Torres",
    role: "Directora de Eventos – Vogue México"
  },
  {
    text: "La atmósfera y la acústica del espacio son perfectas para producciones de alto nivel. Un venue realmente único.",
    author: "Juan Rodríguez",
    role: "Producer – Sony Music"
  },
  {
    text: "Un lugar que entiende el verdadero significado del lujo contemporáneo. Refinado, sobrio y simplemente inolvidable.",
    author: "Valentina Gómez",
    role: "Brand Manager – LVMH"
  }
];

export default function Reseñas() {
  return (
    <section className="relative py-32 bg-black border-t border-white/5 text-white overflow-hidden">

      {/* TEXTO GIGANTE DE FONDO */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-[13vw] font-black tracking-tight pointer-events-none select-none">
        REVIEWS
      </motion.h1>

      <div className="relative max-w-[1300px] mx-auto px-8 z-10">

        {/* ENCABEZADO EDITORIAL */}
        <div className="text-center mb-24">
          <span className="text-xs tracking-[0.35em] text-gray-500 uppercase block mb-4">
            Testimonios reales
          </span>

          <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
            Lo que dicen <br /> quienes ya vivieron la experiencia
          </h2>
        </div>

        {/* LISTA ELEGANTE SIN CAJAS */}
        <div className="space-y-24">

          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group"
            >
              <Quote className="w-10 h-10 text-white/15 mb-6 group-hover:text-white/40 transition duration-500" />

              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.4] font-light group-hover:text-white transition duration-500 max-w-4xl">
                “{review.text}”
              </p>

              <div className="mt-6">
                <h4 className="text-white text-sm font-bold tracking-widest uppercase">
                  {review.author}
                </h4>

                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">
                  {review.role}
                </p>
              </div>

              {/* LÍNEA DIVISORIA FINÍSIMA */}
              <div className="mt-12 w-full h-px bg-white/5 group-hover:bg-white/20 transition-colors"></div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
