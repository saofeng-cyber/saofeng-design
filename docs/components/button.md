# Button 按钮

按钮用于触发一个操作，如提交表单、打开对话框、取消操作等。

## 基础用法

最简单的用法，通过 `type` 属性设置按钮类型。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <button class="s-button s-button--primary">主要按钮</button>
      <button class="s-button s-button--default">默认按钮</button>
      <button class="s-button s-button--dashed">虚线按钮</button>
      <button class="s-button s-button--text">文本按钮</button>
      <button class="s-button s-button--link">链接按钮</button>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SButton type="primary">主要按钮</SButton>
    <SButton type="default">默认按钮</SButton>
    <SButton type="dashed">虚线按钮</SButton>
    <SButton type="text">文本按钮</SButton>
    <SButton type="link">链接按钮</SButton>
  </div>
</template>

<script setup>
import { SButton } from '@saofeng-design/components';
</script>
```

  </div>
</div>

## 按钮尺寸

按钮有大、中、小三种尺寸。通过设置 `size` 为 `large`、`medium`、`small` 分别把按钮设为大、中、小尺寸。若不设置 `size`，则尺寸为中。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <button class="s-button s-button--primary s-button--large">大型按钮</button>
      <button class="s-button s-button--primary s-button--medium">中型按钮</button>
      <button class="s-button s-button--primary s-button--small">小型按钮</button>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SButton
      type="primary"
      size="large"
      >大型按钮</SButton
    >
    <SButton
      type="primary"
      size="medium"
      >中型按钮</SButton
    >
    <SButton
      type="primary"
      size="small"
      >小型按钮</SButton
    >
  </div>
</template>
```

  </div>
</div>

## 禁用状态

按钮不可用状态。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <button class="s-button s-button--primary s-button--disabled" disabled>主要按钮</button>
      <button class="s-button s-button--default s-button--disabled" disabled>默认按钮</button>
      <button class="s-button s-button--dashed s-button--disabled" disabled>虚线按钮</button>
      <button class="s-button s-button--text s-button--disabled" disabled>文本按钮</button>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SButton
      type="primary"
      disabled
      >主要按钮</SButton
    >
    <SButton
      type="default"
      disabled
      >默认按钮</SButton
    >
    <SButton
      type="dashed"
      disabled
      >虚线按钮</SButton
    >
    <SButton
      type="text"
      disabled
      >文本按钮</SButton
    >
  </div>
</template>
```

  </div>
</div>

## 加载状态

添加 `loading` 属性即可让按钮处于加载状态。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <button class="s-button s-button--primary s-button--loading">
        <span class="s-button__loading">⟳</span>
        加载中
      </button>
      <button class="s-button s-button--default s-button--loading">
        <span class="s-button__loading">⟳</span>
        加载中
      </button>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SButton
      type="primary"
      loading
      >加载中</SButton
    >
    <SButton
      type="default"
      loading
      >加载中</SButton
    >
  </div>
</template>
```

  </div>
</div>

## 图标按钮

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <button class="s-button s-button--primary">
        <span>🔍</span>
        搜索
      </button>
      <button class="s-button s-button--default">
        <span>📁</span>
        文件夹
      </button>
      <button class="s-button s-button--circle s-button--primary">
        <span>+</span>
      </button>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SButton
      type="primary"
      icon="search"
      >搜索</SButton
    >
    <SButton
      type="default"
      icon="folder"
      >文件夹</SButton
    >
    <SButton
      type="primary"
      circle
      icon="plus"
    />
  </div>
</template>
```

  </div>
</div>

## 按钮形状

按钮有两种形状：默认（矩形）和圆形，通过 `round` 和 `circle` 属性设置。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <button class="s-button s-button--primary">默认按钮</button>
      <button class="s-button s-button--primary s-button--round">圆角按钮</button>
      <button class="s-button s-button--primary s-button--circle">圆</button>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SButton type="primary">默认按钮</SButton>
    <SButton
      type="primary"
      round
      >圆角按钮</SButton
    >
    <SButton
      type="primary"
      circle
      >圆</SButton
    >
  </div>
</template>
```

  </div>
</div>

## 块级按钮

`block` 属性将使按钮适合其父宽度。

<div class="demo-container">
  <div class="demo-preview">
    <div style="width: 100%;">
      <button class="s-button s-button--primary s-button--block" style="width: 100%; margin-bottom: 12px;">
        块级按钮
      </button>
      <button class="s-button s-button--default s-button--block" style="width: 100%;">
        块级按钮
      </button>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SButton
      type="primary"
      block
      >块级按钮</SButton
    >
    <SButton
      type="default"
      block
      >块级按钮</SButton
    >
  </div>
</template>
```

  </div>
</div>

## API

### Button Props

| 参数     | 说明                                                  | 类型                                                     | 默认值      |
| -------- | ----------------------------------------------------- | -------------------------------------------------------- | ----------- |
| type     | 设置按钮类型                                          | `'primary' \| 'default' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| size     | 设置按钮大小                                          | `'large' \| 'medium' \| 'small'`                         | `'medium'`  |
| disabled | 按钮失效状态                                          | `boolean`                                                | `false`     |
| loading  | 设置按钮载入状态                                      | `boolean`                                                | `false`     |
| icon     | 设置按钮的图标组件                                    | `string`                                                 | -           |
| round    | 设置按钮为圆角                                        | `boolean`                                                | `false`     |
| circle   | 设置按钮为圆形                                        | `boolean`                                                | `false`     |
| block    | 将按钮宽度调整为其父宽度的选项                        | `boolean`                                                | `false`     |
| plain    | 设置按钮为朴素按钮                                    | `boolean`                                                | `false`     |
| ghost    | 设置按钮为幽灵按钮                                    | `boolean`                                                | `false`     |
| danger   | 设置危险按钮                                          | `boolean`                                                | `false`     |
| href     | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | `string`                                                 | -           |
| target   | 相当于 a 链接的 target 属性，href 存在时生效          | `string`                                                 | -           |
| htmlType | 设置 button 原生的 type 值                            | `'submit' \| 'reset' \| 'button'`                        | `'button'`  |

### Button Events

| 事件名 | 说明             | 回调参数                      |
| ------ | ---------------- | ----------------------------- |
| click  | 点击按钮时的回调 | `(event: MouseEvent) => void` |

### Button Slots

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 按钮内容   |
| icon    | 自定义图标 |

## 主题定制

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称                          | 默认值   | 说明             |
| ----------------------------- | -------- | ---------------- |
| `--s-button-height-large`     | `40px`   | 大型按钮高度     |
| `--s-button-height-medium`    | `32px`   | 中型按钮高度     |
| `--s-button-height-small`     | `24px`   | 小型按钮高度     |
| `--s-button-padding-large`    | `0 16px` | 大型按钮内边距   |
| `--s-button-padding-medium`   | `0 12px` | 中型按钮内边距   |
| `--s-button-padding-small`    | `0 8px`  | 小型按钮内边距   |
| `--s-button-font-size-large`  | `16px`   | 大型按钮字体大小 |
| `--s-button-font-size-medium` | `14px`   | 中型按钮字体大小 |
| `--s-button-font-size-small`  | `12px`   | 小型按钮字体大小 |
| `--s-button-border-radius`    | `6px`    | 按钮圆角         |
| `--s-button-border-width`     | `1px`    | 按钮边框宽度     |

### Less 变量

如果您使用 Less，可以通过修改以下变量来定制按钮样式：

```less
@btn-font-weight: 400;
@btn-border-radius-base: 6px;
@btn-border-width: 1px;
@btn-border-style: solid;
@btn-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);

// 主要按钮
@btn-primary-color: #fff;
@btn-primary-bg: @primary-color;
@btn-primary-border: @primary-color;

// 默认按钮
@btn-default-color: @text-color;
@btn-default-bg: #fff;
@btn-default-border: @border-color-base;
```

## 设计指南

### 何时使用

- 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
- 在 Saofeng Design 中我们提供了五种按钮。

### 类型选择

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。

### 尺寸选择

- 大号按钮：用于页面主要操作，如表单提交。
- 中号按钮：用于一般操作，是最常用的尺寸。
- 小号按钮：用于次要操作，如表格中的操作按钮。

::: tip 💡 设计建议

- 避免在一个操作区域放置过多的主按钮
- 按钮的文案要简洁明了，能够清楚地表达操作意图
- 相关的按钮应该放在一起，并保持一致的间距
- 在移动端使用时，建议使用较大的按钮尺寸以便于点击
  :::

<style>
.demo-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
}

.demo-preview {
  padding: 24px;
  background: #fafbff;
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-code {
  background: var(--vp-code-block-bg);
}

/* 按钮样式 */
.s-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  height: 32px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  background: transparent;
  color: inherit;
}

.s-button--primary {
  background: #1890ff;
  border-color: #1890ff;
  color: #fff;
}

.s-button--primary:hover {
  background: #40a9ff;
  border-color: #40a9ff;
}

.s-button--default {
  background: #fff;
  border-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.88);
}

.s-button--default:hover {
  border-color: #4096ff;
  color: #4096ff;
}

.s-button--dashed {
  background: #fff;
  border-color: #d9d9d9;
  border-style: dashed;
  color: rgba(0, 0, 0, 0.88);
}

.s-button--text {
  background: transparent;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.88);
}

.s-button--text:hover {
  background: rgba(0, 0, 0, 0.06);
}

.s-button--link {
  background: transparent;
  border-color: transparent;
  color: #1890ff;
}

.s-button--link:hover {
  color: #40a9ff;
}

.s-button--large {
  height: 40px;
  padding: 0 16px;
  font-size: 16px;
}

.s-button--medium {
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
}

.s-button--small {
  height: 24px;
  padding: 0 8px;
  font-size: 12px;
}

.s-button--round {
  border-radius: 16px;
}

.s-button--circle {
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 50%;
}

.s-button--block {
  width: 100%;
}

.s-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.s-button--loading .s-button__loading {
  animation: spin 1s linear infinite;
  margin-right: 4px;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
