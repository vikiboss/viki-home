import { Component, useContext } from 'solid-js'
import { A } from '@solidjs/router'

import { Tooltip } from './tooltip'
import { I18nContext } from '../i18n'
import { socialLinks, personalInfo } from '../config'

export const Profile: Component = () => {
  const i18n = useContext(I18nContext)!

  return (
    <div
      class='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors duration-300'
      role='main'
    >
      <main
        class='w-full max-w-xl mx-auto backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 transition-all duration-300 border-2 border-transparent hover:border-gray-200/20'
        aria-label={i18n.t('personalProfile')}
      >
        {/* 个人信息区域 */}
        <div class='flex flex-col md:flex-row md:justify-center md:items-center md:gap-8 mb-8'>
          {/* 头像区域 */}
          <div
            class='flex justify-center mb-6 md:mb-0 md:flex-shrink-0'
            role='img'
            aria-label={`${personalInfo.name}'s avatar`}
          >
            <div class='w-32 h-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-700 shadow-lg transform transition-all duration-600 hover:rotate-360 ease-in-out'>
              <img src={personalInfo.avatarUrl} alt='个人头像' class='w-full h-full object-cover' />
            </div>
          </div>

          {/* 昵称与座右铭 */}
          <div class='text-center md:text-left space-y-4'>
            <h1 class='text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tracking-wider'>
              {personalInfo.name}
            </h1>
            <p class='text-gray-600 dark:text-gray-400 italic font-light'>"{personalInfo.motto}"</p>
          </div>
        </div>

        {/* 链接区域 */}
        <div class='mt-8 flex justify-center gap-4 max-w-md mx-auto'>
          <A
            href='https://xlog.viki.moe'
            class='group flex items-center gap-3 p-3 px-8 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700/50 dark:hover:bg-gray-700 transition-all'
          >
            <div class='w-6 h-6 i-ri:blogger-line text-blue-500 dark:text-blue-400' />
            <span class='text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100'>
              {i18n.t('blog')}
            </span>
          </A>
          <A
            href='https://github.com/vikiboss?tab=repositories&q=&type=public&language=&sort=stargazers'
            class='group flex items-center gap-3 p-3 px-8 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700/50 dark:hover:bg-gray-700 transition-all'
          >
            <div class='w-6 h-6 i-ri:sparkling-2-line text-blue-500 dark:text-blue-400' />
            <span class='text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100'>
              {i18n.t('projects')}
            </span>
          </A>
        </div>

        {/* 社交媒体图标 */}
        <div class='mt-8 flex justify-center flex-wrap gap-6'>
          {socialLinks.map(link => {
            return (
              <a
                href={link.url || '#'}
                target={link.url ? '_blank' : ''}
                rel='noopener noreferrer'
                class='flex items-center group no-underline'
              >
                <Tooltip text={`${i18n.t(link.name)}: ${link.account}`}>
                  <div
                    class={`w-6 h-6 text-gray-600/80 dark:text-gray-400/80 transform transition-all duration-300 group-hover:scale-90 group-hover:-translate-y--1.2 ${link.icon} ${link.hoverColor}`}
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
