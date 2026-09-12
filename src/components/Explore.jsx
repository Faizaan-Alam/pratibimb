import { Link } from "react-router-dom";
import { categories, exploreNote } from "../data/siteContent";

export default function Explore({ compact = false }) {
  const list = compact ? categories.slice(0, 4) : categories;

  return (
    <section className="section-rule">
      <div className="page-wrap py-16 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker">Inside the magazine</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">Explore</h2>
          </div>
          {compact ? (
            <Link to="/explore" className="link-quiet font-display text-sm">
              All sections
            </Link>
          ) : null}
        </div>
        {!compact ? <p className="serif-body mt-5 max-w-2xl">{exploreNote}</p> : null}

        <ol className="mt-10 divide-y divide-base-content/15 border-y hairline">
          {list.map((category) => (
            <li
              key={category.id}
              className="grid gap-3 py-6 sm:grid-cols-[4rem_minmax(0,14rem)_minmax(0,1fr)] sm:items-baseline"
            >
              <span className="font-display text-sm text-base-content/40">{category.number}</span>
              <h3 className="font-display text-xl font-semibold sm:text-2xl">{category.name}</h3>
              <p className="serif-body">{category.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
