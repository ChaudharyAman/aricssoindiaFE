import { motion } from 'framer-motion'
import {
  Activity,
  BadgeCheck,
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
  MapPin,
  Monitor,
  Network,
  Package,
  Radio,
  Settings2,
  ShieldCheck,
  Truck,
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
  BadgeCheck,
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
  MapPin,
  Monitor,
  Network,
  Package,
  Radio,
  Settings2,
  ShieldCheck,
  Truck,
  UtensilsCrossed,
  Wifi,
  Wrench,
  Zap,
}

export default function Products() {
  return (
    <>
      <PageMeta
        title="Products & Global Brands | Aricsso India"
        description="Genuine industrial automation products from globally trusted brands including Siemens, ABB, Schneider Electric, Rockwell Automation, FANUC and more."
        keywords={[
          'industrial automation products India',
          'PLC HMI SCADA supplier',
          'Siemens ABB automation',
        ]}
      />
      <PageHero
        title="Products & Global Brands"
        description="Genuine industrial automation products from the world's most trusted manufacturers"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Products' }]}
      />

      <main>
        {/* Section 1 — Global Brands */}
        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <span className="badge">Global Partners</span>
              <h2 className="mt-5 section-heading text-4xl md:text-5xl">
                Global Brands We Deal In
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand-teal" />
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-body">
                We supply genuine products from the world's most trusted industrial
                automation manufacturers, giving you single-window access to every
                major brand.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {globalBrands.map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="card p-8"
                >
                  <span className="badge">{group.category}</span>
                  <p className="mt-4 text-sm leading-7 text-brand-body">
                    {group.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.brands.map((brand) => (
                      <span
                        key={brand}
                        className="rounded-full border border-brand-border bg-white px-4 py-2 font-heading text-sm font-semibold text-brand-dark"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Products & Solutions */}
        <section className="section-soft">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <span className="badge">What We Supply</span>
              <h2 className="mt-5 section-heading text-4xl md:text-5xl">
                Products & Solutions
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand-teal" />
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {products.map((product, index) => {
                const Icon = iconMap[product.icon] || Cpu
                return (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="card p-6"
                  >
                    <div className="icon-circle">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-bold text-brand-dark">
                      {product.name}
                    </h3>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 3 — Industries We Serve */}
        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <span className="badge">Industries</span>
              <h2 className="mt-5 section-heading text-4xl md:text-5xl">
                Industries We Serve
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand-teal" />
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {industriesServed.map((industry, index) => {
                const Icon = iconMap[industry.icon] || Factory
                return (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="card p-6 text-center"
                  >
                    <div className="icon-circle mx-auto">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-brand-dark">
                      {industry.name}
                    </h3>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 4 — Why Choose Us */}
        <section className="section-teal">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <span className="badge">Why Aricsso India</span>
              <h2 className="mt-5 section-heading text-4xl md:text-5xl">
                Why Choose Us
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand-teal" />
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {whyChooseUs.map((item, index) => {
                const Icon = iconMap[item.icon] || ShieldCheck
                return (
                  <motion.div
                    key={item.reason}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    className="card p-8"
                  >
                    <div className="icon-circle">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl font-bold text-brand-dark">
                      {item.reason}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-brand-body">
                      {item.detail}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
