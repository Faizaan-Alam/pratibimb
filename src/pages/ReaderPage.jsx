import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import EditionCover from "../components/EditionCover";
import { useEditions } from "../hooks/useEditions.jsx";
import { usePageTitle } from "../hooks/usePageTitle";

const FlipBook = lazy(() => import("../components/FlipBook"));

export default function ReaderPage() {
  const { slug } = useParams();
  const { getBySlug, latestReadable: fallback } = useEditions();
  const edition = getBySlug(slug);

  usePageTitle(edition ? edition.title : "Reader");

  if (!edition) {
    return (
      <section className="page-wrap py-20">
        <p className="kicker">Reader</p>
        <h1 className="display-title mt-3 text-4xl">Edition not found</h1>
        <p className="serif-body mt-4 max-w-xl">
          There is no magazine matching this address. Return to the archive to choose an issue.
        </p>
        <Link to="/archive" className="btn-editorial mt-6">
          Back to the archive
        </Link>
      </section>
    );
  }

  if (!edition.pdfAvailable) {
    return (
      <section className="page-wrap grid gap-10 py-16 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:items-start">
        <EditionCover edition={edition} sizes="reader" />
        <div>
          <p className="kicker">Current edition</p>
          <h1 className="display-title mt-3 text-4xl sm:text-5xl">{edition.title}</h1>
          <p className="serif-body mt-5 max-w-xl">
            {edition.dropFolder
              ? `The ${edition.title} PDF is not in the drop folder yet. Paste it into public/assets/editions/pratibimb/ as pratibimb.pdf, then refresh.`
              : `The PDF for this edition has not been added yet. Until then, earlier issues remain in the archive.`}
          </p>
          {fallback ? (
            <Link to={`/edition/${fallback.slug}`} className="btn-editorial mt-6">
              Read {fallback.title} instead
            </Link>
          ) : (
            <Link to="/archive" className="btn-editorial mt-6">
              Back to the archive
            </Link>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-base-200/30">
      <div className="page-wrap flex flex-col gap-4 py-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="kicker">Reading</p>
          <h1 className="display-title mt-2 text-3xl sm:text-4xl">{edition.title}</h1>
          <p className="mt-1 font-display text-sm text-base-content/55">
            {edition.academicYear || edition.year}
            {edition.pageCount ? ` · ${edition.pageCount} pages` : ""}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={edition.pdf} target="_blank" rel="noreferrer" className="btn-ghost-editorial btn-sm h-10 min-h-10">
            Open in a new tab
          </a>
          <a href={edition.pdf} download className="btn-editorial btn-sm h-10 min-h-10">
            Download
          </a>
        </div>
      </div>
      <div className="page-wrap pb-12">
        <Suspense fallback={<p className="py-16 text-center font-display text-sm">Opening the reader</p>}>
          <FlipBook key={edition.pdf} src={edition.pdf} title={edition.title} />
        </Suspense>
      </div>
    </section>
  );
}
