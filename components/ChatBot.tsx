"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([
    { from: "bot", text: "👋 ¡Hola! Soy el asistente virtual del Club El Meta." },
    { from: "bot", text: "¿En qué puedo ayudarte hoy?" },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setConversation([...conversation, { from: "user", text: message }]);
    setMessage("");
    setTimeout(() => {
      setConversation((prev) => [
        ...prev,
        {
          from: "bot",
          text:
            "Puedo ayudarte con: 🗓️ reservas, 💰 cotizaciones o 📞 contacto directo con un asesor.",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* BURBUJA */}
      <motion.button
        className="fixed bottom-6 right-6 bg-[#0096C7] text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
        onClick={() => setOpen(!open)}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {open ? <X size={24} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* VENTANA */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-24 right-6 w-80 bg-white/90 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-[#0096C7] text-white font-semibold p-3">
              💬 Chat Asistente — Club El Meta
            </div>

            <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
              {conversation.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-xl ${
                    msg.from === "bot"
                      ? "bg-gray-100 text-gray-800 self-start"
                      : "bg-[#0096C7] text-white self-end ml-auto"
                  } max-w-[85%]`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-gray-200 flex gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 text-sm border border-gray-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-[#0096C7]"
                placeholder="Escribe un mensaje..."
              />
              <button
                onClick={handleSend}
                className="bg-[#0096C7] text-white px-3 py-2 rounded-xl hover:bg-[#00B4D8]"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

