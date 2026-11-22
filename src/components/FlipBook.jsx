import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = workerUrl;

const MAX_CSS_WIDTH = 900;

function slot(spread, numPages) {
  const left = spread === 0 ? 0 : spread * 2;
  const right = spread * 2 + 1;
  return {
    left: left >= 1 && left <= numPages ? left : 0,
    right: right >= 1 && right <= numPages ? right : 0,
  };
}

function maxSpread(numPages) {
  return Math.floor(numPages / 2);
}

function spreadLabel(spread, numPages) {
  if (!numPages) return "—";
  const { left, right } = slot(spread, numPages);
  const shown = [left, right].filter(Boolean);
  if (shown.length === 2) return `${shown[0]}–${shown[1]} / ${numPages}`;
  if (shown.length === 1) return `${shown[0]} / ${numPages}`;
  return `— / ${numPages}`;
}

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

function Paper({ url, alt }) {
  if (!url) return <div className="flip-blank" />;
  return <img className="flip-page" src={url} alt={alt} />;
}

export default function FlipBook({ src, title }) {
  const pdfRef = useRef(null);
  const cache = useRef(new Map());
  const busy = useRef(false);
  const turnRef = useRef(async () => {});
  const touchX = useRef(0);
  const shellRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [spread, setSpread] = useState(0);
  const [faces, setFaces] = useState({ left: "", right: "" });
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [motion, setMotion] = useState(null);
  const [full, setFull] = useState(false);

  useEffect(() => {
    let dead = false;
    cache.current.clear();
    setFaces({ left: "", right: "" });
    setSpread(0);
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
    const show = slot(spread, pdf.numPages);
    const around = [spread - 1, spread, spread + 1]
      .filter((index) => index >= 0 && index <= maxSpread(pdf.numPages))
      .flatMap((index) => {
        const pair = slot(index, pdf.numPages);
        return [pair.left, pair.right];
      })
      .filter((pageNumber, index, all) => pageNumber && all.indexOf(pageNumber) === index);

    (async () => {
      const url = async (pageNumber) => {
        if (!pageNumber) return "";
        if (!cache.current.has(pageNumber)) cache.current.set(pageNumber, await paintPage(pdf, pageNumber));
        return cache.current.get(pageNumber);
      };
      const left = await url(show.left);
      if (dead) return;
      const right = await url(show.right);
      if (dead || busy.current) return;
      setFaces({ left, right });
      for (const pageNumber of around) {
        if (dead) return;
        await url(pageNumber);
      }
      for (const key of [...cache.current.keys()]) {
        if (!around.includes(key) && Math.abs(key - (show.right || show.left)) > 4) cache.current.delete(key);
      }
    })().catch((err) => {
      if (!dead) setError(err?.message || "Could not draw this page.");
    });

    return () => {
      dead = true;
    };
  }, [spread, numPages]);

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

  function settle(next) {
    setSpread(next.spread);
    setFaces({ left: next.leftUrl, right: next.rightUrl });
    setMotion(null);
    busy.current = false;
  }

  async function turn(dir) {
    const pdf = pdfRef.current;
    if (!pdf || busy.current || motion) return;
    const nextSpread = spread + dir;
    if (nextSpread < 0 || nextSpread > maxSpread(pdf.numPages)) return;
    busy.current = true;
    const current = slot(spread, pdf.numPages);
    const upcoming = slot(nextSpread, pdf.numPages);
    try {
      const url = async (pageNumber) => {
        if (!pageNumber) return "";
        if (!cache.current.has(pageNumber)) cache.current.set(pageNumber, await paintPage(pdf, pageNumber));
        return cache.current.get(pageNumber);
      };
      const currentLeft = await url(current.left);
      const currentRight = await url(current.right);
      const nextLeft = await url(upcoming.left);
      const nextRight = await url(upcoming.right);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        setSpread(nextSpread);
        setFaces({ left: nextLeft, right: nextRight });
        busy.current = false;
        return;
      }
      setMotion({
        dir,
        phase: "in",
        spread: nextSpread,
        underLeft: dir > 0 ? currentLeft : nextLeft,
        underRight: dir > 0 ? nextRight : currentRight,
        frontUrl: dir > 0 ? currentRight : nextRight,
        backUrl: dir > 0 ? nextLeft : currentLeft,
        leftUrl: nextLeft,
        rightUrl: nextRight,
      });
    } catch (err) {
      setError(err?.message || "Could not turn the page.");
      busy.current = false;
    }
  }

  turnRef.current = turn;

  function finish(event) {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (!motion || motion.phase !== "go") return;
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
      if (event.key === "ArrowRight") turnRef.current(1);
      if (event.key === "ArrowLeft") turnRef.current(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onChange() {
      setFull(document.fullscreenElement === shellRef.current);
    }
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  async function toggleFull() {
    const shell = shellRef.current;
    if (!shell) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await shell.requestFullscreen();
    } catch (err) {
      setError(err?.message || "Full screen is not available in this browser.");
    }
  }

  const shown = motion
    ? { left: motion.underLeft, right: motion.underRight }
    : faces;
  const atStart = spread <= 0;
  const atEnd = !numPages || spread >= maxSpread(numPages);
  const waiting = !shown.right && !shown.left;

  return (
    <div ref={shellRef} className="flip-reader">
      <div
        className="flip-book"
        onTouchStart={(event) => {
          touchX.current = event.changedTouches[0].clientX;
        }}
        onTouchEnd={(event) => {
          const dx = event.changedTouches[0].clientX - touchX.current;
          if (dx < -48) turn(1);
          if (dx > 48) turn(-1);
        }}
      >
        {waiting ? (
          <div className="flip-placeholder">
            <p>
              {error
                ? "This page could not be drawn."
                : progress < 100
                  ? `Opening the issue ${progress}%`
                  : "Drawing the page"}
            </p>
          </div>
        ) : (
          <>
            <div className="flip-leaf flip-leaf-left">
              <Paper url={shown.left} alt={shown.left ? `${title}, page ${slot(spread, numPages).left}` : ""} />
            </div>
            <div className="flip-leaf flip-leaf-right">
              <Paper url={shown.right} alt={shown.right ? `${title}, page ${slot(motion ? motion.spread : spread, numPages).right || ""}` : ""} />
            </div>
          </>
        )}
        {motion ? (
          <div
            className={`flip-sheet ${motion.dir > 0 ? "flip-next" : "flip-prev"} ${motion.phase === "go" ? "is-go" : ""}`}
            onTransitionEnd={finish}
          >
            <div className="face front">
              <Paper url={motion.frontUrl} alt="" />
            </div>
            <div className="face back">
              <Paper url={motion.backUrl} alt="" />
            </div>
          </div>
        ) : null}
        <button type="button" className="flip-hit flip-hit-left" aria-label="Previous pages" onClick={() => turn(-1)} />
        <button type="button" className="flip-hit flip-hit-right" aria-label="Next pages" onClick={() => turn(1)} />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button type="button" className="btn-ghost-editorial btn-sm h-10 min-h-10" onClick={() => turn(-1)} disabled={atStart || Boolean(motion)}>
          Previous
        </button>
        <p className="font-display text-sm text-base-content/70" aria-live="polite">
          {spreadLabel(spread, numPages)}
        </p>
        <div className="flex gap-2">
          <button type="button" className="btn-ghost-editorial btn-sm h-10 min-h-10" onClick={toggleFull}>
            {full ? "Exit full screen" : "Full screen"}
          </button>
          <button type="button" className="btn-ghost-editorial btn-sm h-10 min-h-10" onClick={() => turn(1)} disabled={atEnd || Boolean(motion)}>
            Next
          </button>
        </div>
      </div>
      {error ? <p className="mt-3 text-center text-sm text-error">{error}</p> : null}
    </div>
  );
}
