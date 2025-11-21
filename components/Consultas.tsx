"use client";
import { motion } from "framer-motion";
import { Send, MessageSquare, HelpCircle } from "lucide-react";

export default function Consultas() {
  return (
    <section id="consultas" className="relative bg-[#080808] py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <div className="space-y-8">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">Concierge Online</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              Have a <br/> Question?
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed border-l-2 border-white/20 pl-6">
              Whether it's a specific requirement for your event or a question about our membership tiers, our concierge team is ready to assist.
            </p>

             <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-meta-silver" />
                        Response Time
                    </h4>
                    <p className="text-2xl font-light text-gray-400">~15 Min</p>
                </div>
                <div>
                     <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-meta-silver" />
                        Support 
                    </h4>
                    <p className="text-2xl font-light text-gray-400">24/7 Access</p>
                </div>
             </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="relative">
             <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-20 pointer-events-none" />
             
             <form className="relative bg-[#030303] border border-white/10 p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</label>
                        <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" placeholder="ENTER NAME" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Contact</label>
                        <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-white/30 transition-colors" placeholder="EMAIL OR PHONE" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Inquiry</label>
                    <textarea rows={4} className="w-full bg-[#0A0A0A] border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="HOW CAN WE HELP?" />
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                </motion.button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
}
