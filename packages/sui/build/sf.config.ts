import { fileURLToPath } from 'node:url';

import { SfRollupPlugin } from '@saofeng-design/plugins';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import {
  EXTERNAL_DEPENDENCIES,
  BUILD_TARGETS,
  OUTPUT_DIRS,
  FILE_PATTERNS,
  BUILD_OPTIMIZATION,
  DEV_CONFIG,
  PROD_CONFIG,
  type BuildFormat,
} from './build.config';

// 环境变量
const isProduction = process.env.NODE_ENV === 'production';

// 输出配置类型定义
interface OutputConfig {
  format: 'cjs' | 'es';
  dir: string;
  exports: 'named';
  entryFileNames?: string;
  chunkFileNames?: string;
  assetFileNames?: string;
  preserveModules?: boolean;
  preserveModulesRoot?: string;
}

// 通用的输出配置
const createOutputConfig = (format: BuildFormat): OutputConfig => {
  const baseConfig = {
    exports: 'named' as const,
  };

  switch (format) {
    case 'cjs':
      return {
        ...baseConfig,
        format: 'cjs' as const,
        dir: OUTPUT_DIRS.cjs,
        entryFileNames: FILE_PATTERNS.entry.cjs,
        chunkFileNames: FILE_PATTERNS.chunk.cjs,
        assetFileNames: FILE_PATTERNS.asset.cjs,
        preserveModules: true,
        preserveModulesRoot: '.',
      };

    case 'es':
      return {
        ...baseConfig,
        format: 'es' as const,
        dir: OUTPUT_DIRS.es,
        entryFileNames: FILE_PATTERNS.entry.es,
        chunkFileNames: FILE_PATTERNS.chunk.es,
        assetFileNames: FILE_PATTERNS.asset.es,
        preserveModules: true,
        preserveModulesRoot: '.',
      };

    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};

export default defineConfig({
  build: {
    // 资源内联限制，小于此大小的资源会被内联为 base64
    assetsInlineLimit: BUILD_OPTIMIZATION.assetsInlineLimit,

    // 构建前清空输出目录
    emptyOutDir: true,

    // 压缩配置 - 根据环境选择
    minify: isProduction ? PROD_CONFIG.minify : DEV_CONFIG.minify,

    // 压缩大小报告配置
    reportCompressedSize: isProduction
      ? PROD_CONFIG.reportCompressedSize
      : DEV_CONFIG.reportCompressedSize,

    // Chunk 大小警告限制
    chunkSizeWarningLimit: BUILD_OPTIMIZATION.chunkSizeWarningLimit,

    // 禁用 CSS 代码分割，确保样式文件正确导出
    cssCodeSplit: false,

    // 构建目标 - 支持现代浏览器
    target: [...BUILD_TARGETS],

    rollupOptions: {
      // 外部依赖
      external: (id: string) => {
        // 更灵活的外部依赖判断
        if (EXTERNAL_DEPENDENCIES.some(dep => id === dep || id.startsWith(`${dep}/`))) {
          return true;
        }
        // 将主题包的CSS文件标记为外部依赖，避免打包进组件库
        if (id.includes('@saofeng-design/theme') && id.endsWith('.css')) {
          return true;
        }
        return false;
      },

      // 输出配置
      output: [createOutputConfig('cjs'), createOutputConfig('es')],

      // 优化配置
      treeshake: BUILD_OPTIMIZATION.treeshake,

      // 输入配置
      input: {
        index: fileURLToPath(new URL('../index.ts', import.meta.url)),
      },
    },

    // 库配置
    lib: {
      entry: fileURLToPath(new URL('../index.ts', import.meta.url)),
      name: 'SfUI',
    },

    // 源码映射配置 - 根据环境选择
    sourcemap: isProduction ? PROD_CONFIG.sourcemap : DEV_CONFIG.sourcemap,
  },

  plugins: [
    vue({
      // 优化 Vue 插件配置
      isProduction,
      template: {
        compilerOptions: {
          // 启用生产模式优化
          hoistStatic: isProduction,
          cacheHandlers: isProduction,
        },
      },
    }),

    dts({
      // 类型声明文件配置
      include: ['index.ts', 'components/**/*.ts', 'components/**/*.vue'],
      outDir: OUTPUT_DIRS.types,
      cleanVueFileName: true,
      rollupTypes: true,
    }),

    SfRollupPlugin(),
  ],

  // 优化依赖预构建
  optimizeDeps: {
    exclude: ['vue'],
    include: [], // 可以添加需要预构建的依赖
  },

  // 定义全局常量
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: !isProduction,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },

  // 解析配置
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../', import.meta.url)),
      '~': fileURLToPath(new URL('../components', import.meta.url)),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
  },

  // CSS 预处理器配置
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 可以在这里定义 Less 变量
        },
      },
    },
  },
});
