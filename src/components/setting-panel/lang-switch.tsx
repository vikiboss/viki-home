import { Component, useContext } from 'solid-js'
import { I18nContext } from '../../i18n'

import type { Language } from '../../types'

export const LangSwitch: Component = () => {
  const { t, lang, setLang } = useContext(I18nContext)!

  const updateLang = (newLang: Language) => {
    setLang(newLang)
  }

  return (
    <div class='relative flex h-7 md:h-10 w-[80px] md:w-[120px] rounded-full p-1 md:p-1.5 gap-1.5 md:gap-2 md:gap-2 items-center bg-gray-2/48 dark:bg-gray-7/20'>
      <div
        class={`absolute h-5 md:h-7 w-[34px] md:w-[48px] rounded-full shadow-sm transition-transform duration-200 bg-gray-3/60 dark:bg-gray-7/80 ${
          lang() === 'zh' ? 'translate-x-0' : 'translate-x-[38px] md:translate-x-[60px]'
        }`}
      />
      <button
        onClick={() => updateLang('zh')}
        class='relative z-10 flex-1 flex items-center justify-center h-5 md:h-7 rounded-full transition-all text-gray-4 dark:text-gray-5 data-[active=true]:text-gray-7 dark:data-[active=true]:text-gray-2 hover:text-gray-6 dark:hover:text-gray-4 gap-2'
        data-active={lang() === 'zh'}
        aria-label={t('chinese')}
      >
        <div class='i-mdi:ideogram-chinese-japanese-korean-variant w-3 md:w-4 h-3 md:h-4 transition-transform' />
        {/* <span class='hidden md:inline text-sm font-medium'>中文</span> */}
      </button>
      <button
        onClick={() => updateLang('en')}
        class='relative z-10 flex-1 flex items-center justify-center h-5 md:h-7 rounded-full transition-all text-gray-4 dark:text-gray-5 data-[active=true]:text-gray-7 dark:data-[active=true]:text-gray-2 hover:text-gray-6 dark:hover:text-gray-4 gap-2'
        data-active={lang() === 'en'}
        aria-label={t('english')}
      >
        <div class='i-ri:english-input w-3 md:w-4 h-3 md:h-4 transition-transform' />
        {/* <span class='hidden md:inline text-sm font-medium'>En</span> */}
      </button>
    </div>
  )
}
