# Viki Personal Website - 项目文档

## 项目概述

这是一个基于 SolidJS 构建的个人主页网站，采用现代化的技术栈和优雅的设计风格。项目注重性能、可访问性和国际化支持。

## 技术栈

- **框架**: SolidJS + SolidJS Router
- **样式**: UnoCSS (原子化 CSS)
- **构建工具**: Vite
- **语言**: TypeScript
- **图标**: Iconify (通过 UnoCSS preset-icons)

## 项目结构

```
src/
├── components/          # 组件目录
│   ├── profile.tsx     # 主页面组件
│   ├── not-found.tsx   # 404 页面组件
│   ├── error-fallback.tsx  # 错误边界组件
│   ├── tooltip.tsx     # 工具提示组件
│   └── setting-panel/  # 设置面板组件组
│       ├── index.tsx   # 设置面板主组件
│       ├── lang-switch.tsx    # 语言切换组件
│       └── theme-switch.tsx   # 主题切换组件
├── i18n/               # 国际化配置
│   └── index.ts        # 翻译文件和 i18n 逻辑
├── types/              # 类型定义
│   └── index.ts        # 通用类型定义
├── utils/              # 工具函数
│   ├── meta.ts         # Meta 标签动态更新
│   └── performance.ts  # 性能监控工具
├── constants/          # 常量配置
│   └── index.ts        # 站点配置常量
├── config.tsx          # 主要配置文件
├── app.tsx            # 应用根组件
└── index.tsx          # 应用入口
```

## 核心特性

### 🌍 国际化 (i18n)

- 支持中文 (zh) 和英文 (en)
- 基于浏览器语言检测的智能默认语言
- 动态切换语言时自动更新页面标题和 meta 标签
- 本地存储语言偏好设置

### 🎨 主题系统

- 支持浅色、深色和跟随系统三种主题模式
- 使用 CSS 变量和 UnoCSS 的 dark: 前缀实现
- 本地存储主题偏好设置
- 防止页面加载时的主题闪烁

### 📱 响应式设计

- 移动优先的设计理念
- 使用 UnoCSS 的响应式断点 (md:, lg: 等)
- 灵活的布局适配不同屏幕尺寸

### ♿ 可访问性

- 完整的 ARIA 标签支持
- 键盘导航友好
- 焦点管理和视觉反馈
- 语义化 HTML 结构

## 配置文件说明

### `src/config.tsx`

```typescript
// 站点静态配置
export const siteConfig = {
  avatarUrl: 'https://avatar.viki.moe',  // 头像图片路径
}

// 社交媒体链接配置
export const socialLinks: SocialLink[] = [
  {
    name: 'github',                    // 对应 i18n 中的键名
    url: 'https://github.com/vikiboss', // 链接地址
    account: 'vikiboss',               // 账号名称
    icon: 'i-ri:github-fill',          // UnoCSS 图标类名
    hoverColor: 'group-hover:text-gray-900', // 悬停颜色
  },
  // ... 更多社交链接
]
```

### `src/i18n/index.ts`

包含所有文本的中英文翻译，结构清晰：

```typescript
export const translations = {
  zh: {
    // 个人信息
    personalName: 'Viki',
    personalTitle: 'Front End <Developer />',
    personalMotto: 'Less is more.',
    
    // 界面文本
    blog: '博客',
    projects: '项目',
    // ...
  },
  en: {
    // 对应的英文翻译
  }
}
```

## 设计理念

### 🎨 视觉设计
- **极简主义**: "Less is more" 的设计哲学
- **渐变背景**: 使用柔和的渐变色营造温馨氛围
- **卡片式布局**: 主要内容以卡片形式呈现，带有阴影和圆角
- **动画交互**: 细腻的过渡动画和悬停效果

### 🎯 用户体验
- **内容优先**: 突出个人信息和社交链接
- **一屏展示**: 核心内容在首屏完整展现
- **快速加载**: 优化的资源加载和缓存策略
- **多端适配**: 在各种设备上都有良好体验

## 开发指南

### 添加新的社交链接

1. 在 `src/config.tsx` 的 `socialLinks` 数组中添加配置
2. 在 `src/i18n/index.ts` 中添加对应的中英文翻译
3. 确保图标名称符合 UnoCSS 的 Iconify 格式

### 添加新的翻译

1. 在 `src/i18n/index.ts` 的 `translations` 对象中添加键值对
2. 在组件中使用 `t('键名')` 来获取翻译文本
3. 确保中英文都有对应的翻译

### 修改主题色彩

主题色彩通过 UnoCSS 的预设类名控制：

- 主色调: `blue-500`, `indigo-500`
- 灰色系: `gray-50` 到 `gray-9`
- 强调色: `amber` (下划线装饰)

## SEO 优化

### Meta 标签

- 完整的 Open Graph 和 Twitter Card 支持
- 动态语言切换时自动更新 meta 标签
- 结构化数据支持 (通过 meta 标签)

### 性能优化

- Vite 构建优化配置
- 代码分割和懒加载
- 图片优化 (eager loading + fetchpriority)
- DNS 预解析和资源预连接

### 搜索引擎

- `sitemap.xml` 和 `robots.txt`
- 语义化 HTML 结构
- Canonical URL 设置

## 构建和部署

### 开发环境

```bash
pnpm dev          # 启动开发服务器 (端口 3030)
pnpm type-check   # TypeScript 类型检查
```

### 生产构建

```bash
pnpm build        # 构建生产版本
pnpm preview      # 预览构建结果
pnpm analyze      # 分析构建包大小
```

## 浏览器支持

- 现代浏览器 (ES2015+)
- 支持 CSS Grid 和 Flexbox
- 支持 CSS 变量和现代 CSS 特性

## 注意事项

1. **图标使用**: 所有图标都通过 UnoCSS 的 `i-` 前缀使用，需要确保对应的图标包已安装
2. **类型安全**: 项目使用严格的 TypeScript 配置，确保类型安全
3. **样式约定**: 使用 UnoCSS 的原子化类名，避免自定义 CSS
4. **国际化**: 所有用户可见的文本都应该通过 i18n 系统管理
5. **可访问性**: 新增交互元素时要考虑键盘导航和屏幕阅读器支持

---

*这个项目体现了现代前端开发的最佳实践，注重性能、可访问性和用户体验。*
