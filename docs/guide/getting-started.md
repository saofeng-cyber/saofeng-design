# 快速开始

本指南将帮助您快速上手 Saofeng Design，在几分钟内创建一个美观的 Vue 3 应用。

## 📦 安装

### 环境要求

在开始之前，请确保您的开发环境满足以下要求：

- **Node.js** >= 16.0.0
- **Vue** >= 3.2.0
- **TypeScript** >= 4.5.0 (可选，但推荐)

### 包管理器安装

选择您喜欢的包管理器来安装 Saofeng Design：

::: code-group

```bash [pnpm (推荐)]
# 安装核心包
pnpm add @saofeng-design/components @saofeng-design/theme

# 安装工具包 (可选)
pnpm add @saofeng-design/hooks @saofeng-design/utils
```

```bash [npm]
# 安装核心包
npm install @saofeng-design/components @saofeng-design/theme

# 安装工具包 (可选)
npm install @saofeng-design/hooks @saofeng-design/utils
```

```bash [yarn]
# 安装核心包
yarn add @saofeng-design/components @saofeng-design/theme

# 安装工具包 (可选)
yarn add @saofeng-design/hooks @saofeng-design/utils
```

:::

## 🚀 使用方式

### 完整引入

如果您的项目对包体积要求不高，可以完整引入所有组件：

```typescript
// main.ts
import { createApp } from 'vue';
import SaofengDesign from '@saofeng-design/components';
import '@saofeng-design/theme/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.use(SaofengDesign);
app.mount('#app');
```

### 按需引入 (推荐)

为了更好的 Tree-shaking 效果，推荐按需引入组件：

```vue
<template>
  <div>
    <SButton
      type="primary"
      @click="handleClick"
    >
      主要按钮
    </SButton>
    <SAlert
      type="success"
      message="操作成功！"
      show-icon
    />
  </div>
</template>

<script setup lang="ts">
import { SButton, SAlert } from '@saofeng-design/components';

const handleClick = () => {
  console.log('按钮被点击了！');
};
</script>
```

### 样式引入

别忘了引入样式文件：

```typescript
// main.ts 或在您的入口文件中
import '@saofeng-design/theme/dist/index.css';
```

或者在 CSS 文件中引入：

```css
/* styles/main.css */
@import '@saofeng-design/theme/dist/index.css';
```

## 🎨 主题配置

### 基础主题

Saofeng Design 提供了开箱即用的默认主题：

```typescript
// main.ts
import { createApp } from 'vue';
import { createThemeConfig } from '@saofeng-design/theme';
import App from './App.vue';

const app = createApp(App);

// 使用默认主题
const theme = createThemeConfig();
app.provide('theme', theme);

app.mount('#app');
```

### 自定义主题

您可以轻松定制主题以匹配您的品牌：

```typescript
import { createThemeConfig } from '@saofeng-design/theme';

const customTheme = createThemeConfig({
  name: 'my-theme',
  tokens: {
    colors: {
      primary: '#1890ff', // 主色
      success: '#52c41a', // 成功色
      warning: '#faad14', // 警告色
      danger: '#ff4d4f', // 危险色
      info: '#1890ff', // 信息色
    },
    fonts: {
      family: {
        base: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        mono: '"SF Mono", Monaco, "Cascadia Code", monospace',
      },
      size: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
      },
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
  },
});
```

## 🌙 暗色模式

Saofeng Design 原生支持暗色模式：

```vue
<template>
  <div>
    <SButton @click="toggleDarkMode"> 切换主题 </SButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
};
</script>
```

## 📱 响应式设计

所有组件都内置了响应式设计支持：

```vue
<template>
  <div class="container">
    <SButton
      :size="buttonSize"
      type="primary"
    >
      响应式按钮
    </SButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBreakpoint } from '@saofeng-design/hooks';

const { isMobile, isTablet } = useBreakpoint();

const buttonSize = computed(() => {
  if (isMobile.value) return 'small';
  if (isTablet.value) return 'medium';
  return 'large';
});
</script>
```

## 🛠️ TypeScript 支持

Saofeng Design 提供完整的 TypeScript 支持：

```typescript
import type { ButtonProps, AlertType } from '@saofeng-design/components';

interface MyComponentProps {
  buttonProps: ButtonProps;
  alertType: AlertType;
}

const props = defineProps<MyComponentProps>();
```

## 📋 完整示例

这是一个完整的示例，展示了如何在 Vue 3 项目中使用 Saofeng Design：

::: code-group

```vue [App.vue]
<template>
  <div class="app">
    <header class="header">
      <h1>Saofeng Design 示例</h1>
      <SButton
        @click="toggleTheme"
        type="text"
      >
        {{ isDark ? '🌞' : '🌙' }}
      </SButton>
    </header>

    <main class="main">
      <section class="section">
        <h2>按钮组件</h2>
        <div class="button-group">
          <SButton type="primary">主要按钮</SButton>
          <SButton type="default">默认按钮</SButton>
          <SButton type="dashed">虚线按钮</SButton>
          <SButton type="text">文本按钮</SButton>
          <SButton type="link">链接按钮</SButton>
        </div>
      </section>

      <section class="section">
        <h2>警告组件</h2>
        <SAlert
          type="success"
          message="这是一条成功消息"
          show-icon
          closable
        />
        <SAlert
          type="info"
          message="这是一条信息消息"
          show-icon
        />
        <SAlert
          type="warning"
          message="这是一条警告消息"
          show-icon
        />
        <SAlert
          type="error"
          message="这是一条错误消息"
          show-icon
        />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SButton, SAlert } from '@saofeng-design/components';

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
};
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--s-color-bg-container);
  color: var(--s-color-text);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--s-color-border);
}

.main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  margin-bottom: 1rem;
  color: var(--s-color-text);
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.button-group .s-button {
  margin-bottom: 0.5rem;
}
</style>
```

```typescript [main.ts]
import { createApp } from 'vue';
import { createThemeConfig } from '@saofeng-design/theme';
import '@saofeng-design/theme/dist/index.css';
import App from './App.vue';

const app = createApp(App);

// 配置主题
const theme = createThemeConfig({
  name: 'my-app-theme',
  tokens: {
    colors: {
      primary: '#1890ff',
    },
  },
});

app.provide('theme', theme);
app.mount('#app');
```

```json [package.json]
{
  "name": "my-saofeng-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.3.0",
    "@saofeng-design/components": "^1.0.0",
    "@saofeng-design/theme": "^1.0.0",
    "@saofeng-design/hooks": "^1.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0",
    "vue-tsc": "^1.0.0"
  }
}
```

:::

## 🎯 下一步

恭喜！您已经成功创建了第一个使用 Saofeng Design 的应用。接下来您可以：

1. **探索组件**：查看 [组件文档](/components/button) 了解更多组件
2. **定制主题**：阅读 [主题系统](/theme/design-tokens) 学习主题定制
3. **使用工具**：了解 [工具函数](/utils/hooks) 提高开发效率
4. **最佳实践**：查看 [最佳实践](/guide/best-practices) 指南

::: tip 💡 提示
如果您在使用过程中遇到问题，可以查看 [常见问题](/guide/faq) 或在 [GitHub](https://github.com/saofeng-cyber/saofeng-design/issues) 上提出 Issue。
:::

::: warning ⚠️ 注意
确保您的项目中已经正确配置了 Vue 3 和相关的构建工具。如果您使用的是 Vite，建议查看我们的 [Vite 配置指南](/guide/vite-config)。
:::
