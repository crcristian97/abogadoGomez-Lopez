import HeroServices from "../components/HeroServices";
import BlogsHeadline from "../components/BlogsHeadline";
import BannerProduct from "../components/BannerProduct";

export default function BlogPage() {
  return (
    <div>
      <HeroServices
        src="https://res.cloudinary.com/dgzi8i2ji/image/upload/blog-juridico-en-buenos-aires.webp"
        alt="Blog de Estudio López Gómez"
        title="Blog Jurídico en Buenos Aires"
        description="Artículos, novedades y análisis legales de nuestros abogados expertos. Mantente informado sobre derecho penal, civil, laboral y más."
        buttonShow={false}
      />
      <BlogsHeadline />
      <BannerProduct />
    </div>
  );
}
