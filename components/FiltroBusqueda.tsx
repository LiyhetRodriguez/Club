"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const espaciosData = [
  {
    id: 1,
    nombre: "Salón Principal",
    descripcion: "Elegancia y amplitud para grandes eventos y celebraciones especiales.",
    imagen: "/Auditorio.jpg",
  },
  {
    id: 2,
    nombre: "Kiosko Campestre",
    descripcion: "Un entorno natural rodeado de vegetación, ideal para reuniones familiares o empresariales.",
    imagen: "/kiosco.jpg",
  },
  {
    id: 3,
    nombre: "Piscina & Bar",
    descripcion: "Ambiente tropical con iluminación cálida, música relajante y servicio personalizado.",
    imagen: "/Piscina&Bar.jpg",
  },
  {
    id: 4,
    nombre: "Terraza Panorámica",
    descripcion: "Una vista espectacular para disfrutar del atardecer en eventos inolvidables.",
    imagen: "/Terraza.jpg",
  },
];

export default function Espacios() {
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");

  // Filtrar espacios según el texto buscado
  const espacios = espaciosData.filter((e) =>
    e.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const siguiente = () => setCurrent((prev) => (prev + 1) % espacios.length);
  const anterior = () => setCurrent((prev) => (prev - 1 + espacios.length) % espacios.length);

  return (
    <section id="espacios" className="relative py-20 overflow-hidden text-white">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.35] blur-sm"
        style={{ backgroundImage: "url('/fondo-espacios.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/70"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10 px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#d6b98c] mb-6 tracking-wide">
          Nuestros Espacios
        </h2>
        <p className="text-[#e3dbcf]/90 mb-10">
          Explora nuestros ambientes diseñados para cada tipo de experiencia.
        </p>

        {/* Barra de búsqueda */}
        <div className="relative max-w-md mx-auto mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrent(0);
            }}
            placeholder="Buscar espacio (ej. bar, terraza...)"
            className="w-full bg-white/10 border border-white/20 rounded-full px-12 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d6b98c]/50"
          />
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d6b98c] opacity-70"
            size={18}
          />
        </div>

        {/* Si no hay resultados */}
        {espacios.length === 0 ? (
          <p className="text-gray-400 text-sm">No se encontraron espacios.</p>
        ) : (
          <>
            {/* Carrusel */}
            <div className="relative max-w-5xl mx-auto flex items-center justify-center">
              {/* Botón anterior */}
              <button
                onClick={anterior}
                className="absolute left-0 text-[#d6b98c] hover:scale-125 transition-transform duration-300 z-20"
              >
                <ChevronLeft size={45} />
              </button>

              {/* Imagen animada */}
              <div className="w-full overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(214,185,140,0.25)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={espacios[current].id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-[480px] md:h-[550px]"
                  >
                    <img
                      src={espacios[current].imagen}
                      alt={espacios[current].nombre}
                      className="w-full h-full object-cover rounded-2xl brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#d6b98c] mb-3">
                        {espacios[current].nombre}
                      </h3>
                      <p className="text-gray-300 mb-5 text-sm md:text-base">
                        {espacios[current].descripcion}
                      </p>
                      <button className="self-center md:self-start bg-[#d6b98c] text-[#2b1b0d] font-semibold py-2 px-8 rounded-full hover:bg-[#b8945c] transition-all duration-300">
                        Ver más
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Botón siguiente */}
              <button
                onClick={siguiente}
                className="absolute right-0 text-[#d6b98c] hover:scale-125 transition-transform duration-300 z-20"
              >
                <ChevronRight size={45} />
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-10 gap-3">
              {espacios.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                    i === current
                      ? "bg-[#d6b98c] scale-125 shadow-[0_0_10px_rgba(214,185,140,0.7)]"
                      : "bg-gray-500/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
