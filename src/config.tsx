export interface SocialLink {
  name: string
  url: string
  icon: string
  hoverColor: string
}

export const personalInfo = {
  name: 'Viki',
  motto: 'Less is more.',
  avatarUrl: 'https://blog.viki.moe/favicon.ico',
}

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'i-ri:github-fill',
    hoverColor: 'group-hover:text-gray-900 dark:group-hover:text-gray-100',
  },
  {
    name: 'Telegram',
    url: 'URL_ADDRESS.me/VikiQAQ',
    icon: 'i-ri:telegram-fill',
    hoverColor: 'group-hover:text-[#2CA5E0]',
  },
  {
    name: '哔哩哔哩',
    url: 'https://space.bilibili.com/#',
    icon: 'i-ri:bilibili-fill',
    hoverColor: 'group-hover:text-[#FB7299]',
  },
  {
    name: '推特 (X)',
    url: 'https://twitter.com/VikiQAQ',
    icon: 'i-ri:twitter-x-fill',
    hoverColor: 'group-hover:text-black dark:group-hover:text-white',
  },
  {
    name: '豆瓣',
    url: 'https://www.douban.com/people/VikiQAQ',
    icon: 'i-ri:douban-fill',
    hoverColor: 'group-hover:text-[#007722]',
  },
  {
    name: 'QQ',
    url: '#',
    icon: 'i-ri:qq-fill',
    hoverColor: 'group-hover:text-[#12B7F5]',
  },
  {
    name: '微信',
    url: 'VikiQAQ',
    icon: 'i-ri:wechat-fill',
    hoverColor: 'group-hover:text-[#07C160]',
  },
]
