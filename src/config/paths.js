// GitHub user-site root deployment. CRA sets PUBLIC_URL in production builds.
export const BASENAME =
  process.env.PUBLIC_URL !== undefined && process.env.PUBLIC_URL !== ""
    ? process.env.PUBLIC_URL
    : "";

export const routes = {
  home: "/",
  education: "/education",
  about: "/about",
  contact: "/contact",
};

export const workSection = {
  pathname: routes.home,
  hash: "#work",
};
