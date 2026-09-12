import { Link } from "react-router-dom";
import { logoSrc } from "../data/assets";
import { site } from "../data/siteContent";
import { useEditions } from "../hooks/useEditions.jsx";
import SpiralMark from "./SpiralMark";

export default function Hero() {
  const { current, latestReadable: readable } = useEditions();
  const primaryTo = current.pdfAvailable
    ? `/edition/${current.slug}`
    : readable
      ? `/edition/${readable.slug}`
      : "/archive";
  const primaryLabel = current.pdfAvailable
    ? `Read ${current.title}`
    : readable
      ? `Read ${readable.title}`
      : "Open the archive";

  return (
    <section className="p-3 sm:p-5">
      <div className="relative overflow-hidden border hairline">
        <SpiralMark className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 text-primary/30 sm:h-80 sm:w-80 lg:h-[28rem] lg:w-[28rem]" />
        <div className="page-wrap py-10 sm:py-14 lg:min-h-[calc(100svh-9rem)] lg:py-12">
          <p className="kicker rise">{site.branch}</p>
          <h1 className="display-title rise rise-delay-1 mt-6 max-w-full text-[clamp(2.5rem,8vw,6.5rem)]">
            Pratibimb
          </h1>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
            <div className="relative z-10 min-w-0 lg:col-span-7">
              <p className="rise rise-delay-2 max-w-xl font-serif text-xl italic leading-snug text-base-content/80 sm:text-2xl">
                {site.tagline}
              </p>
              <p className="serif-body rise rise-delay-3 mt-4 max-w-xl">{site.heroLede}</p>
              <div className="rise rise-delay-4 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to={primaryTo} className="btn-editorial">
                  {primaryLabel}
                </Link>
                <Link to="/archive" className="btn-ghost-editorial">
                  Explore the archive
                </Link>
              </div>
            </div>
            <div className="relative z-10 flex justify-center lg:col-span-5 lg:justify-end">
              <img
                src={logoSrc}
                alt="Pratibimb logo, a violet golden-ratio circle with the IEEE mark"
                className="h-52 w-52 rounded-full object-cover sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                width="288"
                height="288"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
