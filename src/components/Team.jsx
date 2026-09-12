import { issueTeam } from "../data/team";
import TeamMemberCard from "./TeamMemberCard";

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
      </div>
    </section>
  );
}
