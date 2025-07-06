# @saofeng-design/components

一个现代化的 Vue 3 组件库，提供优雅、高性能的 UI 组件。

## ✨ 特性

- 🎨 **精美设计** - 基于现代设计理念，提供优雅的视觉体验
- 🚀 **高性能** - 基于 Vue 3 Composition API，性能卓越
- 📦 **按需加载** - 支持 Tree-shaking，减少打包体积
- 🎯 **TypeScript** - 完整的 TypeScript 支持，提供优秀的开发体验
- 🌙 **主题定制** - 灵活的主题系统，支持深度定制
- 📱 **响应式** - 移动端友好，适配各种屏幕尺寸
- 🛠 **开发友好** - 完善的文档和示例

## 📦 安装

```bash
# 使用 npm
npm install @saofeng-design/components

# 使用 yarn
yarn add @saofeng-design/components

# 使用 pnpm
pnpm add @saofeng-design/components
```

## 🚀 快速开始

### 完整引入

```typescript
import { createApp } from 'vue';
import SfUI from '@saofeng-design/components';
import '@saofeng-design/components/dist/es/index.css';

const app = createApp(App);
app.use(SfUI);
app.mount('#app');
```

### 按需引入

```typescript
import { SButton, SAlert } from '@saofeng-design/components';
import '@saofeng-design/components/dist/es/index.css';

export default {
  components: {
    SButton,
    SAlert,
  },
};
```

### 样式引入

```typescript
// 引入完整样式
import '@saofeng-design/components/dist/es/index.css';

// 或者引入主题样式
import '@saofeng-design/theme/dist/index.css';
```

## 📚 组件

### Button 按钮

基础的按钮组件，支持多种类型和状态。

```vue
<template>
  <div>
    <!-- 基础按钮 -->
    <SButton>默认按钮</SButton>

    <!-- 不同类型 -->
    <SButton type="primary">主要按钮</SButton>
    <SButton type="success">成功按钮</SButton>
    <SButton type="warning">警告按钮</SButton>
    <SButton type="danger">危险按钮</SButton>

    <!-- 不同尺寸 -->
    <SButton size="small">小按钮</SButton>
    <SButton size="medium">中按钮</SButton>
    <SButton size="large">大按钮</SButton>

    <!-- 禁用状态 -->
    <SButton disabled>禁用按钮</SButton>

    <!-- 加载状态 -->
    <SButton loading>加载中</SButton>
  </div>
</template>
```

### Alert 警告提示

用于页面中展示重要的提示信息。

```vue
<template>
  <div>
    <!-- 基础警告 -->
    <SAlert message="这是一条提示信息" />

    <!-- 不同类型 -->
    <SAlert
      type="success"
      message="成功提示"
    />
    <SAlert
      type="warning"
      message="警告提示"
    />
    <SAlert
      type="error"
      message="错误提示"
    />
    <SAlert
      type="info"
      message="信息提示"
    />

    <!-- 可关闭 -->
    <SAlert
      message="可关闭的提示"
      closable
      @close="handleClose"
    />

    <!-- 带描述 -->
    <SAlert
      message="提示标题"
      description="这是一段详细的描述信息"
      type="info"
    />
  </div>
</template>
```

## 🎨 主题定制

组件库基于 CSS 变量实现主题系统，支持灵活的主题定制。

### 基础定制

```css
:root {
  /* 主色调 */
  --s-color-primary: #18a058;
  --s-color-primary-hover: #36b96a;

  /* 功能色 */
  --s-color-success: #52c41a;
  --s-color-warning: #faad14;
  --s-color-error: #ff4d4f;

  /* 字体 */
  --s-font-size-base: 14px;
  --s-font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;

  /* 圆角 */
  --s-border-radius-base: 6px;
}
```

### 暗色主题

```css
[data-theme='dark'] {
  --s-color-text-primary: rgba(255, 255, 255, 0.88);
  --s-color-background-base: #1f1f1f;
  --s-color-border: #434343;
}
```

## 📋 API 文档

### Button Props

| 参数     | 说明       | 类型                                                           | 默认值      |
| -------- | ---------- | -------------------------------------------------------------- | ----------- |
| type     | 按钮类型   | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| size     | 按钮尺寸   | `'small' \| 'medium' \| 'large'`                               | `'medium'`  |
| disabled | 是否禁用   | `boolean`                                                      | `false`     |
| loading  | 是否加载中 | `boolean`                                                      | `false`     |
| icon     | 图标       | `string`                                                       | -           |

### Button Events

| 事件名 | 说明     | 参数                          |
| ------ | -------- | ----------------------------- |
| click  | 点击事件 | `(event: MouseEvent) => void` |

### Alert Props

| 参数        | 说明         | 类型                                          | 默认值   |
| ----------- | ------------ | --------------------------------------------- | -------- |
| type        | 警告类型     | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` |
| message     | 警告内容     | `string`                                      | -        |
| description | 警告描述     | `string`                                      | -        |
| closable    | 是否可关闭   | `boolean`                                     | `false`  |
| showIcon    | 是否显示图标 | `boolean`                                     | `true`   |

### Alert Events

| 事件名 | 说明     | 参数         |
| ------ | -------- | ------------ |
| close  | 关闭事件 | `() => void` |

## 🔧 开发

### 本地开发

```bash
# 克隆项目
git clone <repository-url>

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建组件库
pnpm build

# 构建样式文件
pnpm build:style
```

### 构建命令

```bash
# 生产环境构建
pnpm build

# 开发环境构建
pnpm build:dev

# 监听模式构建
pnpm build:watch

# 清理输出目录
pnpm clean
```

### 项目结构

```
packages/sui/
├── components/          # 组件源码
│   ├── Button/         # 按钮组件
│   ├── Alert/          # 警告组件
│   └── index.ts        # 组件导出
├── build/              # 构建配置
│   ├── build.config.ts # 构建常量
│   └── sf.config.ts    # Vite 配置
├── scripts/            # 构建脚本
│   ├── build.js        # 主构建脚本
│   └── build-style.js  # 样式构建脚本
├── dist/               # 构建输出
│   ├── es/            # ES 模块
│   ├── lib/           # CommonJS 模块
│   └── typings/       # 类型声明
├── index.ts           # 入口文件
├── style.ts           # 样式导出
└── package.json       # 包配置
```

## 🌟 最佳实践

### 1. 按需引入

为了减少打包体积，建议使用按需引入：

```typescript
// ✅ 推荐：按需引入
import { SButton } from '@saofeng-design/components';

// ❌ 不推荐：全量引入
import SfUI from '@saofeng-design/components';
```

### 2. 样式引入

确保正确引入样式文件：

```typescript
// 在 main.ts 中引入
import '@saofeng-design/components/dist/es/index.css';
```

### 3. TypeScript 支持

组件库提供完整的 TypeScript 类型定义：

```typescript
import type { ButtonProps, AlertProps } from '@saofeng-design/components';

const buttonProps: ButtonProps = {
  type: 'primary',
  size: 'large',
};
```

## 🔍 常见问题

### Q: 如何自定义主题？

A: 通过 CSS 变量覆盖默认主题：

```css
:root {
  --s-color-primary: #your-color;
}
```

### Q: 如何实现暗色模式？

A: 添加 `data-theme="dark"` 属性：

```html
<html data-theme="dark">
  <!-- 页面内容 -->
</html>
```

### Q: 组件库支持哪些浏览器？

A: 支持现代浏览器：

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 📈 版本历史

### v1.0.0

- ✨ 初始版本发布
- 🎨 提供 Button 和 Alert 组件
- 🌙 支持暗色模式
- 📦 支持按需引入

## 📄 许可证

[ISC](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

### 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📞 联系

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](../../issues)
- 发送邮件到 [your-email@example.com]

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者。

---

Made with ❤️ by Saofeng Design Team
