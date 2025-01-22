import { Component, JSX, createSignal, onError } from 'solid-js'
import { useContext } from 'solid-js'
import { I18nContext } from '../i18n'

interface ErrorBoundaryProps {
  children: JSX.Element
  fallback?: JSX.Element
}

export const ErrorBoundary: Component<ErrorBoundaryProps> = props => {
  const [error, setError] = createSignal<Error | null>(null)
  const i18n = useContext(I18nContext)!

  onError(err => {
    setError(err as Error)
    // 这里可以添加错误上报逻辑
    console.error(err)
  })

  return (
    <>
      {error()
        ? props.fallback || (
            <div class='flex flex-col items-center justify-center min-h-screen p-4 text-center'>
              <div class='text-4xl mb-4'>😢</div>
              <h1 class='text-xl font-bold mb-2'>{i18n.t('errorOccurred')}</h1>
              <p class='text-gray-600 dark:text-gray-400 mb-4'>{error()?.message}</p>
              <button
                onClick={() => window.location.reload()}
                class='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
              >
                {i18n.t('refresh')}
              </button>
            </div>
          )
        : props.children}
    </>
  )
}
