import { Component, useContext } from 'solid-js'
import { I18nContext, type Language } from '../../i18n'

export const LangSwitch: Component = () => {
  const { t, lang, setLang } = useContext(I18nContext)!

  const updateLang = (newLang: Language) => {
    setLang(newLang)
  }

  return (
    <div class='relative flex h-7 sm:h-10 w-[80px] sm:w-[120px] rounded-full p-1 sm:p-1.5 gap-1.5 sm:gap-2 sm:gap-2 items-center bg-gray-100/50 dark:bg-gray-800/50'>
      <div
        class={`absolute h-5 sm:h-7 w-[34px] sm:w-[48px] rounded-full shadow-sm transition-transform duration-200 bg-gray-200/80 dark:bg-gray-700/80 ${
          lang() === 'zh' ? 'translate-x-0' : 'translate-x-[38px] sm:translate-x-[60px]'
        }`}
      />
      <button
        onClick={() => updateLang('zh')}
        class='relative z-10 flex-1 flex items-center justify-center h-5 sm:h-7 rounded-full transition-all text-gray-400 dark:text-gray-500 data-[active=true]:text-gray-700 dark:data-[active=true]:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 gap-2'
        data-active={lang() === 'zh'}
        aria-label={t('chinese')}
      >
        <div class='i-mdi:ideogram-chinese-japanese-korean-variant w-3 sm:w-4 h-3 sm:h-4 transition-transform' />
        {/* <span class='hidden sm:inline text-sm font-medium'>中文</span> */}
      </button>
      <button
        onClick={() => updateLang('en')}
        class='relative z-10 flex-1 flex items-center justify-center h-5 sm:h-7 rounded-full transition-all text-gray-400 dark:text-gray-500 data-[active=true]:text-gray-700 dark:data-[active=true]:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 gap-2'
        data-active={lang() === 'en'}
        aria-label={t('english')}
      >
        <div class='i-ri:english-input w-3 sm:w-4 h-3 sm:h-4 transition-transform' />
        {/* <span class='hidden sm:inline text-sm font-medium'>En</span> */}
      </button>
    </div>
  )
}
