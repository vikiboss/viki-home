import { Component, useContext } from 'solid-js'
import { A } from '@solidjs/router'

import { Tooltip } from './tooltip'
import { I18nContext } from '../i18n'
import { socialLinks, siteConfig } from '../config'

export const Profile: Component = () => {
  const { t } = useContext(I18nContext)!

  return (
    <div
      class='min-w-370px min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-1 dark:from-gray-9 dark:to-gray-8 p-4 transition-colors duration-300'
      role='main'
    >
      <main
        class='w-full max-w-xl mx-auto backdrop-blur-sm bg-white/80 dark:bg-gray-8/80 rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl hover:z-10 md:hover:translate-y--2'
        aria-label={t('personalProfile')}
      >
        <div class='flex flex-col md:flex-row md:justify-center md:items-center md:gap-8 mb-8'>
          <div
            class='flex justify-center mb-6 md:mb-0 md:flex-shrink-0'
            role='img'
            aria-label={`${t('personalName')}'s avatar`}
          >
            <div class='size-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-7 shadow-lg transform transition-all duration-600 hover:rotate-360 ease-in-out'>
              <img 
                src={siteConfig.avatarUrl} 
                alt={t('avatarAlt')} 
                class='w-full h-full object-cover' 
                loading='eager'
                fetchpriority='high'
              />
            </div>
          </div>
          <div class='text-center md:text-left'>
            <h1 class='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-4 dark:to-indigo-400 bg-clip-text text-transparent tracking-wider'>
              {t('personalName')}
            </h1>
            <span class='inline-block my-2 md:my-4 text-gray-6 dark:text-gray-4 font-medium tracking-wide underline-3 border-dashed transition-all underline underline-dashed underline-offset-6 underline-amber hover:bg-amber/12 hover:underline-amber hover:underline-solid'>
              {t('personalTitle')}
            </span>
            <p class='text-gray-6 dark:text-gray-4 italic font-light'>"{t('personalMotto')}"</p>
          </div>
        </div>
        <div class='mt-8 md:mt-10 flex justify-center gap-4 max-w-md mx-auto'>
          <A
            href='https://xlog.viki.moe'
            class='group flex items-center gap-3 p-3 px-6 md:px-8 rounded-lg bg-gray-1 hover:bg-gray-200 dark:bg-gray-7/50 dark:hover:bg-gray-7 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${t('blog')} - 在新标签页中打开`}
          >
            <div class='w-6 h-6 i-ri:blogger-line text-blue-500 dark:text-blue-4' aria-hidden='true' />
            <span class='text-gray-7 group-hover:text-gray-9 dark:text-gray-3 dark:group-hover:text-gray-1'>
              {t('blog')}
            </span>
          </A>
          <A
            href='https://github.com/vikiboss?tab=repositories&q=&type=source&language=&sort=stargazers'
            class='group flex items-center gap-3 p-3 px-6 md:px-8 rounded-lg bg-gray-1 hover:bg-gray-200 dark:bg-gray-7/50 dark:hover:bg-gray-7 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`${t('projects')} - 在新标签页中打开`}
          >
            <div class='w-6 h-6 i-ri:sparkling-2-line text-blue-500 dark:text-blue-4' aria-hidden='true' />
            <span class='text-gray-7 group-hover:text-gray-9 dark:text-gray-3 dark:group-hover:text-gray-1'>
              {t('projects')}
            </span>
          </A>
        </div>
        <div class='mt-8 md:mt-10 flex justify-center flex-wrap gap-6'>
          {socialLinks.map(link => {
            return (
              <a
                href={link.url || '#'}
                target={link.url ? '_blank' : ''}
                rel='noopener noreferrer'
                class='flex items-center group no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1'
                aria-label={`${t(link.name)}: ${link.account}${link.url ? ' - 在新标签页中打开' : ''}`}
              >
                <Tooltip text={`${t(link.name)}: ${link.account}`}>
                  <div
                    class={`w-6 h-6 text-gray-6/80 dark:text-gray-4/80 transform transition-all duration-300 group-hover:scale-90 group-hover:-translate-y--1.2 ${link.icon} ${link.hoverColor}`}
                    aria-hidden='true'
                  />
                </Tooltip>
              </a>
            )
          })}
        </div>
      </main>
    </div>
  )
}
