import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Not found");

  return (
    <section className="page-wrap py-24">
      <p className="kicker">404</p>
      <h1 className="display-title mt-3 text-5xl">This page is not in the issue</h1>
      <p className="serif-body mt-5 max-w-xl">
        The address does not match a page on the Pratibimb site. Return home, or open the archive.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-editorial">
          Home
        </Link>
        <Link to="/archive" className="btn-ghost-editorial">
          Archive
        </Link>
      </div>
    </section>
  );
}
