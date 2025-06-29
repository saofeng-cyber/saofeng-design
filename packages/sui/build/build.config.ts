/**
 * 构建配置常量
 */

// 支持的构建格式
export const BUILD_FORMATS = ['umd', 'cjs', 'es'] as const;
export type BuildFormat = (typeof BUILD_FORMATS)[number];

// 外部依赖配置
export const EXTERNAL_DEPENDENCIES = [
  'vue',
  '@vue/runtime-core',
  '@vue/runtime-dom',
  '@vue/shared',
] as const;

// 全局变量映射
export const GLOBAL_VARIABLES = {
  vue: 'Vue',
  '@vue/runtime-core': 'Vue',
  '@vue/runtime-dom': 'Vue',
  '@vue/shared': 'Vue',
} as const;

// 构建目标浏览器
export const BUILD_TARGETS = ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'] as const;

// 输出目录配置
export const OUTPUT_DIRS = {
  umd: 'dist',
  cjs: 'lib',
  es: 'es',
  types: 'typings',
} as const;

// 文件命名模式
export const FILE_PATTERNS = {
  entry: {
    umd: 'index.umd.js',
    cjs: '[name].cjs',
    es: '[name].js',
  },
  chunk: {
    umd: 'chunks/[name]-[hash].js',
    cjs: '[name]/[name]-[hash].cjs',
    es: '[name]/[name]-[hash].js',
  },
  asset: {
    umd: 'assets/[name].[ext]',
    cjs: 'assets/[name].[ext]',
    es: 'assets/[name].[ext]',
  },
} as const;

// 构建优化配置
export const BUILD_OPTIMIZATION = {
  // 资源内联限制 (bytes)
  assetsInlineLimit: 4096,

  // Chunk 大小警告限制 (KB)
  chunkSizeWarningLimit: 1000,

  // Tree-shaking 配置
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false,
  },
} as const;

// 开发环境配置
export const DEV_CONFIG = {
  sourcemap: true,
  minify: false,
  reportCompressedSize: true,
} as const;

// 生产环境配置
export const PROD_CONFIG = {
  sourcemap: false,
  minify: 'terser' as const,
  reportCompressedSize: false,
} as const;
