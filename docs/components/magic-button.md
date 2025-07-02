# 🌟 Magic Button 魔法按钮

在 Saofeng Design 的奇幻世界里，按钮不仅仅是触发操作的工具，更是充满魔法和生命力的艺术品！每个按钮都有自己的个性和魔法效果。

## ✨ 基础魔法

我们的按钮拥有多种魔法形态，每一种都有独特的视觉效果和交互体验：

```vue
<template>
  <div class="magic-button-showcase">
    <!-- 基础魔法按钮 -->
    <SButton>🌱 自然按钮</SButton>
    <SButton type="primary">🌿 主要魔法</SButton>
    <SButton type="success">✨ 成功咒语</SButton>
    <SButton type="warning">⚡ 警告法术</SButton>
    <SButton type="danger">🔥 危险魔法</SButton>
    <SButton type="magic">🦄 终极魔法</SButton>
  </div>
</template>

<style>
.magic-button-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, rgba(16, 185, 129, 0.05) 100%);
  border-radius: 20px 50px 30px 60px;
}
</style>
```

## 🎨 有机形状魔法

我们的按钮采用有机形状设计，每个按钮都有独特的边框半径：

```vue
<template>
  <div class="organic-buttons">
    <SButton shape="organic-1">🌿 有机形状 1</SButton>
    <SButton shape="organic-2" type="primary">🍃 有机形状 2</SButton>
    <SButton shape="wild" type="success">🌊 狂野形状</SButton>
    <SButton shape="creative" type="warning">🎨 创意形状</SButton>
  </div>
</template>
```

### 🎭 形状魔法说明

| 形状类型 | CSS 效果 | 视觉特点 |
|---------|----------|----------|
| `organic-1` | `border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%` | 🌿 自然流动 |
| `organic-2` | `border-radius: 50% 20% 80% 40% / 60% 30% 70% 40%` | 🍃 不规则美感 |
| `wild` | `border-radius: 20px 50px 30px 60px` | 🌊 狂野不羁 |
| `creative` | 动态生成 | 🎨 每次都不同 |

## 🎭 动画魔法效果

每个按钮都拥有独特的动画效果：

```vue
<template>
  <div class="animated-buttons">
    <!-- 呼吸效果 -->
    <SButton animation="breathe">🫁 呼吸按钮</SButton>
    
    <!-- 漂浮效果 -->
    <SButton animation="float" type="primary">🎈 漂浮按钮</SButton>
    
    <!-- 故障效果 -->
    <SButton animation="glitch" type="danger">📺 故障按钮</SButton>
    
    <!-- 脉冲效果 -->
    <SButton animation="pulse" type="success">💓 脉冲按钮</SButton>
    
    <!-- 旋转效果 -->
    <SButton animation="rotate" type="magic">🌀 旋转按钮</SButton>
  </div>
</template>
```

### 🎪 动画效果详解

::: tip 呼吸动画 (breathe)
```css
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```
让按钮像生命体一样呼吸，给人以生命力的感觉。
:::

::: tip 故障动画 (glitch)
```css
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}
```
创造数字故障艺术效果，充满科技感和未来感。
:::

## 🌈 渐变魔法

使用我们独特的渐变系统：

```vue
<template>
  <div class="gradient-buttons">
    <SButton gradient="primary">🌿 主要渐变</SButton>
    <SButton gradient="creative">🎨 创意渐变</SButton>
    <SButton gradient="wild">🦄 狂野渐变</SButton>
    <SButton gradient="organic">🌱 有机渐变</SButton>
    <SButton gradient="matrix">💚 矩阵渐变</SButton>
  </div>
</template>
```

### 🎨 渐变魔法库

| 渐变类型 | CSS 效果 | 魔法特点 |
|---------|----------|----------|
| `primary` | `linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)` | 🌿 自然绿意 |
| `creative` | `linear-gradient(45deg, #000000 0%, #10b981 25%, #ffffff 50%, #059669 75%, #000000 100%)` | 🎨 艺术创意 |
| `wild` | `conic-gradient(from 0deg, #10b981, #000000, #ffffff, #059669, #10b981)` | 🦄 狂野旋转 |
| `organic` | `radial-gradient(ellipse, #6ee7b7 0%, #10b981 30%, #047857 70%, #000000 100%)` | 🌱 有机生长 |
| `matrix` | `linear-gradient(90deg, #000000 0%, #10b981 20%, #000000 40%, #059669 60%, #000000 80%, #10b981 100%)` | 💚 数字矩阵 |

## 🎪 尺寸魔法

不同尺寸的魔法按钮，每个都有独特的比例和感觉：

```vue
<template>
  <div class="size-demo">
    <SButton size="tiny">🐭 微型魔法</SButton>
    <SButton size="small">🐱 小型魔法</SButton>
    <SButton size="medium">🐶 中型魔法</SButton>
    <SButton size="large">🐺 大型魔法</SButton>
    <SButton size="huge">🦁 巨型魔法</SButton>
  </div>
</template>
```

## 🔮 状态魔法

按钮的各种魔法状态，每种状态都有独特的视觉表现：

```vue
<template>
  <div class="state-demo">
    <!-- 禁用状态 -->
    <SButton disabled>😴 沉睡中</SButton>
    
    <!-- 加载状态 -->
    <SButton loading>⏳ 施法中</SButton>
    
    <!-- 成功状态 -->
    <SButton state="success">✅ 魔法成功</SButton>
    
    <!-- 错误状态 -->
    <SButton state="error">❌ 魔法失败</SButton>
    
    <!-- 魔法充能状态 -->
    <SButton state="charging">⚡ 充能中</SButton>
    
    <!-- 传送门状态 -->
    <SButton state="portal">🌀 传送门</SButton>
  </div>
</template>
```

## 🎨 自定义魔法

创建你自己的魔法按钮：

```vue
<template>
  <SButton
    :style="customMagicStyle"
    @click="castCustomSpell"
    @mouseenter="startMagicEffect"
    @mouseleave="stopMagicEffect"
  >
    🌟 自定义魔法
  </SButton>
</template>

<script setup>
import { ref, computed } from 'vue'

const isMagicActive = ref(false)

const customMagicStyle = computed(() => ({
  background: isMagicActive.value 
    ? 'conic-gradient(from 0deg, #10b981, #000000, #ffffff, #059669, #10b981)'
    : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  borderRadius: isMagicActive.value 
    ? '50% 20% 80% 40% / 60% 30% 70% 40%'
    : '30% 70% 70% 30% / 30% 30% 70% 70%',
  transform: isMagicActive.value 
    ? 'scale(1.1) rotate(5deg)'
    : 'scale(1) rotate(0deg)',
  boxShadow: isMagicActive.value
    ? '0 0 30px rgba(16, 185, 129, 0.8), 0 0 60px rgba(0, 0, 0, 0.2)'
    : '0 4px 20px rgba(16, 185, 129, 0.3)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
}))

const startMagicEffect = () => {
  isMagicActive.value = true
}

const stopMagicEffect = () => {
  isMagicActive.value = false
}

const castCustomSpell = () => {
  console.log('✨ 自定义魔法已施展！')
  // 在这里添加你的魔法效果
}
</script>
```

## 🌟 组合魔法

将多种魔法效果组合使用，创造终极魔法体验：

```vue
<template>
  <SButton
    type="magic"
    size="large"
    shape="organic-1"
    animation="breathe"
    gradient="wild"
    @click="performUltimateMagic"
    class="ultimate-magic-button"
  >
    🦄 终极魔法按钮 ✨
  </SButton>
</template>

<script setup>
const performUltimateMagic = () => {
  // 触发终极魔法效果
  console.log('🌟 终极魔法已释放！宇宙为之震撼！')
  
  // 可以在这里添加更多魔法效果：
  // - 粒子效果
  // - 音效
  // - 屏幕震动
  // - 颜色变化
}
</script>

<style>
.ultimate-magic-button:hover {
  animation: 
    glitch 0.3s ease-in-out 2,
    breathe 2s ease-in-out infinite,
    float 3s ease-in-out infinite;
  box-shadow: 
    0 0 30px rgba(16, 185, 129, 0.8),
    0 0 60px rgba(0, 0, 0, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
}
</style>
```

## 🔮 魔法 API

### Props 魔法属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `type` | `string` | `'default'` | 按钮类型：`default` `primary` `success` `warning` `danger` `magic` |
| `size` | `string` | `'medium'` | 按钮尺寸：`tiny` `small` `medium` `large` `huge` |
| `shape` | `string` | `'default'` | 按钮形状：`default` `organic-1` `organic-2` `wild` `creative` |
| `animation` | `string` | `'none'` | 动画效果：`none` `breathe` `float` `glitch` `pulse` `rotate` |
| `gradient` | `string` | `'none'` | 渐变效果：`none` `primary` `creative` `wild` `organic` `matrix` |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `loading` | `boolean` | `false` | 是否加载中 |
| `state` | `string` | `'normal'` | 按钮状态：`normal` `success` `error` `charging` `portal` |

### Events 魔法事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `click` | 点击魔法触发 | `(event: MouseEvent)` |
| `magic-start` | 魔法开始时触发 | `()` |
| `magic-end` | 魔法结束时触发 | `()` |
| `spell-cast` | 咒语施展时触发 | `(spellType: string)` |

### Slots 魔法插槽

| 插槽名 | 说明 |
|--------|------|
| `default` | 按钮内容 |
| `icon` | 按钮图标 |
| `magic-effect` | 自定义魔法效果 |

---

::: tip 🌟 魔法提示
每个魔法按钮都有隐藏的彩蛋效果！试着长按、双击或者用不同的手势与它们互动，你会发现意想不到的惊喜！
:::

::: warning 🔮 魔法警告
过度使用魔法效果可能会让用户感到眩晕。请适度使用，保持良好的用户体验。
:::

*在这里，每一次点击都是一次魔法的释放！* ✨🌿🦄
