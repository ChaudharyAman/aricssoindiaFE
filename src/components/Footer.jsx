import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { company, services } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <img src={logo} alt="Aricsso India" className="h-14 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Smart automation systems for water, power, fire, lighting and smart
              infrastructure with dependable visibility and control.
            </p>
            <div className="mt-6 flex gap-3 text-slate-200">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <span
                  key={index}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800"
                >
                  <Icon size={18} />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-semibold text-white">
              Quick Links
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/portfolio">Portfolio</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-semibold text-white">
              Our Services
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <FooterLink key={service.id} to={`/services/${service.id}`}>
                  {service.title}
                </FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-semibold text-white">
              Contact Info
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <div className="flex gap-3">
                <Phone size={18} className="mt-1 text-cyan-300" />
                <span>
                  {company.phone1}
                  <br />
                  {company.phone2}
                </span>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="mt-1 text-cyan-300" />
                <span>
                  {company.email1}
                  <br />
                  {company.email2}
                </span>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-cyan-300" />
                <span>{company.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-700 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>(c) 2024 {company.name}. All rights reserved.</p>
          <p>GSTIN: {company.gstin}</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="block transition hover:text-white">
      {children}
    </Link>
  )
}
