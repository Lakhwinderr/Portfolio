import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../config/paths";
import { scrollToTop } from "../utils/scrollToTop";

export default function HomeLink({ className, onClick, children }) {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    onClick?.(event);

    if (pathname !== routes.home) {
      return;
    }

    event.preventDefault();

    if (hash) {
      navigate(routes.home);
      return;
    }

    scrollToTop(true);
  };

  return (
    <Link to={routes.home} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
