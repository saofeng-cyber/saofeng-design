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
            <s-alert
              type="info"
              message="这是一个基础的信息提示"
            />
            <s-alert
              type="success"
              message="这是一个成功提示"
            />
            <s-alert
              type="warning"
              message="这是一个警告提示"
            />
            <s-alert
              type="error"
              message="这是一个错误提示"
            />
          </div>
        </div>
        <div class="code-block">
          <pre><code><s-alert type="info" message="这是一个基础的信息提示" />
<s-alert type="success" message="这是一个成功提示" />
<s-alert type="warning" message="这是一个警告提示" />
<s-alert type="error" message="这是一个错误提示" /></code></pre>
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
            <s-alert
              type="success"
              message="成功提示的文案"
            />
            <s-alert
              type="info"
              message="信息提示的文案"
            />
            <s-alert
              type="warning"
              message="警告提示的文案"
            />
            <s-alert
              type="error"
              message="错误提示的文案"
            />
          </div>
        </div>
        <div class="code-block">
          <pre><code><s-alert type="success" message="成功提示的文案" />
<s-alert type="info" message="信息提示的文案" />
<s-alert type="warning" message="警告提示的文案" />
<s-alert type="error" message="错误提示的文案" /></code></pre>
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
              type="success"
              message="这是一个可关闭的成功提示"
              closable
              @close="showAlert1 = false"
            />
            <s-alert
              v-if="showAlert2"
              type="info"
              message="这是一个可关闭的信息提示"
              closable
              @close="showAlert2 = false"
            />
            <s-alert
              v-if="showAlert3"
              type="warning"
              message="这是一个可关闭的警告提示"
              closable
              @close="showAlert3 = false"
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
          <pre><code><s-alert
  type="success"
  message="这是一个可关闭的成功提示"
  closable
/></code></pre>
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
            <s-alert
              type="success"
              message="带图标的成功提示"
              show-icon
            />
            <s-alert
              type="info"
              message="带图标的信息提示"
              show-icon
            />
            <s-alert
              type="warning"
              message="带图标的警告提示"
              show-icon
            />
            <s-alert
              type="error"
              message="带图标的错误提示"
              show-icon
            />
          </div>
        </div>
        <div class="code-block">
          <pre><code><s-alert type="success" message="带图标的成功提示" show-icon />
<s-alert type="info" message="带图标的信息提示" show-icon />
<s-alert type="warning" message="带图标的警告提示" show-icon />
<s-alert type="error" message="带图标的错误提示" show-icon /></code></pre>
        </div>
      </section>

      <!-- 带有描述 -->
      <section class="demo-section">
        <div class="section-header">
          <h3>带有描述</h3>
          <p>可以添加详细描述信息</p>
        </div>
        <div class="demo-showcase">
          <div class="alert-group">
            <s-alert
              type="success"
              message="操作成功"
              description="您的操作已经成功完成，系统已自动保存相关数据。"
              show-icon
            />
            <s-alert
              type="info"
              message="系统通知"
              description="系统将在今晚 23:00 - 01:00 进行维护，期间可能会影响部分功能的使用。"
              show-icon
            />
            <s-alert
              type="warning"
              message="注意事项"
              description="请确保在提交前仔细检查所有信息，提交后将无法修改。"
              show-icon
              closable
            />
            <s-alert
              type="error"
              message="操作失败"
              description="网络连接异常，请检查您的网络设置后重试。如问题持续存在，请联系技术支持。"
              show-icon
              closable
            />
          </div>
        </div>
        <div class="code-block">
          <pre><code><s-alert
  type="success"
  message="操作成功"
  description="您的操作已经成功完成，系统已自动保存相关数据。"
  show-icon
/></code></pre>
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
            <s-alert
              :type="dynamicAlert.type"
              :message="dynamicAlert.text"
              show-icon
            />
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

// 控制可关闭警告的显示状态
const showAlert1 = ref(true);
const showAlert2 = ref(true);
const showAlert3 = ref(true);

// 动态警告状态
const dynamicAlert = reactive<{
  show: boolean;
  text: string;
  type: 'success' | 'info' | 'warning' | 'error';
}>({
  show: false,
  text: '',
  type: 'info',
});

const resetAlerts = () => {
  showAlert1.value = true;
  showAlert2.value = true;
  showAlert3.value = true;
};

const showDynamicAlert = (
  text: string,
  type: 'success' | 'info' | 'warning' | 'error' = 'info'
) => {
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
