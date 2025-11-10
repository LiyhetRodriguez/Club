"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Espacios", href: "#espacios" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a0f08]/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border-b border-[#c6a56b]/30 py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Logo con luz cálida */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 0.3 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="Escudo Club Meta"
            className="h-12 md:h-14 object-contain drop-shadow-[0_0_18px_rgba(198,165,107,0.4)]"
          />
        </motion.div>

        {/* Enlaces elegantes */}
        <nav
          className={`flex gap-8 md:gap-12 font-anicon ${
            scrolled
              ? "text-[13px] md:text-[14px]"
              : "text-[15px] md:text-[16px]"
          } text-[#f8f4ef] tracking-wide font-medium transition-all duration-300`}
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{
                y: -2,
                scale: 1.05,
                color: "#c6a56b",
                textShadow: "0 0 12px rgba(198,165,107,0.8)",
              }}
              whileTap={{
                scale: 0.96,
                color: "#e9d8a6",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-[#c6a56b] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
