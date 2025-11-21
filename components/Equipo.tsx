"use client";
import { motion } from "framer-motion";

const equipo = [
  {
    nombre: "María F. López",
    cargo: "Head of Experience",
    imagen: "/Coordinadora.jpg",
  },
  {
    nombre: "Carlos Rojas",
    cargo: "Executive Chef",
    imagen: "/Chef.jpg",
  },
  {
    nombre: "Laura Martínez",
    cargo: "Concierge Lead",
    imagen: "/Atencion.jpg",
  },
  {
    nombre: "José Hernández",
    cargo: "Logistics Director",
    imagen: "/Supervisor.jpg",
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="bg-[#050505] py-32 relative">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24 border-l-2 border-white/20 pl-8">
            <span className="text-xs font-bold tracking-[0.4em] text-meta-silver uppercase mb-4 block">
                The Minds
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                Our Team
            </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {equipo.map((persona, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-[#101010] aspect-[3/4] mb-6">
                <div className="absolute inset-0 bg-gray-800 animate-pulse opacity-20" /> {/* Placeholder */}
                <img
                  src={persona.imagen}
                  alt={persona.nombre}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-[0.7] saturate-[0.8] group-hover:brightness-100 group-hover:saturate-100"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="border-t border-white/10 pt-4 group-hover:border-white transition-colors duration-500">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-1">
                  {persona.nombre}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest group-hover:text-meta-platinum transition-colors">
                  {persona.cargo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
