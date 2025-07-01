<template>
  <div class="theme-switcher">
    <s-button
      :type="isDark ? 'primary' : 'default'"
      :text="buttonText"
      :icon="buttonIcon"
      class="theme-button"
      @click="toggleTheme"
    />

    <!-- 主题信息显示 -->
    <div v-if="showInfo" class="theme-info">
      <div class="theme-info-item">
        <span class="label">当前主题:</span>
        <span class="value">{{ isDark ? '暗色模式' : '亮色模式' }}</span>
      </div>
      <div class="theme-info-item">
        <span class="label">主题名称:</span>
        <span class="value">{{ currentThemeName }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { themeManager } from '../utils/themeManager';

interface Props {
  showInfo?: boolean;
  size?: 'small' | 'default' | 'large';
}

withDefaults(defineProps<Props>(), {
  showInfo: false,
  size: 'default',
});

const isDark = ref(themeManager.getCurrentTheme() === 'dark');

const buttonText = computed(() => {
  return isDark.value ? '🌙 暗色模式' : '☀️ 亮色模式';
});

const buttonIcon = computed(() => {
  return isDark.value ? '🌙' : '☀️';
});

const currentThemeName = computed(() => {
  return isDark.value ? themeManager.darkTheme.name : themeManager.lightTheme.name;
});

const toggleTheme = () => {
  themeManager.toggleTheme();
  isDark.value = themeManager.getCurrentTheme() === 'dark';
};

// 监听主题变更事件
const handleThemeChange = (event: CustomEvent) => {
  isDark.value = event.detail.theme === 'dark';
};

onMounted(() => {
  window.addEventListener('theme-changed', handleThemeChange as EventListener);
});

onUnmounted(() => {
  window.removeEventListener('theme-changed', handleThemeChange as EventListener);
});
</script>

<style scoped>
.theme-switcher {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.theme-button {
  transition: all 0.3s ease;
}

.theme-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.theme-info {
  padding: 12px;
  border-radius: 6px;
  background-color: var(--s-color-background-light);
  border: 1px solid var(--s-color-border);
  font-size: 12px;
  min-width: 200px;
}

.theme-info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.theme-info-item:last-child {
  margin-bottom: 0;
}

.label {
  color: var(--s-color-text-secondary);
}

.value {
  color: var(--s-color-text-primary);
  font-weight: 500;
}

/* 暗色主题下的特殊样式 */
[data-theme='dark'] .theme-button:hover {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}
</style>
