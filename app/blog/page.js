import HeroServices from "../components/HeroServices";
import BlogsHeadline from "../components/BlogsHeadline";
import BannerProduct from "../components/BannerProduct";
import Breadcrumbs from "../components/Breadcrumbs";
import { blogData } from "../mock/blogData";
import { generateBlogCollectionSchema } from "../utils/blogSitemapSchema";

export const metadata = {
  title: "Blog jurídico: noticias y artículos legales en CABA",
  description: "Enterate de las últimas noticias sobre derecho penal y civil, actualizaciones legales y análisis de casos relevantes en la Ciudad de Buenos Aires, Capital Federal.",
  openGraph: {
    title: "Blog jurídico: noticias y artículos legales en CABA",
    description: "Enterate de las últimas noticias sobre derecho penal y civil, actualizaciones legales y análisis de casos relevantes en la Ciudad de Buenos Aires, Capital Federal.",
    url: 'https://www.estudiodeabogadosgomezlopez.com.ar/blog',
  },
  twitter: {
    title: "Blog jurídico: noticias y artículos legales en CABA",
    description: "Enterate de las últimas noticias sobre derecho penal y civil, actualizaciones legales y análisis de casos relevantes en la Ciudad de Buenos Aires, Capital Federal.",
  },
  other: {
    'application/ld+json': [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Inicio',
            'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog Jurídico',
            'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/blog'
          } 
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'name': 'Blog Jurídico - Estudio López & Gómez',
        'description': 'Artículos, novedades y análisis legales de nuestros abogados expertos. Mantente informado sobre derecho penal, civil, laboral y más.',
        'url': 'https://www.estudiodeabogadosgomezlopez.com.ar/blog',
        'publisher': {
          '@type': 'Organization',
          'name': 'Estudio López & Gómez',
          'url': 'https://www.estudiodeabogadosgomezlopez.com.ar',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.estudiodeabogadosgomezlopez.com.ar/logo.png'
          }
        },
        'blogPost': blogData.map(post => ({
          '@type': 'BlogPosting',
          'headline': post.title,
          'description': post.description,
          'url': `https://www.estudiodeabogadosgomezlopez.com.ar/blog/${post.slug}`,
          'datePublished': post.datePublished,
          'dateModified': post.dateModified,
          'author': {
            '@type': 'Person',
            'name': post.author
          },
          'image': post.image
        }))
      },
      generateBlogCollectionSchema()
    ]
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
