# 构建配置优化说明

## 🚀 主要改进

### 1. **模块化配置结构**

- 将构建配置拆分为多个文件，提高可维护性
- `build.config.ts`: 构建常量和类型定义
- `sf.config.ts`: 主要的 Vite 配置文件
- `scripts/build.js`: 构建脚本

### 2. **类型安全**

- 添加了完整的 TypeScript 类型定义
- 使用接口和类型约束确保配置正确性
- 支持 IDE 智能提示和错误检查

### 3. **环境配置优化**

- 区分开发和生产环境配置
- 动态选择压缩、源码映射等选项
- 支持环境变量控制构建行为

### 4. **输出格式优化**

- **UMD**: 适用于浏览器直接引用，内联动态导入
- **CJS**: 适用于 Node.js 环境，保留模块结构
- **ES**: 适用于现代打包工具，支持 Tree-shaking

### 5. **文件命名规范**

- 统一的文件命名模式
- 添加哈希值防止缓存问题
- 分类存放资源文件

## 📁 输出目录结构

```
packages/sui/
├── dist/           # UMD 格式
│   ├── index.umd.js
│   ├── chunks/     # 代码分割文件
│   └── assets/     # 静态资源
├── lib/            # CommonJS 格式
│   ├── index.cjs
│   ├── components/ # 组件模块
│   └── assets/     # 静态资源
├── es/             # ES Module 格式
│   ├── index.js
│   ├── components/ # 组件模块
│   └── assets/     # 静态资源
└── typings/        # TypeScript 类型声明
    └── index.d.ts
```

## 🛠️ 构建命令

```bash
# 生产环境构建
npm run build

# 开发环境构建
npm run build:dev

# 监听模式构建
npm run build:watch

# 清理输出目录
npm run clean

# 构建样式文件
npm run build:style
```

## ⚡ 性能优化

### 1. **Tree-shaking 优化**

- 配置了激进的 tree-shaking 选项
- 移除未使用的代码和副作用
- 减少最终包大小

### 2. **压缩优化**

- 生产环境使用 Terser 压缩
- 移除 console 和 debugger 语句
- 兼容 Safari 10

### 3. **构建性能**

- 禁用生产环境的压缩大小报告
- 优化依赖预构建配置
- 合理的 chunk 大小警告限制

## 🔧 配置说明

### 外部依赖

```typescript
const EXTERNAL_DEPENDENCIES = ['vue', '@vue/runtime-core', '@vue/runtime-dom', '@vue/shared'];
```

### 构建目标

```typescript
const BUILD_TARGETS = ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'];
```

### Vue 优化

- 禁用 Options API 减少包大小
- 启用静态提升和缓存处理器
- 生产环境禁用开发工具

## 📝 使用建议

1. **开发阶段**: 使用 `npm run build:dev` 或 `npm run build:watch`
2. **发布前**: 使用 `npm run build` 进行完整构建
3. **调试**: 开发环境会生成 sourcemap 文件
4. **部署**: 只需要 `dist/`, `lib/`, `es/`, `typings/` 目录

## 🔍 故障排除

### 常见问题

1. **类型错误**: 确保安装了正确版本的 TypeScript 和相关类型包
2. **构建失败**: 检查 Node.js 版本是否 >= 16
3. **文件缺失**: 运行 `npm run clean` 后重新构建

### 调试技巧

1. 使用 `npm run build:dev` 查看详细错误信息
2. 检查 `build.config.ts` 中的配置常量
3. 查看构建脚本输出的文件大小信息
