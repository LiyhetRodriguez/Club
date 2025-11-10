"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Consultas from "../components/Consultas";
import Espacios from "../components/Espacios";
import Equipo from "../components/Equipo";
import Reseñas from "../components/Reseñas";
import Ubicacion from "../components/Ubicacion";
import Whatsapp from "../components/Whatsapp";

export default function Home(){
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />          {/* Hero = portada principal */}
      <Servicios />
      <Consultas />
      <Espacios />      {/* Carrusel ancho */}
      <Equipo />
      <Reseñas />
      <Ubicacion />
      <Whatsapp />
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        © 2025 Club Meta — Todos los derechos reservados
      </footer>
    </main>
  );
}
