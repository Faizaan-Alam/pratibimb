import { editorial } from "../data/siteContent";

export default function EditorialMessage() {
  return (
    <section className="section-rule">
      <div className="page-wrap py-16 lg:py-24">
        <p className="kicker">{editorial.kicker}</p>
        <h2 className="display-title mt-3 max-w-3xl text-4xl sm:text-5xl">{editorial.title}</h2>
        <p className="serif-body mt-5 max-w-2xl">{editorial.intro}</p>

        <article className="mt-10 border hairline bg-base-200/40 p-6 sm:p-8">
          {editorial.fromCurrentEditors.placeholder ? (
            <p className="kicker text-primary">Placeholder copy</p>
          ) : null}
          <h3 className="display-title mt-3 text-2xl sm:text-3xl">
            {editorial.fromCurrentEditors.title}
          </h3>
          <p className="serif-body mt-4 max-w-2xl">{editorial.fromCurrentEditors.body}</p>
          <p className="mt-6 font-display text-sm font-semibold">
            {editorial.fromCurrentEditors.signoff}
          </p>
          <p className="font-display text-xs text-base-content/55">
            {editorial.fromCurrentEditors.role}
          </p>
        </article>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {editorial.excerpts.map((item) => (
            <blockquote key={item.id} className="border hairline p-6">
              <p className="kicker">{item.source}</p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-base-content/90">
                {item.quote}
              </p>
              <footer className="mt-6">
                <p className="font-display text-sm font-semibold">{item.attribution}</p>
                <p className="font-display text-xs text-base-content/55">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
