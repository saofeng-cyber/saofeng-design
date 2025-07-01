<script setup lang="ts">
import MyButton from './components/MyButton.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
</script>

<template>
  <div class="app-container">
    <!-- 主题切换器 -->
    <div class="theme-switcher-container">
      <ThemeSwitcher :show-info="true" />
    </div>

    <!-- 主要内容 -->
    <MyButton text="Vite + Vue" />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.theme-switcher-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
