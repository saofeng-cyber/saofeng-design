import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Saofeng Design',
  description: '现代化前端开发博客 - 分享技术、设计理念与最佳实践',
  lang: 'zh-CN',

  // 基础配置
  base: '/',
  cleanUrls: true,

  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['meta', { name: 'theme-color', content: '#22c55e' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { property: 'og:title', content: 'Saofeng Design | 现代化前端开发博客' }],
    ['meta', { property: 'og:description', content: '分享现代化前端技术、设计理念与开发实践' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/logo.svg' }],
    ['meta', { property: 'og:url', content: 'https://github.com/saofeng-cyber/saofeng-design' }],
  ],

  // 主题配置
  themeConfig: {
    // 网站标题和 Logo
    logo: '/logo.jpg',
    siteTitle: 'Saofeng Design',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '博客',
        items: [
          { text: '所有文章', link: '/posts/' },
          { text: '前端技术', link: '/posts/#前端技术' },
          { text: '设计系统', link: '/posts/#设计系统' },
          { text: '工具分享', link: '/posts/#工具分享' },
        ],
      },
      { text: '关于', link: '/about' },
      {
        text: '主题',
        items: [
          { text: '颜色系统', link: '/theme/colors' },
          { text: '设计令牌', link: '/theme/design-tokens' },
          { text: '设计展示', link: '/theme/design-showcase' },
        ],
      },
      {
        text: '资源',
        items: [
          { text: '组件库', link: '/components/' },
          { text: '工具函数', link: '/utils/' },
          { text: 'GitHub', link: 'https://github.com/saofeng-cyber/saofeng-design' },
        ],
      },
    ],

    // 侧边栏
    sidebar: {
      '/posts/': [
        {
          text: '📝 最新文章',
          items: [
            { text: '欢迎来到 Saofeng Design 博客', link: '/posts/welcome' },
            { text: '现代前端开发工具链指南', link: '/posts/modern-frontend-toolchain' },
            {
              text: 'Vue 3 组合式 API 最佳实践',
              link: '/posts/vue3-composition-api-best-practices',
            },
            { text: '设计系统构建指南', link: '/posts/design-system-guide' },
          ],
        },
        {
          text: '🚀 前端技术',
          items: [
            { text: 'Vue.js 开发技巧', link: '/posts/vue-tips' },
            { text: 'React 最佳实践', link: '/posts/react-best-practices' },
            { text: 'TypeScript 进阶', link: '/posts/typescript-advanced' },
          ],
        },
        {
          text: '🎨 设计系统',
          items: [
            { text: '组件库设计', link: '/posts/component-library-design' },
            { text: '设计令牌系统', link: '/posts/design-tokens' },
            { text: '主题定制', link: '/posts/theme-customization' },
          ],
        },
        {
          text: '⚡️ 性能优化',
          items: [
            { text: '前端性能优化', link: '/posts/frontend-performance' },
            { text: '构建优化', link: '/posts/build-optimization' },
            { text: '运行时优化', link: '/posts/runtime-optimization' },
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
          text: '🎨 主题系统',
          items: [
            { text: '颜色系统', link: '/theme/colors' },
            { text: '设计令牌', link: '/theme/design-tokens' },
            { text: '设计展示', link: '/theme/design-showcase' },
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/saofeng-cyber' },
      { icon: 'twitter', link: 'https://twitter.com/SaofengDesign' },
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Saofeng Design Team',
    },

    // 搜索
    search: {
      provider: 'local',
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/saofeng-cyber/saofeng-design/edit/main/docs/:path',
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
