import HeroServices from "../components/HeroServices";
import BlogsHeadline from "../components/BlogsHeadline";
import BannerProduct from "../components/BannerProduct";
import Breadcrumbs from "../components/Breadcrumbs";

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
