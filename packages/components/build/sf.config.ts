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
          format: "es",
          banner: "#!/usr/bin/env node",
          manualChunks: undefined,
          dir: "es",
          preserveModules: true, // 保留模块结构
          chunkFileNames: "[name].js",
          entryFileNames: "[name].js",
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
      outDir: ["es"],
    }),
    SfRollupPlugin(),
  ],
});
