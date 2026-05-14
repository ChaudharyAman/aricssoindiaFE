import { useRef, useState } from 'react'
import { company, services } from '../data/siteData'

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

export default function ContactForm({ defaultService = '' }) {
  const [form, setForm] = useState({ ...emptyForm, service: defaultService })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const isRedirectingRef = useRef(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isRedirectingRef.current) {
      return
    }

    const trimmedName = form.name.trim()
    const trimmedPhone = form.phone.trim()
    const trimmedEmail = form.email.trim()
    const nextErrors = {}

    if (!trimmedName) nextErrors.name = 'Name is required.'
    if (!trimmedPhone) nextErrors.phone = 'Phone number is required.'
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    const whatsappNumber = company.phone1.replace(/\D/g, '')
    const lines = [
      'Hello Aricsso India, I would like to request a consultation.',
      '',
      `Full Name: ${trimmedName}`,
      `Phone Number: ${trimmedPhone}`,
      `Email Address: ${trimmedEmail || 'Not provided'}`,
      `Company Name: ${form.company.trim() || 'Not provided'}`,
      `Service Required: ${form.service || 'Not selected'}`,
      `Message: ${form.message.trim() || 'Not provided'}`,
    ]

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`

    isRedirectingRef.current = true
    setIsRedirecting(true)
    setSubmitted(true)
    setForm({ ...emptyForm, service: defaultService })
    window.location.assign(whatsappUrl)
  }

  return (
    <div className="card-static relative z-10 p-8">
      <div className="mb-6">
        <h3 className="font-heading text-3xl font-bold text-brand-dark">
          Request a Consultation
        </h3>
        <p className="mt-2 text-sm leading-7 text-brand-body">
          Tell us what you want to automate and we&apos;ll help shape the right
          control, protection and data flow.
        </p>
      </div>

      <form className="relative z-10 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Full Name *"
            id="consultation-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
          />
          <Field
            label="Phone Number *"
            id="consultation-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            autoComplete="tel"
          />
          <Field
            label="Email Address"
            id="consultation-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />
          <Field
            label="Company Name"
            id="consultation-company"
            name="company"
            value={form.company}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>

        <label className="block text-sm text-brand-body" htmlFor="consultation-service">
          <span className="mb-2 block font-semibold text-brand-dark">
            Service Required
          </span>
          <select
            id="consultation-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="relative z-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-body shadow-sm outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-cyan-100"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block text-sm text-brand-body" htmlFor="consultation-message">
          <span className="mb-2 block font-semibold text-brand-dark">Message</span>
          <textarea
            id="consultation-message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="relative z-10 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-body shadow-sm outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-cyan-100"
            placeholder="Share site details, pain points, or desired automation outcomes."
          />
        </label>

        <button
          type="submit"
          disabled={isRedirecting}
          className="inline-flex w-full justify-center rounded-xl bg-brand-teal px-7 py-3 font-heading font-semibold text-white shadow-lg shadow-cyan-900/10 transition hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100"
        >
          Send Message
        </button>

        {submitted ? (
          <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Your message is ready in WhatsApp for sending.
          </p>
        ) : null}
      </form>
    </div>
  )
}

function Field({ label, error, ...props }) {
  const inputId = props.id || props.name

  return (
    <div className="block text-sm text-brand-body">
      <label className="mb-2 block font-semibold text-brand-dark" htmlFor={inputId}>
        {label}
      </label>
      <input
        {...props}
        id={inputId}
        aria-invalid={error ? 'true' : 'false'}
        className="relative z-10 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-body shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-4 focus:ring-cyan-100"
      />
      {error ? <span className="mt-2 block text-xs text-red-600">{error}</span> : null}
    </div>
  )
}
