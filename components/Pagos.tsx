"use client";

export default function Pagos() {
  const metodos = [
    { nombre: "Efecty", img: "/efecty.png" },
    { nombre: "Visa", img: "/visa.png" },
    { nombre: "Mastercard", img: "/mastercard.png" },
    { nombre: "Daviplata", img: "/daviplata.png" },
    { nombre: "Nequi", img: "/nequi.png" },
    { nombre: "Bancolombia", img: "/bancolombia.png" },
  ];

  return (
    <section id="pagos" className="py-24 bg-[#0e0e0e] text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Métodos de Pago</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {metodos.map((m, i) => (
            <div
              key={i}
              className="p-4 bg-white/5 border border-white/10 rounded-xl w-28 h-24 flex flex-col justify-center items-center hover:bg-white/10 transition"
            >
              <img src={m.img} alt={m.nombre} className="w-10 h-10 mb-2" />
              <p className="text-xs text-gray-300">{m.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
