import { motion } from 'framer-motion'
import { ArrowRight, RadioTower } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data/siteData'

export default function HeroSection() {
  return (
    <section className="section-white">
      <div className="mx-auto max-w-7xl px-4 pb-0 pt-16 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge">Smart Automation Since 2019</span>
            <h1 className="mt-6 max-w-3xl font-heading text-5xl font-bold leading-tight text-brand-dark md:text-6xl">
              Intelligent Automation for Modern Infrastructure
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-body">
              {company.fullTagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-brand-body">
              Aricsso India delivers automation systems for utilities and critical
              facilities, combining field control, protection logic and real-time
              SCADA visibility into one dependable workflow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/services" className="btn-primary">
                Explore Services
                <ArrowRight size={16} />
              </Link>
              <Link to="/portfolio" className="btn-outline">
                View Portfolio
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {company.authorizations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-border bg-white px-4 py-2 font-heading text-sm font-semibold tracking-[0.18em] text-brand-dark"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="dot-pattern absolute inset-6 rounded-[2rem] opacity-60" />
            <div className="card relative overflow-hidden rounded-[2rem]">
              <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal-100 text-brand-teal">
                <RadioTower size={24} />
              </div>
              <img
                src="/images/hero-automation.avif"
                alt="Aricsso India automation systems"
                className="h-full w-full object-cover"
                style={{ minHeight: '420px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
