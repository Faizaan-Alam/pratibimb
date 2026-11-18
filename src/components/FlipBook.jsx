import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = workerUrl;

const MAX_CSS_WIDTH = 1100;

async function paintPage(pdf, pageNumber) {
  const page = await pdf.getPage(pageNumber);
  const base = page.getViewport({ scale: 1 });
  const scale = Math.min(MAX_CSS_WIDTH / base.width, 2) * Math.min(window.devicePixelRatio || 1, 2);
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);
  await page.render({ canvas, viewport }).promise;
  return canvas.toDataURL("image/jpeg", 0.82);
}

export default function FlipBook({ src, title }) {
  const pdfRef = useRef(null);
  const cache = useRef(new Map());
  const busy = useRef(false);
  const touchX = useRef(0);
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [shot, setShot] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [motion, setMotion] = useState(null);

  useEffect(() => {
    let dead = false;
    cache.current.clear();
    setShot("");
    setPage(1);
    setError("");
    setProgress(0);
    const task = getDocument({ url: src });
    task.onProgress = ({ loaded, total }) => {
      if (!dead && total) setProgress(Math.min(99, Math.round((loaded / total) * 100)));
    };
    task.promise
      .then((pdf) => {
        if (dead) {
          pdf.destroy();
          return;
        }
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        setProgress(100);
      })
      .catch((err) => {
        if (!dead) setError(err?.message || "Could not open this PDF.");
      });
    return () => {
      dead = true;
      task.destroy();
      pdfRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    const pdf = pdfRef.current;
    if (!pdf) return;
    let dead = false;
    const wanted = [page - 1, page, page + 1].filter((n) => n >= 1 && n <= pdf.numPages);
    (async () => {
      for (const n of wanted) {
        if (dead) return;
        if (!cache.current.has(n)) cache.current.set(n, await paintPage(pdf, n));
        if (n === page && !dead) setShot(cache.current.get(n));
      }
      for (const key of [...cache.current.keys()]) {
        if (Math.abs(key - page) > 3) cache.current.delete(key);
      }
    })().catch((err) => {
      if (!dead) setError(err?.message || "Could not draw this page.");
    });
    return () => {
      dead = true;
    };
  }, [page, numPages]);

  useEffect(() => {
    if (!motion || motion.phase !== "in") return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        setMotion((current) => (current && current.phase === "in" ? { ...current, phase: "go" } : current));
      });
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [motion]);

  async function go(dir) {
    const pdf = pdfRef.current;
    if (!pdf || busy.current || motion) return;
    const to = page + dir;
    if (to < 1 || to > pdf.numPages) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    busy.current = true;
    try {
      if (!cache.current.has(to)) cache.current.set(to, await paintPage(pdf, to));
      const toUrl = cache.current.get(to);
      if (reduce) {
        setPage(to);
        setShot(toUrl);
        busy.current = false;
        return;
      }
      const fromUrl = cache.current.get(page) || shot;
      setMotion({ dir, from: page, to, fromUrl, toUrl, phase: "in" });
    } catch (err) {
      setError(err?.message || "Could not turn the page.");
      busy.current = false;
    }
  }

  function settle(next) {
    setPage(next.to);
    setShot(next.toUrl);
    setMotion(null);
    busy.current = false;
  }

  function finish(event) {
    if (event.target !== event.currentTarget || !motion || motion.phase !== "go") return;
    settle(motion);
  }

  useEffect(() => {
    if (!motion || motion.phase !== "go") return;
    const next = motion;
    const timer = setTimeout(() => settle(next), 900);
    return () => clearTimeout(timer);
  }, [motion]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const resting = motion ? (motion.dir > 0 ? motion.toUrl : motion.fromUrl) : shot;

  return (
    <div>
      <div
        className="flip-stage"
        onTouchStart={(event) => {
          touchX.current = event.changedTouches[0].clientX;
        }}
        onTouchEnd={(event) => {
          const dx = event.changedTouches[0].clientX - touchX.current;
          if (dx < -48) go(1);
          if (dx > 48) go(-1);
        }}
      >
        {resting ? (
          <img className="flip-page" src={resting} alt={`${title}, page ${motion?.dir > 0 ? motion.to : page}`} />
        ) : (
          <div className="flip-placeholder">
            <p>{error ? "This page could not be drawn." : progress < 100 ? `Opening the issue ${progress}%` : "Drawing the page"}</p>
          </div>
        )}
        {motion ? (
          <div
            className={`flip-sheet ${motion.dir > 0 ? "flip-next" : "flip-prev"} ${motion.phase === "go" ? "is-go" : ""}`}
            onTransitionEnd={finish}
          >
            <img className="face front" src={motion.dir > 0 ? motion.fromUrl : motion.toUrl} alt="" />
            <div className="face back" />
          </div>
        ) : null}
        <button type="button" className="flip-hit flip-hit-left" aria-label="Previous page" onClick={() => go(-1)} />
        <button type="button" className="flip-hit flip-hit-right" aria-label="Next page" onClick={() => go(1)} />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <button type="button" className="btn-ghost-editorial btn-sm h-10 min-h-10" onClick={() => go(-1)} disabled={page <= 1}>
          Previous
        </button>
        <p className="font-display text-sm text-base-content/70">
          {numPages ? `${page} / ${numPages}` : "—"}
        </p>
        <button type="button" className="btn-ghost-editorial btn-sm h-10 min-h-10" onClick={() => go(1)} disabled={!numPages || page >= numPages}>
          Next
        </button>
      </div>
      {error ? <p className="mt-3 text-center text-sm text-error">{error}</p> : null}
    </div>
  );
}
