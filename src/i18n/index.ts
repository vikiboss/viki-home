import { createContext, createSignal } from 'solid-js'
import { updateMeta } from '../utils/meta'

import type { Language } from '../types'

export const translations = {
  zh: {
    htmlTitle: 'Viki - 个人网站',
    blog: '博客',
    projects: '项目',
    light: '浅色',
    dark: '深色',
    system: '系统',
    lightMode: '浅色模式',
    darkMode: '深色模式',
    followSystem: '跟随系统',
    chinese: '中文',
    english: '英文',
    language: '语言',
    personalProfile: '个人简介',
    themeSelection: '主题选择',
    avatarAlt: '个人头像',
    metaDescription: '个人网站 - 展示博客文章和项目作品',
    metaKeywords: '个人网站,作品集,博客,项目展示',
    errorOccurred: '发生错误',
    refresh: '刷新页面',

    // Personal info
    personalName: 'Viki',
    personalTitle: '前端开发 <工程师 />',
    personalMotto: '大道至简。',

    // NotFound page
    notFoundTitle: '404',
    notFoundMessage: '页面未找到',
    backToHome: '返回首页',

    x: '推特',
    qq: 'QQ',
    bili: '哔哩哔哩',
    weibo: '微博',
    email: '邮箱',
    douban: '豆瓣',
    wechat: '微信',
    github: 'GitHub',
    twitter: '推特',
    facebook: '脸书',
    telegram: '电报',
    instagram: 'Ins',
  },
  en: {
    htmlTitle: 'Viki - Personal Website',
    blog: 'Blog',
    projects: 'Projects',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    followSystem: 'Follow System',
    chinese: 'Chinese',
    english: 'English',
    language: 'Language',
    personalProfile: 'Personal Profile',
    themeSelection: 'Theme Selection',
    avatarAlt: 'Personal Avatar',
    metaDescription: 'Personal Website - Featuring Blog Posts and Projects',
    metaKeywords: 'personal website,portfolio,blog,projects',
    errorOccurred: 'An Error Occurred',
    refresh: 'Refresh Page',

    // Personal info
    personalName: 'Viki',
    personalTitle: 'Front End <Developer />',
    personalMotto: 'Less is more.',

    // NotFound page
    notFoundTitle: '404',
    notFoundMessage: 'Page Not Found',
    backToHome: 'Back to Home',

    x: 'Twitter',
    qq: 'QQ',
    bili: 'Bilibili',
    weibo: 'Weibo',
    email: 'Email',
    douban: 'Douban',
    wechat: 'WeChat',
    github: 'GitHub',
    twitter: 'Twitter',
    facebook: 'Facebook',
    telegram: 'Telegram',
    instagram: 'Instagram',
  },
}

export const createI18n = (initialLang: Language = 'zh') => {
  const savedLang = localStorage.getItem('language') as Language
  const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en'
  const [lang, setLang] = createSignal<Language>(savedLang || browserLang || initialLang)

  document.title = translations[lang()].htmlTitle

  const t = (key: keyof (typeof translations)['zh']) => {
    try {
      return translations[lang()][key] || key
    } catch {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
  }

  const setLanguage = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem('language', newLang)
    document.title = translations[newLang].htmlTitle
    updateMeta(newLang)
  }

  // Initialize meta tags
  updateMeta(lang())

  return { lang, setLang: setLanguage, t }
}

export type I18nContext = ReturnType<typeof createI18n>
export const I18nContext = createContext<I18nContext>()
