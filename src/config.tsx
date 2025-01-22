import type { translations } from './i18n'

export interface SocialLink {
  name: string
  url: string
  icon: string
  hoverColor: string
}

export const personalInfo = {
  name: 'Viki',
  motto: 'Less is more.',
  avatarUrl: '/favicon.ico',
}

export const socialLinks: {
  name: keyof (typeof translations)['zh']
  url?: string
  tip?: string
  icon: string
  hoverColor: string
}[] = [
  {
    name: 'github',
    url: 'https://github.com/vikiboss',
    icon: 'i-ri:github-fill',
    hoverColor: 'group-hover:text-gray-900 dark:group-hover:text-gray-100',
  },
  // {
  //   name: 'telegram',
  //   url: '#',
  //   icon: 'i-ri:telegram-fill',
  //   hoverColor: 'group-hover:text-[#2CA5E0]',
  // },
  // {
  //   name: 'bili',
  //   url: 'https://space.bilibili.com/#',
  //   icon: 'i-ri:bilibili-fill',
  //   hoverColor: 'group-hover:text-[#FB7299]',
  // },
  // {
  //   name: 'x',
  //   url: '#',
  //   icon: 'i-ri:twitter-x-fill',
  //   hoverColor: 'group-hover:text-black dark:group-hover:text-white',
  // },
  {
    name: 'email',
    tip: 'hi@viki.moe',
    icon: 'i-ri:mail-fill',
    hoverColor: 'group-hover:text-[#FFA800]',
  },
  {
    name: 'douban',
    url: 'https://www.douban.com/people/VikiQAQ',
    icon: 'i-ri:douban-fill',
    hoverColor: 'group-hover:text-[#007722]',
  },
  {
    name: 'qq',
    tip: 'VikiQAQ',
    icon: 'i-ri:qq-fill',
    hoverColor: 'group-hover:text-[#12B7F5]',
  },
  // {
  //   name: 'wechat',
  //   url: '#',
  //   icon: 'i-ri:wechat-fill',
  //   hoverColor: 'group-hover:text-[#07C160]',
  // },
]
