import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, description, breadcrumb, meta }) {
  return (
    <section className="section-soft border-b border-brand-border">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        {breadcrumb ? (
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-brand-muted">
            {breadcrumb.map((item, index) => (
              <span
                key={`${item.label}-${index}`}
                className="inline-flex items-center gap-2"
              >
                {item.path ? (
                  <Link to={item.path} className="transition hover:text-brand-teal">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-brand-teal">{item.label}</span>
                )}
                {index < breadcrumb.length - 1 ? <ChevronRight size={14} /> : null}
              </span>
            ))}
          </div>
        ) : null}

        <h1 className="mt-4 font-heading text-5xl font-bold text-brand-dark md:text-6xl">
          {title}
        </h1>
        {meta ? (
          <p className="mt-3 text-base font-semibold text-brand-muted">{meta}</p>
        ) : null}
        <div className="mx-auto mt-5 h-[3px] w-[60px] rounded-full bg-brand-teal" />
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-brand-body">
          {description}
        </p>
        {eyebrow ? <p className="mt-4 text-sm font-semibold text-brand-teal">{eyebrow}</p> : null}
      </div>
    </section>
  )
}
