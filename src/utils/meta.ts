import type { Language } from '../types'
import { translations } from '../i18n'

export const updateMeta = (lang: Language) => {
  const t = translations[lang]
  
  // Update document language
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en')
  
  // Update meta tags
  const updateMetaTag = (name: string, content: string) => {
    const meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
    if (meta) meta.content = content
  }
  
  const updateMetaProperty = (property: string, content: string) => {
    const meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
    if (meta) meta.content = content
  }
  
  // Update basic meta tags
  updateMetaTag('description', t.metaDescription)
  updateMetaTag('keywords', t.metaKeywords)
  
  // Update Open Graph tags
  updateMetaProperty('og:title', t.htmlTitle)
  updateMetaProperty('og:description', t.metaDescription)
  updateMetaProperty('og:locale', lang === 'zh' ? 'zh_CN' : 'en_US')
  
  // Update Twitter Card tags
  updateMetaTag('twitter:title', t.htmlTitle)
  updateMetaTag('twitter:description', t.metaDescription)
}