"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Espacios from "../components/Espacios";
import Reseñas from "../components/Reseñas";
import Ubicacion from "../components/Ubicacion";
import Equipo from "../components/Equipo";
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
      <Cotizacion />
      <Reseñas />
      <Ubicacion />
       <Equipo />
      <Footer />
      
      {/* Floating Elements */}
      <Whatsapp />
      <ChatBot />
    </main>
  );
}
