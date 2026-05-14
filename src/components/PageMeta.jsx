import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { company } from '../data/siteData'

function ensureMeta(selector, create) {
  let node = document.querySelector(selector)
  if (!node) {
    node = create()
    document.head.appendChild(node)
  }
  return node
}

export default function PageMeta({ title, description, keywords = [] }) {
  const location = useLocation()

  useEffect(() => {
    const resolvedDescription =
      description ||
      `${company.name} delivers smart automation for water, SCADA, fire, street light and power systems.`
    const resolvedKeywords = [
      'Aricsso India',
      'SCADA automation',
      'water management system',
      'pump house automation',
      'street light management',
      ...keywords,
    ].join(', ')
    const canonicalUrl = `${window.location.origin}${location.pathname}${location.search}`

    document.title = title

    const descriptionMeta = ensureMeta('meta[name="description"]', () => {
      const meta = document.createElement('meta')
      meta.name = 'description'
      return meta
    })
    descriptionMeta.content = resolvedDescription

    const keywordsMeta = ensureMeta('meta[name="keywords"]', () => {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      return meta
    })
    keywordsMeta.content = resolvedKeywords

    const ogTitle = ensureMeta('meta[property="og:title"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:title')
      return meta
    })
    ogTitle.content = title

    const ogDescription = ensureMeta('meta[property="og:description"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:description')
      return meta
    })
    ogDescription.content = resolvedDescription

    const ogType = ensureMeta('meta[property="og:type"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:type')
      return meta
    })
    ogType.content = 'website'

    const ogUrl = ensureMeta('meta[property="og:url"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:url')
      return meta
    })
    ogUrl.content = canonicalUrl

    const canonicalLink = ensureMeta('link[rel="canonical"]', () => {
      const link = document.createElement('link')
      link.rel = 'canonical'
      return link
    })
    canonicalLink.href = canonicalUrl
  }, [description, keywords, location.pathname, location.search, title])

  return null
}
