import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logoSrc } from "../data/assets";
import { site } from "../data/siteContent";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-display text-sm tracking-wide px-2 py-1 rounded-sm ${
      isActive ? "text-primary" : "text-base-content/80 hover:text-base-content"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b hairline bg-base-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-content"
      >
        Skip to content
      </a>
      <nav className="page-wrap flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoSrc}
            alt=""
            className="h-10 w-10 rounded-full"
            width="40"
            height="40"
          />
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-wide">
              {site.name}
            </span>
            <span className="block font-display text-[0.65rem] uppercase tracking-kicker text-base-content/55">
              4.0
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <ThemeSwitcher />
          <button
            type="button"
            className="btn btn-ghost btn-square h-9 min-h-9 w-9 rounded-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex flex-col items-center gap-1" aria-hidden="true">
              <span className={`block h-px w-4 bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-4 bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t hairline bg-base-100 lg:hidden">
          <ul className="page-wrap flex flex-col py-3">
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block py-3 font-display text-base ${isActive ? "text-primary" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
