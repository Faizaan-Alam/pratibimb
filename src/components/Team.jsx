import { Link } from "react-router-dom";
import { team, teamGroups } from "../data/team";
import TeamMemberCard from "./TeamMemberCard";

export default function Team({ compact = false }) {
  return (
    <section className="section-rule">
      <div className="page-wrap py-16 lg:py-24">
        <p className="kicker">Masthead</p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display-title text-4xl sm:text-5xl">Meet the team</h2>
          {compact ? (
            <Link to="/team" className="link-quiet font-display text-sm">
              Full masthead
            </Link>
          ) : null}
        </div>
        <p className="serif-body mt-5 max-w-2xl">
          Pratibimb 4.0 is led by its chief editors and magazine coordinator, with faculty
          guidance from the IEEE BVCOE branch counsellor.
        </p>

        {teamGroups.map((group) => {
          const members = team.filter((member) => member.group === group);
          if (!members.length) return null;
          return (
            <div key={group} className="mt-12">
              <h3 className="kicker">{group}</h3>
              <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
