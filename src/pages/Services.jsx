import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Droplets,
  Flame,
  Lightbulb,
  Trash2,
  Waves,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CPDBox from '../components/CPDBox'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { pumpTypes, services } from '../data/siteData'

const icons = {
  Droplets,
  Waves,
  Lightbulb,
  Flame,
  Trash2,
  Zap,
}

export default function Services() {
  const [openId, setOpenId] = useState(services[0].id)

  return (
    <>
      <PageMeta
        title="Our Services | Aricsso India"
        description="Automation, wireless and SCADA solutions for modern infrastructure."
        keywords={['automation services', 'SCADA solutions']}
      />

      <PageHero
        title="Our Services"
        description="Automation, Wireless & SCADA solutions for modern infrastructure"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
      />

      <main>
        <section className="section-soft border-b border-brand-border">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-4 py-8 lg:px-8">
            {services.map((service) => {
              const Icon = icons[service.icon] || Droplets
              return (
                <div
                  key={service.id}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-teal shadow-card"
                >
                  <Icon size={20} />
                </div>
              )
            })}
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-7xl space-y-6 px-4 py-20 lg:px-8">
            {services.map((service) => {
              const Icon = icons[service.icon] || Droplets
              const isOpen = openId === service.id

              return (
                <article key={service.id} className="card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : service.id)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="icon-circle shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h2 className="font-heading text-3xl font-bold text-brand-dark">
                          {service.title}
                        </h2>
                        <p className="mt-3 max-w-4xl text-sm leading-7 text-brand-body">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={22}
                      className={
                        isOpen
                          ? 'shrink-0 rotate-180 text-brand-teal transition'
                          : 'shrink-0 text-brand-teal transition'
                      }
                    />
                  </button>

                  {isOpen ? (
                    <div className="border-t border-brand-border px-6 py-8 md:px-8">
                      <p className="max-w-5xl text-base leading-8 text-brand-body">
                        {service.fullDesc}
                      </p>
                      <CPDBox cpd={service.cpd} />
                      <div className="grid gap-4 md:grid-cols-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex gap-3 rounded-xl border border-brand-border bg-brand-bg-soft p-4">
                            <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand-teal" />
                            <p className="text-sm leading-7 text-brand-body">{feature}</p>
                          </div>
                        ))}
                      </div>
                      <Link to={`/services/${service.id}`} className="btn-outline mt-8">
                        Learn More
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>
        </section>

        <section className="section-soft">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <h2 className="section-heading text-4xl md:text-5xl">
              Pump Types We Support
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pumpTypes.map((group) => (
                <div key={group.category} className="overflow-hidden rounded-[1.25rem] border border-brand-border bg-white shadow-card">
                  <div className="bg-brand-teal px-5 py-4 font-heading text-xl font-bold text-white">
                    {group.category}
                  </div>
                  <div className="space-y-3 p-5 text-sm leading-7 text-brand-body">
                    {group.items.map((item) => (
                      <p key={item}>• {item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
