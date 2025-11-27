"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const spaces = [
  {
    id: 1,
    title: "Salon Mi Llanura",
    category: "Concert / Gala",
    image: "/millanura1.jpeg"
  },
  {
    id: 2,
    title: "Salon Principal",
    category: "Open Air",
    image: "/salon1.jpeg"
  },
  {
    id: 3,
    title: "Salon Empresarial",
    category: "Wet Lounge",
    image: "/salonempresarial1.jpeg"
  },
];

export default function Espacios() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="espacios"
      className="
        relative
        min-h-screen
        bg-[#080808]
        text-white
        overflow-hidden
      "
    >

      {/* --- HEADER AJUSTADO --- */}
      <div className="relative text-center pt-24 pb-24">

        {/* TEXTO GIGANTE DETRÁS — BAJADO 20PX */}
        <h2
          className="
            absolute
            top-[67%] left-1/2
            -translate-x-1/2 -translate-y-1/2
            text-[10vw]
            font-black
            tracking-tighter
            leading-none
            text-white/10
            whitespace-nowrap
            select-none
            pointer-events-none
            mt-[20px]
          "
        >
          SPACES
        </h2>

        {/* PORTFOLIO + TÍTULO */}
        <div className="relative z-10">
          <span className="text-xs tracking-[0.35em] text-gray-400 uppercase block mb-4">
            PORTFOLIO
          </span>

          <h2
            className="
              text-6xl 
              md:text-7xl 
              lg:text-8xl 
              font-black 
              tracking-tight
            "
          >
            ESPACIOS
          </h2>
        </div>
      </div>

      {/* --- GRID DE ESPACIOS --- */}
      <div className="flex flex-col md:flex-row h-[70vh]">
        {spaces.map((space) => (
          <motion.div
            key={space.id}
            onHoverStart={() => setHovered(space.id)}
            onHoverEnd={() => setHovered(null)}
            className="
              relative
              flex-1
              h-full
              border-r border-white/10
              transition-all duration-700
              ease-in-out
              cursor-pointer
              group
              z-20
            "
            style={{
              flex: hovered === space.id ? 3 : 1,
            }}
          >
            {/* Imagen */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{
                backgroundImage: `url(${space.image})`,
                filter: hovered === space.id ? "brightness(0.9)" : "brightness(0.6)",
              }}
            />

            {/* Overlay */}
            <div
              className={`
                absolute inset-0
                transition duration-700
                ${hovered === space.id ? "bg-black/20" : "bg-black/40"}
              `}
            />

            {/* Contenido Inferior */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black via-black/50 to-transparent">
              <div className="flex items-end justify-between">

                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {space.category}
                  </p>

                  <h3
                    className="
                      text-3xl
                      md:text-5xl
                      font-black
                      uppercase
                      tracking-tighter
                      whitespace-nowrap
                      transform translate-y-10
                      group-hover:translate-y-0
                      transition-all duration-500
                    "
                  >
                    {space.title}
                  </h3>
                </div>

                <div
                  className="
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 delay-200
                    bg-white text-black p-3 rounded-full
                  "
                >
                  <ArrowUpRight size={24} />
                </div>

              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
