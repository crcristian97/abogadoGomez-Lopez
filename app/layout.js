import { Merriweather, Lato } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./utils/WhatsApp";
import Script from "next/script";

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
    default: "Abogados Especialistas en Derecho Penal y Civil en Buenos Aires",
  },
  description: "Estudio jurídico especializado en derecho penal y civil, con amplia experiencia en litigios y asesoramiento legal personalizado.",
  keywords: ["abogados", "derecho penal", "derecho civil", "estudio jurídico", "abogados especialistas", "Buenos Aires"],
  authors: [{ name: "Estudio Gómez & López" }],
  creator: "Estudio Gómez & López",
  publisher: "Estudio Gómez & López",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.estudiodeabogadosgomezlopez.com.ar/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Estudio Gómez & López - Abogados Especialistas",
    description: "Estudio jurídico especializado en derecho penal y civil, con amplia experiencia en litigios y asesoramiento legal personalizado.",
    url: 'https://www.estudiodeabogadosgomezlopez.com.ar/',
    siteName: 'Estudio Gómez & López',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Estudio Gómez & López - Abogados Especialistas en Buenos Aires',
      },
      {
        url: '/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Estudio Gómez & López - Abogados Especialistas en Buenos Aires',
      },
      {
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: 'Estudio Gómez & López - Abogados Especialistas en Buenos Aires',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Estudio Gómez & López - Abogados Especialistas en Buenos Aires",
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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T4XSYS37PK"></Script>
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T4XSYS37PK');
            `,
          }}
        />
      </head>
      <body className="font-lato antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
