import HeroServices from "../components/HeroServices";
import BlogsHeadline from "../components/BlogsHeadline";
import BannerProduct from "../components/BannerProduct";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Blog Jurídico",
  description: "Artículos y noticias sobre derecho penal y civil, actualizaciones legales y análisis de casos relevantes.",
  openGraph: {
    title: "Blog Jurídico | Estudio López & Gómez",
    description: "Artículos y noticias sobre derecho penal y civil, actualizaciones legales y análisis de casos relevantes.",
    url: 'https://estudiolopezgomez.com/blog',
  },
  twitter: {
    title: "Blog Jurídico | Estudio López & Gómez",
    description: "Artículos y noticias sobre derecho penal y civil, actualizaciones legales y análisis de casos relevantes.",
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
          'name': 'Blog Jurídico',
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
