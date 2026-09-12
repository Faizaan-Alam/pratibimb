import { Link } from "react-router-dom";
import { exes, issueTeam } from "../data/team";
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
    <section className="section-rule" id={compact ? undefined : "meet-the-team"}>
      <div className="page-wrap py-16 lg:py-24">
        <p className="kicker">Masthead</p>
        <h2 className="display-title mt-3 text-4xl sm:text-5xl">Pratibimb 4.0 core team</h2>
        <p className="serif-body mt-5 max-w-2xl">
          Faizaan Alam, Pakhi, Abhipsita Sarkaar, and Devansh.
        </p>
        <div
          className={`mt-10 grid gap-8 sm:grid-cols-2 ${compact ? "lg:grid-cols-4" : "lg:grid-cols-2"}`}
        >
          {issueTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} compact={compact} />
          ))}
        </div>

        {!compact ? (
          <div className="mt-20 border-t hairline pt-14">
            <p className="kicker">Previous</p>
            <h3 className="display-title mt-3 text-3xl sm:text-4xl">Previous issues</h3>
            <p className="serif-body mt-3 max-w-2xl">
              A record of people from earlier Pratibimb issues.
            </p>

            {exes.length ? (
              <ol className="mt-8 max-w-2xl border-b hairline">
                {exes.map((member) => (
                  <ExeRow key={member.id || member.name} member={member} />
                ))}
              </ol>
            ) : (
              <div className="mt-8 max-w-xl border hairline p-6">
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
          </div>
        ) : null}
      </div>
    </section>
  );
}
