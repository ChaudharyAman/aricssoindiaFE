import { ChevronUp, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { company } from './data/siteData'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Products from './pages/Products'
import ServiceDetail from './pages/ServiceDetail'
import Services from './pages/Services'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-brand-body">
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
      <a
        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}?text=Hi%2C%20I%20need%20Water%20Management%20Automation`}
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <BackToTopButton />
    </div>
  )
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-white text-brand-teal shadow-card transition-all duration-200 hover:bg-brand-teal hover:text-white"
      aria-label="Back to top"
    >
      <ChevronUp size={18} />
    </button>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
