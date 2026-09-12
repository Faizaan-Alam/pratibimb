import { Link } from "react-router-dom";
import EditionCover from "./EditionCover";

export default function EditionCard({ edition }) {
  return (
    <article className="group grid gap-5 border hairline bg-base-100 p-4 transition duration-200 hover:-translate-y-1 sm:grid-cols-[10rem_minmax(0,1fr)] sm:p-5 lg:grid-cols-[12rem_minmax(0,1fr)]">
      <div className="overflow-hidden">
        <EditionCover
          edition={edition}
          className="transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex min-w-0 flex-col">
        <p className="kicker">{edition.status === "current" ? "Current" : "Archive"}</p>
        <h3 className="display-title mt-2 text-2xl sm:text-3xl">{edition.title}</h3>
        <p className="mt-1 font-display text-sm text-base-content/55">
          {edition.academicYear || edition.year}
        </p>
        <p className="serif-body mt-3 line-clamp-3">{edition.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {edition.pdfAvailable ? (
            <>
              <Link to={`/edition/${edition.slug}`} className="btn-editorial btn-sm h-10 min-h-10">
                Read
              </Link>
              <a href={edition.pdf} download className="btn-ghost-editorial btn-sm h-10 min-h-10">
                Download
              </a>
            </>
          ) : (
            <span className="font-display text-sm text-base-content/55">PDF not added yet</span>
          )}
        </div>
      </div>
    </article>
  );
}
