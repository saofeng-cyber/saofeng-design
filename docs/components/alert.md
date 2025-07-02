# Alert 警告提示

警告提示，展现需要关注的信息。

## 基础用法

最简单的用法，适用于简短的警告提示。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div class="s-alert s-alert--success">
        <span class="s-alert__icon">✓</span>
        <span class="s-alert__message">成功提示的文案</span>
      </div>
      <div class="s-alert s-alert--info">
        <span class="s-alert__icon">ℹ</span>
        <span class="s-alert__message">消息提示的文案</span>
      </div>
      <div class="s-alert s-alert--warning">
        <span class="s-alert__icon">⚠</span>
        <span class="s-alert__message">警告提示的文案</span>
      </div>
      <div class="s-alert s-alert--error">
        <span class="s-alert__icon">✕</span>
        <span class="s-alert__message">错误提示的文案</span>
      </div>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SAlert type="success" message="成功提示的文案" />
    <SAlert type="info" message="消息提示的文案" />
    <SAlert type="warning" message="警告提示的文案" />
    <SAlert type="error" message="错误提示的文案" />
  </div>
</template>

<script setup>
import { SAlert } from '@saofeng-design/components'
</script>
```

  </div>
</div>

## 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div class="s-alert s-alert--success s-alert--closable">
        <span class="s-alert__icon">✓</span>
        <span class="s-alert__message">成功提示的文案</span>
        <button class="s-alert__close">×</button>
      </div>
      <div class="s-alert s-alert--info s-alert--closable">
        <span class="s-alert__icon">ℹ</span>
        <span class="s-alert__message">消息提示的文案</span>
        <button class="s-alert__close">×</button>
      </div>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SAlert 
      type="success" 
      message="成功提示的文案" 
      closable 
      @close="handleClose"
    />
    <SAlert 
      type="info" 
      message="消息提示的文案" 
      closable 
      @close="handleClose"
    />
  </div>
</template>

<script setup>
import { SAlert } from '@saofeng-design/components'

const handleClose = () => {
  console.log('Alert closed')
}
</script>
```

  </div>
</div>

## 含有图标

表示某种状态时提升可读性。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div class="s-alert s-alert--success s-alert--with-icon">
        <span class="s-alert__icon">✓</span>
        <span class="s-alert__message">成功提示的文案</span>
      </div>
      <div class="s-alert s-alert--info s-alert--with-icon">
        <span class="s-alert__icon">ℹ</span>
        <span class="s-alert__message">消息提示的文案</span>
      </div>
      <div class="s-alert s-alert--warning s-alert--with-icon">
        <span class="s-alert__icon">⚠</span>
        <span class="s-alert__message">警告提示的文案</span>
      </div>
      <div class="s-alert s-alert--error s-alert--with-icon">
        <span class="s-alert__icon">✕</span>
        <span class="s-alert__message">错误提示的文案</span>
      </div>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SAlert type="success" message="成功提示的文案" show-icon />
    <SAlert type="info" message="消息提示的文案" show-icon />
    <SAlert type="warning" message="警告提示的文案" show-icon />
    <SAlert type="error" message="错误提示的文案" show-icon />
  </div>
</template>
```

  </div>
</div>

## 含有辅助性文字介绍

包含标题和内容，解释更详细的警告。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div class="s-alert s-alert--success s-alert--with-description">
        <span class="s-alert__icon">✓</span>
        <div class="s-alert__content">
          <div class="s-alert__message">成功提示的文案</div>
          <div class="s-alert__description">成功提示的辅助性文字介绍成功提示的辅助性文字介绍</div>
        </div>
      </div>
      <div class="s-alert s-alert--info s-alert--with-description">
        <span class="s-alert__icon">ℹ</span>
        <div class="s-alert__content">
          <div class="s-alert__message">消息提示的文案</div>
          <div class="s-alert__description">消息提示的辅助性文字介绍消息提示的辅助性文字介绍</div>
        </div>
      </div>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SAlert 
      type="success" 
      message="成功提示的文案"
      description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
      show-icon 
    />
    <SAlert 
      type="info" 
      message="消息提示的文案"
      description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
      show-icon 
    />
  </div>
</template>
```

  </div>
</div>

## 顶部公告

页面顶部通告形式，默认有图标且 `type` 为 'warning'。

<div class="demo-container">
  <div class="demo-preview">
    <div class="s-alert s-alert--warning s-alert--banner">
      <span class="s-alert__icon">⚠</span>
      <span class="s-alert__message">警告提示的文案</span>
      <button class="s-alert__close">×</button>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <SAlert 
    message="警告提示的文案" 
    banner 
    closable 
  />
</template>
```

  </div>
</div>

## 平滑地卸载

使用 `v-show` 或者条件渲染来控制 Alert 的显示和隐藏。

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <button class="s-button s-button--primary" onclick="toggleAlert()">
        切换显示
      </button>
      <div id="toggleAlert" class="s-alert s-alert--success" style="display: none;">
        <span class="s-alert__icon">✓</span>
        <span class="s-alert__message">可以被切换显示的警告提示</span>
      </div>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <div>
    <SButton @click="visible = !visible">切换显示</SButton>
    <SAlert 
      v-show="visible"
      type="success" 
      message="可以被切换显示的警告提示" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SButton, SAlert } from '@saofeng-design/components'

const visible = ref(true)
</script>
```

  </div>
</div>

## API

### Alert Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 指定警告提示的样式 | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` |
| message | 警告提示内容 | `string` | - |
| description | 警告提示的辅助性文字介绍 | `string` | - |
| closable | 默认不显示关闭按钮 | `boolean` | `false` |
| closeText | 自定义关闭按钮 | `string` | - |
| showIcon | 是否显示图标 | `boolean` | `false` |
| banner | 是否用作顶部公告 | `boolean` | `false` |
| icon | 自定义图标 | `string \| VNode` | - |

### Alert Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭时触发的回调函数 | `(event: MouseEvent) => void` |

### Alert Slots

| 插槽名 | 说明 |
|--------|------|
| default | 内容 |
| icon | 自定义图标 |
| action | 自定义操作项 |

## 主题定制

### CSS 变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称 | 默认值 | 说明 |
|------|--------|------|
| `--s-alert-padding` | `8px 12px` | 内边距 |
| `--s-alert-border-radius` | `6px` | 圆角 |
| `--s-alert-font-size` | `14px` | 字体大小 |
| `--s-alert-line-height` | `1.5` | 行高 |
| `--s-alert-icon-size` | `16px` | 图标大小 |
| `--s-alert-close-size` | `16px` | 关闭按钮大小 |

### Less 变量

```less
@alert-padding-vertical: 8px;
@alert-padding-horizontal: 12px;
@alert-border-radius-base: 6px;
@alert-message-color: @text-color;
@alert-description-font-size: @font-size-base;

// 成功样式
@alert-success-border-color: @success-color;
@alert-success-bg-color: @success-1;
@alert-success-icon-color: @success-color;

// 信息样式
@alert-info-border-color: @info-color;
@alert-info-bg-color: @info-1;
@alert-info-icon-color: @info-color;

// 警告样式
@alert-warning-border-color: @warning-color;
@alert-warning-bg-color: @warning-1;
@alert-warning-icon-color: @warning-color;

// 错误样式
@alert-error-border-color: @error-color;
@alert-error-bg-color: @error-1;
@alert-error-icon-color: @error-color;
```

## 设计指南

### 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

### 类型选择

- **成功提示**：用于表示操作成功完成。
- **信息提示**：用于显示中性的信息。
- **警告提示**：用于显示需要用户注意的信息。
- **错误提示**：用于显示错误信息。

::: tip 💡 设计建议
- 警告提示的文案要简洁明了，能够清楚地表达信息
- 避免在一个页面中使用过多的警告提示
- 重要的警告信息应该使用显眼的颜色和图标
- 可关闭的警告提示应该提供明确的关闭按钮
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

/* Alert 样式 */
.s-alert {
  display: flex;
  align-items: flex-start;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid;
  font-size: 14px;
  line-height: 1.5;
  position: relative;
}

.s-alert__icon {
  margin-right: 8px;
  font-size: 16px;
  line-height: 1.5;
  flex-shrink: 0;
}

.s-alert__message {
  flex: 1;
  color: inherit;
}

.s-alert__description {
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.8;
}

.s-alert__close {
  margin-left: 8px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
  padding: 0;
  line-height: 1;
}

.s-alert__close:hover {
  opacity: 1;
}

.s-alert--success {
  background-color: #f6ffed;
  border-color: #b7eb8f;
  color: #52c41a;
}

.s-alert--info {
  background-color: #e6f7ff;
  border-color: #91d5ff;
  color: #1890ff;
}

.s-alert--warning {
  background-color: #fffbe6;
  border-color: #ffe58f;
  color: #faad14;
}

.s-alert--error {
  background-color: #fff2f0;
  border-color: #ffccc7;
  color: #ff4d4f;
}

.s-alert--banner {
  border-radius: 0;
  border-left: none;
  border-right: none;
  padding: 12px 24px;
}

.s-alert--with-description {
  padding: 12px 16px;
}

.s-alert--with-description .s-alert__icon {
  font-size: 20px;
  margin-top: 2px;
}

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
</style>

<script>
function toggleAlert() {
  const alert = document.getElementById('toggleAlert');
  if (alert.style.display === 'none') {
    alert.style.display = 'flex';
  } else {
    alert.style.display = 'none';
  }
}
</script>
