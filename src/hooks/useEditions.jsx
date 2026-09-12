import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { withBase } from "../data/assets";
import { editions as catalog } from "../data/editions";

const EditionContext = createContext(null);

function expectedType(url) {
  const lower = url.toLowerCase();
  if (lower.endsWith(".pdf")) return "pdf";
  if (lower.endsWith(".webp") || lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".png")) {
    return "image";
  }
  return "";
}

function matchesType(contentType, kind) {
  const type = (contentType || "").toLowerCase();
  if (type.includes("text/html")) return false;
  if (kind === "pdf") return type.includes("pdf") || type.includes("octet-stream");
  if (kind === "image") return type.startsWith("image/");
  return Boolean(type);
}

async function fileExists(url) {
  const encoded = encodeURI(withBase(url));
  const kind = expectedType(url);
  try {
    const head = await fetch(encoded, { method: "HEAD" });
    if (head.ok && matchesType(head.headers.get("content-type"), kind)) return true;
    if (head.status !== 405 && head.status !== 501) return false;
    const range = await fetch(encoded, {
      method: "GET",
      headers: { Range: "bytes=0-0" },
    });
    return (range.ok || range.status === 206) && matchesType(range.headers.get("content-type"), kind);
  } catch {
    return false;
  }
}

async function firstExisting(urls) {
  for (const url of urls) {
    if (url && (await fileExists(url))) return url;
  }
  return "";
}

function withAssetPaths(edition) {
  return {
    ...edition,
    pdf: withBase(edition.pdf),
    cover: edition.cover ? withBase(edition.cover) : "",
  };
}

async function resolveEdition(edition) {
  if (!edition.detectFiles) return withAssetPaths(edition);

  const pdf = await firstExisting(edition.pdfCandidates || [edition.pdf]);
  const cover = await firstExisting(edition.coverCandidates || [edition.cover]);

  return {
    ...edition,
    pdf: withBase(pdf || edition.pdf),
    cover: cover ? withBase(cover) : edition.cover ? withBase(edition.cover) : "",
    pdfAvailable: Boolean(pdf) || Boolean(edition.pdfAvailable && edition.pdf),
  };
}

export function EditionProvider({ children }) {
  const [list, setList] = useState(() => catalog.map(withAssetPaths));

  useEffect(() => {
    let cancelled = false;
    Promise.all(catalog.map(resolveEdition)).then((resolved) => {
      if (!cancelled) setList(resolved);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => {
    const current = list.find((edition) => edition.status === "current") || list[0];
    const latestReadable = list.find((edition) => edition.pdfAvailable) || null;
    return {
      editions: list,
      current,
      latestReadable,
      getBySlug(slug) {
        return list.find((edition) => edition.slug === slug);
      },
    };
  }, [list]);

  return <EditionContext.Provider value={value}>{children}</EditionContext.Provider>;
}

export function useEditions() {
  const value = useContext(EditionContext);
  if (!value) {
    return {
      editions: catalog,
      current: catalog.find((edition) => edition.status === "current") || catalog[0],
      latestReadable: catalog.find((edition) => edition.pdfAvailable) || null,
      getBySlug(slug) {
        return catalog.find((edition) => edition.slug === slug);
      },
    };
  }
  return value;
}
