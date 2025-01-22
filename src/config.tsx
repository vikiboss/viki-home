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
  url: string
  account: string
  icon: string
  hoverColor: string
}[] = [
  {
    name: 'github',
    url: 'https://github.com/vikiboss',
    account: 'vikiboss',
    icon: 'i-ri:github-fill',
    hoverColor: 'group-hover:text-gray-900 dark:group-hover:text-gray-100',
  },
  // {
  //   name: 'telegram',
  //   url: '#',
  //   account: '#',
  //   icon: 'i-ri:telegram-fill',
  //   hoverColor: 'group-hover:text-[#2CA5E0]',
  // },
  // {
  //   name: 'x',
  //   url: '#',
  //   account: '#',
  //   icon: 'i-ri:twitter-x-fill',
  //   hoverColor: 'group-hover:text-black dark:group-hover:text-white',
  // },
  // {
  //   name: 'facebook',
  //   url: '#',
  //   account: '#',
  //   icon: 'i-ri:facebook-fill',
  //   hoverColor: 'group-hover:text-[#1877F2]',
  // },
  // {
  //   name: 'twitter',
  //   url: '#',
  //   account: '#',
  //   icon: 'i-ri:twitter-fill',
  //   hoverColor: 'group-hover:text-[#1DA1F2]',
  // },
  // {
  //   name: 'instagram',
  //   url: '#',
  //   account: '#',
  //   icon: 'i-ri:instagram-fill',
  //   hoverColor: 'group-hover:text-[#E1306C]',
  // },
  {
    name: 'email',
    url: 'mailto:hi@viki.moe',
    account: 'hi@viki.moe',
    icon: 'i-ri:mail-fill',
    hoverColor: 'group-hover:text-[#FFA800]',
  },
  // {
  //   name: 'weibo',
  //   url: '#',
  //   account: '#',
  //   icon: 'i-ri:weibo-fill',
  //   hoverColor: 'group-hover:text-[#EB1923]',
  // },
  {
    name: 'qq',
    url: 'https://qm.qq.com/q/QJvb8LZHmU',
    account: 'VikiQAQ',
    icon: 'i-ri:qq-fill',
    hoverColor: 'group-hover:text-[#12B7F5]',
  },
  {
    name: 'wechat',
    url: 'https://u.wechat.com/EHdR-i5qhVaDiXuKJ36mqZQ',
    account: 'VikiQAQ',
    icon: 'i-ri:wechat-fill',
    hoverColor: 'group-hover:text-[#07C160]',
  },
  {
    name: 'douban',
    account: 'VikiQAQ',
    url: 'https://www.douban.com/people/VikiQAQ',
    icon: 'i-ri:douban-fill',
    hoverColor: 'group-hover:text-[#007722]',
  },
  {
    name: 'bili',
    account: '381636335',
    url: 'https://space.bilibili.com/381636335',
    icon: 'i-ri:bilibili-fill',
    hoverColor: 'group-hover:text-[#FB7299]',
  },
]
