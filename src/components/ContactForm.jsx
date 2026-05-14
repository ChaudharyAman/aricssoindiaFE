import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { company, services } from '../data/siteData'

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

const EMAILJS_SERVICE_ID = 'service_nt2q16d'
const EMAILJS_TEMPLATE_ID = 'template_xanyz9q'
const EMAILJS_PUBLIC_KEY = '3WmmzXr8NhO3Cw8MG'

export default function ContactForm({ defaultService = '' }) {
  const [form, setForm] = useState({ ...emptyForm, service: defaultService })
  const [errors, setErrors] = useState({})
  const [submitState, setSubmitState] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    if (submitState.type !== 'idle') {
      setSubmitState({ type: 'idle', message: '' })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) {
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
      setSubmitState({ type: 'idle', message: '' })
      return
    }

    const templateParams = {
      name: trimmedName,
      from_name: trimmedName,
      phone: trimmedPhone,
      email: trimmedEmail || 'Not provided',
      from_email: trimmedEmail || 'Not provided',
      reply_to: trimmedEmail,
      company: form.company.trim() || 'Not provided',
      service: form.service || 'Not selected',
      message: form.message.trim() || 'Not provided',
      to_email: company.email1,
      alternate_email: company.email2,
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )

      setForm({ ...emptyForm, service: defaultService })
      setSubmitState({
        type: 'success',
        message: 'Your consultation request has been sent successfully.',
      })
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setSubmitState({
        type: 'error',
        message: 'We could not send your request right now. Please try again shortly.',
      })
    } finally {
      setIsSubmitting(false)
    }
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
          disabled={isSubmitting}
          className="inline-flex w-full justify-center rounded-xl bg-brand-teal px-7 py-3 font-heading font-semibold text-white shadow-lg shadow-cyan-900/10 transition hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitState.type === 'success' ? (
          <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {submitState.message}
          </p>
        ) : null}

        {submitState.type === 'error' ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {submitState.message}
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
