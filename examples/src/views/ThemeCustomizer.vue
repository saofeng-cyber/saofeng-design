<template>
  <div class="theme-customizer">
    <!-- 头部 -->
    <header class="customizer-header">
      <div class="container">
        <div class="header-content">
          <div class="header-info">
            <h1 class="page-title">主题定制器</h1>
            <p class="page-description">实时预览和自定义您的主题配色方案</p>
          </div>
          <div class="header-actions">
            <s-button
              size="large"
              @click="resetTheme"
            >
              <template #icon>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z"
                  />
                </svg>
              </template>
              重置主题
            </s-button>
            <s-button
              type="warning"
              size="large"
              @click="exportTheme"
            >
              <template #icon>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                  />
                </svg>
              </template>
              导出主题
            </s-button>
            <s-button
              type="primary"
              size="large"
              @click="editTheme"
              >切换预设主题</s-button
            >
            <s-button
              type="info"
              size="large"
              @click="showColorVariants"
              >查看颜色变体</s-button
            >
          </div>
        </div>
      </div>
    </header>

    <div class="customizer-content">
      <div class="container">
        <div class="customizer-layout">
          <!-- 左侧控制面板 -->
          <aside class="control-panel">
            <div class="panel-section">
              <h3 class="section-title">主色调</h3>
              <p class="section-description">
                🎨 修改颜色时，hover、active 等状态颜色将自动计算生成
              </p>
              <div class="color-group">
                <div class="color-item">
                  <label>主色</label>
                  <div class="color-input-wrapper">
                    <input
                      v-model="themeConfig.primary"
                      type="color"
                      class="color-input"
                      @input="updateTheme"
                    />
                    <input
                      v-model="themeConfig.primary"
                      type="text"
                      class="color-text"
                      @input="updateTheme"
                    />
                  </div>
                </div>
                <div class="color-item">
                  <label>成功色</label>
                  <div class="color-input-wrapper">
                    <input
                      v-model="themeConfig.success"
                      type="color"
                      class="color-input"
                      @input="updateTheme"
                    />
                    <input
                      v-model="themeConfig.success"
                      type="text"
                      class="color-text"
                      @input="updateTheme"
                    />
                  </div>
                </div>
                <div class="color-item">
                  <label>警告色</label>
                  <div class="color-input-wrapper">
                    <input
                      v-model="themeConfig.warning"
                      type="color"
                      class="color-input"
                      @input="updateTheme"
                    />
                    <input
                      v-model="themeConfig.warning"
                      type="text"
                      class="color-text"
                      @input="updateTheme"
                    />
                  </div>
                </div>
                <div class="color-item">
                  <label>危险色</label>
                  <div class="color-input-wrapper">
                    <input
                      v-model="themeConfig.danger"
                      type="color"
                      class="color-input"
                      @input="updateTheme"
                    />
                    <input
                      v-model="themeConfig.danger"
                      type="text"
                      class="color-text"
                      @input="updateTheme"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="panel-section">
              <h3 class="section-title">字体设置</h3>
              <div class="font-group">
                <div class="font-item">
                  <label>基础字体大小</label>
                  <div class="range-input-wrapper">
                    <input
                      v-model="themeConfig.fontSize"
                      type="range"
                      min="12"
                      max="18"
                      class="range-input"
                      @input="updateTheme"
                    />
                    <span class="range-value">{{ themeConfig.fontSize }}px</span>
                  </div>
                </div>
                <div class="font-item">
                  <label>圆角大小</label>
                  <div class="range-input-wrapper">
                    <input
                      v-model="themeConfig.borderRadius"
                      type="range"
                      min="4"
                      max="24"
                      class="range-input"
                      @input="updateTheme"
                    />
                    <span class="range-value">{{ themeConfig.borderRadius }}px</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="panel-section">
              <h3 class="section-title">预设主题</h3>
              <div class="preset-themes">
                <div
                  v-for="preset in presetThemes"
                  :key="preset.name"
                  class="preset-item"
                  :class="{ active: currentPreset === preset.name }"
                  @click="applyPreset(preset)"
                >
                  <div class="preset-colors">
                    <span
                      v-for="color in preset.colors"
                      :key="color"
                      class="preset-color"
                      :style="{ backgroundColor: color }"
                    ></span>
                  </div>
                  <span class="preset-name">{{ preset.name }}</span>
                </div>
              </div>
            </div>
          </aside>

          <!-- 右侧预览区域 -->
          <main class="preview-area">
            <div class="preview-header">
              <h3>实时预览</h3>
              <div class="preview-tabs">
                <s-button
                  v-for="tab in previewTabs"
                  :key="tab.key"
                  type="primary"
                  :class="{ active: activeTab === tab.key }"
                  @click="activeTab = tab.key"
                >
                  {{ tab.label }}
                </s-button>
              </div>
            </div>

            <div class="preview-content">
              <!-- 按钮预览 -->
              <div
                v-if="activeTab === 'buttons'"
                class="preview-section"
              >
                <h4>按钮组件</h4>
                <div class="component-demo">
                  <div class="demo-row">
                    <s-button type="primary">主要按钮</s-button>
                    <s-button type="success">成功按钮</s-button>
                    <s-button type="warning">警告按钮</s-button>
                    <s-button type="danger">危险按钮</s-button>
                  </div>
                  <div class="demo-row">
                    <s-button
                      type="primary"
                      size="large"
                      >大型按钮</s-button
                    >
                    <s-button type="primary">默认按钮</s-button>
                    <s-button
                      type="primary"
                      size="small"
                      >小型按钮</s-button
                    >
                  </div>
                </div>
              </div>

              <!-- 表单预览 -->
              <div
                v-if="activeTab === 'forms'"
                class="preview-section"
              >
                <h4>表单组件</h4>
                <div class="component-demo">
                  <div class="form-demo">
                    <div class="form-item">
                      <label>用户名</label>
                      <input
                        type="text"
                        placeholder="请输入用户名"
                        class="s-input"
                      />
                    </div>
                    <div class="form-item">
                      <label>密码</label>
                      <input
                        type="password"
                        placeholder="请输入密码"
                        class="s-input"
                      />
                    </div>
                    <div class="form-item">
                      <s-button type="primary">登录</s-button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 卡片预览 -->
              <div
                v-if="activeTab === 'cards'"
                class="preview-section"
              >
                <h4>卡片组件</h4>
                <div class="component-demo">
                  <div class="card-demo">
                    <div class="s-card">
                      <div class="s-card__header">
                        <h3>卡片标题</h3>
                      </div>
                      <div class="s-card__body">
                        <p>这是一个示例卡片内容，展示了当前主题的样式效果。</p>
                      </div>
                      <div class="s-card__footer">
                        <s-button type="primary">操作</s-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SButton } from '@saofeng-design/sui';
import { colorUtils } from '@saofeng-design/theme';
import { ref, reactive, onMounted } from 'vue';

// 根据主颜色生成相关状态颜色
const generateColorVariants = (baseColor: string) => {
  return {
    base: baseColor,
    hover: colorUtils.lighten(baseColor, 15),
    active: colorUtils.darken(baseColor, 15),
    outline: colorUtils.withAlpha(baseColor, 0.2),
  };
};

// 根据主颜色生成完整的颜色主题
const generateThemeColors = (primaryColor: string) => {
  const primary = generateColorVariants(primaryColor);

  return {
    // 主色调
    primary: primary.base,
    primaryBg: primary.base,
    primaryBorder: primary.base,
    primaryHover: primary.hover,
    primaryHoverBg: primary.hover,
    primaryHoverBorder: primary.hover,
    primaryActive: primary.active,
    primaryOutline: primary.outline,
  };
};

// 预设主题颜色
const colorPresets = [
  {
    name: '绿色自然',
    primary: '#18a058',
    success: '#059669',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#1890ff',
  },
  {
    name: '蓝色科技',
    primary: '#1890ff',
    success: '#52c41a',
    warning: '#faad14',
    danger: '#ff4d4f',
    info: '#1890ff',
  },
  {
    name: '紫色优雅',
    primary: '#722ed1',
    success: '#52c41a',
    warning: '#faad14',
    danger: '#ff4d4f',
    info: '#1890ff',
  },
  {
    name: '橙色活力',
    primary: '#f56500',
    success: '#52c41a',
    warning: '#faad14',
    danger: '#ff4d4f',
    info: '#1890ff',
  },
  {
    name: '红色热情',
    primary: '#f5222d',
    success: '#52c41a',
    warning: '#faad14',
    danger: '#ff4d4f',
    info: '#1890ff',
  },
];

let currentPresetIndex = 0;

const editTheme = () => {
  // 循环使用预设颜色
  const preset = colorPresets[currentPresetIndex];
  currentPresetIndex = (currentPresetIndex + 1) % colorPresets.length;

  // 根据基础颜色生成完整的颜色主题（包括 hover、active 等状态）
  const generatedColors = generateThemeColors(preset.primary);

  console.log(`${preset.name} - Generated color variants:`, generatedColors);

  // 生成 CSS 变量字符串
  const cssVars = Object.entries(generatedColors)
    .map(([key, value]) => {
      const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `  --s-color-${varName}: ${value};`;
    })
    .join('\n');

  console.log(cssVars);

  // 应用生成的 CSS 变量到文档
  applyThemeVariables(cssVars);

  // 显示应用成功的消息
  console.log(`主题已更新为：${preset.name}！自动生成了 hover、active 等状态颜色`);
};

// 根据自定义颜色应用主题

// 显示当前主题的颜色变体
const showColorVariants = () => {
  const currentColors = generateThemeColors(themeConfig.primary);

  console.log('当前主题的完整颜色变体:', currentColors);

  // 创建一个更友好的显示格式
  const colorGroups = {
    主色调: {
      基础色: currentColors.primary,
      悬停色: currentColors.primaryHover,
      激活色: currentColors.primaryActive,
      轮廓色: currentColors.primaryOutline,
    },
  };

  console.table(colorGroups);
  alert('颜色变体已在控制台中显示，请按 F12 查看详细信息！');
};

// 应用 CSS 变量到文档
const applyThemeVariables = (cssVars: string) => {
  const root = document.documentElement;

  // 解析 CSS 变量字符串
  const lines = cssVars.split('\n').filter(line => line.trim() && line.includes('--'));

  lines.forEach(line => {
    const match = line.match(/--([^:]+):\s*([^;]+);/);
    if (match) {
      const [, varName, varValue] = match;
      root.style.setProperty(`--${varName}`, varValue.trim());
    }
  });

  console.log(`Applied ${lines.length} CSS variables to theme`);
};
// 主题配置
const themeConfig = reactive({
  primary: '#18a058',
  success: '#52c41a',
  warning: '#faad14',
  danger: '#ff4d4f',
  info: '#1890ff',
  fontSize: 14,
  borderRadius: 12,
});

// 当前预设
const currentPreset = ref('default');

// 活动标签
const activeTab = ref('buttons');

// 预览标签
const previewTabs = [
  { key: 'buttons', label: '按钮' },
  { key: 'forms', label: '表单' },
  { key: 'cards', label: '卡片' },
];

// 预设主题
const presetThemes = [
  {
    name: 'default',
    label: '默认主题',
    colors: ['#18a058', '#52c41a', '#faad14', '#ff4d4f'],
    config: {
      primary: '#18a058',
      success: '#52c41a',
      warning: '#faad14',
      danger: '#ff4d4f',
      fontSize: 14,
      borderRadius: 12,
    },
  },
  {
    name: 'green',
    label: '绿色主题',
    colors: ['#10b981', '#059669', '#f59e0b', '#ef4444'],
    config: {
      primary: '#10b981',
      success: '#059669',
      warning: '#f59e0b',
      danger: '#ef4444',
      fontSize: 14,
      borderRadius: 16,
    },
  },
  {
    name: 'purple',
    label: '紫色主题',
    colors: ['#8b5cf6', '#10b981', '#f59e0b', '#ef4444'],
    config: {
      primary: '#8b5cf6',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      fontSize: 14,
      borderRadius: 8,
    },
  },
];

// 更新主题（增强版：自动生成状态颜色）
const updateTheme = () => {
  const root = document.documentElement;

  // 根据当前主题配置生成完整的颜色变体
  const generatedColors = generateThemeColors(themeConfig.primary);

  // 应用所有生成的颜色变量
  Object.entries(generatedColors).forEach(([key, value]) => {
    const varName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    root.style.setProperty(`--s-color-${varName}`, value);
  });

  // 更新按钮颜色（包括状态颜色）
  root.style.setProperty('--s-color-primary-outline', generatedColors.primary);

  // 更新字体和圆角
  root.style.setProperty('--s-font-size-base', `${themeConfig.fontSize}px`);
  root.style.setProperty('--s-size-border-radius-base', `${themeConfig.borderRadius}px`);
  root.style.setProperty('--s-size-border-radius-base', `${themeConfig.borderRadius}px`);

  console.log('主题已更新，包含自动生成的状态颜色:', generatedColors);
};

// 应用预设主题
const applyPreset = (preset: any) => {
  currentPreset.value = preset.name;
  Object.assign(themeConfig, preset.config);
  updateTheme();
};

// 重置主题
const resetTheme = () => {
  applyPreset(presetThemes[0]);
};

// 导出主题
const exportTheme = () => {
  const themeData = {
    name: 'custom-theme',
    config: { ...themeConfig },
    timestamp: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(themeData, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'theme-config.json';
  a.click();
  URL.revokeObjectURL(url);
};

onMounted(() => {
  updateTheme();
});
</script>

<style scoped>
.theme-customizer {
  min-height: 100vh;
  background: var(--s-color-background-base);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 头部样式 */
.customizer-header {
  background: var(--s-color-background-base);
  border-bottom: 1px solid var(--s-color-border-split);
  padding: 24px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 8px;
}

.page-description {
  color: #64748b;
  margin: 0;
  font-size: 1rem;
}

.header-actions {
  display: flex;
  gap: 12px;
}

/* 主要内容区域 */
.customizer-content {
  padding: 32px 0;
}

.customizer-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 32px;
  align-items: start;
}

/* 控制面板 */
.control-panel {
  background-color: var(--s-color-background-base);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--s-color-border-split);
  overflow: hidden;
}

.panel-section {
  padding: 24px;
  border-bottom: 1px solid var(--s-color-border-split);
}

.panel-section:last-child {
  border-bottom: none;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 16px;
}

.section-description {
  font-size: 0.9rem;
  margin: 0 0 16px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid var(--s-color-border-split);
  border-left-width: 3px solid var(--s-color-primary);
  background-color: var(--s-color-background-base);
}

/* 颜色控制 */
.color-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.color-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.color-item label {
  font-size: 0.9rem;
  font-weight: 500;
}

.color-input-wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
}

.color-input {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: none;
}

.color-text {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--s-color-border-split);
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: monospace;
  background: none;
}

/* 字体控制 */
.font-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.font-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.font-item label {
  font-size: 0.9rem;
  font-weight: 500;
}

.range-input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.range-input {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}

.range-value {
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 40px;
  text-align: right;
}

/* 预设主题 */
.preset-themes {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.preset-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--s-color-border-split);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.preset-item:hover {
  border-color: var(--s-color-primary-outline);
}

.preset-item.active {
  border-color: var(--s-color-primary-outline);
  background: var(--s-color-background-light);
}

.preset-colors {
  display: flex;
  gap: 4px;
}

.preset-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--s-color-border-split);
}

.preset-name {
  font-size: 0.9rem;
  font-weight: 500;
}

/* 预览区域 */
.preview-area {
  background-color: var(--s-color-background-base);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--s-color-border-split);
  overflow: hidden;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid var(--s-color-border-split);
}

.preview-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.preview-tabs {
  display: flex;
  gap: 4px;
}

.preview-content {
  padding: 24px;
}

.preview-section h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 16px;
}

.component-demo {
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--s-color-border-split);
}

.demo-row {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.demo-row:last-child {
  margin-bottom: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .customizer-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .control-panel {
    order: 2;
  }

  .preview-area {
    order: 1;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .customizer-content {
    padding: 20px 0;
  }

  .preview-header {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .preview-tabs {
    justify-content: center;
  }
}
</style>
