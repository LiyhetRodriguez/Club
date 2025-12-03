"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Detalle from "./Detalle";

type Space = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  medidas: string;
  photos: string[];
};

const spaces: Space[] = [
  {
    id: 1,
    title: "Salón Mi Llanura",
    category: "Eventos sociales",
    image: "/millanura1.jpeg",
    description:
      "Ideal para matrimonios, quince años, grados y eventos sociales que necesitan un ambiente cálido y amplio.",
    medidas:
      "Capacidad recomendada: 150–200 personas. Altura libre: 4.5 m. Espacio para tarima, pista de baile y montaje de sonido.",
    photos: ["/millanura1.jpeg", "/millanura2.jpeg", "/millanura3.jpeg"],
  },
  {
    id: 2,
    title: "Salón Principal",
    category: "Eventos especiales",
    image: "/salon1.jpeg",
    description:
      "Nuestro salón insignia para convenciones, galas, lanzamientos de marca y grandes celebraciones.",
    medidas:
      "Capacidad recomendada: 250–350 personas. Posibilidad de montaje tipo auditorio, banquete o coctel.",
    photos: ["/salon1.jpeg", "/salon2.jpeg", "/salon3.jpeg"],
  },
  {
    id: 3,
    title: "Salón Empresarial",
    category: "Reuniones corporativas",
    image: "/salonempresarial1.jpeg",
    description:
      "Diseñado para reuniones empresariales, capacitaciones, presentaciones y ruedas de negocio.",
    medidas:
      "Capacidad recomendada: 60–120 personas según montaje. Incluye puntos eléctricos y área para coffee break.",
    photos: [
      "/salonempresarial1.jpeg",
      "/salonempresarial2.jpeg",
      "/salonempresarial3.jpeg",
    ],
  },
];

export default function Espacios() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);

  return (
    <section
      id="espacios"
      className="relative bg-[#080808] text-white overflow-hidden py-32"
    >
      {/* === HEADER ANIMADO === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-center mb-20"
      >
        <h2
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            text-[10vw] font-black tracking-tighter
            text-white/5 leading-none
            whitespace-nowrap select-none pointer-events-none
          "
        >
          ESPACIOS
        </h2>

        <div className="relative z-10">
          <span className="text-xs tracking-[0.35em] text-gray-400 uppercase block mb-4">
            PORTAFOLIO
          </span>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase">
            ESPACIOS
          </h2>
        </div>
      </motion.div>

      {/* === GRID EXPANDIBLE === */}
      <div className="max-w-[1600px] mx-auto flex h-[420px] md:h-[520px]">
        {spaces.map((space) => (
          <motion.button
            key={space.id}
            type="button"
            onHoverStart={() => setHovered(space.id)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => setSelectedSpace(space)}
            className={`
              relative overflow-hidden border-r border-white/10
              cursor-pointer group text-left transition-all duration-700
              ${hovered === space.id ? "flex-[3]" : "flex-1"}
            `}
          >
            {/* === IMAGEN EXPANDIBLE === */}
            <div
              className="
                absolute inset-0 bg-cover bg-center
                transition-all duration-700 transform 
                group-hover:scale-105
              "
              style={{
                backgroundImage: `url(${space.image})`,
                filter:
                  hovered === space.id
                    ? "brightness(0.9)"
                    : "brightness(0.55)",
              }}
            />

            {/* === CAPA OSCURA === */}
            <div
              className={`
                absolute inset-0 transition-all duration-700
                ${hovered === space.id ? "bg-black/20" : "bg-black/45"}
              `}
            />

            {/* === TEXTO ANIMADO === */}
            <div
              className="
                absolute inset-x-0 bottom-0
                p-6 md:p-8
                bg-gradient-to-t from-black/95 via-black/70 to-transparent
                translate-y-full group-hover:translate-y-0
                transition-transform duration-500
              "
            >
              <p className="text-[11px] font-semibold tracking-[0.25em] text-white/70 uppercase mb-2">
                {space.category}
              </p>

              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                {space.title}
              </h3>

              <span
                className="
                  inline-flex items-center gap-2
                  px-5 py-2 rounded-full
                  border border-white/40 bg-white/5
                  text-[11px] font-semibold tracking-[0.22em] uppercase
                  group-hover:bg-white group-hover:text-black
                  transition-colors
                "
              >
                Ver detalles
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* === MODAL DETALLE === */}
      <Detalle
        space={selectedSpace}
        onClose={() => setSelectedSpace(null)}
      />
    </section>
  );
}
