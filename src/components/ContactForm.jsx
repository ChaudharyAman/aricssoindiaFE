import { useState } from 'react'
import { services } from '../data/siteData'

const RECIPIENT_EMAIL = 'aricssoindia@gmail.com'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

function buildEmailBody({ name, email, phone, service, message }) {
  return [
    'Hello Aricsso India Team,',
    '',
    'A new inquiry has been submitted through the website contact form.',
    '',
    '----------------------------------------',
    'CONTACT DETAILS',
    '----------------------------------------',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service Required: ${service || 'Not selected'}`,
    '',
    '----------------------------------------',
    'MESSAGE',
    '----------------------------------------',
    message,
    '',
    '----------------------------------------',
    '',
    'Regards,',
    name,
  ].join('\n')
}

function validateForm(form) {
  const errors = {}
  const trimmedName = form.name.trim()
  const trimmedEmail = form.email.trim()
  const trimmedPhone = form.phone.trim()
  const trimmedMessage = form.message.trim()

  if (!trimmedName) errors.name = 'Please enter your full name.'
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!trimmedPhone) errors.phone = 'Please enter your phone number.'
  if (!form.service) errors.service = 'Please choose a service.'
  if (!trimmedMessage) errors.message = 'Please enter your message.'

  return errors
}

export default function ContactForm({ defaultService = '' }) {
  const [form, setForm] = useState({ ...emptyForm, service: defaultService })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState({ type: 'idle', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))

    if (submitState.type !== 'idle') {
      setSubmitState({ type: 'idle', message: '' })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const nextErrors = validateForm(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState({
        type: 'error',
        message: 'Please correct the highlighted fields before continuing.',
      })
      return
    }

    setIsSubmitting(true)

    const trimmedName = form.name.trim()
    const trimmedEmail = form.email.trim()
    const trimmedPhone = form.phone.trim()
    const trimmedMessage = form.message.trim()
    const selectedService = form.service

    const subject = `New Website Inquiry - ${selectedService}`
    const body = buildEmailBody({
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      service: selectedService,
      message: trimmedMessage,
    })

    // Gmail compose accepts the recipient, subject and body through query params.
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      RECIPIENT_EMAIL,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    const composeWindow = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer')

    if (!composeWindow) {
      setIsSubmitting(false)
      setSubmitState({
        type: 'error',
        message: 'Gmail could not be opened. Please allow pop-ups and try again.',
      })
      return
    }

    setForm({ ...emptyForm, service: defaultService })
    setSubmitState({
      type: 'success',
      message:
        'Gmail compose opened in a new tab. Review the drafted email and send it from your Gmail account.',
    })
    setIsSubmitting(false)
  }

  return (
    <div className="card-static relative z-10 p-8">
      <div className="mb-6">
        <h3 className="font-heading text-3xl font-bold text-brand-dark">
          Request a Consultation
        </h3>
        <p className="mt-2 text-sm leading-7 text-brand-body">
          Fill in your details and we&apos;ll open Gmail in a new tab with a message
          drafted to {RECIPIENT_EMAIL}.
        </p>
      </div>

      <form className="relative z-10 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <Field
            id="contact-name"
            label="Name *"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
          />

          <Field
            id="contact-email"
            label="Email *"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />

          <Field
            id="contact-phone"
            label="Phone Number *"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            autoComplete="tel"
          />

          <label className="block text-sm text-brand-body" htmlFor="contact-service">
            <span className="mb-2 block font-semibold text-brand-dark">
              Service Required *
            </span>
            <select
              id="contact-service"
              name="service"
              value={form.service}
              onChange={handleChange}
              aria-invalid={errors.service ? 'true' : 'false'}
              className={`relative z-10 w-full appearance-none rounded-xl border bg-white px-4 py-3 text-brand-body shadow-sm outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-cyan-100 ${
                errors.service ? 'border-red-400' : 'border-slate-200'
              }`}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            {errors.service ? (
              <span className="mt-2 block text-xs text-red-600">{errors.service}</span>
            ) : null}
          </label>
        </div>

        <label className="block text-sm text-brand-body" htmlFor="contact-message">
          <span className="mb-2 block font-semibold text-brand-dark">Message *</span>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            aria-invalid={errors.message ? 'true' : 'false'}
            className={`relative z-10 w-full rounded-xl border bg-white px-4 py-3 text-brand-body shadow-sm outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-cyan-100 ${
              errors.message ? 'border-red-400' : 'border-slate-200'
            }`}
            placeholder="Tell us how we can help you."
          />
          {errors.message ? (
            <span className="mt-2 block text-xs text-red-600">{errors.message}</span>
          ) : null}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full justify-center rounded-xl bg-brand-teal px-7 py-3 font-heading font-semibold text-white shadow-lg shadow-cyan-900/10 transition hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100 disabled:cursor-wait disabled:opacity-80"
        >
          {isSubmitting ? 'Opening Gmail...' : 'Send Message'}
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

function Field({ id, label, error, ...props }) {
  return (
    <div className="block text-sm text-brand-body">
      <label className="mb-2 block font-semibold text-brand-dark" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? 'true' : 'false'}
        className={`relative z-10 w-full rounded-xl border bg-white px-4 py-3 text-brand-body shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-4 focus:ring-cyan-100 ${
          error ? 'border-red-400' : 'border-slate-200'
        }`}
        {...props}
      />
      {error ? <span className="mt-2 block text-xs text-red-600">{error}</span> : null}
    </div>
  )
}
