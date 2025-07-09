import { blogData } from "../mock/blogData";

/**
 * Genera un schema de ItemList para todos los artículos del blog
 * Esto ayuda a los motores de búsqueda a descubrir todos los artículos
 * @returns {Object} Schema markup de ItemList
 */
export function generateBlogSitemapSchema() {
  const baseUrl = 'https://www.estudiodeabogadosgomezlopez.com.ar';
  
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Artículos del Blog Jurídico",
    "description": "Lista completa de artículos jurídicos del Estudio López & Gómez",
    "url": `${baseUrl}/blog`,
    "numberOfItems": blogData.length,
    "itemListElement": blogData.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "url": `${baseUrl}/blog/${post.slug}`,
        "datePublished": post.datePublished,
        "dateModified": post.dateModified,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Estudio López & Gómez",
          "url": baseUrl
        },
        "image": post.image,
        "articleSection": post.category
      }
    }))
  };
}

/**
 * Genera un schema de CollectionPage para la página principal del blog
 * @returns {Object} Schema markup de CollectionPage
 */
export function generateBlogCollectionSchema() {
  const baseUrl = 'https://www.estudiodeabogadosgomezlopez.com.ar';
  
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog Jurídico - Estudio López & Gómez",
    "description": "Artículos, novedades y análisis legales de nuestros abogados expertos. Mantente informado sobre derecho penal, civil, laboral y más.",
    "url": `${baseUrl}/blog`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": blogData.length,
      "itemListElement": blogData.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${baseUrl}/blog/${post.slug}`
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": "Estudio López & Gómez",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    }
  };
} 