"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Users, Hash, CreditCard } from "lucide-react";

export default function Cotizacion() {
  return (
    <section
      id="reservas"
      className="relative py-32 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Header Info */}
        <div className="lg:col-span-4 space-y-8">
            <div>
                <span className="text-xs font-bold tracking-[0.4em] text-meta-silver uppercase mb-4 block">
                    Booking Request
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none mb-6">
                    Secure <br/> Your Spot
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Please provide the details of your event. Our concierge team will review your request and respond within 24 hours with a tailored proposal.
                </p>
            </div>

            <div className="p-8 border border-white/10 bg-[#0A0A0A]">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                    Direct Contact
                </h3>
                <p className="text-gray-400 text-sm mb-1">VIP Support Line</p>
                <a href="tel:+573029884505" className="text-2xl text-white font-light hover:text-gray-300 transition-colors block mb-6">
                    +57 302 988 4505
                </a>
                <p className="text-gray-400 text-sm mb-1">Corporate Events</p>
                <a href="mailto:events@clubmeta.com" className="text-lg text-white hover:text-gray-300 transition-colors">
                    events@clubmeta.com
                </a>
            </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8">
            <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-[#050505] border border-white/10 p-8 md:p-12"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    
                    {/* Space Selection */}
                    <div className="md:col-span-2">
                         <label className="block text-xs font-bold text-meta-silver uppercase tracking-widest mb-4">
                            Select Space
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Main Hall', 'Garden', 'Rooftop', 'Pool Deck'].map((space) => (
                                <label key={space} className="cursor-pointer group relative">
                                    <input type="radio" name="space" className="peer sr-only" />
                                    <div className="absolute inset-0 border border-white/20 peer-checked:bg-white peer-checked:border-white transition-all duration-300" />
                                    <div className="relative p-4 text-center">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider peer-checked:text-black group-hover:text-white peer-checked:group-hover:text-black transition-colors">
                                            {space}
                                        </span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Personal Info */}
                    <div className="space-y-8">
                         <div className="relative group">
                            <input
                            type="text"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                            placeholder="Name"
                            />
                            <label className="absolute left-0 top-4 text-xs font-bold text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[10px]">
                                Full Name
                            </label>
                        </div>
                         <div className="relative group">
                            <input
                            type="email"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                            placeholder="Email"
                            />
                            <label className="absolute left-0 top-4 text-xs font-bold text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[10px]">
                                Email Address
                            </label>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="relative group">
                            <input
                            type="tel"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                            placeholder="Phone"
                            />
                            <label className="absolute left-0 top-4 text-xs font-bold text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[10px]">
                                WhatsApp / Phone
                            </label>
                        </div>
                         <div className="relative group">
                            <input
                            type="text"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                            placeholder="Code"
                            />
                            <label className="absolute left-0 top-4 text-xs font-bold text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[10px]">
                                Access Code (Optional)
                            </label>
                        </div>
                    </div>

                    {/* Event Details */}
                    <div className="relative group">
                        <Calendar className="absolute right-0 top-4 w-4 h-4 text-gray-600" />
                        <input
                        type="date"
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0"
                        />
                        <label className="absolute left-0 -top-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            Event Date
                        </label>
                    </div>

                    <div className="relative group">
                         <Users className="absolute right-0 top-4 w-4 h-4 text-gray-600" />
                        <input
                        type="number"
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                        placeholder="Guests"
                        />
                        <label className="absolute left-0 top-4 text-xs font-bold text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[10px]">
                            Guest Count
                        </label>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div className="relative group">
                            <Clock className="absolute right-0 top-4 w-4 h-4 text-gray-600" />
                            <input
                            type="time"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0"
                            />
                            <label className="absolute left-0 -top-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                Start Time
                            </label>
                        </div>
                         <div className="relative group">
                            <Clock className="absolute right-0 top-4 w-4 h-4 text-gray-600" />
                            <input
                            type="time"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0"
                            />
                            <label className="absolute left-0 -top-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                End Time
                            </label>
                        </div>
                    </div>

                </div>

                {/* Terms & Submit */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <label className="flex items-center gap-3 text-xs text-gray-500 cursor-pointer hover:text-white transition-colors">
                        <div className="relative w-5 h-5 border border-white/30 flex items-center justify-center">
                            <input type="checkbox" className="peer sr-only" />
                            <div className="w-3 h-3 bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="tracking-wide uppercase">I accept the privacy policy and terms.</span>
                    </label>

                    <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-meta-platinum transition-colors flex items-center gap-4 group w-full md:w-auto justify-center">
                        <span>Submit Request</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </motion.form>
        </div>

      </div>
    </section>
  );
}
