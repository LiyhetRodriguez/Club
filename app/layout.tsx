import "./globals.css";
import Header from "../components/Header"; // ✅ ESTA ES LA CORRECTA

export const metadata = {
  title: "Club Meta",
  description: "Reserva espacios exclusivos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
