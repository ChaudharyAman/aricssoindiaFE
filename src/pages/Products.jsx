import { motion } from 'framer-motion'
import {
  Activity,
  Bot,
  Building2,
  Car,
  Cpu,
  Droplets,
  Factory,
  Flame,
  FlaskConical,
  Gauge,
  Layers,
  LayoutGrid,
  Monitor,
  Network,
  Package,
  Radio,
  Settings2,
  ShieldCheck,
  UtensilsCrossed,
  Wifi,
  Wrench,
  Zap,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import {
  globalBrands,
  industriesServed,
  products,
  whyChooseUs,
} from '../data/siteData'

const iconMap = {
  Activity,
  Bot,
  Building2,
  Car,
  Cpu,
  Droplets,
  Factory,
  Flame,
  FlaskConical,
  Gauge,
  LayoutGrid,
  Layers,
  Monitor,
  Network,
  Package,
  Radio,
  Settings2,
  ShieldCheck,
  UtensilsCrossed,
  Wifi,
  Wrench,
  Zap,
}

export default function Products() {
  return (
    <>
      <PageMeta
        title="Products & Brands — Aricsso India"
        description="Aricsso India supplies genuine industrial automation products from globally trusted brands including Siemens, ABB, Schneider Electric, Rockwell Automation and more."
        keywords={[
          'industrial automation products',
          'PLC HMI SCADA India',
          'Siemens ABB automation supplier',
        ]}
      />

      <PageHero
        title="Products & Global Brands"
        description="Genuine industrial automation products from the world's most trusted manufacturers"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Products' }]}
      />

      <main>
        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <h2 className="section-heading text-4xl md:text-5xl">
                Global Brands We Deal In
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {globalBrands.map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <article className="card p-8">
                    <span className="badge">{group.category}</span>
                    <h3 className="mt-5 font-heading text-2xl font-bold text-brand-dark">
                      {group.category}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-brand-body">
                      {group.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {group.brands.map((brand) => (
                        <span
                          key={brand}
                          className="rounded-full border border-brand-border bg-white px-4 py-2 font-heading text-sm font-semibold text-brand-dark"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-soft">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <h2 className="section-heading text-4xl md:text-5xl">
                Products &amp; Solutions
              </h2>
            </div>

            {/* TODO: add product images to /public/images/ when available */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="card p-4">
                <img
                  src="/images/plc-panel.jpg"
                  alt="PLC control panel"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="card p-4">
                <img
                  src="/images/siemens-plc.jpg"
                  alt="Siemens PLC and HMI"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="card p-4">
                <img
                  src="/images/robots.jpg"
                  alt="Industrial robotics systems"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="card p-4">
                <img
                  src="/images/sensors.jpg"
                  alt="Sensors and instrumentation"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product, index) => {
                const Icon = iconMap[product.icon] || Cpu

                return (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  >
                    <article className="card p-6">
                      <div className="icon-circle">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-5 font-heading text-xl font-bold text-brand-dark">
                        {product.name}
                      </h3>
                    </article>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <h2 className="section-heading text-4xl md:text-5xl">
                Industries We Serve
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {industriesServed.map((industry, index) => {
                const Icon = iconMap[industry.icon] || Factory

                return (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  >
                    <article className="card p-6 text-center">
                      <div className="icon-circle mx-auto">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-4 font-heading text-2xl font-bold text-brand-dark">
                        {industry.name}
                      </h3>
                    </article>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section-teal">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <h2 className="section-heading text-4xl md:text-5xl">
                Why Choose Aricsso India
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.reason}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={index === whyChooseUs.length - 1 ? 'xl:col-start-2' : ''}
                >
                  <article className="card p-8">
                    <div className="icon-circle">
                      <ShieldCheck size={20} />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl font-bold text-brand-dark">
                      {item.reason}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-brand-body">
                      {item.detail}
                    </p>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
