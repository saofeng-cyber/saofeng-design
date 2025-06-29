// Saofeng Design 主题配置

import type { DesignTokens } from './tokens';
import { defaultTokens } from './tokens';

/**
 * 主题配置选项
 */
export interface ThemeConfig {
  /** 主题名称 */
  name?: string;
  /** 设计令牌 */
  tokens?: Partial<DesignTokens>;
  /** 是否启用暗色模式 */
  dark?: boolean;
  /** 自定义 CSS 变量前缀 */
  cssVarPrefix?: string;
  /** 是否压缩 CSS */
  compress?: boolean;
}

/**
 * 默认主题配置
 */
export const defaultThemeConfig: Required<ThemeConfig> = {
  name: 'default',
  tokens: defaultTokens,
  dark: false,
  cssVarPrefix: 's',
  compress: false,
};

/**
 * 创建主题配置
 * @param config 主题配置选项
 * @returns 完整的主题配置
 */
export function createThemeConfig(config: ThemeConfig = {}): Required<ThemeConfig> {
  return {
    ...defaultThemeConfig,
    ...config,
    tokens: {
      ...defaultTokens,
      ...config.tokens,
    },
  };
}

/**
 * 生成 CSS 变量
 * @param tokens 设计令牌
 * @param prefix CSS 变量前缀
 * @returns CSS 变量字符串
 */
export function generateCSSVariables(tokens: DesignTokens, prefix: string = 's'): string {
  const cssVars: string[] = [];

  // 颜色变量
  Object.entries(tokens.colors).forEach(([key, value]) => {
    const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    cssVars.push(`  --${prefix}-color-${varName}: ${value};`);
  });

  // 字体变量
  Object.entries(tokens.fonts).forEach(([key, value]) => {
    const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    cssVars.push(`  --${prefix}-font-${varName}: ${value};`);
  });

  // 尺寸变量
  Object.entries(tokens.sizes).forEach(([key, value]) => {
    const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    cssVars.push(`  --${prefix}-size-${varName}: ${value};`);
  });

  // 阴影变量
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    cssVars.push(`  --${prefix}-shadow-${key}: ${value};`);
  });

  // 动画变量
  Object.entries(tokens.animations).forEach(([key, value]) => {
    const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    cssVars.push(`  --${prefix}-animation-${varName}: ${value};`);
  });

  // Z-index 变量
  Object.entries(tokens.zIndex).forEach(([key, value]) => {
    const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    cssVars.push(`  --${prefix}-z-index-${varName}: ${value};`);
  });

  // 断点变量
  Object.entries(tokens.breakpoints).forEach(([key, value]) => {
    cssVars.push(`  --${prefix}-breakpoint-${key}: ${value};`);
  });

  return `:root {\n${cssVars.join('\n')}\n}`;
}

/**
 * 暗色主题令牌
 */
export const darkTokens: Partial<DesignTokens> = {
  colors: {
    // 主色调保持不变
    primary: '#1890ff',
    primaryHover: '#40a9ff',
    primaryActive: '#096dd9',
    primaryOutline: 'rgba(24, 144, 255, 0.2)',

    // 功能色保持不变
    success: '#52c41a',
    successHover: '#73d13d',
    successActive: '#389e0d',
    successOutline: 'rgba(82, 196, 26, 0.2)',

    warning: '#faad14',
    warningHover: '#ffc53d',
    warningActive: '#d48806',
    warningOutline: 'rgba(250, 173, 20, 0.2)',

    danger: '#ff4d4f',
    dangerHover: '#ff7875',
    dangerActive: '#d9363e',
    dangerOutline: 'rgba(255, 77, 79, 0.2)',

    info: '#1890ff',
    infoHover: '#40a9ff',
    infoActive: '#096dd9',
    infoOutline: 'rgba(24, 144, 255, 0.2)',

    // 中性色反转
    white: '#000000',
    black: '#ffffff',
    gray1: '#1f1f1f',
    gray2: '#262626',
    gray3: '#434343',
    gray4: '#595959',
    gray5: '#8c8c8c',
    gray6: '#bfbfbf',
    gray7: '#d9d9d9',
    gray8: '#f0f0f0',
    gray9: '#f5f5f5',
    gray10: '#fafafa',

    // 文本颜色反转
    textPrimary: 'rgba(255, 255, 255, 0.88)',
    textSecondary: 'rgba(255, 255, 255, 0.65)',
    textTertiary: 'rgba(255, 255, 255, 0.45)',
    textQuaternary: 'rgba(255, 255, 255, 0.25)',
    textInverse: '#000000',

    // 链接颜色保持不变
    link: '#1890ff',
    linkHover: '#40a9ff',
    linkActive: '#096dd9',

    // 边框颜色调整
    border: '#434343',
    borderSplit: '#262626',
    borderInverse: '#000000',

    // 背景颜色调整
    backgroundLight: '#1f1f1f',
    backgroundBase: '#262626',
    backgroundDark: '#434343',

    // 禁用状态颜色调整
    disabled: 'rgba(255, 255, 255, 0.25)',
    disabledBg: '#262626',
    disabledBorder: '#434343',
  },
};

/**
 * 创建暗色主题配置
 * @param config 主题配置选项
 * @returns 暗色主题配置
 */
export function createDarkThemeConfig(config: ThemeConfig = {}): Required<ThemeConfig> {
  return createThemeConfig({
    ...config,
    dark: true,
    tokens: {
      ...defaultTokens,
      ...darkTokens,
      ...config.tokens,
    },
  });
}

/**
 * 主题配置工具函数
 */
export const configUtils = {
  /**
   * 获取 CSS 变量名
   * @param name 变量名
   * @param prefix 前缀
   * @returns CSS 变量名
   */
  getCSSVarName(name: string, prefix: string = 's'): string {
    return `--${prefix}-${name}`;
  },

  /**
   * 获取 CSS 变量值
   * @param name 变量名
   * @param prefix 前缀
   * @param fallback 回退值
   * @returns CSS 变量值
   */
  getCSSVarValue(name: string, prefix: string = 's', fallback?: string): string {
    const varName = this.getCSSVarName(name, prefix);
    return fallback ? `var(${varName}, ${fallback})` : `var(${varName})`;
  },

  /**
   * 生成响应式断点媒体查询
   * @param breakpoint 断点名称
   * @param tokens 设计令牌
   * @returns 媒体查询字符串
   */
  getMediaQuery(breakpoint: keyof DesignTokens['breakpoints'], tokens: DesignTokens): string {
    return `@media (min-width: ${tokens.breakpoints[breakpoint]})`;
  },

  /**
   * 生成组件类名
   * @param component 组件名
   * @param modifier 修饰符
   * @param namespace 命名空间
   * @returns 类名
   */
  getClassName(component: string, modifier?: string, namespace: string = 's'): string {
    const base = `${namespace}-${component}`;
    return modifier ? `${base}--${modifier}` : base;
  },
};
