import { logoSrc } from "../data/assets";
import SpiralMark from "./SpiralMark";

export default function EditionCover({ edition, className = "", sizes = "cover" }) {
  const frame =
    sizes === "hero"
      ? "aspect-[3/4] w-full"
      : sizes === "reader"
        ? "aspect-[3/4] w-40 sm:w-48"
        : "aspect-[3/4] w-full";

  if (edition.cover) {
    return (
      <img
        src={edition.cover}
        alt={`Cover of ${edition.title}`}
        className={`${frame} border hairline object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  const nameClass =
    sizes === "hero" ? "text-[1.35rem] sm:text-2xl" : "text-[0.7rem] sm:text-xs";
  const logoClass =
    sizes === "hero" ? "h-12 w-12 sm:h-14 sm:w-14" : "h-8 w-8 sm:h-9 sm:w-9";

  return (
    <div
      className={`${frame} relative overflow-hidden border hairline bg-[#0a0610] text-secondary ${className}`}
      role="img"
      aria-label={`Edition plate for ${edition.title}`}
    >
      <div className="absolute -right-[8%] top-[16%] h-[78%] w-[78%] rounded-full bg-gradient-to-br from-[#d946ef] via-[#7c3aed] to-[#3b0764]" />
      <SpiralMark className="absolute -right-[8%] top-[16%] h-[78%] w-[78%] text-white/80" />
      <img
        src={logoSrc}
        alt=""
        className={`absolute left-3 top-3 rounded-full object-cover ${logoClass}`}
      />
      <p
        className={`absolute bottom-4 left-3 font-display font-extrabold tracking-wide text-[#f3e8ff] ${nameClass}`}
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        PRATIBIMB
      </p>

    </div>
  );
}
