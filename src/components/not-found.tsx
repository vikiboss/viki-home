import { Component, useContext } from 'solid-js'
import { A } from '@solidjs/router'
import { I18nContext } from '../i18n'

export const NotFound: Component = () => {
  const { t } = useContext(I18nContext)!

  return (
    <div class='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-1 dark:from-gray-9 dark:to-gray-8 p-4'>
      <div class='text-center max-w-md mx-auto'>
        <div class='text-6xl mb-4'>🔍</div>
        <h1 class='text-4xl font-bold text-gray-8 dark:text-gray-2 mb-4'>{t('notFoundTitle')}</h1>
        <p class='text-gray-6 dark:text-gray-4 mb-8'>{t('notFoundMessage')}</p>
        <A
          href='/'
          class='inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          aria-label={t('backToHome')}
        >
          <div class='w-5 h-5 i-ri:home-line' aria-hidden='true' />
          {t('backToHome')}
        </A>
      </div>
    </div>
  )
}