"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Sparkles, Star, ExternalLink, Navigation } from "lucide-react";

export default function Ubicacion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Mouse follow effect for the card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      ref={containerRef}
      id="ubicacion"
      className="relative min-h-screen flex items-center justify-center py-32 bg-meta-black overflow-hidden font-anicon perspective-1000"
    >
      {/* --- BACKGROUND FX (Stealth Mode) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Fog */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-meta-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-noise opacity-[0.04]" />
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto px-6 z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          style={{ opacity, y }}
          className="text-center mb-24 relative"
        >
          <h2 className="text-[10vw] leading-none font-black tracking-tighter text-white opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
            LOCATION
          </h2>
          
          <motion.div className="relative z-10">
            <span className="text-xs font-bold tracking-[0.4em] text-meta-silver uppercase block mb-4">
                The Coordinate
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              UBICACIÓN
            </h2>
          </motion.div>
        </motion.div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-meta-onyx">
          
          {/* INFO PANEL (Brutalist) */}
          <div className="lg:col-span-4 p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 relative group" onMouseMove={handleMouseMove}>
             <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(255, 255, 255, 0.03),
                    transparent 80%
                  )
                `
              }}
            />
            
            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  HQ / Main
                </h3>
                <div className="space-y-1 text-gray-400 font-light text-lg">
                  <p>Calle 123 #45-67</p>
                  <p>Bogotá, D.C.</p>
                  <p>Zona Rosa - VIP Sector</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Direct Line</h3>
                <a href="tel:+573029884505" className="text-3xl text-white font-light hover:text-gray-300 transition-colors">
                  +57 302 988 4505
                </a>
              </div>

              <div className="pt-8">
                 <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span>Get Directions</span>
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* MAP (Monochrome) */}
          <div className="lg:col-span-8 h-[600px] lg:h-auto relative bg-[#050505] overflow-hidden">
            {/* Overlay Grid - Removed mix-blend to avoid click-through issues if any */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 z-10 pointer-events-none border-l border-white/5" />

            <iframe
              title="Club Meta Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8580296175565!2d-74.06282782589165!3d4.629008995358678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99b00db04f3b%3A0x3d7e2e4c9083e8f2!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1696354548721!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              // Removed heavy invert/grayscale. Now it's just a clean map.
              style={{ border: 0, filter: 'contrast(1.1) saturate(0.8)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-500 relative z-0"
            />

            <div className="absolute bottom-8 right-8 z-20 pointer-events-none">
                <div className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest border border-white/20 pointer-events-auto">
                    Satellite View
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
