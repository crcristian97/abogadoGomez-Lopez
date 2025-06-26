import ContactMap from "../components/ContactMap";
import Contact from "../components/Contact";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Contacto",
  description: "Contáctenos para una consulta legal personalizada. Estamos ubicados en Buenos Aires y atendemos casos en todo el país.",
  openGraph: {
    title: "Contacto | Estudio López & Gómez",
    description: "Contáctenos para una consulta legal personalizada. Estamos ubicados en Buenos Aires y atendemos casos en todo el país.",
    url: 'https://www.estudiodeabogadosgomezlopez.com.ar/contacto',
  },
  twitter: {
    title: "Contacto | Estudio López & Gómez",
    description: "Contáctenos para una consulta legal personalizada. Estamos ubicados en Buenos Aires y atendemos casos en todo el país.",
  },
};

export default function Contacto() {
  return (
    <div>
      <Breadcrumbs />
      <h1 className="text-4xl font-bold text-[#CBA240] mb-14 text-center mt-10">Nuestro estudio jurídico en Buenos Aires a su disposición</h1>
      <Contact />
      <ContactMap />
    </div>
  );
}   