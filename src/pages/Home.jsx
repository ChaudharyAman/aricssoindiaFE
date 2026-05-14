import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import CPDBox from '../components/CPDBox'
import HeroSection from '../components/HeroSection'
import PageMeta from '../components/PageMeta'
import ServiceCard from '../components/ServiceCard'
import { company, playground, portfolioSites, services } from '../data/siteData'

const cpdHighlight = {
  control: ['Real Time Level', 'Pressure', 'Customized Requirements'],
  protection: ['Over Voltage', 'Under Voltage', 'Phase Loss', 'Dry Running'],
  data: [
    'Pump On/Off/Trip',
    'Energy Consumption',
    'All Phase V/I/PF',
    'Power Factors RYB',
  ],
}

export default function Home() {
  return (
    <>
      <PageMeta
        title="Aricsso India | Intelligent Automation for Modern Infrastructure"
        description="White-theme presentation of Aricsso India's automation solutions for water management, SCADA, fire systems, lighting and smart infrastructure."
        keywords={['smart automation', 'white theme site', 'SCADA India']}
      />

      <HeroSection />

      <main>
        <section className="section-soft">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:px-8">
            <div className="space-y-4">
              {[
                'Process Automation Systems',
                'Turnkey Instrumentation',
                'SCADA Software',
                'Wireless Sensor Technology',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="card flex items-center gap-4 p-5"
                >
                  <div className="icon-circle shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="font-heading text-xl font-semibold text-brand-dark">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col justify-center">
              <span className="badge w-fit">About Aricsso India</span>
              <h2 className="mt-5 section-heading text-4xl md:text-5xl">
                Smart systems built for real-world operations.
              </h2>
              <p className="mt-6 text-base leading-8 text-brand-body">
                Established in 2019, Aricsso India focuses on automation of pump
                houses, electric actuator valves, wireless ultrasonic sensors and
                microprocessor-based systems that give management real-time
                decision-ready data.
              </p>
              <Link to="/about" className="btn-outline mt-8 w-fit">
                Read Our Story
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <h2 className="section-heading text-4xl md:text-5xl">Our Services</h2>
              <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand-teal" />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-teal">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <span className="badge">Our Speciality</span>
              <h2 className="mt-5 section-heading text-4xl md:text-5xl">
                Our Speciality - CPD System
              </h2>
              <p className="mt-4 text-lg text-brand-body">
                Control - Protection - Real-Time Data
              </p>
            </div>
            <div className="mt-10">
              <CPDBox cpd={cpdHighlight} />
            </div>
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center lg:px-8">
            <h2 className="section-heading text-4xl md:text-5xl">Our Playground</h2>
            <p className="mt-4 text-brand-body">Where our systems operate</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {playground.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-brand-bg-muted px-4 py-3 text-sm text-brand-body transition hover:bg-brand-teal-100 hover:text-brand-teal"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-soft">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="card card-accent p-8">
              <span className="badge">Featured Project</span>
              <h2 className="mt-5 section-heading text-4xl">
                {portfolioSites[0].name}
              </h2>
              <p className="mt-3 text-lg leading-8 text-brand-body">
                Building Water Management System - OPD & Surgical Block Pump/UGT/OHT
                with wireless sensors, 3 pumps and real-time SCADA monitoring.
              </p>
              <Link
                to="/portfolio"
                className="mt-6 inline-flex items-center gap-2 font-heading font-semibold text-brand-teal"
              >
                View Details
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {portfolioSites.slice(1).map((site) => (
                <div key={site.name} className="card p-6">
                  <p className="text-sm font-semibold text-brand-teal">{site.location}</p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-brand-dark">
                    {site.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-body">{site.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="rounded-[1.5rem] border border-brand-teal/20 bg-brand-teal-50 p-8 md:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="section-heading text-4xl md:text-5xl">
                    Ready to Automate Your Infrastructure?
                  </h2>
                  <p className="mt-4 text-lg text-brand-body">
                    Get a free consultation from our experts.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link to="/contact" className="btn-primary">
                    Get Free Quote
                  </Link>
                  <a
                    href={`tel:${company.phone1}`}
                    className="font-heading text-lg font-semibold text-brand-teal"
                  >
                    Call Now: {company.phone1}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard
                icon={Phone}
                title="Phone"
                lines={[company.phone2, company.phone1]}
              />
              <InfoCard
                icon={Mail}
                title="Email"
                lines={[company.email1, company.email2]}
              />
              <InfoCard icon={MapPin} title="Address" lines={[company.shortAddress]} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function InfoCard({ icon: Icon, title, lines }) {
  return (
    <div className="card p-6">
      <div className="icon-circle">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 font-heading text-2xl font-bold text-brand-dark">
        {title}
      </h3>
      <div className="mt-4 space-y-2 text-sm leading-7 text-brand-body">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )
}
