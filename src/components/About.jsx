import { Link } from "react-router-dom";
import { about } from "../data/siteContent";

export default function About({ compact = false }) {
  const paragraphs = compact ? about.paragraphs.slice(0, 2) : about.paragraphs;

  return (
    <section className="section-rule">
      <div className="page-wrap grid gap-10 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-24">
        <div>
          <p className="kicker">{about.kicker}</p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl lg:text-6xl">{about.title}</h2>
        </div>
        <div>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="serif-body mb-5 max-w-2xl">
              {paragraph}
            </p>
          ))}
          {compact ? (
            <Link to="/about" className="link-quiet font-display text-sm">
              Continue reading About Pratibimb
            </Link>
          ) : (
            about.evolution.map((paragraph) => (
              <p key={paragraph} className="serif-body mb-5 max-w-2xl">
                {paragraph}
              </p>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
