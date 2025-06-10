
import BlogPost from "../../components/BlogPost";
import {blogData} from "../../mock/blogData";
import Breadcrumbs from "../../components/Breadcrumbs"; 


export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const postData = blogData.find(post => post.slug === slug);

  return {
    title: postData?.title || "Blog Post",
    description: postData?.description || "Artículo del blog de Estudio López & Gómez",
    openGraph: {
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

export default function ContrabandoBlogPost( { params } ) {
  const { slug } = params;
  const postData = blogData.find(post => post.slug === slug);
  return (
    <main className="min-h-screen bg-white">  
      <Breadcrumbs />
      <BlogPost {...postData} />
    </main>
  ); 
} 