import type { translations } from '../i18n'

export interface SocialLink {
  name: keyof (typeof translations)['zh']
  url: string
  account: string
  icon: string
  hoverColor: string
}


export type Theme = 'light' | 'dark' | 'system'
export type Language = 'zh' | 'en'