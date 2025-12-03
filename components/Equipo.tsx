"use client";

import { motion } from "framer-motion";

export default function Historia() {
  return (
    <section
      id="historia"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* TÍTULO IGUAL A LOS OTROS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center mb-24"
      >
        {/* TEXTO GIGANTE DETRÁS */}
        <h2
          className="
            absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            text-[10vw] font-black tracking-tighter 
            text-white/5 select-none pointer-events-none uppercase
          "
        >
          HISTORIA
        </h2>

        <div className="relative z-10">
          <span className="text-xs tracking-[0.35em] text-gray-400 uppercase block mb-4">
            Nuestra Esencia
          </span>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase">
            HISTORIA & LEGADO
          </h2>
        </div>
      </motion.div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* TEXTO A LA IZQUIERDA */}
        <div className="space-y-8 text-gray-300 text-lg leading-relaxed">

          <p>
            La corporación Club El Meta nació en 1940, basa sus principios en la hermandad, 
            la solidaridad y la amistad, pilares estos que hemos cultivado a través de los años.
          </p>

          <p>
            Nuestras instalaciones son las más completas de la región por su ubicación, 
            exclusividad, confort y seguridad; nuestros escenarios deportivos ofrecen diversas 
            alternativas de actividad física.
          </p>

          <p>
            Entrar a la Corporación Club El Meta es entrar en un paraíso en medio del trajín 
            diario. Luego de una jornada extenuante, en nuestras instalaciones es posible 
            relajarse con los vapores terapéuticos del sauna, hacer ejercicio en el gimnasio, 
            explorar la vanidad a través de esteticistas profesionales, disfrutar un buen licor 
            en el bar, degustar los mejores productos de la cafetería o restaurante, o simplemente 
            desconectarse admirando la espectacular vista de nuestros jardines.
          </p>

          <p>
            A lo largo de los años hemos recibido familias, empresarios, deportistas y visitantes 
            de todo el país. Hoy seguimos consolidándonos como un punto de encuentro que combina 
            tradición, confort y experiencias memorables.
          </p>
        </div>

        {/* IMAGEN PEQUEÑA — SOLO EN MD Y DESKTOP */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            hidden md:block 
            w-full h-[420px] 
            rounded-2xl overflow-hidden shadow-2xl 
            bg-cover bg-center
          "
          style={{
            backgroundImage: "url('/historia.jpg')", // ⬅️ AQUÍ VA TU IMAGEN PEQUEÑA
          }}
        />
      </div>
    </section>
  );
}
