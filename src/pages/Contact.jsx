import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import PageMeta from '../components/PageMeta'
import { company } from '../data/siteData'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const selectedService = searchParams.get('service') || ''

  return (
    <>
      <PageMeta
        title="Contact Aricsso India"
        description="Request a consultation or ask us anything about automation, SCADA and smart infrastructure."
        keywords={['contact', 'consultation', 'Aricsso India phone']}
      />

      <PageHero
        title="Get In Touch"
        description="Request a consultation or ask us anything"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <main>
        <section className="section-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 lg:grid-cols-[0.4fr_0.6fr] lg:px-8">
            <div className="space-y-5">
              <ContactInfoCard
                icon={Phone}
                title="Phone"
                lines={[company.phone2, company.phone1]}
              />
              <ContactInfoCard
                icon={Mail}
                title="Email"
                lines={[company.email1, company.email2]}
              />
              <ContactInfoCard
                icon={MapPin}
                title="Office"
                lines={[
                  'Basement of O 79-A, M3M Smart Word',
                  'Sector 89, Gurugram, Haryana 122004',
                ]}
              />
              <ContactInfoCard
                icon={Globe}
                title="Website"
                lines={[company.website]}
              />
            </div>

            <ContactForm key={selectedService || 'default'} defaultService={selectedService} />
          </div>
        </section>
      </main>
    </>
  )
}

function ContactInfoCard({ icon: Icon, title, lines }) {
  return (
    <div className="card-static p-6">
      <div className="icon-circle">
        <Icon size={20} />
      </div>
      <h2 className="mt-4 font-heading text-2xl font-bold text-brand-dark">
        {title}
      </h2>
      <div className="mt-4 space-y-2 text-sm leading-7 text-brand-body">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )
}
