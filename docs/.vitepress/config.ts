import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Saofeng Design',
  description: '一个现代化的 Vue 3 组件库',
  lang: 'zh-CN',

  // 基础配置
  base: '/',
  cleanUrls: true,

  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1890ff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { property: 'og:title', content: 'Saofeng Design' }],
    ['meta', { property: 'og:description', content: '一个现代化的 Vue 3 组件库' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  // 主题配置
  themeConfig: {
    // 网站标题和 Logo
    logo: '/logo.svg',
    siteTitle: 'Saofeng Design',

    // 导航栏
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/button' },
      { text: '主题', link: '/theme/design-tokens' },
      { text: '工具', link: '/utils/hooks' },
      {
        text: '生态系统',
        items: [
          { text: 'GitHub', link: 'https://github.com/saofeng-design' },
          { text: 'NPM', link: 'https://www.npmjs.com/org/saofeng-design' },
        ],
      },
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装', link: '/guide/installation' },
          ],
        },
        {
          text: '进阶',
          items: [
            { text: '定制主题', link: '/guide/customization' },
            { text: '国际化', link: '/guide/i18n' },
            { text: '最佳实践', link: '/guide/best-practices' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Alert 警告', link: '/components/alert' },
          ],
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Form 表单', link: '/components/form' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'Table 表格', link: '/components/table' },
            { text: 'Card 卡片', link: '/components/card' },
          ],
        },
      ],
      '/theme/': [
        {
          text: '设计系统',
          items: [
            { text: '设计令牌', link: '/theme/design-tokens' },
            { text: '颜色系统', link: '/theme/colors' },
            { text: '字体系统', link: '/theme/typography' },
            { text: '间距系统', link: '/theme/spacing' },
          ],
        },
        {
          text: '主题定制',
          items: [
            { text: '主题配置', link: '/theme/configuration' },
            { text: '暗色模式', link: '/theme/dark-mode' },
            { text: 'CSS 变量', link: '/theme/css-variables' },
          ],
        },
      ],
      '/utils/': [
        {
          text: '工具函数',
          items: [
            { text: 'Hooks', link: '/utils/hooks' },
            { text: 'Utils', link: '/utils/utils' },
            { text: 'Plugins', link: '/utils/plugins' },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/saofeng-design' }],

    // 页脚
    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2024 Saofeng Design',
    },

    // 搜索
    search: {
      provider: 'local',
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/saofeng-design/saofeng-design/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    // 文档页脚导航
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 大纲配置
    outline: {
      label: '页面导航',
    },

    // 返回顶部
    returnToTopLabel: '回到顶部',

    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',

    // 暗色模式切换标签
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  // Markdown 配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },

  // Vite 配置
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      open: true,
    },
  },
});
