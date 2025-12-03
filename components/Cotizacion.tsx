"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";

// ------------------------------------------------------
// INPUT FLOTANTE REUTILIZABLE
// ------------------------------------------------------
function FloatInput({ label, type = "text", icon: Icon, dateHack = false, optional = false, ...props }) {
  return (
    <div className="relative group">

      {Icon && <Icon className="absolute right-0 top-4 w-4 h-4 text-gray-600" />}

      <input
        type={dateHack ? "text" : type}
        placeholder=" "
        autoComplete="new-password"
        required={!optional}
        onFocus={(e) => {
          if (dateHack) e.target.type = "date";
        }}
        onBlur={(e) => {
          if (dateHack && !e.target.value) e.target.type = "text";
        }}
        {...props}
        className={`
          w-full bg-transparent border-b border-white/20
          py-4 text-white placeholder-transparent
          focus:outline-none focus:border-white
          transition-colors peer

          ${type === "time"
            ? `
              [&::-webkit-datetime-edit]:opacity-0
              focus:[&::-webkit-datetime-edit]:opacity-100
            `
            : ""
          }

          ${type === "number"
            ? `
              [&::-webkit-inner-spin-button]:appearance-none
              [&::-webkit-outer-spin-button]:appearance-none
            `
            : ""
          }
        `}
      />

      <label
        className="
          absolute left-0 top-4 text-xs font-bold text-gray-500 uppercase tracking-widest
          transition-all
          peer-focus:-top-2 peer-focus:text-[10px]
          peer-valid:-top-2 peer-valid:text-[10px]
        "
      >
        {label}
      </label>
    </div>
  );
}

// ------------------------------------------------------
// COMPONENTE PRINCIPAL
// ------------------------------------------------------
export default function Cotizacion() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section
      id="reservas"
      className="relative py-32 bg-black overflow-hidden border-t border-white/5"
    >
      {/* FONDO */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">

        {/* ------------------------------------------- */}
        {/* HEADER IGUAL AL DE ESPACIOS */}
        {/* ------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-20"
        >
          {/* TEXTO GIGANTE DETRÁS */}
          <h2
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              text-[10vw] font-black tracking-tighter
              text-white/5 leading-none
              whitespace-nowrap select-none pointer-events-none
            "
          >
            COTIZACIÓN
          </h2>

          {/* TITULAR */}
          <div className="relative z-10">
            <span className="text-xs tracking-[0.35em] text-gray-400 uppercase block mb-4">
              SOLICITUD
            </span>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase">
              COTIZACIÓN
            </h2>
          </div>
        </motion.div>

        {/* ------------------------------------------- */}
        {/* LAYOUT PRINCIPAL */}
        {/* ------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* IZQUIERDA */}
          <div className="lg:col-span-4 space-y-10">

            <p className="text-gray-300 text-lg leading-relaxed">
              Completa la información de tu evento. Nuestro equipo elaborará una cotización personalizada basándose en los lineamientos oficiales del Club Meta.
            </p>

            <div className="space-y-8 text-sm text-gray-300 bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl">

              <div>
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white mb-2">
                  Vigencia de la cotización
                </h3>
                <p>
                  Esta cotización tiene una vigencia de <span className="font-semibold">5 días calendario</span>.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-white mb-2">
                  Nota importante
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>La reserva solo se garantiza mediante confirmación por escrito.</li>
                  <li>Se requiere un anticipo del <span className="font-semibold">50% del valor</span>.</li>
                  <li>El saldo debe estar cancelado máximo <span className="font-semibold">48 horas antes</span>.</li>
                  <li>Consumos adicionales deberán ser cancelados al finalizar el evento.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* ------------------------------------------- */}
          {/* FORMULARIO */}
          {/* ------------------------------------------- */}
          <div className="lg:col-span-8">

            <motion.form
              formNoValidate
              autoComplete="off"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => e.preventDefault()}
              className="bg-[#050505] border border-white/10 p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

                {/* ESPACIOS */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Seleccione el Espacio
                  </label>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Salón Principal", "Jardín", "Terraza", "Zona de Piscina"].map((space) => (
                      <label key={space} className="cursor-pointer group relative">
                        <input 
                          autoComplete="new-password" 
                          type="radio" 
                          name="space" 
                          className="peer sr-only" 
                        />
                        <div className="absolute inset-0 border border-white/20 peer-checked:bg-white peer-checked:border-white transition-all duration-300" />
                        <div className="relative p-4 text-center">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider 
                              peer-checked:text-black 
                              group-hover:text-white 
                              peer-checked:group-hover:text-black 
                              transition-colors">
                            {space}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* DATOS PERSONALES */}
                <div className="space-y-8">
                  <FloatInput label="Nombre Completo" autoComplete="new-password" />
                  <FloatInput type="email" label="Correo Electrónico" autoComplete="new-password" />
                </div>

                <div className="space-y-8">
                  <FloatInput type="tel" label="Teléfono / WhatsApp" autoComplete="new-password" />
                  <FloatInput optional label="Código de Acceso (Opcional)" autoComplete="new-password" />
                </div>

                {/* FECHA */}
                <FloatInput dateHack label="Fecha del Evento" icon={Calendar} autoComplete="new-password" />

                {/* INVITADOS */}
                <FloatInput
                  type="number"
                  min="1"
                  onKeyDown={(e) =>
                    ["-", "+", "e", "E"].includes(e.key) && e.preventDefault()
                  }
                  label="Número de Invitados"
                  icon={Users}
                  autoComplete="new-password"
                />

                {/* HORAS */}
                <FloatInput type="time" label="Hora de Inicio" icon={Clock} autoComplete="new-password" />
                <FloatInput type="time" label="Hora de Finalización" icon={Clock} autoComplete="new-password" />

              </div>

              {/* CHECK & BOTÓN */}
              <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">

                <label className="flex items-center gap-3 text-xs text-gray-500 cursor-pointer hover:text-white transition-colors">
                  <div className="relative w-5 h-5 border border-white/30 flex items-center justify-center">
                    <input type="checkbox" autoComplete="new-password" className="peer sr-only" />
                    <div className="w-3 h-3 bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="tracking-wide uppercase">
                    Acepto la política de privacidad y los términos.
                  </span>
                </label>

                <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-meta-platinum transition-colors flex items-center gap-4 group w-full md:w-auto justify-center">
                  <span>Enviar Solicitud</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>

            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
