"use client";

export default function Cotizacion() {
  return (
    <section id="cotizaciones" className="section py-16 bg-[#121317]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Cotización</h2>

        <form onSubmit={(e)=>e.preventDefault()} className="glass rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <label className="text-sm text-gray-300">Espacio</label>
            <select className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none">
              <option>Terraza</option><option>Bar & Pic</option><option>Auditorio</option>
              <option>Ejecutivo</option><option>Sencillo</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-300">Nombre</label>
            <input className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none" />
          </div>

          <div>
            <label className="text-sm text-gray-300">Correo electrónico</label>
            <input type="email" className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none" placeholder="tucorreo@gmail.com" />
          </div>

          <div>
            <label className="text-sm text-gray-300">Contacto (WhatsApp)</label>
            <div className="flex gap-2">
              <span className="px-3 py-3 rounded-lg bg-white/5 border border-white/10 select-none">+57</span>
              <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300">Código de descuento</label>
            <input className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none" placeholder="84689" />
          </div>

          <div>
            <label className="text-sm text-gray-300">Fecha</label>
            <input type="date" className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none" />
          </div>

          <div>
            <label className="text-sm text-gray-300">Hora entrada</label>
            <input type="time" className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none" />
          </div>
          <div>
            <label className="text-sm text-gray-300">Hora salida</label>
            <input type="time" className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none" />
          </div>

          <div>
            <label className="text-sm text-gray-300">Personas</label>
            <input type="number" min="1" className="w-full mt-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none" />
          </div>

          <label className="md:col-span-2 flex items-center gap-2 text-sm text-gray-300">
            <input type="checkbox" className="accent-white/80" />
            Acepto el tratamiento de mis datos personales
          </label>

          <button className="md:col-span-2 mt-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
