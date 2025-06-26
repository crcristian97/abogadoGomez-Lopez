import BlogPost from "../../components/BlogPost";
import { blogData } from "../../mock/blogData";
import Breadcrumbs from "../../components/Breadcrumbs";

export const generateMetadata = async ({ params }) => {
  const paramsData = await params;
  const { slug } = paramsData;
  const postData = blogData.find(post => post.slug === slug);

  return {
    title: postData?.title || "Blog Post",
    description: postData?.description || "Blog post del estudio jurídico",
    openGraph: {
      images: [
        {
          url: postData?.image || "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252409/delito-contrabando-en-buenos-aires.webp",
          width: 1200,
          height: 630,
        }
      ],
      title: `${postData?.title || "Blog Post"} | Estudio López & Gómez`,
      description: postData?.description || "Artículo del blog de Estudio López & Gómez",
      url: `https://www.estudiodeabogadosgomezlopez.com.ar/blog/${slug}`,
      type: 'article',
    },
    twitter: {
      title: `${postData?.title || "Blog Post"} | Estudio López & Gómez`,
      description: postData?.description || "Artículo del blog de Estudio López & Gómez",
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
              'item': 'https://www.estudiodeabogadosgomezlopez.com.ar'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Blog',
              'item': 'https://www.estudiodeabogadosgomezlopez.com.ar/blog'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': postData?.title || 'Artículo',
              'item': `https://www.estudiodeabogadosgomezlopez.com.ar/blog/${slug}`
            }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": postData?.title || "Especialistas en derecho penal y civil en Buenos Aires Capital Federal",
          "image": [
            postData?.image || "https://example.com/photos/1x1/photo.jpg",
            postData?.image || "https://example.com/photos/4x3/photo.jpg",
            postData?.image || "https://example.com/photos/16x9/photo.jpg"
          ],
          "datePublished": postData?.datePublished || "2025-06-10T08:00:00+08:00",
          "dateModified": postData?.dateModified || "2025-06-10T08:00:00+08:00",
          "author": [
            {
              "@type": "Person",
              "name": postData?.author || "Dr. Jose Luis López",
              "url": "https://www.estudiodeabogadosgomezlopez.com.ar/sobre-la-firma"
            }
          ],
          "publisher": {
            "@type": "Organization",
            "name": "Estudio López & Gómez",
            "url": "https://www.estudiodeabogadosgomezlopez.com.ar"
          }
        }
      ]
    }
  };
};

export default async function ContrabandoBlogPost({ params }) {
  const paramsData = await params;
  const { slug } = paramsData;
  const postData = blogData.find(post => post.slug === slug);

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumbs />
      <BlogPost {...postData} />
    </main>
  );
}