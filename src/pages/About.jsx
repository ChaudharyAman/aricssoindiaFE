import { Activity, Cpu, Gauge, Radio, Settings2, Waves } from 'lucide-react'
import ClientLogos from '../components/ClientLogos'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { company } from '../data/siteData'

const technologies = [
  {
    label: 'SCADA',
    subtext: 'Integrated supervisory monitoring and control',
    icon: Activity,
  },
  {
    label: 'Wireless IoT',
    subtext: 'Sensor-based remote connectivity for field assets',
    icon: Radio,
  },
  {
    label: 'Microcontroller',
    subtext: 'Microprocessor-driven logic for dependable control',
    icon: Cpu,
  },
  {
    label: 'Real-Time',
    subtext: 'Continuous monitoring for actionable visibility',
    icon: Gauge,
  },
  {
    label: 'Actuator Valves',
    subtext: 'Automated movement and control of utility lines',
    icon: Settings2,
  },
  {
    label: 'Ultrasonic Sensors',
    subtext: 'Wireless level sensing for modern infrastructure',
    icon: Waves,
  },
]

export default function About() {
  return (
    <>
      <PageMeta
        title="About Aricsso India"
        description="Learn about Aricsso India's automation, SCADA and instrumentation expertise."
        keywords={['about Aricsso India', 'automation company Gurugram']}
      />

      <PageHero
        title="About Aricsso India"
        description="Clean, dependable automation thinking built around field reality and management visibility."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
        meta="Established 2019 - Gurugram, Haryana"
      />

      <main>
        <section className="section-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <h2 className="section-heading text-4xl md:text-5xl">Who We Are</h2>
              <p className="mt-6 text-base leading-8 text-brand-body">
                Aricsso India was established in 2019 with an objective to enhance
                in the field of Process Automation Systems, Turnkey Instrumentation
                Projects and the SCADA Software. Under the tutelage and support of
                our mentor we have successfully climbed the ladders of success.
              </p>
              <p className="mt-6 text-base leading-8 text-brand-body">
                We are a leading industrial automation and electrical solutions
                provider delivering advanced automation systems, industrial
                products, PLC, HMI, SCADA, robotics, motion control, sensors,
                instrumentation, and process automation solutions for modern
                industries. We design and develop products that meet the
                requirements of the industry with a state-of-the-art
                infrastructure equipped with fabrication, machining facility and a
                quality control department.
              </p>
              <p className="mt-6 text-base leading-8 text-brand-body">
                We specialize in supplying globally recognized automation brands
                and providing complete industrial automation solutions that
                improve efficiency, productivity, reliability, and operational
                performance across manufacturing, government facilities,
                hospitals, railways and infrastructure sites.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Process Automation Systems',
                'Turnkey Instrumentation Projects',
                'SCADA Software Integration',
                'Wireless Sensor Networks',
                'Real-Time Data Monitoring',
                'Microprocessor-based Control',
              ].map((item) => (
                <div key={item} className="card flex gap-4 p-5">
                  <div className="icon-circle shrink-0">
                    <Activity size={18} />
                  </div>
                  <p className="font-heading text-xl font-semibold text-brand-dark">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-soft">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <h2 className="section-heading text-center text-4xl md:text-5xl">
              Technology Focus
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {technologies.map(({ label, subtext, icon: Icon }) => (
                <div key={label} className="card p-6">
                  <div className="icon-circle">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-brand-dark">
                    {label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-body">{subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <h2 className="section-heading text-center text-4xl md:text-5xl">
              Authorizations & Partners
            </h2>
            <div className="mt-12">
              <ClientLogos
                items={company.authorizations}
                title=""
                subtitle="Authorized Partner"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
