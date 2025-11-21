"use client";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";

const reviews = [
  {
    text: "La arquitectura del lugar redefine lo que significa un evento en Bogotá. Es brutalismo puro con un servicio impecable.",
    author: "Camila Torres",
    role: "Private Event",
    company: "Vogue Mexico"
  },
  {
    text: "Nunca había visto un sistema de sonido tan preciso en un venue de este tamaño. La acústica es perfecta.",
    author: "Juan Rodríguez",
    role: "Producer",
    company: "Sony Music"
  },
  {
    text: "El Rooftop al atardecer es, sin duda, la mejor vista de la ciudad. Un activo invaluable para nuestra marca.",
    author: "Valentina Gómez",
    role: "Brand Manager",
    company: "LVMH"
  }
];

export default function Reseñas() {
  return (
    <section className="bg-[#050505] py-24 md:py-32 border-t border-white/5 relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24">
            <div>
                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] mb-4">Reputation</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                    Trusted By<br/> The Best
                </h3>
            </div>
            <div className="hidden md:block">
                <button className="text-white text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:opacity-70 transition-opacity">
                    Read all stories
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="group relative bg-[#0A0A0A] p-8 md:p-12 border-l border-white/10 hover:border-white transition-colors duration-500"
                >
                    <Quote className="w-8 h-8 text-white/20 mb-8 group-hover:text-white transition-colors" />
                    
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 group-hover:text-white transition-colors">
                        "{review.text}"
                    </p>
                    
                    <div className="mt-auto">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">{review.author}</h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 uppercase tracking-wider">
                            <span>{review.role}</span>
                            <span className="w-1 h-1 bg-gray-700 rounded-full" />
                            <span>{review.company}</span>
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                        <ArrowRight className="text-white w-6 h-6" />
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
