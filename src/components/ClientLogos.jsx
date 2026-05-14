export default function ClientLogos({ items, title, subtitle }) {
  return (
    <section className="card p-8">
      {(title || subtitle) && (
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            {title ? (
              <h2 className="font-heading text-3xl font-bold text-brand-dark">
                {title}
              </h2>
            ) : null}
            {subtitle ? <p className="mt-2 text-brand-body">{subtitle}</p> : null}
          </div>
          <span className="badge w-fit">Authorized Network</span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[1.25rem] border border-brand-teal/20 bg-white px-5 py-6 text-center font-heading text-2xl font-bold tracking-[0.24em] text-brand-dark"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
