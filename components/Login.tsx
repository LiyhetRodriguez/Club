"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginProps) {
  // bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* FONDO OSCURO CON FADE RÁPIDO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
          />

          {/* PANEL DESLIZANTE RÁPIDO */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              fixed top-0 right-0 h-full 
              w-full max-w-[360px] sm:max-w-[420px]
              bg-[#050505] border-l border-white/10 shadow-xl
              z-[1000] flex flex-col
            "
          >
            {/* HEADER */}
            <div className="p-5 flex justify-between items-center border-b border-white/10">
              <h2 className="text-sm font-bold text-white tracking-widest uppercase">
                Acceso de Miembros
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* CONTENIDO CON TRANSICIÓN SUAVE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
              className="flex-1 p-6 flex flex-col justify-start"
            >
              {/* TÍTULOS */}
              <div className="mb-8 mt-4">
                <h1 className="text-3xl font-black text-white tracking-tight leading-tight">
                  Bienvenido de Nuevo
                </h1>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  Inicia sesión para gestionar tus reservas y beneficios.
                </p>
              </div>

              {/* FORMULARIO */}
              <form className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="
                      w-full bg-transparent border-b border-white/20 
                      py-3 text-white text-sm 
                      focus:border-white outline-none placeholder-gray-500
                      transition-colors
                    "
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="
                      w-full bg-transparent border-b border-white/20 
                      py-3 text-white text-sm 
                      focus:border-white outline-none placeholder-gray-500
                      transition-colors
                    "
                  />
                </div>

                {/* BOTÓN */}
                <button
                  className="
                    w-full bg-white text-black 
                    h-12 font-black text-sm 
                    uppercase tracking-widest
                    hover:bg-gray-200 transition
                    flex items-center justify-center gap-2
                  "
                >
                  Ingresar
                  <ArrowRight size={16} />
                </button>
              </form>

              {/* OLVIDÉ MI CONTRASEÑA */}
              <div className="mt-10 flex justify-between items-center border-t border-white/10 pt-6">
                <button className="text-xs font-bold text-white uppercase tracking-widest hover:text-gray-300 transition-colors">
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            </motion.div>

            {/* FOOTER */}
            <div className="p-5 bg-[#0A0A0A] border-t border-white/10">
              <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest">
                Portal Seguro — Cifrado SSL
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
