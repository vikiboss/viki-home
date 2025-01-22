import { Component, createSignal, createEffect, useContext } from 'solid-js'
import { I18nContext } from '../../i18n'

type Theme = 'light' | 'dark' | 'system'

export const ThemeSwitch: Component = () => {
  const i18n = useContext(I18nContext)!

  const [theme, setTheme] = createSignal<Theme>(
    (localStorage.getItem('theme') as Theme) || 'system'
  )

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  }

  createEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme() === 'system') {
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  })

  createEffect(() => {
    updateTheme(theme())
  })

  const handleKeyDown = (e: KeyboardEvent, theme: Theme) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      updateTheme(theme)
    }
  }

  return (
    <div
      class='relative flex h-7 md:h-10 w-[140px] md:w-[280px] rounded-full p-1 md:p-1.5 gap-1.5 md:gap-2 items-center bg-gray-2/60 dark:bg-gray-8/50'
      role='radiogroup'
      aria-label={i18n.t('themeSelection')}
    >
      <div
        class={`absolute h-5 md:h-7 w-[40px] md:w-[88px] rounded-full shadow-sm transition-transform duration-200 bg-gray-3/60 dark:bg-gray-7/80 ${
          theme() === 'light'
            ? 'translate-x-0'
            : theme() === 'system'
            ? 'translate-x-[46px] md:translate-x-[91px]'
            : 'translate-x-[92px] md:translate-x-[182px]'
        }`}
      />
      <button
        onClick={() => updateTheme('light')}
        onKeyDown={e => handleKeyDown(e, 'light')}
        role='radio'
        aria-checked={theme() === 'light'}
        tabIndex={0}
        class='relative z-10 flex-1 flex items-center justify-center h-5 md:h-7 rounded-full transition-all text-gray-400 dark:text-gray-500 data-[active=true]:text-gray-700 dark:data-[active=true]:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 gap-2'
        data-active={theme() === 'light'}
        aria-label={i18n.t('lightMode')}
      >
        <div class='i-ph-sun-bold w-3 md:w-4 h-3 md:h-4 transition-transform' />
        <span class='hidden md:inline text-sm font-medium'>{i18n.t('light')}</span>
      </button>
      <button
        onClick={() => updateTheme('system')}
        class='relative z-10 flex-1 flex items-center justify-center h-5 md:h-7 rounded-full transition-all text-gray-400 dark:text-gray-500 data-[active=true]:text-gray-700 dark:data-[active=true]:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 gap-2'
        data-active={theme() === 'system'}
        aria-label={i18n.t('followSystem')}
      >
        <div class='i-ph-desktop-bold w-3 md:w-4 h-3 md:h-4 transition-transform' />
        <span class='hidden md:inline text-sm font-medium'>{i18n.t('system')}</span>
      </button>
      <button
        onClick={() => updateTheme('dark')}
        class='relative z-10 flex-1 flex items-center justify-center h-5 md:h-7 rounded-full transition-all text-gray-400 dark:text-gray-500 data-[active=true]:text-gray-700 dark:data-[active=true]:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 gap-2'
        data-active={theme() === 'dark'}
        aria-label={i18n.t('darkMode')}
      >
        <div class='i-ph-moon-bold w-3 md:w-4 h-3 md:h-4 transition-transform' />
        <span class='hidden md:inline text-sm font-medium'>{i18n.t('dark')}</span>
      </button>
    </div>
  )
}
