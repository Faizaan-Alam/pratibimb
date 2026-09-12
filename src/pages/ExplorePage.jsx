import { Link } from "react-router-dom";
import Explore from "../components/Explore";
import { usePageTitle } from "../hooks/usePageTitle";

export default function ExplorePage() {
  usePageTitle("Explore");

  return (
    <>
      <Explore />
      <section className="section-rule">
        <div className="page-wrap py-16">
          <p className="serif-body max-w-2xl">
            To read these sections as they appear in print, open an edition from the archive.
          </p>
          <Link to="/archive" className="btn-editorial mt-6">
            Go to the archive
          </Link>
        </div>
      </section>
    </>
  );
}
