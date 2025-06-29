<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ text: string }>();

const loading = ref(false);

const handleClick = () => {
  console.log('Button clicked!');
};

const handleLoadingClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="demo-container">
    <h2>Button 组件示例</h2>

    <!-- 基础按钮 -->
    <div class="demo-section">
      <h3>基础按钮</h3>
      <div class="button-group">
        <s-button text="默认按钮" @click="handleClick" />
        <s-button type="primary" text="主要按钮" @click="handleClick" />
        <s-button type="success" text="成功按钮" @click="handleClick" />
        <s-button type="warning" text="警告按钮" @click="handleClick" />
        <s-button type="danger" text="危险按钮" @click="handleClick" />
        <s-button type="info" text="信息按钮" @click="handleClick" />
        <s-button type="text" text="文字按钮" @click="handleClick" />
      </div>
    </div>

    <!-- 朴素按钮 -->
    <div class="demo-section">
      <h3>朴素按钮</h3>
      <div class="button-group">
        <s-button plain text="朴素按钮" @click="handleClick" />
        <s-button type="primary" plain text="主要按钮" @click="handleClick" />
        <s-button type="success" plain text="成功按钮" @click="handleClick" />
        <s-button type="warning" plain text="警告按钮" @click="handleClick" />
        <s-button type="danger" plain text="危险按钮" @click="handleClick" />
        <s-button type="info" plain text="信息按钮" @click="handleClick" />
      </div>
    </div>

    <!-- 圆角按钮 -->
    <div class="demo-section">
      <h3>圆角按钮</h3>
      <div class="button-group">
        <s-button round text="圆角按钮" @click="handleClick" />
        <s-button type="primary" round text="主要按钮" @click="handleClick" />
        <s-button type="success" round text="成功按钮" @click="handleClick" />
        <s-button type="warning" round text="警告按钮" @click="handleClick" />
        <s-button type="danger" round text="危险按钮" @click="handleClick" />
        <s-button type="info" round text="信息按钮" @click="handleClick" />
      </div>
    </div>

    <!-- 圆形按钮 -->
    <div class="demo-section">
      <h3>圆形按钮</h3>
      <div class="button-group">
        <s-button circle icon="+" @click="handleClick" />
        <s-button type="primary" circle icon="✓" @click="handleClick" />
        <s-button type="success" circle icon="✓" @click="handleClick" />
        <s-button type="warning" circle icon="!" @click="handleClick" />
        <s-button type="danger" circle icon="×" @click="handleClick" />
        <s-button type="info" circle icon="i" @click="handleClick" />
      </div>
    </div>

    <!-- 不同尺寸 -->
    <div class="demo-section">
      <h3>不同尺寸</h3>
      <div class="button-group">
        <s-button size="large" text="大型按钮" @click="handleClick" />
        <s-button text="默认按钮" @click="handleClick" />
        <s-button size="small" text="小型按钮" @click="handleClick" />
      </div>
    </div>

    <!-- 禁用状态 -->
    <div class="demo-section">
      <h3>禁用状态</h3>
      <div class="button-group">
        <s-button disabled text="禁用按钮" />
        <s-button type="primary" disabled text="主要按钮" />
        <s-button type="success" disabled text="成功按钮" />
        <s-button type="warning" disabled text="警告按钮" />
        <s-button type="danger" disabled text="危险按钮" />
        <s-button type="info" disabled text="信息按钮" />
      </div>
    </div>

    <!-- 加载状态 -->
    <div class="demo-section">
      <h3>加载状态</h3>
      <div class="button-group">
        <s-button :loading="loading" text="加载按钮" @click="handleLoadingClick" />
        <s-button type="primary" :loading="loading" text="主要按钮" @click="handleLoadingClick" />
        <s-button type="success" loading text="成功按钮" />
        <s-button type="warning" loading text="警告按钮" />
        <s-button type="danger" loading text="危险按钮" />
        <s-button type="info" loading text="信息按钮" />
      </div>
    </div>

    <!-- 带图标的按钮 -->
    <div class="demo-section">
      <h3>带图标的按钮</h3>
      <div class="button-group">
        <s-button icon="🔍" text="搜索" @click="handleClick" />
        <s-button type="primary" icon="📁" text="文件夹" @click="handleClick" />
        <s-button type="success" icon="✓" text="确认" @click="handleClick" />
        <s-button type="warning" icon="⚠" text="警告" @click="handleClick" />
        <s-button type="danger" icon="🗑" text="删除" @click="handleClick" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 组件特定样式，全局样式已在 theme 包中定义 */
</style>
