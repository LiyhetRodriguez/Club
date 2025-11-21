"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([
    { from: "bot", text: "System Online. How may I assist you today?" },
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
          text: "Request received. Connecting to concierge services...",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating Trigger */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white text-black flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 w-[350px] bg-[#0A0A0A] border border-white/10 shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-white">META AI</span>
              </div>
              <Sparkles className="w-4 h-4 text-gray-500" />
            </div>

            {/* Messages */}
            <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-[#050505]">
              {conversation.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 text-xs font-medium leading-relaxed ${
                      msg.from === "user"
                        ? "bg-white text-black"
                        : "bg-[#151515] text-gray-300 border border-white/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-black border-t border-white/10 flex gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-[#151515] border border-white/10 text-white text-xs p-3 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Type command..."
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-white text-black p-3 hover:bg-gray-200 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
