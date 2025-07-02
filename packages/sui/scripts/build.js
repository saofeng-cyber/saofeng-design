#!/usr/bin/env node

/**
 * 构建脚本
 * 支持不同的构建模式和环境
 */

import { execSync } from 'child_process';
import { existsSync, rmSync, readdirSync, statSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

// ES 模块中获取 __dirname 的替代方案
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 构建配置
const BUILD_MODES = {
  dev: {
    env: 'development',
    description: '开发模式构建',
  },
  prod: {
    env: 'production',
    description: '生产模式构建',
  },
  watch: {
    env: 'development',
    description: '监听模式构建',
    watch: true,
  },
};

// 解析命令行参数
const args = process.argv.slice(2);
const mode = args[0] || 'prod';
const config = BUILD_MODES[mode];

if (!config) {
  console.error(`❌ 未知的构建模式: ${mode}`);
  console.log('可用的构建模式:');
  Object.entries(BUILD_MODES).forEach(([key, value]) => {
    console.log(`  ${key}: ${value.description}`);
  });
  process.exit(1);
}

// 设置环境变量
process.env.NODE_ENV = config.env;

// 构建命令
const configPath = resolve(__dirname, '../build/sf.config.ts');
let buildCommand = `vite build -c ${configPath}`;

if (config.watch) {
  buildCommand += ' --watch';
}

// 清理输出目录
const outputDirs = ['dist', 'lib', 'es', 'typings'];
console.log('🧹 清理输出目录...');
outputDirs.forEach(dir => {
  const dirPath = resolve(__dirname, '..', dir);
  if (existsSync(dirPath)) {
    rmSync(dirPath, { recursive: true, force: true });
    console.log(`  ✅ 已清理: ${dir}`);
  }
});

// 执行构建
console.log(`🚀 开始${config.description}...`);
console.log(`📦 环境: ${config.env}`);
console.log(`🔧 命令: ${buildCommand}`);
console.log('');

try {
  execSync(buildCommand, {
    stdio: 'inherit',
    cwd: resolve(__dirname, '..'),
  });

  if (!config.watch) {
    console.log('');
    console.log('✅ 构建完成！');

    // 显示输出文件信息
    console.log('📁 输出文件:');
    outputDirs.forEach(dir => {
      const dirPath = resolve(__dirname, '..', dir);
      if (existsSync(dirPath)) {
        const files = readdirSync(dirPath, { recursive: true });
        files.forEach(file => {
          const filePath = join(dirPath, file);
          const stats = statSync(filePath);
          if (stats.isFile()) {
            const size = (stats.size / 1024).toFixed(2);
            console.log(`  ${dir}/${file} (${size} KB)`);
          }
        });
      }
    });
  }
} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}
