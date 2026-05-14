import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company, services } from '../data/siteData'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: services.map((service) => ({
      label: service.title,
      path: `/services/${service.id}`,
    })),
  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const desktopServicesRef = useRef(null)
  const isServicesActive = location.pathname.startsWith('/services')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!desktopServicesOpen) {
      return undefined
    }

    const onPointerDown = (event) => {
      if (!desktopServicesRef.current?.contains(event.target)) {
        setDesktopServicesOpen(false)
      }
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDesktopServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [desktopServicesOpen])

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-brand-border ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 lg:px-8">
        <Link to="/" className="m-0 flex shrink-0 items-center p-0">
          <img src="/icon.png" alt="Aricsso India" className="h-20 w-auto sm:h-24" />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                ref={desktopServicesRef}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setDesktopServicesOpen(false)
                  }
                }}
              >
                <button
                  type="button"
                  onClick={() => setDesktopServicesOpen((current) => !current)}
                  aria-expanded={desktopServicesOpen}
                  aria-controls="desktop-services-menu"
                  aria-label={`${desktopServicesOpen ? 'Close' : 'Open'} Services menu`}
                  className={`inline-flex items-center gap-1 border-b-2 pb-1 font-heading text-lg font-semibold transition ${
                    isServicesActive || desktopServicesOpen
                      ? 'border-brand-teal text-brand-teal'
                      : 'border-transparent text-brand-body hover:border-brand-teal hover:text-brand-teal'
                  }`}
                >
                  <span className="leading-none">
                    {item.label}
                  </span>
                  <span className="inline-flex h-6 w-6 items-center justify-center text-current transition">
                    <ChevronDown
                      size={16}
                      className={desktopServicesOpen ? 'rotate-180 transition' : 'transition'}
                    />
                  </span>
                </button>
                <div
                  className={`absolute left-0 top-full w-[22rem] pt-3 ${
                    desktopServicesOpen ? 'pointer-events-auto' : 'pointer-events-none'
                  }`}
                  aria-hidden={!desktopServicesOpen}
                >
                  <div
                    id="desktop-services-menu"
                    className={`rounded-[1.25rem] border border-brand-border bg-white p-3 shadow-card transition duration-200 ${
                      desktopServicesOpen
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-1 opacity-0'
                    }`}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setDesktopServicesOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-brand-teal transition hover:bg-brand-teal-50"
                    >
                      All Services
                    </Link>
                    {item.dropdown.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setDesktopServicesOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm text-brand-body transition hover:bg-brand-teal-50 hover:text-brand-teal"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `border-b-2 pb-1 font-heading text-lg font-semibold transition ${
                    isActive
                      ? 'border-brand-teal text-brand-teal'
                      : 'border-transparent text-brand-body hover:border-brand-teal hover:text-brand-teal'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex rounded-lg border border-brand-border bg-white p-2.5 text-brand-dark lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-brand-border bg-white px-4 pb-6 pt-4 lg:hidden">
          <div className="space-y-2">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="rounded-[1.25rem] border border-brand-border bg-white">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((current) => !current)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-heading text-lg font-semibold text-brand-dark"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={18}
                      className={mobileServicesOpen ? 'rotate-180 transition' : 'transition'}
                    />
                  </button>
                  {mobileServicesOpen ? (
                    <div className="space-y-1 border-t border-brand-border px-2 py-2">
                      <Link
                        to="/services"
                        onClick={closeMobileMenu}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-brand-teal"
                      >
                        All Services
                      </Link>
                      {item.dropdown.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={closeMobileMenu}
                          className="block rounded-xl px-3 py-2 text-sm text-brand-body"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="block rounded-[1.25rem] border border-brand-border px-4 py-3 font-heading text-lg font-semibold text-brand-dark"
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </div>

          <div className="mt-5 rounded-[1.25rem] bg-brand-teal-50 p-4">
            <div className="space-y-2 text-sm text-brand-body">
              <p>{company.phone1}</p>
              <p>{company.email1}</p>
            </div>
            <Link to="/contact" onClick={closeMobileMenu} className="btn-primary mt-4">
              Get Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
