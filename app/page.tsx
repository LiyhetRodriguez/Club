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
import ChatBot from "../components/ChatBot";
import Footer from "../components/Footer";
import Cotizacion from "../components/Cotizacion";

export default function Home(){
  return (
    <main className="overflow-x-hidden bg-black selection:bg-meta-platinum selection:text-black">
      <Header />
      <Hero />
      <Servicios />
      <Espacios />
      <Consultas />
      <Cotizacion />
      <Equipo />
      <Reseñas />
      <Ubicacion />
      <Footer />
      
      {/* Floating Elements */}
      <Whatsapp />
      <ChatBot />
    </main>
  );
}
