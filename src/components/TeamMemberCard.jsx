import { useState } from "react";

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
            src={member.image}
            alt={`Portrait of ${member.name}, ${member.role}`}
            className="aspect-[3/4] h-auto w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            width="900"
            height="1200"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <PortraitFallback member={member} />
        )}
      </div>
      <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-3 gap-y-1">
        <p className="font-display text-sm text-base-content/40">{member.number}</p>
        <h3 className={`display-title ${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`}>
          {member.name}
        </h3>
        <span />
        <p className="font-display text-xs uppercase tracking-kicker text-base-content/55">
          {member.role}
        </p>
        {member.description ? (
          <>
            <span />
            <p className="serif-body mt-2 max-w-md">{member.description}</p>
          </>
        ) : null}
      </div>
    </article>
  );
}
