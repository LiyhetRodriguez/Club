"use client";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, Users } from "lucide-react";
import { useUIStore } from "../lib/store";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { useCallback } from "react";

export default function Hero() {
  const { openLogin } = useUIStore();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="inicio"
      className="
        relative 
        min-h-[35vh] 
        w-full 
        overflow-hidden 
        bg-cover 
        bg-center 
        bg-no-repeat 
        pt-24
        sm:pt-28
        md:pt-32
        lg:pt-36
      "
      style={{ backgroundImage: "url('/salon1.jpeg')" }}
    >
      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/75 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

      {/* PARTICLES */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-5"
        options={{
          particles: {
            color: { value: "#fff" },
            links: { enable: true, color: "#fff", opacity: 0.35 },
            move: { enable: true, speed: 1 },
            number: { value: 55 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-start items-center px-6 pb-0">

        {/* TITLES */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <h2 className="text-xs md:text-sm text-white/70 tracking-[0.35em] uppercase mb-5">
            Bogotá, Colombia
          </h2>

          <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-semibold text-white leading-[0.85]">
            CLUB META
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 font-light mt-6 mb-10">
            El escenario definitivo para quienes exigen la excelencia.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <button
              onClick={openLogin}
              className="px-10 py-4 h-14 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-gray-300 transition rounded"
            >
              Acceso Miembros
            </button>

            <button
              className="px-10 py-4 h-14 border border-white/40 text-white text-sm font-semibold tracking-widest uppercase hover:bg-white/10 backdrop-blur-sm transition rounded"
            >
              Explorar Espacios
            </button>
          </div>
        </motion.div>

        {/* SEARCH BAR */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full max-w-4xl mt-4"
        >
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">

              {/* FECHA */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-white/60 mb-2 flex items-center gap-2">
                  <Calendar size={12} /> Fecha
                </label>
                <input
                  type="date"
                  className="bg-transparent border-b border-white/20 focus:border-white/60 transition text-white text-sm outline-none py-1"
                />
              </div>

              {/* HORA */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-white/60 mb-2 flex items-center gap-2">
                  <Clock size={12} /> Hora
                </label>
                <input
                  type="time"
                  className="bg-transparent border-b border-white/20 focus:border-white/60 transition text-white text-sm outline-none py-1"
                />
              </div>

              {/* PERSONAS */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-white/60 mb-2 flex items-center gap-2">
                  <Users size={12} /> Personas
                </label>
                <select className="bg-transparent border-b border-white/20 focus:border-white/60 transition text-white text-sm outline-none py-1 cursor-pointer">
                  <option className="text-black">50 - 100</option>
                  <option className="text-black">100 - 300</option>
                  <option className="text-black">300+</option>
                </select>
              </div>

              {/* SEARCH BUTTON */}
              <div className="flex items-center">
                <button className="w-full py-2 bg-white/10 hover:bg-white/20 transition border border-white/10 rounded-lg flex items-center justify-center gap-2 text-white uppercase text-xs tracking-widest">
                  <Search size={14} />
                  Buscar
                </button>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
