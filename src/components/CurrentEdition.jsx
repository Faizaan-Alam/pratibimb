import { Link } from "react-router-dom";
import { getCurrentEdition, getLatestReadableEdition } from "../data/editions";
import EditionCover from "./EditionCover";

export default function CurrentEdition() {
  const edition = getCurrentEdition();
  const readable = getLatestReadableEdition();

  return (
    <section className="section-rule">
      <div className="page-wrap grid gap-10 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:py-24">
        <div className="mx-auto w-full max-w-sm shadow-2xl shadow-black/20 lg:mx-0">
          <EditionCover edition={edition} sizes="hero" />
        </div>
        <div>
          <p className="kicker">Current edition</p>
          <h2 className="display-title mt-4 text-4xl sm:text-5xl lg:text-6xl">{edition.title}</h2>
          <p className="mt-3 font-display text-sm tracking-wide text-base-content/55">
            {edition.academicYear || edition.year}
            {edition.pageCount ? ` · ${edition.pageCount} pages` : ""}
          </p>
          <p className="mt-6 font-serif text-xl italic text-base-content/80">{edition.tagline}</p>
          <p className="serif-body mt-4 max-w-xl">{edition.description}</p>
          <p className="serif-body mt-4 max-w-xl">
            A publication of the IEEE Student Branch at Bharati Vidyapeeth's College of Engineering, New Delhi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {edition.pdfAvailable ? (
              <>
                <Link to={`/edition/${edition.slug}`} className="btn-editorial">
                  Read {edition.title}
                </Link>
                <a href={edition.pdf} download className="btn-ghost-editorial">
                  Download PDF
                </a>
              </>
            ) : (
              <>
                <Link to="/archive" className="btn-editorial">
                  Open the archive
                </Link>
                {readable ? (
                  <Link to={`/edition/${readable.slug}`} className="btn-ghost-editorial">
                    Read {readable.title}
                  </Link>
                ) : null}
              </>
            )}
          </div>

          {!edition.pdfAvailable ? (
            <p className="mt-5 max-w-xl font-display text-sm text-base-content/60">
              The {edition.title} file is not in the archive yet. Pratibimb 3.0 is available to read
              now.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
