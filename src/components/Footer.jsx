import { Link } from "react-router-dom";
import { logoSrc } from "../data/assets";
import { site } from "../data/siteContent";
import { issueTeam } from "../data/team";

export default function Footer() {
  return (
    <footer className="mt-auto border-t hairline bg-base-200/40">
      <div className="page-wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt=""
              className="h-12 w-12 rounded-full"
              width="48"
              height="48"
            />
            <div>
              <p className="font-display text-lg font-bold leading-none">{site.editionLabel}</p>
              <p className="mt-1 font-display text-[0.65rem] uppercase tracking-kicker text-base-content/55">
                {site.branch}
              </p>
            </div>
          </div>
          <p className="serif-body mt-5 max-w-sm">{site.footerStatement}</p>
          <p className="mt-4 font-display text-sm">
            Pratibimb of{" "}
            <a
              href="https://www.ieeebvcoe.in/"
              className="link-quiet"
              target="_blank"
              rel="noreferrer"
            >
              IEEE BVCOE
            </a>
            .
          </p>
        </div>

        <div>
          <p className="kicker">In this issue</p>
          <ul className="mt-4 space-y-2 font-display text-sm">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-quiet">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="kicker">Masthead</p>
          <ul className="mt-4 space-y-3">
            {issueTeam.map((member) => (
              <li key={member.id}>
                <p className="font-display text-sm font-semibold">{member.name}</p>
                <p className="font-display text-xs text-base-content/55">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="page-wrap flex flex-col gap-2 py-5 font-display text-xs text-base-content/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.college}</p>
          <p>
            Made by{" "}
            <a
              href="https://github.com/Faizaan-Alam"
              className="link-quiet text-base-content/80"
            >
              Faizaan
            </a>
          </p>
          <p>A publication of {site.branch}</p>
        </div>
      </div>
    </footer>
  );
}
