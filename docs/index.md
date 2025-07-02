---
layout: home
title: Saofeng Design Blog
titleTemplate: 现代化前端开发博客

hero:
  name: 'Saofeng Design'
  text: '现代化组件库'
  tagline: '清新绿意，简洁优雅 - 全新白+绿主题风格'
  image:
    src: /logo.jpg
    alt: Saofeng Design
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 主题展示
      link: /theme/design-showcase
    - theme: alt
      text: 组件文档
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/saofeng-cyber

features:
  - icon: 🚀
    title: 现代化技术
    details: 基于 Vue 3 Composition API，使用 TypeScript 构建，提供完整的类型支持
  - icon: 🎨
    title: 精美设计
    details: 遵循现代设计原则，提供一致的设计语言和优雅的用户体验
  - icon: ⚡️
    title: 高性能
    details: 优化的组件实现，支持按需引入，有效减少打包体积
  - icon: 🛠️
    title: 易于定制
    details: 完整的主题系统，支持深度定制和品牌化设计
  - icon: 📱
    title: 响应式设计
    details: 所有组件都支持响应式设计，完美适配各种设备和屏幕尺寸
  - icon: 🌟
    title: 开发友好
    details: 详细的文档说明，丰富的示例代码，完善的开发工具支持
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

- 🐛 [报告 Bug](https://github.com/saofeng-cyber/saofeng-design/issues)
- 💡 [提出新功能](https://github.com/saofeng-cyber/saofeng-design/issues)
- 📖 [改进文档](https://github.com/saofeng-cyber/saofeng-design/pulls)
- 💻 [提交代码](https://github.com/saofeng-cyber/saofeng-design/pulls)

### 📄 许可证

本项目基于 [ISC](https://github.com/saofeng-cyber/saofeng-design/blob/main/LICENSE) 许可证开源。

---
