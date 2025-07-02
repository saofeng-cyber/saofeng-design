<template>
  <div class="demo-container">
    <!-- 导航栏 -->
    <demo-navigation
      title="Alert 警告提示"
      subtitle="警告提示，展现需要关注的信息。"
    />

    <!-- 内容区域 -->
    <main class="demo-content">
      <!-- 组件描述 -->
      <section class="demo-section">
        <div class="section-header">
          <h2>组件描述</h2>
        </div>
        <p class="section-description">警告提示，展现需要关注的信息。</p>
      </section>

      <!-- 基础用法 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>基础用法</h3>
          <p>最简单的用法，适用于简短的警告提示</p>
        </div>
        <div class="demo-showcase">
          <div class="alert-group">
            <s-alert text="这是一个基础的警告提示" />
            <s-alert text="这是一个信息提示" />
            <s-alert text="这是一个成功提示" />
            <s-alert text="这是一个警告提示" />
          </div>
        </div>
        <div class="code-block">
          <pre><code>&lt;SAlert text="这是一个基础的警告提示" /&gt;
&lt;SAlert text="这是一个信息提示" /&gt;
&lt;SAlert text="这是一个成功提示" /&gt;
&lt;SAlert text="这是一个警告提示" /&gt;</code></pre>
        </div>
      </section>

      <!-- 不同类型 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>不同类型</h3>
          <p>通过 type 属性设置不同的提示类型</p>
        </div>
        <div class="demo-showcase">
          <div class="alert-group">
            <s-alert text="成功提示的文案" />
            <s-alert text="信息提示的文案" />
            <s-alert text="警告提示的文案" />
            <s-alert text="错误提示的文案" />
          </div>
        </div>
        <div class="code-block">
          <pre><code>&lt;SAlert text="成功提示的文案" /&gt;
&lt;SAlert text="信息提示的文案" /&gt;
&lt;SAlert text="警告提示的文案" /&gt;
&lt;SAlert text="错误提示的文案" /&gt;</code></pre>
        </div>
      </section>

      <!-- 可关闭的警告 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>可关闭的警告</h3>
          <p>显示关闭按钮，点击可关闭警告提示</p>
        </div>
        <div class="demo-showcase">
          <div class="alert-group">
            <s-alert
              v-if="showAlert1"
              text="这是一个可关闭的成功提示"
            />
            <s-alert
              v-if="showAlert2"
              text="这是一个可关闭的信息提示"
            />
            <s-alert
              v-if="showAlert3"
              text="这是一个可关闭的警告提示"
            />
          </div>
          <div class="button-group">
            <s-button
              type="primary"
              size="small"
              @click="resetAlerts"
            >
              重置所有提示
            </s-button>
          </div>
        </div>
        <div class="code-block">
          <pre><code>&lt;SAlert 
  text="这是一个可关闭的成功提示"
  closable
  @close="handleClose"
/&gt;</code></pre>
        </div>
      </section>

      <!-- 带有图标 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>带有图标</h3>
          <p>可以添加图标来增强视觉效果</p>
        </div>
        <div class="demo-showcase">
          <div class="alert-group">
            <s-alert text="带图标的成功提示" />
            <s-alert text="带图标的信息提示" />
            <s-alert text="带图标的警告提示" />
            <s-alert text="带图标的错误提示" />
          </div>
        </div>
        <div class="code-block">
          <pre><code>&lt;SAlert text="带图标的成功提示" show-icon /&gt;
&lt;SAlert text="带图标的信息提示" show-icon /&gt;
&lt;SAlert text="带图标的警告提示" show-icon /&gt;
&lt;SAlert text="带图标的错误提示" show-icon /&gt;</code></pre>
        </div>
      </section>

      <!-- 交互示例 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>交互示例</h3>
          <p>动态显示不同类型的提示</p>
        </div>
        <div class="demo-showcase">
          <div class="button-group">
            <s-button
              type="success"
              @click="showSuccessAlert"
            >
              显示成功提示
            </s-button>
            <s-button
              type="primary"
              @click="showInfoAlert"
            >
              显示信息提示
            </s-button>
            <s-button
              type="warning"
              @click="showWarningAlert"
            >
              显示警告提示
            </s-button>
            <s-button
              type="danger"
              @click="showErrorAlert"
            >
              显示错误提示
            </s-button>
          </div>
          <div
            v-if="dynamicAlert.show"
            class="dynamic-alert"
          >
            <s-alert :text="dynamicAlert.text" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SAlert, SButton } from '@saofeng-design/sui';
import { ref, reactive } from 'vue';

import DemoNavigation from '../components/DemoNavigation.vue';
import '../styles/demo-common.css';

// 控制可关闭警告的显示状态
const showAlert1 = ref(true);
const showAlert2 = ref(true);
const showAlert3 = ref(true);

// 动态警告状态
const dynamicAlert = reactive({
  show: false,
  text: '',
  type: 'info',
});

const resetAlerts = () => {
  showAlert1.value = true;
  showAlert2.value = true;
  showAlert3.value = true;
};

const showDynamicAlert = (text: string, type: string = 'info') => {
  dynamicAlert.text = text;
  dynamicAlert.type = type;
  dynamicAlert.show = true;

  // 3秒后自动隐藏
  setTimeout(() => {
    dynamicAlert.show = false;
  }, 3000);
};

const showSuccessAlert = () => {
  showDynamicAlert('操作成功！这是一个成功提示', 'success');
};

const showInfoAlert = () => {
  showDynamicAlert('这是一个信息提示，请注意查看', 'info');
};

const showWarningAlert = () => {
  showDynamicAlert('这是一个警告提示，请谨慎操作', 'warning');
};

const showErrorAlert = () => {
  showDynamicAlert('操作失败！这是一个错误提示', 'error');
};
</script>

<style scoped>
/* Alert Demo 特定样式 */

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

.alert-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 16px;
}

.dynamic-alert {
  margin-top: 16px;
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
