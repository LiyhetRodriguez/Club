"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wine, UtensilsCrossed, Building } from "lucide-react";

const servicios = [
  {
    icono: <Building size={32} />,
    titulo: "Espacios",
    texto: "Auditorios y terrazas de arquitectura brutalista adaptable.",
    fondo: "/salon2.jpeg",
  },
  {
    icono: <UtensilsCrossed size={32} />,
    titulo: "Gastronomía",
    texto: "Alta cocina de autor y catering experimental.",
    fondo: "/gastronomia.jpg",
  },
  {
    icono: <Wine size={32} />,
    titulo: "Back bar",
    texto: "Barra signature con licores premium y diseño molecular.",
    fondo: "/bar.jpg",
  },
];

export default function Servicios() {

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      id="servicios"
      className="relative bg-[#080808] text-white pt-52 pb-32 overflow-hidden"
    >

      {/* ——— HEADER IGUAL A UBICACIÓN ——— */}
      <motion.div 
        style={{ opacity, y }}
        className="text-center mb-24 relative"
      >

        {/* TEXTO GIGANTE DETRÁS */}
        <h2 className="text-[10vw] leading-none font-black tracking-tighter text-white opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
          SERVICES
        </h2>

        {/* CONTENIDO DEL HEADER */}
        <motion.div className="relative z-10">
          <span className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase block mb-4">
            PORTFOLIO
          </span>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            SERVICIOS
          </h2>
        </motion.div>
      </motion.div>
      {/* ——— FIN DEL HEADER ——— */}

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6">

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group relative h-[450px] overflow-hidden
                rounded-[2.5rem] border border-white/10
                bg-[#0a0a0a] shadow-2xl
              "
            >

              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${servicio.fondo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.55)",
                }}
              />

              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100 transition duration-500
                "
                style={{
                  backgroundImage: `url(${servicio.fondo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.75)",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              <div className="relative z-10 flex flex-col justify-between h-full p-10">

                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-gray-500 group-hover:text-white transition">
                    0{index + 1}
                  </span>

                  <div className="text-gray-400 group-hover:text-white transform group-hover:scale-110 group-hover:rotate-[-10deg] transition">
                    {servicio.icono}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 group-hover:translate-x-2 transition">
                    {servicio.titulo}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-200 transition max-w-[80%] leading-relaxed">
                    {servicio.texto}
                  </p>

                  <div className="mt-6 w-8 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-white transition-all" />
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
