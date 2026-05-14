import { useEffect, useRef, useState } from 'react'

export default function StatsCounter({ value, label, suffix = '' }) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return undefined
    }

    let frameId = 0
    let started = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) {
          return
        }

        started = true
        const duration = 1400
        const startTime = performance.now()

        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setDisplayValue(Math.round(value * eased))

          if (progress < 1) {
            frameId = requestAnimationFrame(step)
          }
        }

        frameId = requestAnimationFrame(step)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [value])

  return (
    <div ref={ref} className="card p-6 text-center">
      <div className="font-heading text-4xl font-bold text-brand-teal md:text-5xl">
        {displayValue}
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.28em] text-brand-muted">
        {label}
      </p>
    </div>
  )
}
