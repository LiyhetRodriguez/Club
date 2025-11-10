"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Consultas() {
  const [form, setForm] = useState({
    espacio: "",
    fecha: "",
    horaInicio: "",
    horaFin: "",
    personas: 1,
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consulta enviada ✅");
  };

  return (
    <section id="consultas" className="py-24 bg-[#0e0e0e] text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Consulta Disponibilidad</h2>

        <motion.form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md"
        >
          <select
            name="espacio"
            onChange={handleChange}
            className="bg-transparent border border-white/20 p-2 rounded-md text-sm"
          >
            <option value="">Selecciona espacio</option>
            <option>Terraza</option>
            <option>Auditorio</option>
            <option>Piscina</option>
          </select>

          <input
            type="date"
            name="fecha"
            onChange={handleChange}
            className="bg-transparent border border-white/20 p-2 rounded-md text-sm"
          />

          <input
            type="time"
            name="horaInicio"
            onChange={handleChange}
            className="bg-transparent border border-white/20 p-2 rounded-md text-sm"
          />

          <input
            type="time"
            name="horaFin"
            onChange={handleChange}
            className="bg-transparent border border-white/20 p-2 rounded-md text-sm"
          />

          <input
            type="number"
            name="personas"
            value={form.personas}
            onChange={handleChange}
            className="bg-transparent border border-white/20 p-2 rounded-md text-sm col-span-2"
          />

          <button className="col-span-2 bg-green-500 hover:bg-green-600 rounded-full py-2 font-semibold mt-2">
            Consultar
          </button>
        </motion.form>
      </div>
    </section>
  );
}
