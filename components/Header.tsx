"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Login";
import { useUIStore } from "../lib/store";

const LINKS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Espacios", href: "#espacios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isLoginOpen, openLogin, closeLogin } = useUIStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ${
          scrolled
            ? "bg-black/40 backdrop-blur-lg py-3 border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <a href="#inicio">
              <img
                src="/logo.png"
                alt="Club Meta"
                className={`transition-all duration-500 ${
                  scrolled ? "h-8" : "h-10"
                } w-auto`}
              />
            </a>

            {/* MENU DESKTOP */}
            <nav className="hidden md:flex items-center gap-10 mx-auto">
              {LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold tracking-[0.20em] uppercase text-white/60 hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={openLogin}
                className="text-xs font-semibold tracking-widest uppercase text-white/60 hover:text-white"
              >
                Login
              </button>

              <a
                href="#reservas"
                className="px-6 py-2 bg-white text-black text-xs font-black tracking-widest uppercase hover:bg-gray-200 transition"
              >
                Reservar
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white z-50"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MENU MÓVIL */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.45 }}
              className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40"
            >
              <ul className="space-y-10 text-center">
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-4xl font-black text-white hover:text-gray-400"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={() => {
                      setOpen(false);
                      openLogin();
                    }}
                    className="text-xl font-bold text-gray-400 hover:text-white mt-10"
                  >
                    Acceso Miembros
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <Login isOpen={isLoginOpen} onClose={closeLogin} />
    </>
  );
}
