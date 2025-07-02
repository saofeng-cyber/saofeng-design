# 安装

本页面将详细介绍如何在不同环境下安装和配置 Saofeng Design。

## 📋 环境要求

在开始安装之前，请确保您的开发环境满足以下要求：

| 依赖           | 版本要求  | 说明                 |
| -------------- | --------- | -------------------- |
| **Node.js**    | >= 16.0.0 | 推荐使用 LTS 版本    |
| **Vue**        | >= 3.2.0  | 支持 Composition API |
| **TypeScript** | >= 4.5.0  | 可选，但强烈推荐     |

::: tip 💡 版本检查
您可以通过以下命令检查当前版本：

```bash
node --version
npm --version
vue --version
```

:::

## 📦 包管理器安装

### PNPM (推荐)

PNPM 是我们推荐的包管理器，它具有更快的安装速度和更好的磁盘空间利用率：

```bash
# 安装 PNPM (如果尚未安装)
npm install -g pnpm

# 安装 Saofeng Design
pnpm add @saofeng-design/components @saofeng-design/theme

# 安装可选包
pnpm add @saofeng-design/hooks @saofeng-design/utils @saofeng-design/plugins
```

### NPM

```bash
# 安装核心包
npm install @saofeng-design/components @saofeng-design/theme

# 安装可选包
npm install @saofeng-design/hooks @saofeng-design/utils @saofeng-design/plugins
```

### Yarn

```bash
# 安装核心包
yarn add @saofeng-design/components @saofeng-design/theme

# 安装可选包
yarn add @saofeng-design/hooks @saofeng-design/utils @saofeng-design/plugins
```

## 📚 包说明

### 核心包

| 包名                         | 说明           | 必需 |
| ---------------------------- | -------------- | ---- |
| `@saofeng-design/components` | Vue 组件库     | ✅   |
| `@saofeng-design/theme`      | 主题系统和样式 | ✅   |

### 可选包

| 包名                      | 说明           | 用途             |
| ------------------------- | -------------- | ---------------- |
| `@saofeng-design/hooks`   | Vue 组合式函数 | 提供常用的 hooks |
| `@saofeng-design/utils`   | 工具函数库     | 通用工具函数     |
| `@saofeng-design/plugins` | Vue 插件       | 扩展功能插件     |

## 🔧 项目配置

### Vite 项目

如果您使用 Vite 作为构建工具，需要进行以下配置：

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@saofeng-design/theme/src/tokens.less";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
```

### Webpack 项目

如果您使用 Webpack，需要配置 Less 加载器：

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                additionalData: `@import "@saofeng-design/theme/src/tokens.less";`,
              },
            },
          },
        ],
      },
    ],
  },
};
```

### Vue CLI 项目

```javascript
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          additionalData: `@import "@saofeng-design/theme/src/tokens.less";`,
        },
      },
    },
  },
};
```

## 🎨 样式引入

### 完整引入

在您的入口文件中引入完整的样式：

```typescript
// main.ts
import '@saofeng-design/theme/dist/index.css';
```

### 按需引入

如果您只使用部分组件，可以按需引入样式：

```typescript
// 只引入基础样式和令牌
import '@saofeng-design/theme/src/tokens.less';
import '@saofeng-design/theme/src/base.less';

// 按需引入组件样式
import '@saofeng-design/theme/src/components/button.less';
import '@saofeng-design/theme/src/components/alert.less';
```

### 自定义样式

您也可以在 CSS 文件中引入：

```css
/* styles/main.css */
@import '@saofeng-design/theme/dist/index.css';

/* 您的自定义样式 */
.my-custom-class {
  /* ... */
}
```

## 🚀 使用方式

### 全局注册

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

### 按需注册

```typescript
// main.ts
import { createApp } from 'vue';
import { SButton, SAlert } from '@saofeng-design/components';
import '@saofeng-design/theme/dist/index.css';
import App from './App.vue';

const app = createApp(App);
app.component('SButton', SButton);
app.component('SAlert', SAlert);
app.mount('#app');
```

### 组件内使用

```vue
<template>
  <div>
    <SButton type="primary">按钮</SButton>
    <SAlert message="提示信息" />
  </div>
</template>

<script setup lang="ts">
import { SButton, SAlert } from '@saofeng-design/components';
</script>
```

## 🔧 TypeScript 配置

如果您使用 TypeScript，建议添加以下配置：

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["@saofeng-design/components/types"]
  },
  "include": ["src/**/*", "node_modules/@saofeng-design/*/types/*.d.ts"]
}
```

## 🌐 CDN 引入

如果您不使用构建工具，也可以通过 CDN 引入：

```html
<!doctype html>
<html>
  <head>
    <!-- 引入样式 -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/@saofeng-design/theme/dist/index.css"
    />
  </head>
  <body>
    <div id="app">
      <s-button type="primary">Hello Saofeng Design</s-button>
    </div>

    <!-- 引入 Vue 3 -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <!-- 引入 Saofeng Design -->
    <script src="https://unpkg.com/@saofeng-design/components/dist/index.umd.js"></script>

    <script>
      const { createApp } = Vue;
      const { SButton } = SaofengDesign;

      createApp({
        components: {
          SButton,
        },
      }).mount('#app');
    </script>
  </body>
</html>
```

## 🔍 验证安装

创建一个简单的测试页面来验证安装是否成功：

```vue
<template>
  <div class="test-page">
    <h1>Saofeng Design 安装测试</h1>

    <div class="test-section">
      <h2>按钮测试</h2>
      <SButton
        type="primary"
        @click="showMessage"
      >
        点击测试
      </SButton>
    </div>

    <div class="test-section">
      <h2>警告测试</h2>
      <SAlert
        v-if="message"
        type="success"
        :message="message"
        show-icon
        closable
        @close="message = ''"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SButton, SAlert } from '@saofeng-design/components';

const message = ref('');

const showMessage = () => {
  message.value = 'Saofeng Design 安装成功！';
};
</script>

<style scoped>
.test-page {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.test-section {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid var(--s-color-border);
  border-radius: 8px;
}

.test-section h2 {
  margin-bottom: 1rem;
  color: var(--s-color-text);
}
</style>
```

## ❗ 常见问题

### 样式不生效

**问题**：组件显示但样式不正确

**解决方案**：

1. 确保已正确引入样式文件
2. 检查 CSS 加载顺序
3. 验证构建工具配置

### TypeScript 类型错误

**问题**：TypeScript 报告类型错误

**解决方案**：

1. 确保安装了 `@types/node`
2. 检查 `tsconfig.json` 配置
3. 重启 TypeScript 服务

### 构建失败

**问题**：项目构建时出现错误

**解决方案**：

1. 检查 Node.js 版本
2. 清除 `node_modules` 重新安装
3. 检查构建工具配置

::: tip 💡 获取帮助
如果您遇到其他问题，可以：

- 查看 [常见问题](/guide/faq)
- 在 [GitHub Issues](https://github.com/saofeng-cyber/saofeng-design/issues) 提问
- 参考 [示例项目](https://github.com/saofeng-cyber/examples)
  :::

## 🎯 下一步

安装完成后，您可以：

1. 阅读 [快速开始](/guide/getting-started) 指南
2. 探索 [组件文档](/components/button)
3. 了解 [主题系统](/theme/design-tokens)
4. 查看 [最佳实践](/guide/best-practices)
