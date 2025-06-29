# @saofeng-design/theme

Saofeng Design 主题样式系统，提供完整的设计令牌、样式重置、工具类和主题配置功能。

## 特性

- 🎨 **完整的设计令牌系统** - 颜色、字体、尺寸、动画等
- 🌙 **暗色模式支持** - 内置暗色主题配置
- 🛠 **丰富的工具类** - 快速构建界面的工具类
- 📱 **响应式设计** - 内置断点系统
- 🎯 **TypeScript 支持** - 完整的类型定义
- 🔧 **主题定制** - 灵活的主题配置和扩展

## 安装

```bash
pnpm add @saofeng-design/theme
```

## 使用方式

### 基础使用

```less
// 导入完整主题样式
@import '@saofeng-design/theme/src/index.less';
```

### 按需导入

```less
// 只导入设计令牌
@import '@saofeng-design/theme/src/tokens.less';

// 只导入基础样式
@import '@saofeng-design/theme/src/base.less';

// 只导入工具类
@import '@saofeng-design/theme/src/utilities.less';
```

### TypeScript 使用

```typescript
import { defaultTokens, createThemeConfig, themeUtils } from '@saofeng-design/theme';

// 使用默认令牌
console.log(defaultTokens.colors.primary); // #1890ff

// 创建自定义主题
const customTheme = createThemeConfig({
  tokens: {
    colors: {
      primary: '#722ed1',
    },
  },
});

// 使用工具函数
const className = themeUtils.getClassName('button', 'primary'); // s-button--primary
```

## 设计令牌

### 颜色系统

```less
// 主色调
@primary-color: #1890ff;
@primary-color-hover: #40a9ff;
@primary-color-active: #096dd9;

// 功能色
@success-color: #52c41a;
@warning-color: #faad14;
@danger-color: #ff4d4f;
@info-color: #1890ff;

// 中性色
@white: #ffffff;
@black: #000000;
@gray-1: #fafafa; // 最浅
@gray-10: #1f1f1f; // 最深

// 文本颜色
@text-color: rgba(0, 0, 0, 0.88);
@text-color-secondary: rgba(0, 0, 0, 0.65);
@text-color-tertiary: rgba(0, 0, 0, 0.45);
@text-color-quaternary: rgba(0, 0, 0, 0.25);
```

### 字体系统

```less
// 字体族
@font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...;
@font-family-code: 'SFMono-Regular', Consolas, 'Liberation Mono', ...;

// 字体大小
@font-size-sm: 12px;
@font-size-base: 14px;
@font-size-lg: 16px;
@font-size-xl: 18px;

// 字重
@font-weight-light: 300;
@font-weight-normal: 400;
@font-weight-medium: 500;
@font-weight-semibold: 600;
@font-weight-bold: 700;
```

### 尺寸系统

```less
// 间距
@padding-xs: 4px;
@padding-sm: 8px;
@padding-md: 12px;
@padding-lg: 16px;
@padding-xl: 20px;

// 组件高度
@height-sm: 24px;
@height-base: 32px;
@height-lg: 40px;

// 圆角
@border-radius-sm: 4px;
@border-radius-base: 6px;
@border-radius-lg: 8px;
```

## 工具类

### 间距工具类

```html
<!-- 外边距 -->
<div class="m-0">无外边距</div>
<div class="m-xs">超小外边距 (4px)</div>
<div class="m-sm">小外边距 (8px)</div>
<div class="m-md">中等外边距 (12px)</div>
<div class="m-lg">大外边距 (16px)</div>
<div class="m-xl">超大外边距 (20px)</div>

<!-- 方向性外边距 -->
<div class="mt-md">上外边距</div>
<div class="mr-md">右外边距</div>
<div class="mb-md">下外边距</div>
<div class="ml-md">左外边距</div>
<div class="mx-md">水平外边距</div>
<div class="my-md">垂直外边距</div>

<!-- 内边距同理，使用 p- 前缀 -->
<div class="p-md">内边距</div>
<div class="px-lg">水平内边距</div>
```

### 文本工具类

```html
<!-- 文本对齐 -->
<div class="text-left">左对齐</div>
<div class="text-center">居中对齐</div>
<div class="text-right">右对齐</div>

<!-- 文本颜色 -->
<div class="text-primary">主要文本</div>
<div class="text-secondary">次要文本</div>
<div class="text-color-primary">主题色文本</div>
<div class="text-color-danger">危险色文本</div>

<!-- 字体大小 -->
<div class="text-xs">超小文本 (10px)</div>
<div class="text-sm">小文本 (12px)</div>
<div class="text-base">基础文本 (14px)</div>
<div class="text-lg">大文本 (16px)</div>

<!-- 字体粗细 -->
<div class="font-light">细体 (300)</div>
<div class="font-normal">正常 (400)</div>
<div class="font-medium">中等 (500)</div>
<div class="font-semibold">半粗体 (600)</div>
<div class="font-bold">粗体 (700)</div>
```

### 布局工具类

```html
<!-- 显示类型 -->
<div class="block">块级元素</div>
<div class="inline-block">内联块级元素</div>
<div class="flex">弹性布局</div>
<div class="grid">网格布局</div>
<div class="hidden">隐藏元素</div>

<!-- Flexbox -->
<div class="flex justify-center items-center">居中布局</div>
<div class="flex justify-between">两端对齐</div>
<div class="flex flex-col">垂直布局</div>
<div class="flex-1">弹性填充</div>
```

## 主题定制

### 自定义颜色主题

```typescript
import { createThemeConfig } from '@saofeng-design/theme';

const purpleTheme = createThemeConfig({
  name: 'purple',
  tokens: {
    colors: {
      primary: '#722ed1',
      primaryHover: '#9254de',
      primaryActive: '#531dab',
    },
  },
});
```

### 暗色模式

```typescript
import { createDarkThemeConfig } from '@saofeng-design/theme';

const darkTheme = createDarkThemeConfig({
  tokens: {
    colors: {
      primary: '#1890ff', // 可以覆盖暗色模式的颜色
    },
  },
});
```

### 生成 CSS 变量

```typescript
import { generateCSSVariables, defaultTokens } from '@saofeng-design/theme';

const cssVars = generateCSSVariables(defaultTokens, 'my-prefix');
console.log(cssVars);
// 输出：
// :root {
//   --my-prefix-color-primary: #1890ff;
//   --my-prefix-color-primary-hover: #40a9ff;
//   ...
// }
```

## 工具函数

### 颜色工具

```typescript
import { colorUtils } from '@saofeng-design/theme';

// 颜色转换
const rgb = colorUtils.hexToRgb('#1890ff');
const hex = colorUtils.rgbToHex(24, 144, 255);

// 透明度
const transparent = colorUtils.withAlpha('#1890ff', 0.5);

// 亮度调整
const lighter = colorUtils.lighten('#1890ff', 20);
const darker = colorUtils.darken('#1890ff', 20);

// 生成调色板
const palette = colorUtils.generatePalette('#1890ff');
```

### 尺寸工具

```typescript
import { sizeUtils } from '@saofeng-design/theme';

// 单位转换
const remValue = sizeUtils.pxToRem(16); // "1rem"
const pxValue = sizeUtils.remToPx(1.5); // 24
```

## 最佳实践

1. **使用设计令牌**：始终使用预定义的设计令牌，而不是硬编码的值
2. **保持一致性**：在整个项目中使用统一的间距、颜色和字体规范
3. **响应式设计**：利用工具类和断点系统实现响应式布局
4. **主题定制**：通过覆盖设计令牌来定制主题，而不是修改源码
5. **性能优化**：按需导入样式文件，避免不必要的 CSS 体积

## 许可证

ISC
