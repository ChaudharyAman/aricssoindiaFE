import { useState } from 'react'
import { services } from '../data/siteData'

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

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setForm({ ...emptyForm, service: defaultService })
  }

  return (
    <div className="card p-8">
      <div className="mb-6">
        <h3 className="font-heading text-3xl font-bold text-brand-dark">
          Request a Consultation
        </h3>
        <p className="mt-2 text-sm leading-7 text-brand-body">
          Tell us what you want to automate and we&apos;ll help shape the right
          control, protection and data flow.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Full Name *"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Field
            label="Phone Number *"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <Field
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Field
            label="Company Name"
            name="company"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <label className="block text-sm text-brand-body">
          <span className="mb-2 block font-semibold text-brand-dark">
            Service Required
          </span>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-body outline-none transition focus:border-brand-teal"
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

        <label className="block text-sm text-brand-body">
          <span className="mb-2 block font-semibold text-brand-dark">Message</span>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-body outline-none transition focus:border-brand-teal"
            placeholder="Share site details, pain points, or desired automation outcomes."
          />
        </label>

        <button type="submit" className="btn-primary w-full justify-center">
          Send Message
        </button>

        {submitted ? (
          <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Thanks. Your request has been captured for follow-up.
          </p>
        ) : null}
      </form>
    </div>
  )
}

function Field({ label, error, ...props }) {
  return (
    <label className="block text-sm text-brand-body">
      <span className="mb-2 block font-semibold text-brand-dark">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-brand-border bg-white px-4 py-3 text-brand-body outline-none transition focus:border-brand-teal"
      />
      {error ? <span className="mt-2 block text-xs text-red-600">{error}</span> : null}
    </label>
  )
}
