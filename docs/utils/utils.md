# Utils 工具函数

Saofeng Design 提供了一系列实用的工具函数，帮助您更高效地开发应用。

## withInstall

为 Vue 组件添加安装方法的工具函数，使组件可以通过 `app.use()` 进行全局注册。

### 基础用法

```typescript
import { withInstall } from '@saofeng-design/utils'
import Button from './Button.vue'

// 为组件添加 install 方法
const SButton = withInstall(Button)

export default SButton
export { SButton }
```

### 在插件中使用

```typescript
// components/index.ts
import { withInstall } from '@saofeng-design/utils'
import Button from './Button/Button.vue'
import Alert from './Alert/Alert.vue'

// 为每个组件添加 install 方法
export const SButton = withInstall(Button)
export const SAlert = withInstall(Alert)

// 创建插件
export default {
  install(app: App) {
    app.use(SButton)
    app.use(SAlert)
  }
}
```

### 使用组件

```typescript
// main.ts
import { createApp } from 'vue'
import { SButton } from '@saofeng-design/components'
import App from './App.vue'

const app = createApp(App)

// 全局注册单个组件
app.use(SButton)

// 或者注册所有组件
// app.use(SaofengDesign)

app.mount('#app')
```

### API

| 参数 | 说明 | 类型 |
|------|------|------|
| `component` | Vue 组件 | `T extends ComponentType` |

**返回值：** `SFCWithInstall<T>` - 添加了 install 方法的组件

## 类型工具

### ComponentType

组件基本类型约束，确保组件至少有 name 属性。

```typescript
export interface ComponentType {
  name: string
}
```

### SFCWithInstall

为组件添加 Vue 插件安装功能的类型。

```typescript
export type SFCWithInstall<T extends ComponentType> = T & Plugin
```

## 字符串工具

### camelCase

将字符串转换为驼峰命名。

```typescript
import { camelCase } from '@saofeng-design/utils'

camelCase('hello-world') // 'helloWorld'
camelCase('hello_world') // 'helloWorld'
camelCase('hello world') // 'helloWorld'
camelCase('HelloWorld') // 'helloWorld'
```

### kebabCase

将字符串转换为短横线命名。

```typescript
import { kebabCase } from '@saofeng-design/utils'

kebabCase('helloWorld') // 'hello-world'
kebabCase('HelloWorld') // 'hello-world'
kebabCase('hello_world') // 'hello-world'
kebabCase('hello world') // 'hello-world'
```

### pascalCase

将字符串转换为帕斯卡命名。

```typescript
import { pascalCase } from '@saofeng-design/utils'

pascalCase('hello-world') // 'HelloWorld'
pascalCase('hello_world') // 'HelloWorld'
pascalCase('hello world') // 'HelloWorld'
pascalCase('helloWorld') // 'HelloWorld'
```

## 对象工具

### deepClone

深度克隆对象。

```typescript
import { deepClone } from '@saofeng-design/utils'

const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'swimming']
}

const cloned = deepClone(original)
cloned.address.city = 'Los Angeles'

console.log(original.address.city) // 'New York'
console.log(cloned.address.city) // 'Los Angeles'
```

### deepMerge

深度合并对象。

```typescript
import { deepMerge } from '@saofeng-design/utils'

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
}

const obj2 = {
  b: {
    d: 4,
    e: 5
  },
  f: 6
}

const merged = deepMerge(obj1, obj2)
// 结果：
// {
//   a: 1,
//   b: {
//     c: 2,
//     d: 4,
//     e: 5
//   },
//   f: 6
// }
```

### pick

从对象中选择指定的属性。

```typescript
import { pick } from '@saofeng-design/utils'

const obj = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  phone: '123-456-7890'
}

const picked = pick(obj, ['name', 'email'])
// 结果：{ name: 'John', email: 'john@example.com' }
```

### omit

从对象中排除指定的属性。

```typescript
import { omit } from '@saofeng-design/utils'

const obj = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  phone: '123-456-7890'
}

const omitted = omit(obj, ['age', 'phone'])
// 结果：{ name: 'John', email: 'john@example.com' }
```

## 数组工具

### unique

数组去重。

```typescript
import { unique } from '@saofeng-design/utils'

// 基础类型去重
unique([1, 2, 2, 3, 3, 4]) // [1, 2, 3, 4]
unique(['a', 'b', 'b', 'c']) // ['a', 'b', 'c']

// 对象数组去重（根据指定属性）
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },
  { id: 3, name: 'Bob' }
]

unique(users, 'id')
// 结果：[{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }]
```

### chunk

将数组分割成指定大小的块。

```typescript
import { chunk } from '@saofeng-design/utils'

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// 结果：[[1, 2, 3], [4, 5, 6], [7, 8]]

chunk(['a', 'b', 'c', 'd', 'e'], 2)
// 结果：[['a', 'b'], ['c', 'd'], ['e']]
```

### flatten

扁平化数组。

```typescript
import { flatten } from '@saofeng-design/utils'

// 一层扁平化
flatten([1, [2, 3], [4, [5, 6]]])
// 结果：[1, 2, 3, 4, [5, 6]]

// 深度扁平化
flatten([1, [2, 3], [4, [5, 6]]], true)
// 结果：[1, 2, 3, 4, 5, 6]
```

## 函数工具

### debounce

防抖函数，在指定时间内只执行最后一次调用。

```typescript
import { debounce } from '@saofeng-design/utils'

const handleSearch = debounce((query: string) => {
  console.log('搜索:', query)
}, 300)

// 在 300ms 内多次调用，只会执行最后一次
handleSearch('a')
handleSearch('ab')
handleSearch('abc') // 只有这次会执行
```

### throttle

节流函数，在指定时间内最多执行一次。

```typescript
import { throttle } from '@saofeng-design/utils'

const handleScroll = throttle(() => {
  console.log('滚动事件')
}, 100)

// 每 100ms 最多执行一次
window.addEventListener('scroll', handleScroll)
```

### once

确保函数只执行一次。

```typescript
import { once } from '@saofeng-design/utils'

const initialize = once(() => {
  console.log('初始化')
  // 初始化逻辑
})

initialize() // 输出：初始化
initialize() // 不会执行
initialize() // 不会执行
```

## 类型判断

### isString

判断是否为字符串。

```typescript
import { isString } from '@saofeng-design/utils'

isString('hello') // true
isString(123) // false
isString(null) // false
```

### isNumber

判断是否为数字。

```typescript
import { isNumber } from '@saofeng-design/utils'

isNumber(123) // true
isNumber('123') // false
isNumber(NaN) // false
```

### isObject

判断是否为对象。

```typescript
import { isObject } from '@saofeng-design/utils'

isObject({}) // true
isObject([]) // false
isObject(null) // false
isObject('hello') // false
```

### isArray

判断是否为数组。

```typescript
import { isArray } from '@saofeng-design/utils'

isArray([]) // true
isArray([1, 2, 3]) // true
isArray({}) // false
isArray('hello') // false
```

### isFunction

判断是否为函数。

```typescript
import { isFunction } from '@saofeng-design/utils'

isFunction(() => {}) // true
isFunction(function() {}) // true
isFunction('hello') // false
isFunction({}) // false
```

### isEmpty

判断值是否为空。

```typescript
import { isEmpty } from '@saofeng-design/utils'

isEmpty('') // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty(0) // false
isEmpty('hello') // false
isEmpty([1, 2, 3]) // false
```

## DOM 工具

### addClass

为元素添加 CSS 类。

```typescript
import { addClass } from '@saofeng-design/utils'

const element = document.getElementById('myElement')
addClass(element, 'active')
addClass(element, ['highlight', 'selected'])
```

### removeClass

移除元素的 CSS 类。

```typescript
import { removeClass } from '@saofeng-design/utils'

const element = document.getElementById('myElement')
removeClass(element, 'active')
removeClass(element, ['highlight', 'selected'])
```

### hasClass

检查元素是否包含指定的 CSS 类。

```typescript
import { hasClass } from '@saofeng-design/utils'

const element = document.getElementById('myElement')
hasClass(element, 'active') // boolean
```

### toggleClass

切换元素的 CSS 类。

```typescript
import { toggleClass } from '@saofeng-design/utils'

const element = document.getElementById('myElement')
toggleClass(element, 'active')
toggleClass(element, 'highlight', true) // 强制添加
toggleClass(element, 'selected', false) // 强制移除
```

## 数学工具

### clamp

将数值限制在指定范围内。

```typescript
import { clamp } from '@saofeng-design/utils'

clamp(5, 1, 10) // 5
clamp(-5, 1, 10) // 1
clamp(15, 1, 10) // 10
```

### random

生成指定范围内的随机数。

```typescript
import { random } from '@saofeng-design/utils'

random(1, 10) // 1-10 之间的随机整数
random(1, 10, true) // 1-10 之间的随机浮点数
```

### round

四舍五入到指定小数位。

```typescript
import { round } from '@saofeng-design/utils'

round(3.14159, 2) // 3.14
round(3.14159, 0) // 3
round(3.14159, 4) // 3.1416
```

## 使用示例

### 在组件中使用

```vue
<template>
  <div class="search-container">
    <input 
      v-model="searchQuery"
      @input="handleSearch"
      placeholder="搜索..."
    />
    <div v-if="loading" class="loading">搜索中...</div>
    <ul v-else class="results">
      <li v-for="item in results" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { debounce, isString, isEmpty } from '@saofeng-design/utils'

const searchQuery = ref('')
const results = ref([])
const loading = ref(false)

// 防抖搜索函数
const debouncedSearch = debounce(async (query: string) => {
  if (isEmpty(query)) {
    results.value = []
    return
  }

  loading.value = true
  try {
    // 模拟 API 调用
    const response = await fetch(`/api/search?q=${query}`)
    const data = await response.json()
    results.value = data.results
  } catch (error) {
    console.error('搜索失败:', error)
  } finally {
    loading.value = false
  }
}, 300)

const handleSearch = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (isString(target.value)) {
    debouncedSearch(target.value)
  }
}

// 监听搜索查询变化
watch(searchQuery, (newQuery) => {
  debouncedSearch(newQuery)
})
</script>
```

::: tip 💡 最佳实践
1. **按需导入**：只导入需要的工具函数，减少包体积
2. **类型安全**：使用 TypeScript 时充分利用类型定义
3. **性能考虑**：对于频繁调用的函数，考虑使用防抖或节流
4. **错误处理**：在使用工具函数时添加适当的错误处理
5. **测试覆盖**：为使用工具函数的代码编写测试
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
