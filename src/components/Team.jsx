import { branchOfficers, branchYear, editorIssues } from "../data/team";
import TeamMemberCard from "./TeamMemberCard";

function MemberGrid({ people, compact }) {
  return (
    <div
      className={`mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 ${
        compact ? "lg:grid-cols-6" : "lg:grid-cols-4"
      }`}
    >
      {people.map((member) => (
        <TeamMemberCard key={member.id} member={member} compact={compact} />
      ))}
    </div>
  );
}

export default function Team({ compact = false }) {
  return (
    <section className="section-rule" id={compact ? undefined : "editors"}>
      <div className="page-wrap py-16 lg:py-24">
        <p className="kicker">Masthead</p>
        <h2 className="display-title mt-3 text-4xl sm:text-5xl">Editors</h2>
        <div className="mt-14 space-y-16">
          {editorIssues.map((issue) => (
            <div key={issue.id}>
              <h3 className="display-title text-3xl sm:text-4xl">{issue.title}</h3>
              {issue.year ? (
                <p className="mt-2 font-display text-sm tracking-wide text-base-content/55">{issue.year}</p>
              ) : null}
              <MemberGrid people={issue.editors} compact={compact} />
            </div>
          ))}
          {compact ? null : (
            <div>
              <h3 className="display-title text-3xl sm:text-4xl">Student Branch</h3>
              <p className="mt-2 font-display text-sm tracking-wide text-base-content/55">{branchYear}</p>
              <MemberGrid people={branchOfficers} compact={false} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
