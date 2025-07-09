/**
 * Genera el schema markup de BlogPosting para artículos de blog
 * @param {Object} postData - Datos del artículo de blog
 * @param {string} slug - Slug del artículo
 * @returns {Object} Schema markup de BlogPosting
 */
export function generateBlogPostingSchema(postData, slug) {
  const baseUrl = 'https://www.estudiodeabogadosgomezlopez.com.ar';
  const postUrl = `${baseUrl}/blog/${slug}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "headline": postData.title,
    "description": postData.description,
    "image": postData.image,
    "author": {
      "@type": "Person",
      "name": postData.author,
      "url": `${baseUrl}/sobre-la-firma`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Estudio López & Gómez",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": postData.datePublished,
    "dateModified": postData.dateModified,
    "articleSection": postData.category,
    "wordCount": postData.content ? postData.content.toString().split(' ').length : 0,
    "timeRequired": `PT${postData.readingTime || 5}M`,
    "inLanguage": "es-AR",
    "isAccessibleForFree": true,
    "keywords": [
      postData.category,
      "derecho",
      "abogados",
      "Buenos Aires",
      "jurídico",
      "legal"
    ]
  };
}

/**
 * Genera el schema markup de BreadcrumbList para navegación
 * @param {string} slug - Slug del artículo
 * @param {string} title - Título del artículo
 * @returns {Object} Schema markup de BreadcrumbList
 */
export function generateBreadcrumbSchema(slug, title) {
  const baseUrl = 'https://www.estudiodeabogadosgomezlopez.com.ar';
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `${baseUrl}/blog/${slug}`
      }
    ]
  };
}

/**
 * Genera el schema markup de Organization para el estudio
 * @returns {Object} Schema markup de Organization
 */
export function generateOrganizationSchema() {
  const baseUrl = 'https://www.estudiodeabogadosgomezlopez.com.ar';
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Estudio López & Gómez",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`
    },
    "description": "Estudio jurídico especializado en derecho penal y civil en Buenos Aires, Capital Federal",
    "address": {
      "@type": "PostalAddress",
      "postalCode": "C1009",
      "streetAddress": "Av. Carlos Pellegrini 465",
      "addressLocality": "Buenos Aires",
      "addressRegion": "CABA",
      "addressCountry": "AR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.facebook.com/estudiolopezgomez",
      "https://www.linkedin.com/company/estudio-lopez-gomez"
    ]
  };
} 