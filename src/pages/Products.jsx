import {
  Building2,
  Car,
  Droplets,
  Factory,
  Flame,
  FlaskConical,
  Package,
  ShieldCheck,
  Shirt,
  UtensilsCrossed,
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

const industryIcons = {
  Manufacturing: Factory,
  'Oil & Gas': Flame,
  Pharmaceuticals: FlaskConical,
  'Food & Beverage': UtensilsCrossed,
  Automotive: Car,
  Packaging: Package,
  Textile: Shirt,
  'Water Treatment': Droplets,
  Infrastructure: Building2,
  'Power Plants': Zap,
}

export default function Products() {
  return (
    <>
      <PageMeta
        title="Products & Brands | Aricsso India"
        description="Explore the global automation brands, products, industries and support capabilities offered by Aricsso India."
        keywords={['Aricsso India products', 'automation brands', 'industrial solutions']}
      />

      <PageHero
        title="Products & Brands"
        description="Global automation brands, industrial products and solution support for modern industries."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Products' }]}
      />

      <main>
        <section className="section-white">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <span className="badge">Authorized Supply Focus</span>
              <h2 className="mt-5 section-heading text-4xl md:text-5xl">
                Global Brands We Deal In
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {globalBrands.map((group) => (
                <article key={group.category} className="card p-6">
                  <h3 className="font-heading text-2xl font-bold text-brand-dark">
                    {group.category}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.brands.map((brand) => (
                      <span
                        key={brand}
                        className="rounded-full bg-brand-bg-muted px-4 py-2 text-sm text-brand-body"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </article>
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
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((item) => (
                <div key={item} className="card p-5 text-center">
                  <span className="inline-flex rounded-full bg-brand-teal-50 px-4 py-2 text-sm font-semibold text-brand-teal">
                    {item}
                  </span>
                </div>
              ))}
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
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
              {industriesServed.map((industry) => {
                const Icon = industryIcons[industry] || Factory

                return (
                  <article key={industry} className="card p-6 text-center">
                    <div className="mx-auto icon-circle">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-bold text-brand-dark">
                      {industry}
                    </h3>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section-soft">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
            <div className="text-center">
              <h2 className="section-heading text-4xl md:text-5xl">
                Why Choose Aricsso India
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyChooseUs.map((item) => (
                <article key={item} className="card p-6">
                  <div className="icon-circle">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-brand-dark">
                    {item}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
