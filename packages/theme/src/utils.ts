// Saofeng Design 主题工具函数

import type { DesignTokens } from './tokens';

/**
 * 颜色工具函数
 */
export const colorUtils = {
  /**
   * 将十六进制颜色转换为 RGB
   * @param hex 十六进制颜色值
   * @returns RGB 颜色对象
   */
  hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  },

  /**
   * 将 RGB 颜色转换为十六进制
   * @param r 红色值
   * @param g 绿色值
   * @param b 蓝色值
   * @returns 十六进制颜色值
   */
  rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  },

  /**
   * 生成颜色的透明度变体
   * @param color 颜色值
   * @param alpha 透明度 (0-1)
   * @returns RGBA 颜色值
   */
  withAlpha(color: string, alpha: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  },

  /**
   * 生成颜色的亮度变体
   * @param color 颜色值
   * @param amount 亮度调整量 (-100 到 100)
   * @returns 调整后的颜色值
   */
  lighten(color: string, amount: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const factor = amount / 100;
    const r = Math.min(255, Math.max(0, rgb.r + (255 - rgb.r) * factor));
    const g = Math.min(255, Math.max(0, rgb.g + (255 - rgb.g) * factor));
    const b = Math.min(255, Math.max(0, rgb.b + (255 - rgb.b) * factor));

    return this.rgbToHex(Math.round(r), Math.round(g), Math.round(b));
  },

  /**
   * 生成颜色的暗度变体
   * @param color 颜色值
   * @param amount 暗度调整量 (-100 到 100)
   * @returns 调整后的颜色值
   */
  darken(color: string, amount: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const factor = amount / 100;
    const r = Math.min(255, Math.max(0, rgb.r * (1 - factor)));
    const g = Math.min(255, Math.max(0, rgb.g * (1 - factor)));
    const b = Math.min(255, Math.max(0, rgb.b * (1 - factor)));

    return this.rgbToHex(Math.round(r), Math.round(g), Math.round(b));
  },

  /**
   * 生成颜色调色板
   * @param baseColor 基础颜色
   * @returns 颜色调色板
   */
  generatePalette(baseColor: string): {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  } {
    return {
      50: this.lighten(baseColor, 40),
      100: this.lighten(baseColor, 30),
      200: this.lighten(baseColor, 20),
      300: this.lighten(baseColor, 10),
      400: this.lighten(baseColor, 5),
      500: baseColor,
      600: this.darken(baseColor, 10),
      700: this.darken(baseColor, 20),
      800: this.darken(baseColor, 30),
      900: this.darken(baseColor, 40),
    };
  },
};

/**
 * 尺寸工具函数
 */
export const sizeUtils = {
  /**
   * 将像素值转换为 rem
   * @param px 像素值
   * @param baseFontSize 基础字体大小，默认 16px
   * @returns rem 值
   */
  pxToRem(px: number, baseFontSize: number = 16): string {
    return `${px / baseFontSize}rem`;
  },

  /**
   * 将 rem 值转换为像素
   * @param rem rem 值
   * @param baseFontSize 基础字体大小，默认 16px
   * @returns 像素值
   */
  remToPx(rem: number, baseFontSize: number = 16): number {
    return rem * baseFontSize;
  },

  /**
   * 生成响应式尺寸
   * @param sizes 不同断点的尺寸
   * @param breakpoints 断点配置
   * @returns CSS 媒体查询字符串
   */
  generateResponsiveSizes(
    sizes: Record<string, string>,
    breakpoints: Record<string, string>,
  ): string {
    const queries: string[] = [];

    Object.entries(sizes).forEach(([breakpoint, size]) => {
      if (breakpoints[breakpoint]) {
        queries.push(`@media (min-width: ${breakpoints[breakpoint]}) { font-size: ${size}; }`);
      }
    });

    return queries.join('\n');
  },
};

/**
 * 动画工具函数
 */
export const animationUtils = {
  /**
   * 生成过渡动画
   * @param properties 动画属性
   * @param duration 动画时长
   * @param easing 缓动函数
   * @param delay 延迟时间
   * @returns CSS transition 值
   */
  createTransition(
    properties: string | string[],
    duration: string = '0.3s',
    easing: string = 'ease',
    delay: string = '0s',
  ): string {
    const props = Array.isArray(properties) ? properties : [properties];
    return props.map((prop) => `${prop} ${duration} ${easing} ${delay}`).join(', ');
  },

  /**
   * 生成关键帧动画
   * @param name 动画名称
   * @param keyframes 关键帧
   * @returns CSS keyframes 字符串
   */
  createKeyframes(name: string, keyframes: Record<string, Record<string, string>>): string {
    const frames = Object.entries(keyframes)
      .map(([percent, styles]) => {
        const styleStr = Object.entries(styles)
          .map(([prop, value]) => `${prop}: ${value};`)
          .join(' ');
        return `  ${percent} { ${styleStr} }`;
      })
      .join('\n');

    return `@keyframes ${name} {\n${frames}\n}`;
  },
};

/**
 * 主题工具函数
 */
export const themeUtils = {
  /**
   * 深度合并对象
   * @param target 目标对象
   * @param source 源对象
   * @returns 合并后的对象
   */
  deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
    const result = { ...target };

    Object.keys(source).forEach((key) => {
      const sourceValue = source[key];
      const targetValue = result[key];

      if (
        sourceValue &&
        typeof sourceValue === 'object' &&
        !Array.isArray(sourceValue) &&
        targetValue &&
        typeof targetValue === 'object' &&
        !Array.isArray(targetValue)
      ) {
        result[key] = this.deepMerge(targetValue, sourceValue);
      } else {
        result[key] = sourceValue as any;
      }
    });

    return result;
  },

  /**
   * 验证设计令牌
   * @param tokens 设计令牌
   * @returns 验证结果
   */
  validateTokens(tokens: Partial<DesignTokens>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // 验证颜色格式
    if (tokens.colors) {
      Object.entries(tokens.colors).forEach(([key, value]) => {
        if (typeof value === 'string') {
          const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
          const isValidRgba = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+)?\s*\)$/.test(
            value,
          );

          if (!isValidHex && !isValidRgba) {
            errors.push(`Invalid color format for ${key}: ${value}`);
          }
        }
      });
    }

    // 验证尺寸格式
    if (tokens.sizes) {
      Object.entries(tokens.sizes).forEach(([key, value]) => {
        if (typeof value === 'string') {
          const isValidSize = /^\d+(\.\d+)?(px|rem|em|%|vh|vw)$/.test(value);

          if (!isValidSize) {
            errors.push(`Invalid size format for ${key}: ${value}`);
          }
        }
      });
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  },

  /**
   * 生成主题变量映射
   * @param tokens 设计令牌
   * @param prefix 变量前缀
   * @returns 变量映射对象
   */
  generateVariableMap(tokens: DesignTokens, prefix: string = 's'): Record<string, string> {
    const variables: Record<string, string> = {};

    // 处理颜色
    Object.entries(tokens.colors).forEach(([key, value]) => {
      const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      variables[`${prefix}-color-${varName}`] = value;
    });

    // 处理字体
    Object.entries(tokens.fonts).forEach(([key, value]) => {
      const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      variables[`${prefix}-font-${varName}`] = String(value);
    });

    // 处理尺寸
    Object.entries(tokens.sizes).forEach(([key, value]) => {
      const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      variables[`${prefix}-size-${varName}`] = value;
    });

    return variables;
  },
};

/**
 * 导出所有工具函数
 */
export const utils = {
  color: colorUtils,
  size: sizeUtils,
  animation: animationUtils,
  theme: themeUtils,
};
