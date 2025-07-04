<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>

<template>
  <div class="app-container">
    <!-- 导航栏 -->
    <navigation />
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
