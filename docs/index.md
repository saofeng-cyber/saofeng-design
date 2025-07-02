---
layout: home
title: Saofeng Design Blog
titleTemplate: 现代化前端开发博客

hero:
  name: 'Saofeng Design'
  text: '前端开发博客'
  tagline: '分享现代化前端技术、设计理念与开发实践'
  image:
    src: /logo.svg
    alt: Saofeng Design
  actions:
    - theme: brand
      text: 开始阅读
      link: /posts/
    - theme: alt
      text: 关于我们
      link: /about
    - theme: alt
      text: GitHub
      link: https://github.com/saofeng-design

features:
  - icon: 🚀
    title: 前端技术
    details: 深入探讨 Vue.js、React、TypeScript 等现代前端技术栈的最佳实践
  - icon: 🎨
    title: 设计系统
    details: 分享组件库设计、UI/UX 设计理念和设计系统构建经验
  - icon: ⚡️
    title: 性能优化
    details: 前端性能优化技巧、工程化实践和开发效率提升方案
  - icon: �️
    title: 工具分享
    details: 推荐实用的开发工具、插件和资源，提升开发体验
  - icon: �
    title: 移动端开发
    details: 移动端适配、响应式设计和跨平台开发技术分享
  - icon: �
    title: 开源项目
    details: 开源项目分享、技术选型和项目架构设计经验
---

## 🌟 为什么选择 Saofeng Design？

Saofeng Design 是一个专为现代 Web 应用设计的 Vue 3 组件库，它不仅提供了丰富的组件，更重要的是提供了一套完整的设计系统和开发体验。

### 🎯 核心特性

- **🎨 设计系统**：完整的设计令牌系统，包括颜色、字体、间距、动画等
- **⚡️ 高性能**：基于 Vue 3 Composition API，支持 Tree-shaking
- **🛠️ 可定制**：灵活的主题配置，支持深度定制
- **📱 响应式**：内置响应式设计，适配各种设备
- **🌙 暗色模式**：原生支持暗色模式切换
- **🔧 TypeScript**：完整的类型定义和智能提示

### 📦 快速安装

::: code-group

```bash [pnpm]
pnpm add @saofeng-design/components @saofeng-design/theme
```

```bash [npm]
npm install @saofeng-design/components @saofeng-design/theme
```

```bash [yarn]
yarn add @saofeng-design/components @saofeng-design/theme
```

:::

### 🚀 快速使用

```vue
<template>
  <div>
    <SButton
      type="primary"
      @click="handleClick"
    >
      点击我
    </SButton>
    <SAlert
      type="success"
      message="操作成功！"
    />
  </div>
</template>

<script setup>
import { SButton, SAlert } from '@saofeng-design/components';

const handleClick = () => {
  console.log('按钮被点击了！');
};
</script>
```

### 🎨 主题定制

```typescript
import { createThemeConfig } from '@saofeng-design/theme';

const customTheme = createThemeConfig({
  tokens: {
    colors: {
      primary: '#1890ff',
      success: '#52c41a',
      warning: '#faad14',
      danger: '#ff4d4f',
    },
  },
});
```

### 🏗️ 项目结构

```
saofeng-design/
├── packages/
│   ├── components/     # Vue 组件
│   ├── theme/         # 主题系统
│   ├── hooks/         # 组合式函数
│   ├── utils/         # 工具函数
│   └── plugins/       # Vue 插件
├── docs/              # 文档站点
├── examples/          # 示例项目
└── lint-configs/      # 代码规范配置
```

### 🤝 参与贡献

我们欢迎所有形式的贡献，无论是新功能、bug 修复、文档改进还是其他任何形式的帮助。

- 🐛 [报告 Bug](https://github.com/saofeng-design/saofeng-design/issues)
- 💡 [提出新功能](https://github.com/saofeng-design/saofeng-design/issues)
- 📖 [改进文档](https://github.com/saofeng-design/saofeng-design/pulls)
- 💻 [提交代码](https://github.com/saofeng-design/saofeng-design/pulls)

### 📄 许可证

本项目基于 [ISC](https://github.com/saofeng-design/saofeng-design/blob/main/LICENSE) 许可证开源。

---

<div style="text-align: center; margin: 3rem 0; padding: 2rem; background: linear-gradient(135deg, #f590ff 0%, #f50 100%); border-radius: 12px; color: white;">
  <h3 style="margin-bottom: 1rem; color: white;">🎉 立即开始使用 Saofeng Design</h3>
  <p style="margin-bottom: 1.5rem; opacity: 0.9;">加入我们，一起构建更美好的用户界面</p>
  <a href="/guide/getting-started" style="display: inline-block; padding: 0.75rem 2rem; background: rgba(255, 255, 255, 0.2); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); transition: all 0.3s ease;">
    开始使用 →
  </a>
</div>
