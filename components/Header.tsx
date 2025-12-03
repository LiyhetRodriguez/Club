"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, Layers, Building2, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Login";
import { useUIStore } from "../lib/store";

const LINKS = [
  { name: "Inicio", href: "#inicio", icon: <Home size={18} /> },
  { name: "Servicios", href: "#servicios", icon: <Layers size={18} /> },
  { name: "Espacios", href: "#espacios", icon: <Building2 size={18} /> },
  { name: "Contacto", href: "#contacto", icon: <Phone size={18} /> },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isLoginOpen, openLogin, closeLogin } = useUIStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${scrolled ? "bg-black/40 backdrop-blur-xl py-3 border-b border-white/10" : "py-5"}
        `}
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <a href="#inicio" className="flex items-center">
              <img
                src="/logo.png"
                alt="Club Meta"
                className={`transition-all duration-500 w-auto 
                  ${scrolled ? "h-10" : "h-12 sm:h-14"}
                `}
              />
            </a>

            {/* MENÚ DESKTOP */}
            <nav className="hidden md:flex items-center gap-10">
              {LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold tracking-[0.20em] uppercase 
                             text-white/60 hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* ACCIONES DESKTOP */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={openLogin}
                className="text-xs font-semibold uppercase text-white/60 hover:text-white tracking-widest"
              >
                Login
              </button>

              <a
                href="#reservas"
                className="px-6 py-2 bg-white text-black text-xs font-black uppercase tracking-widest rounded hover:bg-gray-200 transition"
              >
                Reservar
              </a>
            </div>

            {/* BOTÓN MÓVIL */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white p-2"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>

      {/* MENU MÓVIL (DRAWER) */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[900]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              className="
                fixed top-0 right-0
                w-[75%] sm:w-[320px]
                bg-[#0B0B0B]
                border-l border-white/10
                shadow-2xl z-[1000]
                flex flex-col
                max-h-[90vh] overflow-y-auto
                rounded-bl-2xl
              "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            >
              {/* HEADER DEL DRAWER */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <p className="text-xs text-white/40 tracking-[0.3em] uppercase">Menú</p>
                <button className="text-white" onClick={() => setOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              {/* LINKS */}
              <nav className="flex flex-col px-6 py-6 gap-6">
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-lg text-white/80 hover:text-white transition font-semibold"
                  >
                    {link.icon}
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* DIVISOR */}
              <div className="mx-6 my-2 h-[1px] bg-white/10" />

              {/* BOTÓN LOGIN */}
              <button
                onClick={() => {
                  setOpen(false);
                  openLogin();
                }}
                className="
                  mx-6 mb-6 px-5 py-3 rounded-xl
                  bg-white/10 hover:bg-white/20
                  text-white/80 font-semibold tracking-wider transition
                "
              >
                Acceso de Miembros
              </button>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* LOGIN DRAWER */}
      <Login isOpen={isLoginOpen} onClose={closeLogin} />
    </>
  );
}
