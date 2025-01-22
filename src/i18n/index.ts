import { createContext, createSignal } from 'solid-js'

export type Language = 'zh' | 'en'

export const translations = {
  zh: {
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
  },
  en: {
    blog: 'Blog',
    projects: 'Projects',
    light: 'Light',
    dark: 'Dark',
    system: 'Sys',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    followSystem: 'Follow System',
    chinese: 'Chinese',
    english: 'English',
    language: 'Language',
  },
}

// 2. 添加语言持久化
export const createI18n = (initialLang: Language = 'zh') => {
  // 优先使用本地存储的语言设置，其次使用浏览器语言，最后使用默认语言
  const savedLang = localStorage.getItem('language') as Language
  const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en'
  const [lang, setLang] = createSignal<Language>(savedLang || browserLang || initialLang)

  const t = (key: keyof (typeof translations)['zh']) => {
    // 添加错误处理
    try {
      return translations[lang()][key] || key
    } catch (e) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
  }

  // 包装 setLang 函数，添加持久化功能
  const setLanguage = (newLang: Language) => {
    setLang(newLang)
    localStorage.setItem('language', newLang)
    // 触发页面重新渲染
    document.documentElement.setAttribute('lang', newLang)
  }

  // 初始化页面语言属性
  document.documentElement.setAttribute('lang', lang())

  return { lang, setLang: setLanguage, t }
}

export type I18nContext = ReturnType<typeof createI18n>
export const I18nContext = createContext<I18nContext>()
