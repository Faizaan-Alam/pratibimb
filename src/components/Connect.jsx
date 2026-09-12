import { connect } from "../data/siteContent";

export default function Connect({ compact = false }) {
  const links = compact ? connect.links.slice(0, 3) : connect.links;

  return (
    <section className="section-rule">
      <div className="page-wrap grid gap-10 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-24">
        <div>
          <p className="kicker">{connect.kicker}</p>
          <h2 className="display-title mt-3 text-4xl sm:text-5xl">{connect.title}</h2>
        </div>
        <div>
          <p className="serif-body max-w-2xl">{connect.intro}</p>
          <p className="mt-6 font-display text-sm">
            Pratibimb lives with the student branch at{" "}
            <a
              href={connect.branchSite.href}
              className="link-quiet"
              target="_blank"
              rel="noreferrer"
            >
              {connect.branchSite.label}
            </a>
            .
          </p>
          <ul className="mt-8 divide-y divide-base-content/15 border-y hairline">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-baseline justify-between gap-4 py-4 font-display text-lg transition hover:text-primary sm:text-xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.label}</span>
                  <span className="font-display text-xs uppercase tracking-kicker text-base-content/45">
                    Open
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
