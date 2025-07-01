// 主题管理工具
import { createThemeConfig, createDarkThemeConfig } from '@saofeng-design/theme';

export interface ThemeManager {
  currentTheme: 'light' | 'dark';
  lightTheme: any;
  darkTheme: any;
  applyTheme: (isDark: boolean) => void;
  toggleTheme: () => void;
  getCurrentTheme: () => 'light' | 'dark';
}

class ThemeManagerImpl implements ThemeManager {
  public currentTheme: 'light' | 'dark' = 'light';
  public lightTheme: any;
  public darkTheme: any;

  constructor() {
    // 创建主题配置
    this.lightTheme = createThemeConfig({
      name: 'light',
    });

    this.darkTheme = createDarkThemeConfig({
      name: 'dark',
    });

    // 从localStorage恢复主题设置
    const savedTheme = localStorage.getItem('saofeng-theme') as 'light' | 'dark';
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      this.currentTheme = savedTheme;
    }

    // 初始化主题
    this.applyTheme(this.currentTheme === 'dark');
  }

  /**
   * 应用主题到DOM
   */
  public applyTheme(isDark: boolean): void {
    const root = document.documentElement;
    const theme = isDark ? this.darkTheme : this.lightTheme;
    const tokens = theme.tokens;

    // 清除之前的CSS变量
    this.clearThemeVariables();

    // 应用颜色变量
    Object.entries(tokens.colors).forEach(([key, value]) => {
      console.log(key, this.camelToKebab(key));

      const cssVarName = `--s-color-${this.camelToKebab(key)}`;
      root.style.setProperty(cssVarName, value as string);
    });

    // 应用字体变量
    Object.entries(tokens.fonts).forEach(([key, value]) => {
      const cssVarName = `--s-font-${this.camelToKebab(key)}`;
      root.style.setProperty(cssVarName, value as string);
    });

    // 应用尺寸变量
    Object.entries(tokens.sizes).forEach(([key, value]) => {
      const cssVarName = `--s-size-${this.camelToKebab(key)}`;
      root.style.setProperty(cssVarName, value as string);
    });

    // 应用阴影变量
    Object.entries(tokens.shadows).forEach(([key, value]) => {
      const cssVarName = `--s-shadow-${this.camelToKebab(key)}`;
      root.style.setProperty(cssVarName, value as string);
    });

    // 设置主题标识
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');

    // 更新body样式
    document.body.style.backgroundColor = tokens.colors.backgroundLight;
    document.body.style.color = tokens.colors.textPrimary;

    // 更新当前主题状态
    this.currentTheme = isDark ? 'dark' : 'light';

    // 保存到localStorage
    localStorage.setItem('saofeng-theme', this.currentTheme);

    // 触发主题变更事件
    window.dispatchEvent(
      new CustomEvent('theme-changed', {
        detail: { theme: this.currentTheme, tokens },
      }),
    );
  }

  /**
   * 切换主题
   */
  public toggleTheme(): void {
    const isDark = this.currentTheme === 'light';
    this.applyTheme(isDark);
  }

  /**
   * 获取当前主题
   */
  public getCurrentTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }

  /**
   * 清除主题CSS变量
   */
  private clearThemeVariables(): void {
    const root = document.documentElement;
    const style = root.style;

    // 清除所有以 --s- 开头的CSS变量
    for (let i = style.length - 1; i >= 0; i--) {
      const property = style[i];
      if (property.startsWith('--s-')) {
        style.removeProperty(property);
      }
    }
  }

  /**
   * 驼峰转短横线
   */
  private camelToKebab(str: string): string {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
}

// 创建全局主题管理器实例
export const themeManager = new ThemeManagerImpl();

// 暴露到全局对象，方便调试
(window as any).themeManager = themeManager;
