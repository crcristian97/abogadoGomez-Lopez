export default function CustomButton({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  title = "",
  ariaLabel = "",
  ...props
}) {
  let baseClass =
    "rounded-full px-8 py-3 font-merriweather font-bold transition-colors cursor-pointer";
  let variantClass = "";

  if (variant === "primary") {
    variantClass =
      "bg-[#CBA240] text-[#183852] hover:bg-[#b08d36] hover:text-white";
  } else if (variant === "outline") {
    variantClass =
      "bg-transparent text-[#CBA240] border-2 border-[#CBA240] hover:bg-[#CBA240] hover:text-[#183852]";
  }

  const combinedClass = `${baseClass} ${variantClass} ${className}`.trim();

  // Render as <a> if href is provided, else as <button>
  if (href) {
    return (
      <a
        href={href}
        target={props.target || "_self"}
        rel={props.rel}
        className={combinedClass}
        title={title}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      title={title}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}