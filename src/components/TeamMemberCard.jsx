import { useState } from "react";
import { withBase } from "../data/assets";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function PortraitFallback({ member }) {
  return (
    <div
      className="flex aspect-[3/4] w-full flex-col justify-between bg-neutral p-5 text-secondary"
      aria-hidden="true"
    >
      <p className="kicker">Pratibimb photo</p>
      <div>
        <p className="display-title text-4xl">{initials(member.name)}</p>
      </div>
    </div>
  );
}

export default function TeamMemberCard({ member, compact = false }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(member.image) && !failed;

  return (
    <article className="group">
      <div className="overflow-hidden border hairline bg-base-200">
        {showImage ? (
          <img
            src={withBase(member.image)}
            alt={`Portrait of ${member.name}, ${member.role}`}
            className="aspect-[3/4] h-auto w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
            width="900"
            height="1200"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <PortraitFallback member={member} />
        )}
      </div>
      <div className="mt-4">
        <h3 className={`display-title min-w-0 break-words ${compact ? "text-lg sm:text-xl" : "text-2xl"}`}>
          {member.name}
        </h3>
        <p className="mt-1 font-display text-xs uppercase tracking-kicker text-base-content/55">
          {member.role}
        </p>
        {member.description ? <p className="serif-body mt-2 max-w-md">{member.description}</p> : null}
      </div>
    </article>
  );
}
