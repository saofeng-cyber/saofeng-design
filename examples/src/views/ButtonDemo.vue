<template>
  <div class="demo-container">
    <!-- 导航栏 -->
    <demo-navigation
      title="Button 按钮"
      subtitle="按钮用于触发一个操作，如提交表单、打开对话框、取消操作等。"
    />

    <!-- 内容区域 -->
    <main class="demo-content">
      <!-- 组件描述 -->
      <section class="demo-section">
        <div class="section-header">
          <h2>组件描述</h2>
        </div>
        <p class="section-description">
          按钮用于触发一个操作，如提交表单、打开对话框、取消操作等。
        </p>
      </section>

      <!-- 基础用法 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>基础用法</h3>
          <p>通过 type 属性设置按钮类型</p>
        </div>
        <div class="demo-showcase">
          <div class="button-group">
            <s-button>默认按钮</s-button>
            <s-button type="primary">主要按钮</s-button>
            <s-button type="success">成功按钮</s-button>
            <s-button type="warning">警告按钮</s-button>
            <s-button type="danger">危险按钮</s-button>
            <s-button type="info">信息按钮</s-button>
          </div>
        </div>
      </section>

      <!-- 按钮尺寸 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>按钮尺寸</h3>
          <p>通过 size 属性设置按钮大小</p>
        </div>
        <div class="demo-showcase">
          <div class="button-group">
            <s-button
              size="large"
              type="primary"
              >大型按钮</s-button
            >
            <s-button type="primary">默认按钮</s-button>
            <s-button
              size="small"
              type="primary"
              >小型按钮</s-button
            >
          </div>
        </div>
      </section>

      <!-- 禁用状态 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>禁用状态</h3>
          <p>通过 disabled 属性禁用按钮</p>
        </div>
        <div class="demo-showcase">
          <div class="button-group">
            <s-button disabled>默认按钮</s-button>
            <s-button
              type="primary"
              disabled
              >主要按钮</s-button
            >
            <s-button
              type="success"
              disabled
              >成功按钮</s-button
            >
          </div>
        </div>
      </section>

      <!-- 加载状态 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>加载状态</h3>
          <p>通过 loading 属性设置按钮加载状态</p>
        </div>
        <div class="demo-showcase">
          <div class="button-group">
            <s-button loading>加载中</s-button>
            <s-button
              type="primary"
              loading
              >加载中</s-button
            >
            <s-button
              type="success"
              loading
              @click="handleLoadingClick"
            >
              点击加载
            </s-button>
          </div>
        </div>
      </section>

      <!-- 交互示例 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>交互示例</h3>
          <p>点击按钮查看效果</p>
        </div>
        <div class="demo-showcase">
          <div class="button-group">
            <s-button
              type="primary"
              @click="showMessage('主要操作')"
            >
              主要操作
            </s-button>
            <s-button
              type="success"
              @click="showMessage('成功操作')"
            >
              成功操作
            </s-button>
            <s-button
              type="warning"
              @click="showMessage('警告操作')"
            >
              警告操作
            </s-button>
            <s-button
              type="danger"
              @click="showMessage('危险操作')"
            >
              危险操作
            </s-button>
          </div>
          <div
            v-if="message"
            class="message-display"
          >
            {{ message }}
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SButton } from '@saofeng-design/sui';
import { ref } from 'vue';

import DemoNavigation from '../components/DemoNavigation.vue';

const message = ref('');

const showMessage = (text: string) => {
  message.value = `您点击了：${text}`;
  setTimeout(() => {
    message.value = '';
  }, 3000);
};

const handleLoadingClick = () => {
  showMessage('加载按钮');
};
</script>
