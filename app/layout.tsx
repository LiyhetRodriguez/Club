import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOSInit from "../components/AOSInit";

export const metadata = {
  title: "Club Meta",
  description: "Reserva espacios exclusivos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
