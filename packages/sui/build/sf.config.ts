import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import dts from 'vite-plugin-dts';
import SfRollupPlugin from './plugin';
import {
  EXTERNAL_DEPENDENCIES,
  GLOBAL_VARIABLES,
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
  format: 'umd' | 'cjs' | 'es';
  dir: string;
  exports: 'named';
  globals: Record<string, string>;
  entryFileNames?: string;
  chunkFileNames?: string;
  assetFileNames?: string;
  name?: string;
  preserveModules?: boolean;
  preserveModulesRoot?: string;
  inlineDynamicImports?: boolean;
}

// 通用的输出配置
const createOutputConfig = (format: BuildFormat): OutputConfig => {
  const baseConfig = {
    exports: 'named' as const,
    globals: GLOBAL_VARIABLES,
  };

  switch (format) {
    case 'umd':
      return {
        ...baseConfig,
        format: 'umd' as const,
        dir: OUTPUT_DIRS.umd,
        name: 'SfUI',
        entryFileNames: FILE_PATTERNS.entry.umd,
        chunkFileNames: FILE_PATTERNS.chunk.umd,
        assetFileNames: FILE_PATTERNS.asset.umd,
        inlineDynamicImports: true, // UMD 格式内联动态导入
      };

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

    // 启用 CSS 代码分割
    cssCodeSplit: true,

    // 构建目标 - 支持现代浏览器
    target: [...BUILD_TARGETS],

    rollupOptions: {
      // 外部依赖
      external: (id: string) => {
        // 更灵活的外部依赖判断
        return EXTERNAL_DEPENDENCIES.some((dep) => id === dep || id.startsWith(`${dep}/`));
      },

      // 输出配置
      output: [createOutputConfig('umd'), createOutputConfig('cjs'), createOutputConfig('es')],

      // 优化配置
      treeshake: BUILD_OPTIMIZATION.treeshake,

      // 输入配置
      input: {
        index: '../index.ts',
      },
    },

    // 库配置
    lib: {
      entry: '../index.ts',
      name: 'SfUI',
      formats: ['umd', 'cjs', 'es'],
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
