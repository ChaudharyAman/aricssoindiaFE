import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Calendar,
  ChevronRight,
  Cpu,
  MapPin,
  UserCheck,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolioSites } from '../data/siteData'

const visitImages = [
  {
    src: '/images/moolchand-visit-1.jpeg',
    alt: 'Deputy CM Parvesh Verma at Moolchand Underpass storm water automation',
  },
  {
    src: '/images/moolchand-visit-2.jpeg',
    alt: 'Storm water automation SCADA display at Moolchand Underpass',
  },
  {
    src: '/images/moolchand-scada.jpeg',
    alt: 'Live SCADA for the 8-pump Moolchand Underpass system',
  },
]

export default function DeputyCMTag() {
  const [open, setOpen] = useState(false)
  const project = portfolioSites.find((site) => site.vipVisit)

  if (!project) {
    return null
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full max-w-5xl rounded-[1.5rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-amber-50/70 px-5 py-4 text-left shadow-sm transition hover:border-amber-300 hover:shadow-md"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
              </span>
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                Aricsso India Automation Systems
              </span>
            </div>

            <p className="mt-3 font-heading text-xl font-bold leading-snug text-brand-dark sm:text-2xl">
              Pump House Automation at Moolchand Underpass visited by the Delhi
              Deputy CM Sh. Parvesh Verma
            </p>
            <p className="mt-2 text-sm font-medium text-brand-body sm:text-base">
              {project.name}, {project.location}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-amber-700">
            <span>View Recognition</span>
            <ChevronRight
              size={16}
              className="transition group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-6"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setOpen(false)
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="mx-auto my-auto w-full max-w-2xl overflow-hidden rounded-[1.5rem] border border-amber-100 bg-white shadow-2xl"
            >
              <div className="border-b border-amber-100 bg-amber-50 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    <Award size={12} />
                    Government Recognition
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-200 text-amber-700 hover:bg-amber-100"
                    aria-label="Close recognition popup"
                  >
                    <X size={14} />
                  </button>
                </div>
                <h2 className="mt-3 font-heading text-xl font-bold leading-snug text-amber-900">
                  Pump House Automation at Moolchand Underpass visited by the Delhi
                  Deputy CM {project.vipVisit.person}
                </h2>
              </div>

              <div className="px-6 py-5">
                <div className="mb-5 grid gap-3 sm:auto-rows-[160px] sm:grid-cols-[1.35fr_0.85fr]">
                  <div className="overflow-hidden rounded-xl bg-brand-bg-soft sm:row-span-2">
                    <img
                      src={visitImages[0].src}
                      alt={visitImages[0].alt}
                      className="h-full min-h-[220px] w-full object-cover"
                    />
                  </div>
                  <div className="grid gap-3 sm:contents">
                    {visitImages.slice(1).map((image) => (
                      <div
                        key={image.src}
                        className="flex-1 overflow-hidden rounded-xl bg-brand-bg-soft"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full min-h-[140px] w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {[
                    {
                      icon: UserCheck,
                      label: `${project.vipVisit.person}, ${project.vipVisit.title}`,
                    },
                    { icon: Calendar, label: project.vipVisit.date },
                    { icon: MapPin, label: `${project.name}, ${project.location}` },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-bg-soft px-3 py-1.5 text-xs text-brand-body"
                    >
                      <Icon size={12} className="text-amber-500" />
                      {label}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-7 text-brand-body">
                  Our Storm Water Automation system, managing{' '}
                  <span className="font-semibold text-brand-dark">
                    8 pumps (20HP & 25HP)
                  </span>{' '}
                  across 4 underground tanks for the Storm & Sewage Water Pipeline,
                  was personally inspected during an official government visit,
                  validating Aricsso India&apos;s real-time SCADA infrastructure in
                  live operation.
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-brand-body">
                  <Cpu size={12} className="text-amber-500" />
                  Storm Water Automation | 8 pumps | UG Tank 1-4 | Real-time SCADA
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-brand-border px-6 py-4">
                <Link
                  to="/portfolio"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
                >
                  View full project
                  <ArrowRight size={14} />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-xs text-brand-body underline hover:text-brand-dark"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
