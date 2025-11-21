"use client";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, MapPin, Users } from "lucide-react";
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
    <section id="inicio" className="relative h-screen w-full bg-[#050505] overflow-hidden">
      
      {/* --- Background --- */}
      <div className="absolute inset-0 z-0">
        {/* Soft gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
      </div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-5"
      />

      {/* --- Content --- */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 pb-32">
        
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
        >
            <h2 className="text-sm md:text-base font-medium text-white/90 tracking-[0.2em] mb-4 uppercase">
                Bogotá, Colombia
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium text-white tracking-tighter leading-[0.9] mb-8 font-[family-name:var(--font-anicon)]">
                CLUB META
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed mb-12">
                El escenario definitivo para quienes exigen la excelencia.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button 
                    onClick={openLogin}
                    className="w-64 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                    Member Access
                </button>
                <button 
                    className="w-64 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                    Explore Venues
                </button>
            </div>
        </motion.div>

        {/* --- Availability Search (High Contrast) --- */}
        <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-5xl mt-16"
        >
            <div className="bg-white rounded-none p-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row">
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {/* Date */}
                    <div className="bg-white hover:bg-gray-50 transition-colors px-6 py-6 cursor-pointer flex flex-col justify-center">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                            <Calendar size={12} /> Fecha
                        </label>
                        <input type="date" className="bg-transparent text-gray-900 text-sm font-bold outline-none w-full" />
                    </div>

                    {/* Time */}
                    <div className="bg-white hover:bg-gray-50 transition-colors px-6 py-6 cursor-pointer flex flex-col justify-center">
                        <label className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                            <Clock size={12} /> Hora
                        </label>
                        <input type="time" className="bg-transparent text-gray-900 text-sm font-bold outline-none w-full" />
                    </div>

                    {/* Guests */}
                    <div className="bg-white hover:bg-gray-50 transition-colors px-6 py-6 cursor-pointer flex flex-col justify-center">
                         <label className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                            <Users size={12} /> Personas
                        </label>
                        <select className="bg-transparent text-gray-900 text-sm font-bold outline-none w-full appearance-none cursor-pointer">
                            <option>50 - 100</option>
                            <option>100 - 300</option>
                            <option>300+</option>
                        </select>
                    </div>
                </div>

                {/* Action Buttons */}
                <button 
                    className="bg-black text-white px-10 font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 h-20 md:h-auto w-full md:w-auto"
                >
                    <Search size={16} />
                    <span className="hidden lg:inline">Buscar</span>
                </button>

            </div>
        </motion.div>

      </div>
    </section>
  );
}
