/**
 * CSS 变量工具函数
 * 支持运行时主题切换
 */

// CSS 变量前缀
export const CSS_VAR_PREFIX = '--s';

/**
 * 主题类型
 */
export type ThemeMode = 'light' | 'dark' | 'auto';

/**
 * CSS 变量名称映射
 */
export const CSS_VARS = {
  // 颜色变量
  colors: {
    primary: `${CSS_VAR_PREFIX}-color-primary`,
    primaryHover: `${CSS_VAR_PREFIX}-color-primary-hover`,
    primaryActive: `${CSS_VAR_PREFIX}-color-primary-active`,
    success: `${CSS_VAR_PREFIX}-color-success`,
    successHover: `${CSS_VAR_PREFIX}-color-success-hover`,
    successActive: `${CSS_VAR_PREFIX}-color-success-active`,
    warning: `${CSS_VAR_PREFIX}-color-warning`,
    warningHover: `${CSS_VAR_PREFIX}-color-warning-hover`,
    warningActive: `${CSS_VAR_PREFIX}-color-warning-active`,
    danger: `${CSS_VAR_PREFIX}-color-danger`,
    dangerHover: `${CSS_VAR_PREFIX}-color-danger-hover`,
    dangerActive: `${CSS_VAR_PREFIX}-color-danger-active`,
    info: `${CSS_VAR_PREFIX}-color-info`,
    infoHover: `${CSS_VAR_PREFIX}-color-info-hover`,
    infoActive: `${CSS_VAR_PREFIX}-color-info-active`,
    white: `${CSS_VAR_PREFIX}-color-white`,
    black: `${CSS_VAR_PREFIX}-color-black`,
    textPrimary: `${CSS_VAR_PREFIX}-color-text-primary`,
    textSecondary: `${CSS_VAR_PREFIX}-color-text-secondary`,
    textTertiary: `${CSS_VAR_PREFIX}-color-text-tertiary`,
    textQuaternary: `${CSS_VAR_PREFIX}-color-text-quaternary`,
    textInverse: `${CSS_VAR_PREFIX}-color-text-inverse`,
    backgroundLight: `${CSS_VAR_PREFIX}-color-background-light`,
    backgroundBase: `${CSS_VAR_PREFIX}-color-background-base`,
    backgroundDark: `${CSS_VAR_PREFIX}-color-background-dark`,
    border: `${CSS_VAR_PREFIX}-color-border`,
    borderSplit: `${CSS_VAR_PREFIX}-color-border-split`,
    borderInverse: `${CSS_VAR_PREFIX}-color-border-inverse`,
  },

  // 字体变量
  fonts: {
    family: `${CSS_VAR_PREFIX}-font-family`,
    familyCode: `${CSS_VAR_PREFIX}-font-family-code`,
    sizeBase: `${CSS_VAR_PREFIX}-font-size-base`,
    sizeSm: `${CSS_VAR_PREFIX}-font-size-sm`,
    sizeLg: `${CSS_VAR_PREFIX}-font-size-lg`,
    sizeXl: `${CSS_VAR_PREFIX}-font-size-xl`,
    lineHeightBase: `${CSS_VAR_PREFIX}-font-line-height-base`,
    weightLight: `${CSS_VAR_PREFIX}-font-weight-light`,
    weightNormal: `${CSS_VAR_PREFIX}-font-weight-normal`,
    weightMedium: `${CSS_VAR_PREFIX}-font-weight-medium`,
    weightSemibold: `${CSS_VAR_PREFIX}-font-weight-semibold`,
    weightBold: `${CSS_VAR_PREFIX}-font-weight-bold`,
  },

  // 尺寸变量
  sizes: {
    paddingXs: `${CSS_VAR_PREFIX}-size-padding-xs`,
    paddingSm: `${CSS_VAR_PREFIX}-size-padding-sm`,
    paddingMd: `${CSS_VAR_PREFIX}-size-padding-md`,
    paddingLg: `${CSS_VAR_PREFIX}-size-padding-lg`,
    paddingXl: `${CSS_VAR_PREFIX}-size-padding-xl`,
    marginXs: `${CSS_VAR_PREFIX}-size-margin-xs`,
    marginSm: `${CSS_VAR_PREFIX}-size-margin-sm`,
    marginMd: `${CSS_VAR_PREFIX}-size-margin-md`,
    marginLg: `${CSS_VAR_PREFIX}-size-margin-lg`,
    marginXl: `${CSS_VAR_PREFIX}-size-margin-xl`,
    heightBase: `${CSS_VAR_PREFIX}-size-height-base`,
    heightLg: `${CSS_VAR_PREFIX}-size-height-lg`,
    heightSm: `${CSS_VAR_PREFIX}-size-height-sm`,
    borderRadiusBase: `${CSS_VAR_PREFIX}-size-border-radius-base`,
    borderRadiusSm: `${CSS_VAR_PREFIX}-size-border-radius-sm`,
    borderRadiusLg: `${CSS_VAR_PREFIX}-size-border-radius-lg`,
    borderWidthBase: `${CSS_VAR_PREFIX}-size-border-width-base`,
  },

  // 阴影变量
  shadows: {
    base: `${CSS_VAR_PREFIX}-shadow-base`,
    popover: `${CSS_VAR_PREFIX}-shadow-popover`,
    card: `${CSS_VAR_PREFIX}-shadow-card`,
  },

  // 动画变量
  animations: {
    durationSlow: `${CSS_VAR_PREFIX}-animation-duration-slow`,
    durationBase: `${CSS_VAR_PREFIX}-animation-duration-base`,
    durationFast: `${CSS_VAR_PREFIX}-animation-duration-fast`,
    easeBaseOut: `${CSS_VAR_PREFIX}-animation-ease-base-out`,
    easeBaseIn: `${CSS_VAR_PREFIX}-animation-ease-base-in`,
    easeOut: `${CSS_VAR_PREFIX}-animation-ease-out`,
    easeIn: `${CSS_VAR_PREFIX}-animation-ease-in`,
    easeInOut: `${CSS_VAR_PREFIX}-animation-ease-in-out`,
  },
} as const;

/**
 * 获取 CSS 变量值
 */
export function getCSSVar(varName: string): string {
  return `var(${varName})`;
}

/**
 * 设置 CSS 变量值
 */
export function setCSSVar(
  varName: string,
  value: string,
  element: HTMLElement = document.documentElement
): void {
  element.style.setProperty(varName, value);
}

/**
 * 获取 CSS 变量的计算值
 */
export function getComputedCSSVar(
  varName: string,
  element: HTMLElement = document.documentElement
): string {
  return getComputedStyle(element).getPropertyValue(varName).trim();
}

/**
 * 批量设置 CSS 变量
 */
export function setCSSVars(
  vars: Record<string, string>,
  element: HTMLElement = document.documentElement
): void {
  Object.entries(vars).forEach(([name, value]) => {
    setCSSVar(name, value, element);
  });
}

/**
 * 主题切换器类
 */
export class ThemeSwitcher {
  private currentTheme: ThemeMode = 'light';
  private element: HTMLElement;

  constructor(element: HTMLElement = document.documentElement) {
    this.element = element;
    this.init();
  }

  private init(): void {
    // 从本地存储读取主题设置
    const savedTheme = localStorage.getItem('saofeng-theme') as ThemeMode;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // 检测系统主题偏好
      this.setTheme('auto');
    }

    // 监听系统主题变化
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', () => {
        if (this.currentTheme === 'auto') {
          this.applyTheme(mediaQuery.matches ? 'dark' : 'light');
        }
      });
    }
  }

  /**
   * 设置主题
   */
  setTheme(theme: ThemeMode): void {
    this.currentTheme = theme;
    localStorage.setItem('saofeng-theme', theme);

    if (theme === 'auto') {
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      this.applyTheme(prefersDark ? 'dark' : 'light');
    } else {
      this.applyTheme(theme);
    }
  }

  /**
   * 应用主题
   */
  private applyTheme(theme: 'light' | 'dark'): void {
    this.element.setAttribute('data-theme', theme);

    // 触发主题变化事件
    const event = new CustomEvent('theme-change', {
      detail: { theme, mode: this.currentTheme },
    });
    this.element.dispatchEvent(event);
  }

  /**
   * 获取当前主题
   */
  getCurrentTheme(): ThemeMode {
    return this.currentTheme;
  }

  /**
   * 获取实际应用的主题
   */
  getAppliedTheme(): 'light' | 'dark' {
    return (this.element.getAttribute('data-theme') as 'light' | 'dark') || 'light';
  }

  /**
   * 切换主题
   */
  toggleTheme(): void {
    const currentApplied = this.getAppliedTheme();
    this.setTheme(currentApplied === 'light' ? 'dark' : 'light');
  }
}

/**
 * 主题变化事件类型
 */
export interface ThemeChangeEvent extends CustomEvent {
  detail: {
    theme: 'light' | 'dark';
    mode: ThemeMode;
  };
}
