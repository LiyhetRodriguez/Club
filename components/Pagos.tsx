"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reseñas = [
  {
    nombre: "Camila Torres",
    texto:
      "Celebramos el cumpleaños de mi hija en el Club Meta y fue una experiencia mágica. El personal super atento, el lugar hermoso y la comida deliciosa.",
    estrellas: 5,
    imagen: "/usuario1.jpg",
  },
  {
    nombre: "Juan Rodríguez",
    texto:
      "El espacio es increíble para eventos empresariales. Todo muy bien organizado y con excelente servicio. ¡100% recomendado!",
    estrellas: 5,
    imagen: "/usuario2.jpg",
  },
  {
    nombre: "Valentina Gómez",
    texto:
      "La atención al detalle y la amabilidad del equipo hacen la diferencia. Mi boda fue perfecta, todo salió mejor de lo que soñé.",
    estrellas: 5,
    imagen: "/usuario3.jpg",
  },
  {
    nombre: "Andrés Martínez",
    texto:
      "Reservé la terraza panorámica y la vista al atardecer fue impresionante. Ambiente cálido, buena música y excelente servicio.",
    estrellas: 4,
    imagen: "/usuario4.jpg",
  },
];

export default function Reseñas() {
  const [indice, setIndice] = useState(0);

  // Carrusel automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % reseñas.length);
    }, 6000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      id="reseñas"
      className="relative bg-[#0f0a06] text-white py-24 overflow-hidden"
    >
      {/* Fondo con imagen difuminada */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/fondoreseñas.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0f0a06]/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#c6a56b] mb-8"
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <p className="max-w-2xl mx-auto text-[#e3dbcf]/90 mb-14">
          Las experiencias hablan por sí solas. Estas son algunas de las reseñas
          de quienes han confiado en nosotros para sus momentos más especiales.
        </p>

        {/* Carrusel de reseñas */}
        <div className="relative h-[340px] md:h-[300px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={indice}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-[#c6a56b]/20 backdrop-blur-lg rounded-3xl shadow-[0_0_30px_rgba(198,165,107,0.3)] p-8 max-w-xl text-center"
            >
              <img
                src={reseñas[indice].imagen}
                alt={reseñas[indice].nombre}
                className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-[#c6a56b]/60 mb-4"
              />
              <h3 className="text-xl font-semibold text-[#c6a56b] mb-2">
                {reseñas[indice].nombre}
              </h3>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(reseñas[indice].estrellas)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-[#d6b98c] fill-[#d6b98c]"
                  />
                ))}
              </div>
              <p className="text-[#f5efe6]/90 italic">
                “{reseñas[indice].texto}”
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores inferiores */}
        <div className="flex justify-center gap-3 mt-10">
          {reseñas.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndice(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                i === indice
                  ? "bg-[#c6a56b] scale-125 shadow-[0_0_10px_rgba(198,165,107,0.6)]"
                  : "bg-white/20 hover:bg-[#c6a56b]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
