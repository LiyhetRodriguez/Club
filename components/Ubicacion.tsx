"use client";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-24 bg-gradient text-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.55594780235!2d-73.6353!3d4.1522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2a0e97ac1fdb%3A0x8ef22e0c8a7cf57!2sVillavicencio%2C%20Meta!5e0!3m2!1ses!2sco!4v1711401300000"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold">Ubícanos</h2>
          <p className="text-gray-400">Club Meta, Villavicencio, Meta</p>
          <p className="text-gray-400">Teléfono: 302 988 4505</p>
          <div className="flex gap-4 mt-4">
            {["whatsapp.svg", "instagram.svg", "facebook.svg"].map((icon, i) => (
              <a key={i} href="#" className="hover:opacity-100 opacity-70">
                <img src={`/${icon}`} alt={icon} className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
