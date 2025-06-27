import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import SfRollupPlugin from "./plugin";

export default defineConfig({
  build: {
    assetsInlineLimit: 4096,
    //打包文件目录
    emptyOutDir: true,
    //压缩
    minify: true,
    reportCompressedSize: true, // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    chunkSizeWarningLimit: 500, // chunk 大小警告的限制（以 kbs 为单位）

    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "umd",
          dir: "dist",
          name: "sf-ui",
          exports: "named",
          inlineDynamicImports: false,
          entryFileNames: "index.umd.js",
          chunkFileNames: "[name].js",
          assetFileNames: "style.css",
          manualChunks: undefined,
          globals: {
            vue: "Vue",
          },
        },
        {
          format: "cjs",
          dir: "lib",
          exports: "named",
          chunkFileNames: undefined,
          entryFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
          preserveModules: true, // 保留模块结构
          preserveModulesRoot: ".", // 保留模块根目录
          inlineDynamicImports: false,
          globals: {
            vue: "Vue",
          },
        },
        {
          format: "es",
          manualChunks: undefined,
          exports: "named",
          dir: "es",
          preserveModules: true, // 保留模块结构
          preserveModulesRoot: ".", // 保留模块根目录
          entryFileNames: "[name].js",
          chunkFileNames: undefined,
          inlineDynamicImports: false, // 将动态导入的模块内联到导入它们的模块中
          assetFileNames: "[name].[ext]",
          globals: {
            vue: "Vue",
          },
        },
      ],
    },

    lib: {
      entry: resolve(__dirname, "../index.ts"),
      name: "sf-ui",
    },
  },
  plugins: [
    vue(),
    dts({
      include: ["index.ts"],
      outDir: ["typings"],
    }),
    SfRollupPlugin(),
  ],
});
