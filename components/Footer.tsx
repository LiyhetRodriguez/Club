"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020202] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-meta-platinum/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
            <a href="#inicio" className="block w-fit">
               <img src="/logo.png" alt="Club Meta" className="h-12 object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Redefining exclusivity in the heart of the city. <br />
              Where architecture meets experience.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Services', 'Spaces', 'Experience', 'Membership'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-500 hover:text-meta-platinum transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookies', 'Guest Rules'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-meta-platinum transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-500 text-xs mb-4">Join the inner circle.</p>
            <div className="flex border-b border-white/20 pb-2 group focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-gray-600"
              />
              <button className="text-xs font-bold text-white hover:text-meta-platinum uppercase tracking-widest">
                JOIN
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-wider">
            © 2025 Club Meta. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest hover:text-meta-platinum transition-colors"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
