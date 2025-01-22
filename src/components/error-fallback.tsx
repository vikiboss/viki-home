import { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { I18nContext } from '../i18n'

export const ErrorFallback: Component<{ error: Error }> = ({ error }) => {
  const { t } = useContext(I18nContext)!

  return (
    <div class='flex flex-col items-center justify-center min-h-screen p-4 text-center'>
      <div class='text-4xl mb-4'>😢</div>
      <h1 class='text-xl font-bold mb-2'>{t('errorOccurred')}</h1>
      <p class='text-gray-600 dark:text-gray-400 mb-4'>{error?.message}</p>
      <button
        onClick={() => window.location.reload()}
        class='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
      >
        {t('refresh')}
      </button>
    </div>
  )
}
