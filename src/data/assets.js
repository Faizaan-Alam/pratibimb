/*
  Predictable public files. Replace the file on disk, keep these paths.
*/
export function withBase(path) {
  if (!path) return "";
  const base = import.meta.env.BASE_URL || "/";
  const prefix = base.endsWith("/") ? base.slice(0, -1) : base;
  if (!prefix) return path.startsWith("/") ? path : `/${path}`;
  if (path === prefix || path.startsWith(`${prefix}/`)) return path;
  return path.startsWith("/") ? `${prefix}${path}` : `${prefix}/${path}`;
}

export const logoSrc = withBase("/assets/logo/pratibimb-logo.webp");
