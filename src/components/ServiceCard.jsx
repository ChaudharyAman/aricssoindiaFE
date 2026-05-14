import {
  ArrowRight,
  Droplets,
  Flame,
  Lightbulb,
  Trash2,
  Waves,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const icons = {
  Droplets,
  Waves,
  Lightbulb,
  Flame,
  Trash2,
  Zap,
}

const tints = {
  teal: 'bg-brand-teal-100 text-brand-teal',
  blue: 'bg-sky-100 text-sky-700',
  yellow: 'bg-amber-100 text-amber-700',
  red: 'bg-red-100 text-red-700',
  green: 'bg-emerald-100 text-emerald-700',
  purple: 'bg-purple-100 text-purple-700',
}

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || Droplets
  const tint = tints[service.color] || tints.teal

  return (
    <article className="card group h-full border-l-4 border-l-transparent p-6 hover:border-l-brand-teal">
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${tint}`}>
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-heading text-2xl font-bold text-brand-dark">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-brand-body">{service.shortDesc}</p>
      <Link
        to={`/services/${service.id}`}
        className="mt-6 inline-flex items-center gap-2 font-heading text-base font-semibold text-brand-teal"
      >
        Learn More
        <ArrowRight size={16} />
      </Link>
    </article>
  )
}
