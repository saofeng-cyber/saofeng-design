# 基础组件

基础组件是从 Button 和 Alert 组件中抽取出来的公共样式和功能组件，提供了统一的设计语言和交互行为。

## BaseCard 基础卡片

BaseCard 是一个通用的卡片容器组件，提供了统一的卡片样式、边框、阴影和交互效果。

### 基础用法

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
      <div class="s-base-card s-base-card--default">
        <h4>默认卡片</h4>
        <p>这是一个默认样式的卡片</p>
      </div>
      <div class="s-base-card s-base-card--primary">
        <h4>主要卡片</h4>
        <p>这是一个主要样式的卡片</p>
      </div>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <SBaseCard variant="default" bordered>
    <h4>默认卡片</h4>
    <p>这是一个默认样式的卡片</p>
  </SBaseCard>
  
  <SBaseCard variant="primary" bordered shadow>
    <h4>主要卡片</h4>
    <p>这是一个主要样式的卡片，带阴影</p>
  </SBaseCard>
</template>
```

  </div>
</div>

### 不同变体

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
      <div class="s-base-card s-base-card--success">成功</div>
      <div class="s-base-card s-base-card--warning">警告</div>
      <div class="s-base-card s-base-card--danger">危险</div>
      <div class="s-base-card s-base-card--info">信息</div>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <SBaseCard variant="success">成功</SBaseCard>
  <SBaseCard variant="warning">警告</SBaseCard>
  <SBaseCard variant="danger">危险</SBaseCard>
  <SBaseCard variant="info">信息</SBaseCard>
</template>
```

  </div>
</div>

### API

#### BaseCard Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 卡片变体类型 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` |
| size | 卡片尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| hoverable | 是否可悬停 | `boolean` | `false` |
| bordered | 是否显示边框 | `boolean` | `true` |
| shadow | 是否显示阴影 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |

## BaseInteractive 基础交互

BaseInteractive 是一个通用的交互元素组件，提供了统一的按钮样式、状态管理和交互行为。

### 基础用法

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <button class="s-base-interactive s-base-interactive--default">默认</button>
      <button class="s-base-interactive s-base-interactive--primary">主要</button>
      <button class="s-base-interactive s-base-interactive--success">成功</button>
      <button class="s-base-interactive s-base-interactive--text">文本</button>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <SBaseInteractive variant="default">默认</SBaseInteractive>
  <SBaseInteractive variant="primary">主要</SBaseInteractive>
  <SBaseInteractive variant="success">成功</SBaseInteractive>
  <SBaseInteractive variant="text">文本</SBaseInteractive>
</template>
```

  </div>
</div>

### 不同标签

<div class="demo-container">
  <div class="demo-preview">
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <button class="s-base-interactive s-base-interactive--primary">按钮</button>
      <a href="#" class="s-base-interactive s-base-interactive--link">链接</a>
      <div class="s-base-interactive s-base-interactive--default">DIV</div>
    </div>
  </div>
  <div class="demo-code">

```vue
<template>
  <SBaseInteractive tag="button" variant="primary">按钮</SBaseInteractive>
  <SBaseInteractive tag="a" variant="link">链接</SBaseInteractive>
  <SBaseInteractive tag="div" variant="default">DIV</SBaseInteractive>
</template>
```

  </div>
</div>

### API

#### BaseInteractive Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| tag | HTML 标签 | `string` | `'button'` |
| nativeType | 原生类型 | `'button' \| 'submit' \| 'reset'` | `'button'` |
| variant | 交互变体类型 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' \| 'link'` | `'default'` |
| size | 尺寸 | `'small' \| 'default' \| 'large'` | `'default'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| active | 是否激活状态 | `boolean` | `false` |

## 在现有组件中的应用

### Button 组件重构

Button 组件现在基于 BaseInteractive 构建，继承了所有基础交互功能：

```vue
<template>
  <BaseInteractive
    :variant="type"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    :native-type="nativeType"
    @click="handleClick"
  >
    <!-- 按钮特有的内容 -->
    <slot />
  </BaseInteractive>
</template>
```

### Alert 组件重构

Alert 组件现在基于 BaseCard 构建，继承了所有基础卡片功能：

```vue
<template>
  <BaseCard
    :variant="cardVariant"
    :size="size"
    bordered
    @click="handleClick"
  >
    <!-- 警告提示特有的内容 -->
    <div class="alert-content">
      <slot />
    </div>
  </BaseCard>
</template>
```

## 设计原则

### 组件抽象层次

1. **基础组件层**：BaseCard、BaseInteractive
   - 提供最基础的样式和交互行为
   - 高度可复用，低耦合

2. **业务组件层**：Button、Alert、Input 等
   - 基于基础组件构建
   - 添加特定的业务逻辑和样式

3. **复合组件层**：Form、Table、Modal 等
   - 组合多个业务组件
   - 实现复杂的交互逻辑

### 样式统一性

通过基础组件确保：
- 统一的边框圆角
- 统一的内边距规范
- 统一的颜色主题
- 统一的过渡动画
- 统一的交互状态

### 可维护性

- 样式修改只需在基础组件中进行
- 新组件可以快速基于基础组件构建
- 减少重复代码，提高开发效率

::: tip 💡 使用建议
- 在开发新组件时，优先考虑是否可以基于现有基础组件构建
- 如果发现多个组件有相似的样式或行为，考虑抽取新的基础组件
- 保持基础组件的简洁性，避免添加过多特定业务逻辑
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

/* BaseCard 样式 */
.s-base-card {
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background: #fff;
  transition: all 0.3s ease;
}

.s-base-card--default {
  border-color: #d9d9d9;
}

.s-base-card--primary {
  border-color: #2062ff;
  background: rgba(32, 98, 255, 0.05);
}

.s-base-card--success {
  border-color: #52c41a;
  background: rgba(82, 196, 26, 0.05);
}

.s-base-card--warning {
  border-color: #faad14;
  background: rgba(250, 173, 20, 0.05);
}

.s-base-card--danger {
  border-color: #ff4d4f;
  background: rgba(255, 77, 79, 0.05);
}

.s-base-card--info {
  border-color: #1890ff;
  background: rgba(24, 144, 255, 0.05);
}

/* BaseInteractive 样式 */
.s-base-interactive {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: transparent;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  outline: none;
}

.s-base-interactive--default {
  background: #fff;
  border-color: #d9d9d9;
  color: #333;
}

.s-base-interactive--primary {
  background: #2062ff;
  border-color: #2062ff;
  color: #fff;
}

.s-base-interactive--success {
  background: #52c41a;
  border-color: #52c41a;
  color: #fff;
}

.s-base-interactive--text {
  background: transparent;
  border-color: transparent;
  color: #333;
}

.s-base-interactive--link {
  background: transparent;
  border-color: transparent;
  color: #2062ff;
  text-decoration: underline;
}

.s-base-interactive:hover {
  opacity: 0.8;
}
</style>
