import { Component, useContext } from 'solid-js'
import { I18nContext, type Language } from '../../i18n'

export const LangSwitch: Component = () => {
  const i18n = useContext(I18nContext)!

  const updateLang = (newLang: Language) => {
    i18n.setLang(newLang)
  }

  return (
    <div class='relative flex h-7 sm:h-10 w-[100px] sm:w-[160px] rounded-full p-1 sm:p-1.5 gap-1.5 sm:gap-2 items-center bg-gray-100/50 dark:bg-gray-800/50'>
      <div
        class={`absolute h-5 sm:h-7 w-[40px] sm:w-[72px] rounded-full shadow-sm transition-transform duration-200 bg-gray-200/80 dark:bg-gray-700/80 ${
          i18n.lang() === 'zh' ? 'translate-x-0' : 'translate-x-[46px] sm:translate-x-[78px]'
        }`}
      />
      <button
        onClick={() => updateLang('zh')}
        class='relative z-10 flex-1 flex items-center justify-center h-5 sm:h-7 rounded-full transition-all text-gray-400 dark:text-gray-500 data-[active=true]:text-gray-700 dark:data-[active=true]:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 gap-2'
        data-active={i18n.lang() === 'zh'}
        aria-label={i18n.t('chinese')}
      >
        <span class='text-sm font-medium'>中</span>
      </button>
      <button
        onClick={() => updateLang('en')}
        class='relative z-10 flex-1 flex items-center justify-center h-5 sm:h-7 rounded-full transition-all text-gray-400 dark:text-gray-500 data-[active=true]:text-gray-700 dark:data-[active=true]:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 gap-2'
        data-active={i18n.lang() === 'en'}
        aria-label={i18n.t('english')}
      >
        <span class='text-sm font-medium'>En</span>
      </button>
    </div>
  )
}
