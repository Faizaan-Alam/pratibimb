import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Pratibimb 4.0` : "Pratibimb 4.0";
  }, [title]);
}
