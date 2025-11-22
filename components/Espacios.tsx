"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const spaces = [
  {
    id: 1,
    title: "MAIN HALL",
    category: "Concert / Gala",
    image: "/millanura1.jpeg"
  },
  {
    id: 2,
    title: "GARDEN",
    category: "Open Air",
    image: "/salon1.jpeg"
  },
  {
    id: 3,
    title: "POOL",
    category: "Wet Lounge",
    image: "/salonempresarial1.jpeg"
  },

];

export default function Espacios() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="espacios" className="h-[80vh] bg-black flex flex-col md:flex-row overflow-hidden" data-aos="fade-in">
      {spaces.map((space) => (
        <motion.div
          key={space.id}
          onHoverStart={() => setHovered(space.id)}
          onHoverEnd={() => setHovered(null)}
          className="relative flex-1 h-full border-r border-white/10 transition-all duration-700 ease-in-out cursor-pointer group"
          style={{
            flex: hovered === space.id ? 3 : 1,
          }}
        >
          {/* Image Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ 
                backgroundImage: `url(${space.image})`,
                filter: hovered === space.id ? "brightness(1)" : "brightness(0.5) grayscale(100%)"
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black via-black/50 to-transparent">
            <div className="flex items-end justify-between">
                <div className="overflow-hidden">
                    <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {space.category}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter whitespace-nowrap transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        {space.title}
                    </h3>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 bg-white text-black p-3 rounded-full">
                    <ArrowUpRight size={24} />
                </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
