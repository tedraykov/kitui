export default function deriveTypographyElement(element, variant) {
  if (!element) {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      case "body1":
        return "p";
      case "body2":
        return "p";
      default:
        return "span";
    }
  }
  return element;
}
