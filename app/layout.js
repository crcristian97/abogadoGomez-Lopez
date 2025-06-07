import { Merriweather, Lato } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-merriweather',
});

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata = {
  title: "Estudio López Gómez",
  description: "Estudio de arquitectura y diseño",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${merriweather.variable} ${lato.variable}`}>
      <body className="font-lato antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
