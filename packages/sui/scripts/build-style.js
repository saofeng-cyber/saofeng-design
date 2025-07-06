#!/usr/bin/env node

/**
 * 样式构建脚本
 * 专门处理CSS文件的复制和处理
 */

import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// ES 模块中获取 __dirname 的替代方案
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 路径配置
const PATHS = {
  // 主题包的CSS文件路径
  themeCss: resolve(__dirname, '../../../packages/theme/dist/index.css'),
  // 输出目录
  outputDirs: {
    dist: resolve(__dirname, '../dist'),
  },
  // 输出文件名
  outputFiles: {
    dist: resolve(__dirname, '../dist/index.css'),
  },
};

/**
 * 确保目录存在
 * @param {string} dirPath 目录路径
 */
function ensureDir(dirPath) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
    console.log(`  ✅ 创建目录: ${dirPath}`);
  }
}

/**
 * 复制CSS文件
 * @param {string} source 源文件路径
 * @param {string} target 目标文件路径
 */
function copyCssFile(source, target) {
  try {
    if (!existsSync(source)) {
      console.warn(`⚠️  源文件不存在: ${source}`);
      return false;
    }

    // 确保目标目录存在
    ensureDir(dirname(target));

    // 复制文件
    copyFileSync(source, target);
    console.log(`  ✅ 复制样式文件: ${target}`);
    return true;
  } catch (error) {
    console.error(`❌ 复制文件失败: ${error.message}`);
    return false;
  }
}

/**
 * 主构建函数
 */
function buildStyles() {
  console.log('🎨 开始构建样式文件...');
  console.log('');

  let success = true;

  // 复制到 DIST 模块目录

  if (!copyCssFile(PATHS.themeCss, PATHS.outputFiles.dist)) {
    success = false;
  }

  console.log('');
  if (success) {
    console.log('✅ 样式文件构建完成！');
    console.log('📁 输出文件:');
    console.log(`  DIST: ${PATHS.outputFiles.dist}`);
  } else {
    console.error('❌ 样式文件构建失败！');
    process.exit(1);
  }
}

// 执行构建
buildStyles();
