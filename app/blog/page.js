import HeroServices from "../components/HeroServices";
import BlogsHeadline from "../components/BlogsHeadline";
import BannerProduct from "../components/BannerProduct";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Blog jurídico: noticias y artículos legales en CABA",
  description: "Enterate de las últimas noticias sobre derecho penal y civil, actualizaciones legales y análisis de casos relevantes en la Ciudad de Buenos Aires, Capital Federal.",
  openGraph: {
    title: "Blog jurídico: noticias y artículos legales en CABA",
    description: "Enterate de las últimas noticias sobre derecho penal y civil, actualizaciones legales y análisis de casos relevantes en la Ciudad de Buenos Aires, Capital Federal.",
    url: 'https://estudiolopezgomez.com/blog',
  },
  twitter: {
    title: "Blog jurídico: noticias y artículos legales en CABA",
    description: "Enterate de las últimas noticias sobre derecho penal y civil, actualizaciones legales y análisis de casos relevantes en la Ciudad de Buenos Aires, Capital Federal.",
  },
  other: {
    'application/ld+json': {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Inicio',
          'item': 'https://estudiolopezgomez.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Noticias y artículos sobre derecho penal y civil en Buenos Aires Capital Federal',
          'item': 'https://estudiolopezgomez.com/blog'
        } 
      ]
    }
  }
};

export default function BlogPage() {
  return (
    <div>
      <HeroServices
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/blog-juridico-en-buenos-aires.webp"
        alt="Blog de Estudio Gómez&López"
        title="Blog Jurídico en Buenos Aires"
        description="Artículos, novedades y análisis legales de nuestros abogados expertos. Mantente informado sobre derecho penal, civil, laboral y más."
        buttonShow={false}
      />
      <Breadcrumbs />
      <BlogsHeadline />
      <BannerProduct />
    </div>
  );
}
