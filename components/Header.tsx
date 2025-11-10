"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Espacios", href: "#espacios" },
  { name: "Galería", href: "#galeria" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a120a]/75 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
          : "bg-[#1a120a]/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Altura más pequeña → header más compacto */}
        <div className="h-12 md:h-14 flex items-center justify-between gap-4">
          {/* Logo escudo */}
          <a href="#inicio" className="inline-flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Escudo Club Meta"
              className="h-8 w-auto object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
            />
          </a>

          {/* Navegación */}
          <nav className="hidden sm:flex items-center gap-2">
            <div className="rounded-full bg-white/5 border border-white/10 px-3 md:px-4 py-1 backdrop-blur-md">
              <ul className="flex items-center gap-4 md:gap-6 text-[13px] md:text-[14px] font-medium text-[#f5efe6] tracking-wide">
                {LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="relative block px-1 py-1 transition-colors hover:text-[#c7a776]"
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#c7a776] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
