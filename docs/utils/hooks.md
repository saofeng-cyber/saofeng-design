# Hooks 组合式函数

Saofeng Design 提供了一系列实用的 Vue 3 组合式函数（Composables），帮助您更高效地开发应用。

## useNameSpace

BEM 命名规范工具函数，用于生成一致的 CSS 类名。

### 基础用法

```typescript
import { useNameSpace } from '@saofeng-design/hooks'

const ns = useNameSpace('button')

// 生成类名
console.log(ns.b()) // 's-button'
console.log(ns.e('icon')) // 's-button__icon'
console.log(ns.m('primary')) // 's-button--primary'
console.log(ns.bm('primary')) // 's-button--primary'
console.log(ns.em('icon', 'large')) // 's-button__icon--large'
console.log(ns.is('disabled')) // 'is-disabled'
```

### 在组件中使用

```vue
<template>
  <button 
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      {
        [ns.is('disabled')]: disabled,
        [ns.is('loading')]: loading
      }
    ]"
  >
    <span :class="ns.e('icon')" v-if="icon">
      {{ icon }}
    </span>
    <span :class="ns.e('text')">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { useNameSpace } from '@saofeng-design/hooks'

interface Props {
  type?: 'primary' | 'default' | 'dashed'
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
  loading?: boolean
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false
})

const ns = useNameSpace('button')
</script>
```

### API

| 方法 | 说明 | 参数 | 返回值 |
|------|------|------|--------|
| `b(blockSuffix?)` | 生成块级元素类名 | `blockSuffix?: string` | `string` |
| `e(element)` | 生成元素类名 | `element: string` | `string` |
| `m(modifier?)` | 生成修饰符类名 | `modifier?: string` | `string` |
| `bm(modifier?)` | 生成块级修饰符类名 | `modifier?: string` | `string` |
| `em(element, modifier?)` | 生成元素修饰符类名 | `element: string, modifier?: string` | `string` |
| `is(state)` | 生成状态类名 | `state: string` | `string` |
| `cssVar(variable)` | 生成 CSS 变量 | `variable: string` | `string` |
| `cssVarName(variable)` | 生成 CSS 变量名 | `variable: string` | `string` |
| `cssVarBlock(variable, fallback?)` | 生成 CSS 变量值 | `variable: string, fallback?: string` | `string` |

## useBreakpoint

响应式断点检测 Hook，用于检测当前屏幕尺寸。

### 基础用法

```typescript
import { useBreakpoint } from '@saofeng-design/hooks'

const {
  isMobile,
  isTablet,
  isDesktop,
  isLarge,
  current,
  matches
} = useBreakpoint()

// 响应式值
console.log(isMobile.value) // boolean
console.log(current.value) // 'mobile' | 'tablet' | 'desktop' | 'large'

// 检测特定断点
console.log(matches('>=tablet').value) // boolean
```

### 在组件中使用

```vue
<template>
  <div :class="containerClass">
    <div v-if="!isMobile" class="sidebar">
      侧边栏内容
    </div>
    <div class="main">
      <h1 :style="titleStyle">
        {{ title }}
      </h1>
      <p>主要内容</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBreakpoint } from '@saofeng-design/hooks'

const { isMobile, isTablet, current } = useBreakpoint()

const containerClass = computed(() => ({
  'container': true,
  'container--mobile': isMobile.value,
  'container--tablet': isTablet.value
}))

const titleStyle = computed(() => ({
  fontSize: isMobile.value ? '24px' : '32px',
  marginBottom: isMobile.value ? '16px' : '24px'
}))

const title = computed(() => 
  isMobile.value ? '移动端标题' : '桌面端标题'
)
</script>
```

### 断点定义

```typescript
const breakpoints = {
  mobile: 0,      // 0px+
  tablet: 768,    // 768px+
  desktop: 1024,  // 1024px+
  large: 1440     // 1440px+
}
```

### API

| 属性/方法 | 说明 | 类型 |
|-----------|------|------|
| `isMobile` | 是否为移动端 | `Ref<boolean>` |
| `isTablet` | 是否为平板端 | `Ref<boolean>` |
| `isDesktop` | 是否为桌面端 | `Ref<boolean>` |
| `isLarge` | 是否为大屏 | `Ref<boolean>` |
| `current` | 当前断点 | `Ref<'mobile' \| 'tablet' \| 'desktop' \| 'large'>` |
| `matches(query)` | 匹配断点查询 | `(query: string) => Ref<boolean>` |

## useTheme

主题管理 Hook，用于主题切换和定制。

### 基础用法

```typescript
import { useTheme } from '@saofeng-design/hooks'

const {
  theme,
  isDark,
  toggleTheme,
  setTheme,
  updateTokens
} = useTheme()

// 切换主题
toggleTheme()

// 设置特定主题
setTheme('dark')

// 更新主题令牌
updateTokens({
  colors: {
    primary: '#722ed1'
  }
})
```

### 在组件中使用

```vue
<template>
  <div :class="themeClass">
    <button @click="toggleTheme">
      {{ isDark ? '🌞' : '🌙' }} 切换主题
    </button>
    <div class="content">
      <h1>主题演示</h1>
      <p>当前主题：{{ theme.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@saofeng-design/hooks'

const { theme, isDark, toggleTheme } = useTheme()

const themeClass = computed(() => ({
  'theme-container': true,
  'theme-container--dark': isDark.value
}))
</script>

<style scoped>
.theme-container {
  background: var(--s-color-bg-primary);
  color: var(--s-color-text-primary);
  transition: all 0.3s ease;
}

.theme-container--dark {
  background: var(--s-color-bg-primary);
  color: var(--s-color-text-primary);
}
</style>
```

### API

| 属性/方法 | 说明 | 类型 |
|-----------|------|------|
| `theme` | 当前主题配置 | `Ref<ThemeConfig>` |
| `isDark` | 是否为暗色主题 | `Ref<boolean>` |
| `toggleTheme()` | 切换主题 | `() => void` |
| `setTheme(name)` | 设置主题 | `(name: string) => void` |
| `updateTokens(tokens)` | 更新主题令牌 | `(tokens: Partial<DesignTokens>) => void` |

## useLocalStorage

本地存储 Hook，提供响应式的本地存储操作。

### 基础用法

```typescript
import { useLocalStorage } from '@saofeng-design/hooks'

// 基础用法
const [value, setValue] = useLocalStorage('key', 'default-value')

// 对象存储
const [user, setUser] = useLocalStorage('user', { name: '', age: 0 })

// 监听变化
watch(value, (newValue) => {
  console.log('值已更新:', newValue)
})
```

### 在组件中使用

```vue
<template>
  <div>
    <h2>用户设置</h2>
    <form @submit.prevent="saveSettings">
      <div>
        <label>用户名：</label>
        <input v-model="settings.username" />
      </div>
      <div>
        <label>主题：</label>
        <select v-model="settings.theme">
          <option value="light">浅色</option>
          <option value="dark">深色</option>
        </select>
      </div>
      <div>
        <label>语言：</label>
        <select v-model="settings.language">
          <option value="zh-CN">中文</option>
          <option value="en-US">English</option>
        </select>
      </div>
      <button type="submit">保存设置</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@saofeng-design/hooks'

interface UserSettings {
  username: string
  theme: 'light' | 'dark'
  language: 'zh-CN' | 'en-US'
}

const [settings, setSettings] = useLocalStorage<UserSettings>('user-settings', {
  username: '',
  theme: 'light',
  language: 'zh-CN'
})

const saveSettings = () => {
  setSettings(settings.value)
  console.log('设置已保存')
}
</script>
```

### API

| 参数 | 说明 | 类型 |
|------|------|------|
| `key` | 存储键名 | `string` |
| `defaultValue` | 默认值 | `T` |
| `options` | 配置选项 | `UseLocalStorageOptions` |

**返回值：**
- `[value, setValue]` - 响应式值和设置函数

## useEventListener

事件监听 Hook，自动管理事件监听器的添加和移除。

### 基础用法

```typescript
import { useEventListener } from '@saofeng-design/hooks'

// 监听窗口事件
useEventListener('resize', () => {
  console.log('窗口大小改变')
})

// 监听元素事件
const elementRef = ref<HTMLElement>()
useEventListener(elementRef, 'click', (event) => {
  console.log('元素被点击', event)
})
```

### 在组件中使用

```vue
<template>
  <div ref="containerRef" class="container">
    <p>鼠标位置：{{ mousePosition.x }}, {{ mousePosition.y }}</p>
    <p>窗口大小：{{ windowSize.width }} x {{ windowSize.height }}</p>
    <p>按键：{{ lastKey }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useEventListener } from '@saofeng-design/hooks'

const containerRef = ref<HTMLElement>()
const mousePosition = reactive({ x: 0, y: 0 })
const windowSize = reactive({ width: 0, height: 0 })
const lastKey = ref('')

// 监听鼠标移动
useEventListener('mousemove', (event: MouseEvent) => {
  mousePosition.x = event.clientX
  mousePosition.y = event.clientY
})

// 监听窗口大小变化
useEventListener('resize', () => {
  windowSize.width = window.innerWidth
  windowSize.height = window.innerHeight
})

// 监听键盘事件
useEventListener('keydown', (event: KeyboardEvent) => {
  lastKey.value = event.key
})

// 初始化窗口大小
windowSize.width = window.innerWidth
windowSize.height = window.innerHeight
</script>
```

### API

| 参数 | 说明 | 类型 |
|------|------|------|
| `target` | 事件目标 | `EventTarget \| Ref<EventTarget> \| string` |
| `event` | 事件名称 | `string` |
| `handler` | 事件处理函数 | `EventListener` |
| `options` | 事件选项 | `AddEventListenerOptions` |

## 自定义 Hook

您也可以基于这些基础 Hook 创建自己的组合式函数：

```typescript
// useCounter.ts
import { ref, computed } from 'vue'
import { useLocalStorage } from '@saofeng-design/hooks'

export function useCounter(initialValue = 0, key?: string) {
  const [count, setCount] = key 
    ? useLocalStorage(key, initialValue)
    : [ref(initialValue), (value: number) => { count.value = value }]

  const increment = () => setCount(count.value + 1)
  const decrement = () => setCount(count.value - 1)
  const reset = () => setCount(initialValue)

  const isPositive = computed(() => count.value > 0)
  const isNegative = computed(() => count.value < 0)
  const isZero = computed(() => count.value === 0)

  return {
    count,
    increment,
    decrement,
    reset,
    isPositive,
    isNegative,
    isZero
  }
}
```

::: tip 💡 最佳实践
1. **命名规范**：使用 `use` 前缀命名组合式函数
2. **返回对象**：返回对象而不是数组，提供更好的可读性
3. **响应式**：确保返回的值是响应式的
4. **清理资源**：在 `onUnmounted` 中清理副作用
5. **类型安全**：为 TypeScript 用户提供完整的类型定义
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
</style>
