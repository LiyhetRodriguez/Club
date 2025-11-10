"use client";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section
      id="inicio"
      className="relative h-[92vh] min-h-[560px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage:"url('/hero.jpg')" }}   /* coloca hero.jpg en /public */
    >
      <div className="absolute inset-0 bg-black/60" />
      {/* luz azul diagonal */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 via-transparent to-transparent" />

      <motion.div
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.9}}
        className="relative z-10 px-6"
      >
        <img src="/logo.png" alt="Club Meta" className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 rounded-full border border-white/30 shadow-soft"/>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          Vive experiencias <span className="text-[var(--primary)]">únicas</span>
        </h1>
        <p className="mt-4 text-gray-200/90 max-w-2xl mx-auto">
          Reserva espacios memorables con atención de primera y ambientes elegantes.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#consultas"
             className="px-7 py-3 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-600)] text-white font-semibold shadow-soft">
            Consulta Disponibilidad
          </a>
          <a href="#espacios"
             className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20">
            Ver Espacios
          </a>
        </div>
      </motion.div>
    </section>
  );
}
