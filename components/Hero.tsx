"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Search, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const LINKS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Espacios", href: "#espacios" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1a120a]/65 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            : "bg-[#1a120a]/55 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo escudo */}
          <img
            src="/logo.png"
            alt="Escudo Club Meta"
            className="h-10 md:h-12 object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
          />
          {/* Navegación */}
          <nav className="flex gap-8 text-[#f8f4ef] text-sm md:text-base font-medium">
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#d6b98c] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col justify-start items-center text-center overflow-hidden font-['Anicon',sans-serif] pt-[100px]"
        style={{
          backgroundImage: "url('/fondo1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Fondo oscuro controlado */}
        <div className="absolute inset-0 bg-[#0e0a07]/75 backdrop-blur-[2px]" />

        {/* Redes flotantes izquierda */}
        <div className="fixed left-4 md:left-6 top-[45%] -translate-y-1/2 z-40 flex flex-col gap-3">
          {[ 
            { Icon: Phone, href: "tel:+573000000000", label: "Llamar" },
            { Icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
            { Icon: FaFacebookF, href: "https://www.facebook.com", label: "Facebook" },
            { Icon: Mail, href: "mailto:contacto@clubmeta.com", label: "Correo" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/25 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md backdrop-blur-sm"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        {/* WhatsApp flotante */}
        <a
          aria-label="WhatsApp"
          href="https://wa.me/573000000000"
          target="_blank"
          className="fixed z-40 right-4 md:right-6 bottom-5 md:bottom-6 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#19b656] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105"
        >
          <FaWhatsapp size={22} />
        </a>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-6xl px-6 pt-10 md:pt-14 flex flex-col items-center"
        >
          {/* Logo central */}
          <img
            src="/ClubMeta.png"
            alt="Club Meta"
            className="w-[65vw] md:w-[38vw] max-w-[540px] object-contain mb-6 md:mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          />

          {/* Buscador */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="w-full max-w-4xl bg-[#ffffff10] border border-white/15 backdrop-blur-xl rounded-[60px] shadow-[0_8px_40px_rgba(0,0,0,0.35)] px-5 py-5 md:px-8 md:py-6"
          >
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_auto] items-center">
              <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-3 border border-white/10">
                <CalendarDays size={18} className="text-[#d9c6a5]" />
                <input
                  type="date"
                  className="bg-transparent w-full text-white placeholder-white/70 text-sm md:text-base focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-3 border border-white/10">
                <Clock size={18} className="text-[#d9c6a5]" />
                <input
                  type="time"
                  className="bg-transparent w-full text-white placeholder-white/70 text-sm md:text-base focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-3 border border-white/10">
                <MapPin size={18} className="text-[#d9c6a5]" />
                <select
                  className="bg-transparent w-full text-white text-sm md:text-base focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Selecciona un espacio
                  </option>
                  <option value="salon">Salón Principal</option>
                  <option value="auditorio">Auditorio</option>
                  <option value="zona_verde">Zona Verde</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#c7a776] hover:bg-[#b89260] text-[#1a0f08] font-semibold text-sm md:text-[15px] shadow-[0_0_25px_rgba(199,167,118,0.4)] transition-all duration-300"
              >
                <Search size={16} />
                Consultar
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
