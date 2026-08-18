import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../utils/scrollToTop";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevRef = useRef(null);

  useEffect(() => {
    const prev = prevRef.current;

    if (!hash) {
      if (prev && prev.pathname !== pathname) {
        scrollToTop(false);
      } else if (prev && prev.hash) {
        scrollToTop(true);
      }
    }

    prevRef.current = { pathname, hash };
  }, [pathname, hash]);

  return null;
}
