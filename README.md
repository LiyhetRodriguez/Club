# Club Meta — Gestión de Alquiler de Espacios (Frontend PRO)
**Next.js 14 + Tailwind + Framer Motion + Zustand + Axios**  
Tema **Luxury Llanero** (verde, dorado, humo, carbón).  
Conexión **Mixta**: Mock + API (`NEXT_PUBLIC_API_URL`).

## 🚀 Requisitos
- Node.js 18+
- npm o pnpm

## ▶️ Ejecutar
```bash
npm install
npm run dev
```
Visita: http://localhost:3000

## 🔗 Configurar API
Crea `.env.local` con:
```
NEXT_PUBLIC_API_URL=https://tu-backend-render.com/api
```
Si no hay backend, se usan **mocks** automáticamente.

## 📂 Estructura
- `app/` App Router (público y admin)
- `components/` UI reutilizable
- `lib/` cliente axios + store zustand + utils
- `mocks/` datos simulados
- `styles/` Tailwind global

## 🧪 Flujo de demo (3 min)
1. Landing → **Ver espacios**
2. Abrir un espacio → **Reservar** → **Cotización** en tiempo real
3. Enviar → **Confirmación**
4. Entrar a **/admin** → ver **Dashboard** y **Reservas**

## 📝 Notas
- PDF: placeholder en confirmación (luego conectar a backend).
- Auth admin: demo (login simulado). Reemplaza por JWT/equivalente.
