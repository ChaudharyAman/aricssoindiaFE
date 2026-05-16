import { useState } from 'react'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import WorkOrdersTable from '../components/WorkOrdersTable'
import {
  portfolioSites,
  scadaReferences,
  serviceImages,
  workOrders,
} from '../data/siteData'

export default function Portfolio() {
  const featuredProject = portfolioSites[0]
  const vipProject = portfolioSites.find((site) => site.vipVisit)
  const vipImages = [
    {
      src: '/images/moolchand-visit-1.jpeg',
      alt: 'Deputy CM visit - Storm Water Automation SCADA',
      fallback: 'Add public/images/moolchand-visit-1.jpg',
    },
    {
      src: '/images/moolchand-visit-2.jpeg',
      alt: 'Storm Water Automation SCADA screen',
      fallback: 'Add public/images/moolchand-visit-2.jpg',
    },
    {
      src: '/images/moolchand-scada.jpeg',
      alt: 'Moolchand Underpass SCADA - 8 pump system',
      fallback: 'Add public/images/moolchand-scada.jpg',
    },
  ]

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
                Lok Nayak Hospital, New Delhi
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
              {featuredProject.image && (
                <div className="mt-8 overflow-hidden rounded-[1rem]">
                  <img
                    src={featuredProject.image}
                    alt={`${featuredProject.name} - Building Water Management System SCADA display`}
                    className="w-full object-cover"
                  />
                  <p className="mt-3 text-xs text-brand-muted">
                    Lok Nayak Hospital - OPD & Surgical Block Water Management System (Aricsso India x JSB Automation India)
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {vipProject ? (
          <section className="section-teal">
            <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
              <div className="card card-accent p-8">
                <span className="badge bg-red-100 text-red-600">🏛️ Government Recognition</span>
                <h2 className="mt-5 section-heading text-4xl md:text-5xl">
                  Visited by Delhi Deputy CM — Moolchand Underpass
                </h2>
                <p className="mt-4 text-lg leading-8 text-brand-body">
                  Our Storm Water Automation system at Moolchand Underpass, New Delhi
                  was personally inspected by <strong>{vipProject.vipVisit.person}</strong>,
                  <strong> {vipProject.vipVisit.title}</strong> in {vipProject.vipVisit.date}
                  , validating our real-time SCADA control system managing 8 pumps
                  across 4 underground tanks for the Storm & Sewage Water Pipeline.
                </p>
                <p className="mt-4 text-base leading-8 text-brand-body">
                  {vipProject.scadaDetails}
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {vipImages.map((image) => (
                    <PortfolioImage
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      fallback={image.fallback}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {portfolioSites.map((site) => (
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

            <div className="space-y-6">
              <div className="card overflow-hidden p-0">
                <div className="border-b border-brand-border bg-white px-6 py-5">
                  <span className="badge">Live Installation</span>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-brand-dark">
                    Tank Level Display
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-body">
                    Real SCADA installation view showing overhead tanks, valve
                    status and underground pump house level indicators.
                  </p>
                </div>
                <div className="bg-white p-5">
                  <div className="overflow-hidden rounded-[1rem] border border-brand-border bg-brand-bg-soft">
                    <img
                      src={serviceImages['water-management'].src}
                      alt={serviceImages['water-management'].alt}
                      className="w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 text-sm text-brand-muted">
                    OBH OH - OH1 - Deen - Pathology - all at 100% - Main UG Pump
                    House HIGH
                  </p>
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

function PortfolioImage({ src, alt, fallback }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-brand-border bg-white p-4 text-center text-sm text-brand-body">
        {fallback}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="aspect-[4/3] w-full rounded-xl object-cover"
      onError={() => setFailed(true)}
    />
  )
}


