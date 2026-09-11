import About from "../components/About";
import EditorialMessage from "../components/EditorialMessage";
import { about, site } from "../data/siteContent";
import { usePageTitle } from "../hooks/usePageTitle";

export default function AboutPage() {
  usePageTitle("About");

  return (
    <>
      <About />
      <section className="section-rule">
        <div className="page-wrap grid gap-8 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="kicker">{about.collegeNote.source}</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl">{about.collegeNote.title}</h2>
          </div>
          <p className="serif-body max-w-2xl">{about.collegeNote.text}</p>
        </div>
      </section>
      <EditorialMessage />
      <section className="section-rule">
        <div className="page-wrap py-16">
          <p className="kicker">Attribution</p>
          <p className="serif-body mt-4 max-w-2xl">
            {site.editionLabel} is published from {site.college}, through {site.branch}.
          </p>
        </div>
      </section>
    </>
  );
}
