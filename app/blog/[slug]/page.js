import BlogPost from "../../components/BlogPost";
import { blogData } from "../../mock/blogData";
import Breadcrumbs from "../../components/Breadcrumbs";
import SchemaMarkup from "../../components/SchemaMarkup";
import { generateBlogPostingSchema, generateBreadcrumbSchema, generateOrganizationSchema } from "../../utils/blogSchema";

export const generateMetadata = async ({ params }) => {
  const paramsData = await params;
  const { slug } = paramsData;
  const postData = blogData.find(post => post.slug === slug);

  // Generar los schemas de BlogPosting, BreadcrumbList y Organization
  const blogPostingSchema = generateBlogPostingSchema(postData, slug);
  const breadcrumbSchema = generateBreadcrumbSchema(slug, postData?.title);
  const organizationSchema = generateOrganizationSchema();

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
        blogPostingSchema,
        breadcrumbSchema,
        organizationSchema
      ]
    }
  };
};

export default async function ContrabandoBlogPost({ params }) {
  const paramsData = await params;
  const { slug } = paramsData;
  const postData = blogData.find(post => post.slug === slug);

  // Generar los schemas para el componente
  const blogPostingSchema = generateBlogPostingSchema(postData, slug);
  const breadcrumbSchema = generateBreadcrumbSchema(slug, postData?.title);
  const organizationSchema = generateOrganizationSchema();

  const schemas = [blogPostingSchema, breadcrumbSchema, organizationSchema];

  return (
    <main className="min-h-screen bg-white">
      <SchemaMarkup schemas={schemas} />
      <Breadcrumbs />
      <BlogPost {...postData} />
    </main>
  );
}