<template>
  <div class="demo-container">
    <!-- 导航栏 -->
    <nav class="demo-nav">
      <button
        class="back-btn"
        @click="goBack"
      >
        ← 返回首页
      </button>
      <h1 class="demo-title">Button 按钮</h1>
      <div class="theme-switcher">
        <theme-switcher :show-info="false" />
      </div>
    </nav>

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
        <div class="code-block">
          <pre><code>&lt;SButton&gt;默认按钮&lt;/SButton&gt;
&lt;SButton type="primary"&gt;主要按钮&lt;/SButton&gt;
&lt;SButton type="success"&gt;成功按钮&lt;/SButton&gt;
&lt;SButton type="warning"&gt;警告按钮&lt;/SButton&gt;
&lt;SButton type="danger"&gt;危险按钮&lt;/SButton&gt;
&lt;SButton type="info"&gt;信息按钮&lt;/SButton&gt;</code></pre>
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
        <div class="code-block">
          <pre><code>&lt;SButton size="large" type="primary"&gt;大型按钮&lt;/SButton&gt;
&lt;SButton type="primary"&gt;默认按钮&lt;/SButton&gt;
&lt;SButton size="small" type="primary"&gt;小型按钮&lt;/SButton&gt;</code></pre>
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
        <div class="code-block">
          <pre><code>&lt;SButton disabled&gt;默认按钮&lt;/SButton&gt;
&lt;SButton type="primary" disabled&gt;主要按钮&lt;/SButton&gt;
&lt;SButton type="success" disabled&gt;成功按钮&lt;/SButton&gt;</code></pre>
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
        <div class="code-block">
          <pre><code>&lt;SButton loading&gt;加载中&lt;/SButton&gt;
&lt;SButton type="primary" loading&gt;加载中&lt;/SButton&gt;
&lt;SButton type="success" loading&gt;点击加载&lt;/SButton&gt;</code></pre>
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
import { useRouter } from 'vue-router';

import ThemeSwitcher from '../components/ThemeSwitcher.vue';

const router = useRouter();
const message = ref('');

const goBack = () => {
  router.push('/');
};

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

<style scoped>
.demo-container {
  min-height: 100vh;
  background: #f8f9fa;
  transition: all 0.3s ease;
}

.demo-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 0;
  z-index: 100;
}

.back-btn {
  background: none;
  border: none;
  color: #667eea;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: #f8f9ff;
  color: #5a67d8;
}

.demo-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.demo-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 24px;
}

.demo-section {
  margin-bottom: 48px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.section-header h2 {
  margin: 0 0 8px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.section-header h3 {
  margin: 0 0 8px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.section-header p {
  margin: 0 0 16px;
  color: #666;
  font-size: 0.95rem;
}

.section-description {
  color: #666;
  line-height: 1.6;
  margin: 0 0 16px;
}

.demo-showcase {
  margin: 24px 0;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.code-block {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  margin-top: 16px;
}

.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #24292e;
}

.message-display {
  margin-top: 16px;
  padding: 12px 16px;
  background: #e3f2fd;
  border: 1px solid #bbdefb;
  border-radius: 6px;
  color: #1976d2;
  font-size: 14px;
}

/* 暗色模式适配 */
@media (prefers-color-scheme: dark) {
  .demo-container {
    background: #1a1a1a;
  }

  .demo-nav {
    background: #2d2d2d;
    border-bottom-color: #404040;
  }

  .demo-title {
    color: #fff;
  }

  .demo-section {
    background: #2d2d2d;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .section-header h2,
  .section-header h3 {
    color: #fff;
  }

  .section-header p,
  .section-description {
    color: #ccc;
  }

  .demo-showcase {
    background: #1a1a1a;
    border-color: #404040;
  }

  .code-block {
    background: #1a1a1a;
    border-color: #404040;
  }

  .code-block pre {
    color: #e1e4e8;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-nav {
    padding: 12px 16px;
  }

  .demo-title {
    font-size: 1.25rem;
  }

  .demo-content {
    padding: 24px 16px;
  }

  .demo-section {
    padding: 20px;
  }

  .button-group {
    gap: 8px;
  }
}
</style>
