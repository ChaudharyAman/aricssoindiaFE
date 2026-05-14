import {
  CheckCircle2,
  ChevronRight,
  Droplets,
  Flame,
  Lightbulb,
  Trash2,
  Waves,
  Zap,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import CPDBox from '../components/CPDBox'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { playground, services } from '../data/siteData'

const icons = {
  Droplets,
  Waves,
  Lightbulb,
  Flame,
  Trash2,
  Zap,
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((item) => item.id === id)

  if (!service) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <PageMeta title="Service Not Found | Aricsso India" />
        <h1 className="font-heading text-5xl font-bold text-brand-dark">
          Service not found
        </h1>
        <p className="mt-4 text-brand-body">
          The service you are looking for could not be matched.
        </p>
        <Link to="/services" className="btn-primary mt-8">
          Back to Services
        </Link>
      </main>
    )
  }

  const Icon = icons[service.icon] || Droplets

  return (
    <>
      <PageMeta
        title={`${service.title} | Aricsso India`}
        description={service.shortDesc}
        keywords={[service.title]}
      />

      <PageHero
        title={service.title}
        description={service.fullDesc}
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
      />

      <main>
        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal-100 text-brand-teal">
              <Icon size={24} />
            </div>
            <CPDBox cpd={service.cpd} />
          </div>
        </section>

        <section className="section-soft">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <h2 className="section-heading text-4xl md:text-5xl">Key Features</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {service.features.map((feature) => (
                <div key={feature} className="card flex gap-4 p-6">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-teal" size={20} />
                  <p className="text-sm leading-7 text-brand-body">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <h2 className="section-heading text-4xl md:text-5xl">Suitable For</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {(service.suitableFor || playground).map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-brand-bg-muted px-4 py-3 text-sm text-brand-body"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-teal">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="rounded-[1.5rem] border border-brand-teal/20 bg-white p-8 md:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="section-heading text-4xl md:text-5xl">
                    Request This Service
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-brand-body">
                    Tell us about your site, current process and automation goals.
                  </p>
                </div>
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="btn-primary"
                >
                  Request This Service
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
