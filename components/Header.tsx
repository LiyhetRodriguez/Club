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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 left-0 w-full z-30 transition-all duration-700 ease-in-out ${
          scrolled
            ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-8 lg:px-16">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#inicio" className="relative group">
              <img
                src="/logo.png"
                alt="Club Meta"
                className={`transition-all duration-500 ${scrolled ? 'h-8' : 'h-10'} w-auto object-contain drop-shadow-lg`}
              />
            </a>

            {/* Menu */}
            <nav className="hidden md:flex items-center gap-12 mx-auto">
              {LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={openLogin}
                className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
              >
                Login
              </button>

              <a
                href="#reservas"
                className="relative px-8 py-3 bg-white text-black text-xs font-black tracking-widest uppercase hover:bg-meta-platinum transition-all duration-300 clip-button hover:scale-105"
              >
                Reservar
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white relative z-50"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
            >
              <ul className="space-y-8 text-center">
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
                      className="text-4xl font-black text-white tracking-tighter hover:text-gray-500 transition-colors uppercase"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => { setOpen(false); openLogin(); }}
                    className="text-xl font-bold text-gray-400 hover:text-white uppercase tracking-widest mt-8"
                  >
                    Login Access
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx>{`
          .clip-button {
            clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
          }
        `}</style>
      </header>

      <Login isOpen={isLoginOpen} onClose={closeLogin} />
    </>
  );
}

