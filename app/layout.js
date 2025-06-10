import { Merriweather, Lato } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./utils/WhatsApp";
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
  title: {
    default: "Estudio López & Gómez - Abogados Especialistas en Derecho Penal y Civil",
    template: "%s | Estudio López & Gómez"
  },
  description: "Estudio jurídico especializado en derecho penal y civil, con amplia experiencia en litigios y asesoramiento legal personalizado.",
  keywords: ["abogados", "derecho penal", "derecho civil", "estudio jurídico", "abogados especialistas", "Buenos Aires"],
  authors: [{ name: "Estudio López & Gómez" }],
  creator: "Estudio López & Gómez",
  publisher: "Estudio López & Gómez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://estudiolopezgomez.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Estudio López & Gómez - Abogados Especialistas",
    description: "Estudio jurídico especializado en derecho penal y civil, con amplia experiencia en litigios y asesoramiento legal personalizado.",
    url: 'https://estudiolopezgomez.com',
    siteName: 'Estudio López & Gómez',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Estudio López & Gómez - Abogados Especialistas",
    description: "Estudio jurídico especializado en derecho penal y civil, con amplia experiencia en litigios y asesoramiento legal personalizado.",
  },
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
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
