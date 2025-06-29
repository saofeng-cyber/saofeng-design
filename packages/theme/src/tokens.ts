// Saofeng Design 设计令牌 TypeScript 定义

/**
 * 颜色令牌
 */
export interface ColorTokens {
  // 主色调
  primary: string;
  primaryHover: string;
  primaryActive: string;
  primaryOutline: string;

  // 功能色
  success: string;
  successHover: string;
  successActive: string;
  successOutline: string;

  warning: string;
  warningHover: string;
  warningActive: string;
  warningOutline: string;

  danger: string;
  dangerHover: string;
  dangerActive: string;
  dangerOutline: string;

  info: string;
  infoHover: string;
  infoActive: string;
  infoOutline: string;

  // 中性色
  white: string;
  black: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;

  // 文本颜色
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textQuaternary: string;
  textInverse: string;

  // 链接颜色
  link: string;
  linkHover: string;
  linkActive: string;

  // 边框颜色
  border: string;
  borderSplit: string;
  borderInverse: string;

  // 背景颜色
  backgroundLight: string;
  backgroundBase: string;
  backgroundDark: string;

  // 禁用状态颜色
  disabled: string;
  disabledBg: string;
  disabledBorder: string;
}

/**
 * 字体令牌
 */
export interface FontTokens {
  // 字体族
  family: string;
  familyCode: string;

  // 字体大小
  sizeBase: string;
  sizeSm: string;
  sizeLg: string;
  sizeXl: string;

  // 行高
  lineHeightBase: number;

  // 字重
  weightLight: number;
  weightNormal: number;
  weightMedium: number;
  weightSemibold: number;
  weightBold: number;
}

/**
 * 尺寸令牌
 */
export interface SizeTokens {
  // 间距
  paddingXs: string;
  paddingSm: string;
  paddingMd: string;
  paddingLg: string;
  paddingXl: string;

  marginXs: string;
  marginSm: string;
  marginMd: string;
  marginLg: string;
  marginXl: string;

  // 组件高度
  heightBase: string;
  heightLg: string;
  heightSm: string;

  // 圆角
  borderRadiusBase: string;
  borderRadiusSm: string;
  borderRadiusLg: string;

  // 边框宽度
  borderWidthBase: string;
}

/**
 * 阴影令牌
 */
export interface ShadowTokens {
  base: string;
  popover: string;
  card: string;
}

/**
 * 动画令牌
 */
export interface AnimationTokens {
  // 动画时长
  durationSlow: string;
  durationBase: string;
  durationFast: string;

  // 动画曲线
  easeBaseOut: string;
  easeBaseIn: string;
  easeOut: string;
  easeIn: string;
  easeInOut: string;
  easeOutBack: string;
  easeInBack: string;
  easeInOutBack: string;
  easeOutCirc: string;
  easeInCirc: string;
  easeInOutCirc: string;
  easeOutQuint: string;
  easeInQuint: string;
  easeInOutQuint: string;
}

/**
 * Z-index 令牌
 */
export interface ZIndexTokens {
  base: number;
  affix: number;
  backTop: number;
  pickerPanel: number;
  popupClose: number;
  modal: number;
  notification: number;
  message: number;
  popover: number;
  dropdown: number;
  picker: number;
  popoconfirm: number;
  tooltip: number;
  image: number;
}

/**
 * 屏幕断点令牌
 */
export interface BreakpointTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

/**
 * 完整的设计令牌
 */
export interface DesignTokens {
  namespace: string;
  colors: ColorTokens;
  fonts: FontTokens;
  sizes: SizeTokens;
  shadows: ShadowTokens;
  animations: AnimationTokens;
  zIndex: ZIndexTokens;
  breakpoints: BreakpointTokens;
}

/**
 * 默认设计令牌
 */
export const defaultTokens: DesignTokens = {
  namespace: 's',
  colors: {
    // 主色调
    primary: '#1890ff',
    primaryHover: '#40a9ff',
    primaryActive: '#096dd9',
    primaryOutline: 'rgba(24, 144, 255, 0.2)',

    // 功能色
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

    // 中性色
    white: '#ffffff',
    black: '#000000',
    gray1: '#fafafa',
    gray2: '#f5f5f5',
    gray3: '#f0f0f0',
    gray4: '#d9d9d9',
    gray5: '#bfbfbf',
    gray6: '#8c8c8c',
    gray7: '#595959',
    gray8: '#434343',
    gray9: '#262626',
    gray10: '#1f1f1f',

    // 文本颜色
    textPrimary: 'rgba(0, 0, 0, 0.88)',
    textSecondary: 'rgba(0, 0, 0, 0.65)',
    textTertiary: 'rgba(0, 0, 0, 0.45)',
    textQuaternary: 'rgba(0, 0, 0, 0.25)',
    textInverse: '#ffffff',

    // 链接颜色
    link: '#1890ff',
    linkHover: '#40a9ff',
    linkActive: '#096dd9',

    // 边框颜色
    border: '#d9d9d9',
    borderSplit: '#f0f0f0',
    borderInverse: '#ffffff',

    // 背景颜色
    backgroundLight: '#fafafa',
    backgroundBase: '#f5f5f5',
    backgroundDark: '#f0f0f0',

    // 禁用状态颜色
    disabled: 'rgba(0, 0, 0, 0.25)',
    disabledBg: '#f5f5f5',
    disabledBorder: '#d9d9d9',
  },
  fonts: {
    // 字体族
    family:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    familyCode: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',

    // 字体大小
    sizeBase: '14px',
    sizeSm: '12px',
    sizeLg: '16px',
    sizeXl: '18px',

    // 行高
    lineHeightBase: 1.5715,

    // 字重
    weightLight: 300,
    weightNormal: 400,
    weightMedium: 500,
    weightSemibold: 600,
    weightBold: 700,
  },
  sizes: {
    // 间距
    paddingXs: '4px',
    paddingSm: '8px',
    paddingMd: '12px',
    paddingLg: '16px',
    paddingXl: '20px',

    marginXs: '4px',
    marginSm: '8px',
    marginMd: '12px',
    marginLg: '16px',
    marginXl: '20px',

    // 组件高度
    heightBase: '32px',
    heightLg: '40px',
    heightSm: '24px',

    // 圆角
    borderRadiusBase: '6px',
    borderRadiusSm: '4px',
    borderRadiusLg: '8px',

    // 边框宽度
    borderWidthBase: '1px',
  },
  shadows: {
    base: '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    popover:
      '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    card: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
  },
  animations: {
    // 动画时长
    durationSlow: '0.3s',
    durationBase: '0.2s',
    durationFast: '0.1s',

    // 动画曲线
    easeBaseOut: 'cubic-bezier(0.7, 0.3, 0.1, 0.7)',
    easeBaseIn: 'cubic-bezier(0.9, 0, 0.3, 0.7)',
    easeOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    easeInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    easeInOutBack: 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
    easeOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
    easeInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
  },
  zIndex: {
    base: 0,
    affix: 10,
    backTop: 10,
    pickerPanel: 10,
    popupClose: 10,
    modal: 1000,
    notification: 1010,
    message: 1010,
    popover: 1030,
    dropdown: 1050,
    picker: 1050,
    popoconfirm: 1060,
    tooltip: 1070,
    image: 1080,
  },
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
  },
};
