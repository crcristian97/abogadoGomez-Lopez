import Image from "next/image";
// CardTeam component: receives props for image, title, description, button text, image position, and rounder
export default function CardTeam({
  image,
  title,
  description,
  buttonText = "Ver perfil",
  imagePosition = "right", // "left" or "right"
  onButtonClick,
  rounder = false, // new prop: if true, card is fully rounded
}) {
  // Determine card rounding class
  const cardRoundingClass = rounder ? "rounded-full" : "rounded-2xl";

  // Overlay effect style (from @file_context_0)
  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "#183852",
    opacity: 0.65,
    zIndex: 1,
    pointerEvents: "none",
  };

  // Wrapper for image with overlay effect
  function ImageWithOverlay({ src, alt, title, className, style }) {
    return (
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1200}
          title={title}
          className={className}
          style={style}
          aria-hidden="true"
          loading="lazy"
        />
        <div style={overlayStyle} aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`flex flex-col md:flex-row items-center bg-[#183852] ${cardRoundingClass} overflow-hidden my-8`}>
      {/* Image on the left */}
      {imagePosition === "left" && (
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10 bg-[#183852]">
          <ImageWithOverlay
            src={image}
            alt={title}
            title={title}
            className={`object-cover w-72 h-72 md:w-[28rem] md:h-[28rem] shadow-2xl ${cardRoundingClass}`}
            style={{ backgroundColor: "#183852", opacity: 0.95 }}
            loading="lazy"
          />
        </div>
      )}
      {/* Text content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold font-merriweather text-white mb-4">
          {title}
        </h3>
        <p className="text-white text-base md:text-lg mb-6 whitespace-pre-line">
          {description}
        </p>
        <button
          className="bg-[#CBA240] hover:bg-[#b89a3a] text-[#183852] font-bold py-2 px-6 rounded-lg transition-colors duration-200 w-fit"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
      {/* Image on the right */}
      {imagePosition === "right" && (
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10 bg-[#183852]">
          <ImageWithOverlay
            src={image}
            alt={title}
            title={title}
            className={`object-cover w-72 h-72 md:w-[28rem] md:h-[28rem] shadow-2xl ${cardRoundingClass}`}
            style={{ backgroundColor: "#183852", opacity: 0.95 }}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
