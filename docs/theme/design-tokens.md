# 设计令牌

设计令牌是设计系统的基础，它们定义了颜色、字体、间距、动画等设计元素的标准化值。Saofeng Design 提供了一套完整的设计令牌系统，确保整个设计系统的一致性和可维护性。

## 什么是设计令牌

设计令牌是设计决策的原子单位，它们将设计属性（如颜色、字体大小、间距等）存储为数据。这些令牌可以在不同的平台和技术栈中使用，确保设计的一致性。

### 令牌的优势

- **一致性**：确保所有组件和页面使用相同的设计值
- **可维护性**：集中管理设计值，便于更新和维护
- **可扩展性**：支持主题切换和品牌定制
- **协作效率**：设计师和开发者使用相同的设计语言

## 令牌分类

### 全局令牌 (Global Tokens)

全局令牌定义了设计系统的基础值，不依赖于特定的组件或上下文。

```typescript
const globalTokens = {
  // 基础颜色
  colors: {
    blue: {
      50: '#e6f7ff',
      100: '#bae7ff',
      200: '#91d5ff',
      300: '#69c0ff',
      400: '#40a9ff',
      500: '#1890ff', // 主色
      600: '#096dd9',
      700: '#0050b3',
      800: '#003a8c',
      900: '#002766',
    }
  },
  
  // 基础字体
  fonts: {
    family: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"SF Mono", "Monaco", "Cascadia Code", monospace',
    },
    size: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
    }
  }
}
```

### 语义令牌 (Semantic Tokens)

语义令牌基于全局令牌，为特定的用途和上下文提供有意义的名称。

```typescript
const semanticTokens = {
  colors: {
    primary: globalTokens.colors.blue[500],
    success: '#52c41a',
    warning: '#faad14',
    danger: '#ff4d4f',
    info: '#1890ff',
    
    text: {
      primary: 'rgba(0, 0, 0, 0.88)',
      secondary: 'rgba(0, 0, 0, 0.65)',
      tertiary: 'rgba(0, 0, 0, 0.45)',
      quaternary: 'rgba(0, 0, 0, 0.25)',
    },
    
    background: {
      primary: '#ffffff',
      secondary: '#fafafa',
      tertiary: '#f5f5f5',
    }
  }
}
```

### 组件令牌 (Component Tokens)

组件令牌为特定组件定义专用的设计值。

```typescript
const componentTokens = {
  button: {
    height: {
      small: '24px',
      medium: '32px',
      large: '40px',
    },
    padding: {
      small: '0 8px',
      medium: '0 12px',
      large: '0 16px',
    },
    borderRadius: '6px',
    fontWeight: 400,
  }
}
```

## 颜色令牌

### 主色调

<div class="color-palette">
  <div class="color-item">
    <div class="color-preview" style="background-color: #1890ff;">Primary</div>
    <div class="color-info">
      <div class="color-name">Primary</div>
      <div class="color-value">#1890ff</div>
    </div>
  </div>
  <div class="color-item">
    <div class="color-preview" style="background-color: #40a9ff;">Primary Hover</div>
    <div class="color-info">
      <div class="color-name">Primary Hover</div>
      <div class="color-value">#40a9ff</div>
    </div>
  </div>
  <div class="color-item">
    <div class="color-preview" style="background-color: #096dd9;">Primary Active</div>
    <div class="color-info">
      <div class="color-name">Primary Active</div>
      <div class="color-value">#096dd9</div>
    </div>
  </div>
</div>

### 功能色

<div class="color-palette">
  <div class="color-item">
    <div class="color-preview" style="background-color: #52c41a;">Success</div>
    <div class="color-info">
      <div class="color-name">Success</div>
      <div class="color-value">#52c41a</div>
    </div>
  </div>
  <div class="color-item">
    <div class="color-preview" style="background-color: #faad14;">Warning</div>
    <div class="color-info">
      <div class="color-name">Warning</div>
      <div class="color-value">#faad14</div>
    </div>
  </div>
  <div class="color-item">
    <div class="color-preview" style="background-color: #ff4d4f;">Danger</div>
    <div class="color-info">
      <div class="color-name">Danger</div>
      <div class="color-value">#ff4d4f</div>
    </div>
  </div>
  <div class="color-item">
    <div class="color-preview" style="background-color: #1890ff;">Info</div>
    <div class="color-info">
      <div class="color-name">Info</div>
      <div class="color-value">#1890ff</div>
    </div>
  </div>
</div>

### 中性色

<div class="color-palette">
  <div class="color-item">
    <div class="color-preview" style="background-color: #ffffff; border: 1px solid #d9d9d9; color: #000;">White</div>
    <div class="color-info">
      <div class="color-name">White</div>
      <div class="color-value">#ffffff</div>
    </div>
  </div>
  <div class="color-item">
    <div class="color-preview" style="background-color: #fafafa; color: #000;">Gray 1</div>
    <div class="color-info">
      <div class="color-name">Gray 1</div>
      <div class="color-value">#fafafa</div>
    </div>
  </div>
  <div class="color-item">
    <div class="color-preview" style="background-color: #f5f5f5; color: #000;">Gray 2</div>
    <div class="color-info">
      <div class="color-name">Gray 2</div>
      <div class="color-value">#f5f5f5</div>
    </div>
  </div>
  <div class="color-item">
    <div class="color-preview" style="background-color: #000000;">Black</div>
    <div class="color-info">
      <div class="color-name">Black</div>
      <div class="color-value">#000000</div>
    </div>
  </div>
</div>

## 字体令牌

### 字体族

```css
/* 无衬线字体 */
--s-font-family-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* 等宽字体 */
--s-font-family-mono: "SF Mono", "Monaco", "Cascadia Code", "Roboto Mono", monospace;

/* 衬线字体 */
--s-font-family-serif: "Georgia", "Times New Roman", serif;
```

### 字体大小

<div class="size-demo">
  <div class="size-label">xs</div>
  <div style="font-size: 12px;">12px - 辅助信息</div>
</div>

<div class="size-demo">
  <div class="size-label">sm</div>
  <div style="font-size: 14px;">14px - 正文内容</div>
</div>

<div class="size-demo">
  <div class="size-label">base</div>
  <div style="font-size: 16px;">16px - 基础文本</div>
</div>

<div class="size-demo">
  <div class="size-label">lg</div>
  <div style="font-size: 18px;">18px - 小标题</div>
</div>

<div class="size-demo">
  <div class="size-label">xl</div>
  <div style="font-size: 20px;">20px - 中标题</div>
</div>

<div class="size-demo">
  <div class="size-label">2xl</div>
  <div style="font-size: 24px;">24px - 大标题</div>
</div>

### 字体粗细

```css
--s-font-weight-light: 300;
--s-font-weight-normal: 400;
--s-font-weight-medium: 500;
--s-font-weight-semibold: 600;
--s-font-weight-bold: 700;
```

## 间距令牌

### 基础间距

<div class="size-demo">
  <div class="size-label">xs</div>
  <div class="size-box" style="width: 4px; height: 16px;">4px</div>
</div>

<div class="size-demo">
  <div class="size-label">sm</div>
  <div class="size-box" style="width: 8px; height: 16px;">8px</div>
</div>

<div class="size-demo">
  <div class="size-label">md</div>
  <div class="size-box" style="width: 16px; height: 16px;">16px</div>
</div>

<div class="size-demo">
  <div class="size-label">lg</div>
  <div class="size-box" style="width: 24px; height: 16px;">24px</div>
</div>

<div class="size-demo">
  <div class="size-label">xl</div>
  <div class="size-box" style="width: 32px; height: 16px;">32px</div>
</div>

<div class="size-demo">
  <div class="size-label">2xl</div>
  <div class="size-box" style="width: 48px; height: 16px;">48px</div>
</div>

## 动画令牌

### 动画时长

```css
--s-duration-fast: 0.1s;
--s-duration-normal: 0.2s;
--s-duration-slow: 0.3s;
--s-duration-slower: 0.5s;
```

### 动画曲线

```css
--s-ease-in: cubic-bezier(0.4, 0, 1, 1);
--s-ease-out: cubic-bezier(0, 0, 0.2, 1);
--s-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--s-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

## 阴影令牌

```css
--s-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--s-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--s-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--s-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
```

## 使用方式

### CSS 变量

```css
.my-component {
  color: var(--s-color-text-primary);
  background: var(--s-color-bg-primary);
  padding: var(--s-spacing-md);
  border-radius: var(--s-border-radius-md);
  box-shadow: var(--s-shadow-md);
  transition: all var(--s-duration-normal) var(--s-ease-out);
}
```

### Less 变量

```less
.my-component {
  color: @text-color-primary;
  background: @bg-color-primary;
  padding: @spacing-md;
  border-radius: @border-radius-md;
  box-shadow: @shadow-md;
  transition: all @duration-normal @ease-out;
}
```

### JavaScript/TypeScript

```typescript
import { defaultTokens } from '@saofeng-design/theme'

const styles = {
  color: defaultTokens.colors.text.primary,
  background: defaultTokens.colors.background.primary,
  padding: defaultTokens.spacing.md,
  borderRadius: defaultTokens.borderRadius.md,
}
```

## 自定义令牌

您可以通过覆盖默认令牌来自定义设计系统：

```typescript
import { createThemeConfig } from '@saofeng-design/theme'

const customTheme = createThemeConfig({
  tokens: {
    colors: {
      primary: '#722ed1', // 自定义主色
      success: '#389e0d', // 自定义成功色
    },
    fonts: {
      family: {
        sans: '"Custom Font", sans-serif', // 自定义字体
      }
    },
    spacing: {
      md: '20px', // 自定义间距
    }
  }
})
```

::: tip 💡 最佳实践
1. **使用语义化命名**：优先使用语义令牌而不是全局令牌
2. **保持一致性**：在整个项目中使用相同的令牌
3. **避免硬编码**：不要在组件中使用硬编码的设计值
4. **文档化定制**：记录您的自定义令牌和使用场景
:::

<style>
.color-palette {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.color-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
}

.color-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.color-preview {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.color-info {
  padding: 1rem;
}

.color-name {
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.color-value {
  font-family: var(--vp-font-family-mono);
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  display: inline-block;
}

.size-demo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.size-box {
  background: var(--vp-c-brand-1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 0.8rem;
}

.size-label {
  font-family: var(--vp-font-family-mono);
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  min-width: 60px;
}
</style>
