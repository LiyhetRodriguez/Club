"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginProps) {
  const [view, setView] = useState<'login' | 'register'>('login');

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#050505] border-l border-white/10 z-[1000] flex flex-col shadow-2xl"
          >
            
            {/* Header */}
            <div className="p-8 flex justify-between items-center border-b border-white/10">
                <h2 className="text-xl font-bold text-white tracking-wider uppercase">Member Access</h2>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                    <X size={24} />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                        {view === 'login' ? 'WELCOME BACK.' : 'JOIN THE LIST.'}
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {view === 'login' 
                            ? "Access your exclusive benefits and manage your reservations." 
                            : "Apply for membership to unlock priority booking and VIP status."}
                    </p>
                </div>

                <form className="space-y-8">
                    {view === 'register' && (
                        <div className="group">
                            <input 
                                type="text" 
                                placeholder="FULL NAME" 
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-medium focus:border-white outline-none placeholder-gray-600 transition-colors"
                            />
                        </div>
                    )}
                    
                    <div className="group">
                        <input 
                            type="email" 
                            placeholder="EMAIL ADDRESS" 
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-medium focus:border-white outline-none placeholder-gray-600 transition-colors"
                        />
                    </div>

                    <div className="group">
                        <input 
                            type="password" 
                            placeholder="PASSWORD" 
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white text-lg font-medium focus:border-white outline-none placeholder-gray-600 transition-colors"
                        />
                    </div>

                    <button className="w-full bg-white text-black h-16 font-black text-lg uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-8">
                        {view === 'login' ? 'Enter' : 'Apply Now'}
                        <ArrowRight size={20} />
                    </button>
                </form>

                <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                        {view === 'login' ? "Don't have an account?" : "Already a member?"}
                    </p>
                    <button 
                        onClick={() => setView(view === 'login' ? 'register' : 'login')}
                        className="text-sm font-bold text-white uppercase tracking-widest hover:text-gray-300 flex items-center gap-2"
                    >
                        {view === 'login' ? 'Register' : 'Log In'} <ArrowUpRight size={14} />
                    </button>
                </div>

            </div>

            {/* Footer */}
            <div className="p-8 bg-[#0A0A0A] border-t border-white/10">
                <p className="text-xs text-gray-600 text-center uppercase tracking-widest">
                    Secure Member Portal — Encrypted
                </p>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
