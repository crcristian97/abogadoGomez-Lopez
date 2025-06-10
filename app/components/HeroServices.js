import HeroServicesClient from "./HeroServicesClient";

export default function HeroServices({ src, alt, title, description, buttonShow = true }) {
  return (
    <HeroServicesClient
      src={src}
      alt={alt}
      title={title}
      description={description}
      buttonShow={buttonShow}
    />
  );
}
