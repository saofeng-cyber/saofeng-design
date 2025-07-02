<script setup lang="ts">
// 使用路由视图，不需要导入具体组件
</script>

<template>
  <div class="app-container">
    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
