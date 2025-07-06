/**
 * 样式文件导出
 * 用于单独引入样式文件
 */

// 导入主题样式
import '@saofeng-design/theme/dist/index.css';

// 导出样式路径，方便用户按需引入
export const STYLE_PATHS = {
  // 完整样式文件
  full: '@saofeng-design/theme/dist/index.css',

  // 组件库样式文件（构建后生成）
  components: '@saofeng-design/components/dist/es/index.css',

  // 主题包样式文件
  theme: '@saofeng-design/theme/dist/index.css',
} as const;

// 导出样式类型
export type StylePath = (typeof STYLE_PATHS)[keyof typeof STYLE_PATHS];

// 默认导出样式路径
export default STYLE_PATHS;
