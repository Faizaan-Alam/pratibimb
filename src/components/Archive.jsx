import { Link } from "react-router-dom";
import { useEditions } from "../hooks/useEditions.jsx";
import EditionCard from "./EditionCard";

export default function Archive({ limit, showLink = true }) {
  const { editions } = useEditions();
  const list = typeof limit === "number" ? editions.slice(0, limit) : editions;

  return (
    <section className="section-rule">
      <div className="page-wrap py-16 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker">The Pratibimb Archive</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">Previous and current issues</h2>
          </div>
          {showLink ? (
            <Link to="/archive" className="link-quiet font-display text-sm">
              View the full archive
            </Link>
          ) : null}
        </div>
        <div className="mt-10 grid gap-5">
          {list.map((edition) => (
            <EditionCard key={edition.id} edition={edition} />
          ))}
        </div>
      </div>
    </section>
  );
}
