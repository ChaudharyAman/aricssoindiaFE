import { motion } from 'framer-motion'
import { ArrowRight, RadioTower } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, stats } from '../data/siteData'

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
            <div className="card relative overflow-hidden rounded-[2rem] p-8">
              <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal-100 text-brand-teal">
                <RadioTower size={24} />
              </div>

              <div className="relative flex min-h-[420px] items-center justify-center">
                <div className="relative animate-float-slow">
                  <div className="absolute inset-0 rounded-full bg-brand-teal-50 blur-3xl" />
                  <svg
                    viewBox="0 0 420 320"
                    className="relative h-auto w-full max-w-[28rem]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="60"
                      y="58"
                      width="300"
                      height="200"
                      rx="28"
                      fill="#F8FAFB"
                      stroke="#E2E8F0"
                    />
                    <path
                      d="M176 126L197 143L223 141L233 166L257 177L252 203L266 224L252 245L257 271L233 282L223 307L197 305L176 322L155 305L129 307L119 282L95 271L100 245L86 224L100 203L95 177L119 166L129 141L155 143L176 126Z"
                      transform="translate(30 -42) scale(0.7)"
                      fill="#E0F7FA"
                      stroke="#028090"
                      strokeWidth="5"
                    />
                    <path
                      d="M180 118L154 194H169L176 173H197L204 194H218L192 118H180Z"
                      fill="#1A2332"
                    />
                    <path
                      d="M240 90C262 92 281 103 295 121"
                      stroke="#028090"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M253 70C281 73 306 87 323 111"
                      stroke="#00A3B5"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M266 50C302 54 332 72 354 102"
                      stroke="#028090"
                      strokeWidth="7"
                      strokeLinecap="round"
                      opacity="0.65"
                    />
                    <path
                      d="M123 120H95V225H145"
                      stroke="#028090"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="8 8"
                    />
                    <path
                      d="M230 220H302V140H340"
                      stroke="#028090"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="8 8"
                    />
                    <circle cx="95" cy="225" r="7" fill="#028090" />
                    <circle cx="340" cy="140" r="7" fill="#028090" />
                    <rect
                      x="98"
                      y="210"
                      width="68"
                      height="42"
                      rx="14"
                      fill="#FFFFFF"
                      stroke="#E2E8F0"
                    />
                    <rect
                      x="254"
                      y="112"
                      width="78"
                      height="42"
                      rx="14"
                      fill="#FFFFFF"
                      stroke="#E2E8F0"
                    />
                    <text
                      x="110"
                      y="236"
                      fill="#4A5568"
                      fontFamily="Nunito, sans-serif"
                      fontSize="13"
                    >
                      Sensor Hub
                    </text>
                    <text
                      x="268"
                      y="138"
                      fill="#4A5568"
                      fontFamily="Nunito, sans-serif"
                      fontSize="13"
                    >
                      SCADA Link
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 border-t border-brand-border bg-brand-bg-soft">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-4 lg:px-8">
          {stats.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="font-heading text-3xl font-bold text-brand-teal">
                {item.value}
                {item.suffix}
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.24em] text-brand-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
