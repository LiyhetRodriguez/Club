"use client";
import { motion } from "framer-motion";
import { Wine, UtensilsCrossed, Music, Users, Building, Sun, ArrowRight } from "lucide-react";

const servicios = [
  {
    icono: <Building size={32} />,
    titulo: "Espacios",
    texto: "Auditorios y terrazas de arquitectura brutalista adaptable.",
    fondo: "/serv1.jpg",
  },
  {
    icono: <UtensilsCrossed size={32} />,
    titulo: "Gastronomía",
    texto: "Alta cocina de autor y catering experimental.",
    fondo: "/serv2.jpg",
  },
  {
    icono: <Music size={32} />,
    titulo: "Sound & Stage",
    texto: "Acústica de precisión para artistas de talla mundial.",
    fondo: "/serv3.jpg",
  },
  {
    icono: <Users size={32} />,
    titulo: "Corporativo",
    texto: "Lanzamientos de marca y conferencias de alto impacto.",
    fondo: "/serv4.jpg",
  },
  {
    icono: <Sun size={32} />,
    titulo: "Social",
    texto: "Celebraciones privadas bajo estrictos estándares de exclusividad.",
    fondo: "/serv5.jpg",
  },
  {
    icono: <Wine size={32} />,
    titulo: "Mixología",
    texto: "Barra signature con licores premium y diseño molecular.",
    fondo: "/serv6.jpg",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative bg-[#080808] text-white py-32 overflow-hidden">
      {/* Subtle Deep Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050508] to-black pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 border-b border-white/10 pb-8" data-aos="fade-up">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.4em] text-gray-500 uppercase mb-2 block">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              SERVICIOS
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-md text-right mt-6 md:mt-0 font-light leading-relaxed"
          >
            Excelencia técnica y hospitalidad de vanguardia. <br/>
            Diseñamos cada detalle.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-2xl"
            >
              {/* Background Image - Visible by default with muted colors */}
              <div
                className="absolute inset-0 opacity-100 transition-all duration-700 ease-out" 
                style={{ 
                  backgroundImage: `url(${servicio.fondo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.6) saturate(0.7) contrast(1.1)' // Visible, slightly muted
                }}
              />
              
              {/* Hover Effect - Just slightly brighter */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    backgroundImage: `url(${servicio.fondo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.8) saturate(0.9) contrast(1.1)'
                }}
              />
              
              {/* Gradient Overlay - Lighter to show image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-10">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-gray-600 group-hover:text-white transition-colors">0{index + 1}</span>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-[-10deg]">
                    {servicio.icono}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-300">
                    {servicio.titulo}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed max-w-[80%]">
                    {servicio.texto}
                  </p>
                  
                  <div className="mt-6 w-8 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-white transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
