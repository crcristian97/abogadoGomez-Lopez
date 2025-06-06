export default function CustomButton({
    children,
    href,
    onClick,
    variant = "primary",
    type = "button",
    ...props
  }) {
    // Define styles based on variant
    let style = {
      fontSize: "16px",
    };
    let className =
      "rounded-full px-8 py-3 font-merriweather font-bold transition-colors cursor-pointer";
    if (variant === "primary") {
      style = {
        ...style,
        backgroundColor: "#CBA240",
        color: "#183852",
      };
    } else if (variant === "outline") {
      style = {
        ...style,
        backgroundColor: "transparent",
        color: "#CBA240",
        borderColor: "#CBA240",
        borderStyle: "solid",
        borderWidth: "2px",
      };
      className += " border-2";
    }
  
    // Render as <a> if href is provided, else as <button>
    if (href) {
      return (
        <a
          href={href}
          target={props.target || "_self"}
          rel={props.rel}
          className={className}
          style={style}
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
        className={className}
        style={style}
        {...props}
      >
        {children}
      </button>
    );
  }