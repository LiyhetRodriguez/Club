"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <motion.a
      href="https://wa.me/57312 4350412"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
        <div className="relative flex items-center justify-center w-14 h-14 bg-black border border-white/20 rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:border-[#25D366] transition-colors duration-500">
            <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <FaWhatsapp className="w-6 h-6 text-white group-hover:text-[#25D366] transition-colors duration-300" />
        </div>
    </motion.a>
  );
}
