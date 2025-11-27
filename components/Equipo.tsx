"use client";
import { motion } from "framer-motion";

export default function Historia() {
  return (
    <section
      id="historia"
      className="
        relative 
        py-32 
        bg-black 
        overflow-hidden 
        text-white
        border-t 
        border-white/5
      "
    >
      {/* Fondo sutil con ruido */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="
          absolute 
          top-[60%] left-1/2 
          -translate-x-1/2 -translate-y-1/2
          text-[12vw]
          font-black 
          tracking-tighter 
          text-white/10 
          pointer-events-none
          whitespace-nowrap
        "
      >
        HISTORY
      </motion.h1>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.35em] text-gray-400 uppercase block mb-4">
            Nuestra Esencia
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase">
            Historia & Legado
          </h2>
        </div>

        {/* CONTENIDO */}
        <div className="max-w-4xl mx-auto space-y-10 text-gray-300 text-lg leading-relaxed">
          <p>
            Club Meta nació como una visión: un espacio donde la arquitectura,
            la música, la gastronomía y la experiencia humana convergen para
            crear momentos inolvidables. Desde nuestros inicios, nos propusimos
            reinventar el concepto de entretenimiento y hospitalidad en Bogotá.
          </p>

          <p>
            Inspirados en el brutalismo contemporáneo y la estética minimalista,
            diseñamos un lugar donde cada detalle —desde la iluminación hasta la
            acústica— está pensado para generar emociones.  
          </p>

          <p>
            A lo largo de los años hemos recibido artistas, creadores,
            empresarios y visionarios de todo el mundo. Nos hemos consolidado
            como un punto de encuentro para quienes buscan excelencia, privacidad
            y una experiencia que trascienda lo convencional.
          </p>

          <p>
            Hoy, Club Meta sigue expandiendo su legado con nuevos espacios,
            propuestas gastronómicas de autor, tecnología inmersiva y una
            comunidad que entiende que el lujo auténtico está en la
            experiencia.
          </p>
        </div>
      </div>
    </section>
  );
}
