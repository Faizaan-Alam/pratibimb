import { Link } from "react-router-dom";
import { exes, faculty, issueTeam } from "../data/team";
import TeamMemberCard from "./TeamMemberCard";

function ExeRow({ member }) {
  return (
    <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 border-t hairline py-5">
      <p className="font-display text-sm text-base-content/40">
        {member.issue ? member.issue : member.number || ""}
      </p>
      <div>
        <p className="font-display text-xl font-semibold sm:text-2xl">{member.name}</p>
        <p className="mt-1 font-display text-xs uppercase tracking-kicker text-base-content/55">
          {member.role}
        </p>
      </div>
    </li>
  );
}

export default function Team({ compact = false }) {
  return (
    <section className="section-rule">
      <div className="page-wrap py-16 lg:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Masthead</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">Meet the team</h2>
          </div>
          {compact ? (
            <Link to="/team" className="link-quiet font-display text-sm">
              Full masthead
            </Link>
          ) : null}
        </div>
        <p className="serif-body mt-5 max-w-2xl">
          Pratibimb is made by Faizaan Alam, Pakhi, Abhipsita Sarkaar, and Devansh.
        </p>

        {compact ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {issueTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} compact />
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-0">
            <section className="lg:pr-10">
              <div className="flex items-baseline justify-between gap-4">
                <p className="kicker">Section 01</p>
                <p className="kicker text-primary">Now</p>
              </div>
              <h3 className="display-title mt-3 text-3xl sm:text-4xl">This issue</h3>
              <p className="serif-body mt-3 max-w-md">
                The current masthead. Chief editors and the magazine coordinator of Pratibimb.
              </p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {issueTeam.map((member) => (
                  <TeamMemberCard key={member.id} member={member} compact />
                ))}
              </div>
            </section>

            <section className="border-t hairline pt-12 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="flex items-baseline justify-between gap-4">
                <p className="kicker">Section 02</p>
                <p className="kicker">Exes</p>
              </div>
              <h3 className="display-title mt-3 text-3xl sm:text-4xl">Previous issues</h3>
              <p className="serif-body mt-3 max-w-md">
                A record of people from earlier Pratibimb issues.
              </p>

              {exes.length ? (
                <ol className="mt-8 border-b hairline">
                  {exes.map((member) => (
                    <ExeRow key={member.id || member.name} member={member} />
                  ))}
                </ol>
              ) : (
                <div className="mt-8 border hairline p-6">
                  <p className="kicker">Last printed issue</p>
                  <p className="display-title mt-3 text-2xl">Pratibimb 3.0</p>
                  <p className="mt-1 font-display text-xs uppercase tracking-kicker text-base-content/55">
                    2024-2025
                  </p>
                  <p className="serif-body mt-4">
                    Earlier editions remain in the archive.
                  </p>
                  <Link to="/edition/pratibimb-3.0" className="btn-ghost-editorial mt-6">
                    Read Pratibimb 3.0
                  </Link>
                </div>
              )}
            </section>
          </div>
        )}

        {!compact && faculty.length ? (
          <div className="mt-16 border-t hairline pt-10">
            <p className="kicker">With</p>
            <div className="mt-6 max-w-xs">
              {faculty.map((member) => (
                <TeamMemberCard key={member.id} member={member} compact />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
