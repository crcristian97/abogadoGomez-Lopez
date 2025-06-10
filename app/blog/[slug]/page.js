import BlogPost from "../../components/BlogPost";
import {blogData} from "../../mock/blogData";
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
      url: `https://estudiolopezgomez.com/blog/${slug}`,
      type: 'article',
    },
    twitter: {
      title: `${postData?.title || "Blog Post"} | Estudio López & Gómez`,
      description: postData?.description || "Artículo del blog de Estudio López & Gómez",
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
            'name': 'Blog',
            'item': 'https://estudiolopezgomez.com/blog'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': postData?.title || 'Artículo',
            'item': `https://estudiolopezgomez.com/blog/${slug}`
          }
        ]
      }
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