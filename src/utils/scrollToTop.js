export function scrollToTop(smooth) {
  const behavior =
    smooth &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "smooth"
      : "auto";
  window.scrollTo({ top: 0, behavior });
}
