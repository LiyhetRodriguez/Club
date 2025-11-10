"use client";
import { motion } from "framer-motion";

export default function Whatsapp() {
  return (
    <motion.a
      href="https://wa.me/573029884505"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="w-7 h-7" />
    </motion.a>
  );
}
