import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import WorkOrdersTable from '../components/WorkOrdersTable'
import {
  barGraphLevels,
  portfolioSites,
  scadaReferences,
  workOrders,
} from '../data/siteData'

export default function Portfolio() {
  const featuredProject = portfolioSites[0]
  const otherProjects = portfolioSites.slice(1)

  return (
    <>
      <PageMeta
        title="Portfolio | Aricsso India"
        description="Trusted automation and water management sites delivered for hospitals, institutions and government assets."
        keywords={['portfolio', 'Lok Nayak Hospital']}
      />

      <PageHero
        title="Pump House Automation & Water Management Sites"
        description="Trusted by Government Hospitals, Central Complexes & Major Institutions"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Portfolio' }]}
      />

      <main>
        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="card card-accent p-8">
              <span className="badge">Featured Installation</span>
              <h2 className="mt-5 section-heading text-4xl md:text-5xl">
                {featuredProject.name}, {featuredProject.location}
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-body">
                Building Water Management System - OPD & Surgical Block Pump/UGT/OHT
              </p>
              <p className="mt-4 text-base leading-8 text-brand-body">
                Complete automation of RCC Over Head Tanks for OPD and Surgical
                Blocks, with wireless sensors, 3 pumps, Input Line to RCC
                Underground Tank, real-time SCADA monitoring with LED tank-level
                indicators.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Hospital', 'New Delhi', 'SCADA', 'Wireless', 'OHT', 'UGT'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-bg-muted px-4 py-2 text-sm text-brand-body"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {otherProjects.map((site) => (
                <div key={site.name} className="card overflow-hidden">
                  <div className="h-[2px] w-full bg-brand-teal" />
                  <div className="p-6">
                    <span className="badge">{site.location}</span>
                    <h3 className="mt-4 font-heading text-2xl font-bold text-brand-dark">
                      {site.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-brand-body">{site.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-teal">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <h2 className="section-heading text-4xl md:text-5xl">
                Our SCADA & HMI Systems
              </h2>
              <p className="mt-6 text-base leading-8 text-brand-body">
                Our monitoring systems translate complex field data into clear,
                accessible views for operators and management. Tank levels, pump
                status, high and low alarms, and multiple screen navigation all
                combine into a practical control experience for real facilities.
              </p>
              <p className="mt-4 text-base leading-8 text-brand-body">
                Typical displays include overhead tanks, underground tanks, pump
                controls, BTC ON status and graphical level indicators that help
                teams respond quickly and consistently.
              </p>
              <div className="mt-8 space-y-4">
                {scadaReferences.map((reference) => (
                  <div
                    key={reference.title}
                    className="rounded-[1.25rem] border border-brand-teal/15 bg-white/75 p-5"
                  >
                    <h3 className="font-heading text-2xl font-bold text-brand-dark">
                      {reference.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-brand-body">
                      {reference.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-brand-teal/20 bg-white p-6 shadow-card">
              <div className="rounded-xl border border-brand-teal/30 bg-brand-teal-50 p-5 font-mono text-sm text-brand-dark">
                <p className="border-b border-brand-teal/20 pb-3 font-heading text-xl font-bold">
                  ARICSSO INDIA - LEVEL DISPLAY
                </p>
                <div className="mt-5 space-y-5">
                  {barGraphLevels.map((tank) => (
                    <div key={tank.label}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="font-heading text-base font-semibold text-brand-dark">
                          {tank.label}
                        </span>
                        <span className="text-xs font-semibold tracking-[0.18em] text-brand-muted">
                          {tank.value}%
                        </span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-white">
                        <div
                          className={`h-full rounded-full ${tank.tone}`}
                          style={{ width: `${tank.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-brand-teal/20 bg-white p-3 text-center font-heading font-semibold">
                      BTC ON
                    </div>
                    <div className="rounded-lg border border-brand-teal/20 bg-white p-3 text-center font-heading font-semibold">
                      HL / LL Indicators
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <h2 className="section-heading text-4xl md:text-5xl">
              Summary of Work Orders
            </h2>
            <div className="mt-10">
              <WorkOrdersTable orders={workOrders} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
