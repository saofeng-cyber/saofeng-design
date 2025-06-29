import type { ExtractPropTypes, PropType } from 'vue';

/**
 * 按钮类型
 */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default';

/**
 * 按钮尺寸
 */
export type ButtonSize = 'large' | 'default' | 'small';

/**
 * 原生按钮类型
 */
export type ButtonNativeType = 'button' | 'submit' | 'reset';

/**
 * 按钮 Props 定义
 */
export const buttonProps = {
  /**
   * 按钮类型
   * @default 'default'
   */
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  /**
   * 按钮尺寸
   * @default 'default'
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: 'default',
  },
  /**
   * 按钮文本
   * @default ''
   */
  text: {
    type: String,
    default: '',
  },
  /**
   * 图标
   * @default ''
   */
  icon: {
    type: String,
    default: '',
  },
  /**
   * 是否禁用
   * @default false
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否加载中
   * @default false
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否朴素按钮
   * @default false
   */
  plain: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否圆角按钮
   * @default false
   */
  round: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否圆形按钮
   * @default false
   */
  circle: {
    type: Boolean,
    default: false,
  },
  /**
   * 原生 type 属性
   * @default 'button'
   */
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },
} as const;

/**
 * 按钮 Props 类型
 */
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

/**
 * 按钮事件定义
 */
export const buttonEmits = {
  /**
   * 点击事件
   * @param evt 鼠标事件对象
   */
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

/**
 * 按钮事件类型
 */
export type ButtonEmits = typeof buttonEmits;
