"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { Navigation } from "lucide-react";

export default function Ubicacion() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      ref={containerRef}
      id="ubicacion"
      className="
        relative 
        min-h-screen 
        flex 
        items-center 
        justify-center 
        py-32 
        bg-black 
        overflow-hidden 
      "
    >
      {/* EFECTO DE FONDO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto px-6 z-10">
        
        {/* ENCABEZADO */}
        <motion.div style={{ opacity, y }} className="text-center mb-24 relative">
          <h2
            className="
              text-[10vw] 
              leading-none 
              font-black 
              tracking-tighter 
              text-white/10 
              select-none 
              absolute 
              top-1/2 left-1/2 
              -translate-x-1/2 
              -translate-y-1/2
              whitespace-nowrap
              pointer-events-none
            "
          >
            UBICACIÓN
          </h2>

          <motion.div className="relative z-10">
            <span className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase block mb-4">
              Coordenadas
            </span>

            {/* 🔥 AQUÍ EL TÍTULO ACTUALIZADO */}
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              Ubicación
            </h2>
          </motion.div>
        </motion.div>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-[#0a0a0a]">
          
          {/* PANEL IZQUIERDO */}
          <div
            className="lg:col-span-4 p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 relative group"
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(255, 255, 255, 0.03),
                    transparent 80%
                  )
                `,
              }}
            />

            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Dirección
                </h3>
                <div className="space-y-1 text-gray-400 font-light text-lg">
                  <p>Club Meta</p>
                  <p>Villavicencio, Meta</p>
                  <p>Colombia</p>
                </div>
              </div>

              {/* BOTÓN DE COMO LLEGAR */}
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/j7crxEVE4bk3gdX6A"
                  target="_blank"
                  className="
                    inline-flex 
                    items-center 
                    gap-4 
                    text-sm 
                    font-bold 
                    tracking-widest 
                    uppercase 
                    text-white 
                    border 
                    border-white/20 
                    px-8 py-4 
                    hover:bg-white 
                    hover:text-black 
                    transition-all 
                    duration-300
                  "
                >
                  <span>Cómo llegar</span>
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="lg:col-span-8 h-[600px] lg:h-auto relative bg-black overflow-hidden">
            <div className="absolute inset-0 z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

            <iframe
              title="Club Meta Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.2903491130414!2d-73.64199442636217!3d4.1632161460853405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2d9252257e01%3A0x13a9394f0ef8b23d!2sClub%20Meta!5e0!3m2!1ses-419!2sco!4v1764643094572!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.1) saturate(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="
                w-full 
                h-full 
                object-cover 
                opacity-90 
                hover:opacity-100 
                transition-all 
                duration-500
              "
            />

            <div className="absolute bottom-8 right-8 z-20">
              <div className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest border border-white/20">
                Vista Satelital
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
