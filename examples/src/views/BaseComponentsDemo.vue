<template>
  <div class="base-components-demo">
    <header class="demo-header">
      <h1>基础组件演示</h1>
      <p>展示抽取的公共基础组件</p>
    </header>

    <!-- 内容区域 -->
    <main class="demo-content">
      <!-- BaseInteractive 组件演示 -->
      <section class="demo-section">
        <div class="section-header">
          <h2>BaseInteractive 基础交互</h2>
        </div>
        <p class="section-description">提供统一的交互元素样式和行为</p>

        <div class="demo-showcase">
          <div class="interactive-group">
            <s-base-interactive variant="default"> 默认交互 </s-base-interactive>

            <s-base-interactive variant="primary"> 主要交互 </s-base-interactive>

            <s-base-interactive
              variant="success"
              size="small"
            >
              成功交互
            </s-base-interactive>

            <s-base-interactive variant="text"> 文本交互 </s-base-interactive>

            <s-base-interactive
              variant="link"
              tag="a"
            >
              链接交互
            </s-base-interactive>

            <s-base-interactive
              variant="primary"
              loading
            >
              加载中
            </s-base-interactive>
          </div>
        </div>
      </section>

      <!-- 组合使用演示 -->
      <section class="demo-section">
        <div class="section-header">
          <h2>组合使用</h2>
        </div>
        <p class="section-description">展示基础组件在实际组件中的应用</p>

        <div class="demo-showcase">
          <div class="combined-group">
            <!-- 使用新的 Button 组件 -->
            <div class="button-examples">
              <h3>Button 组件（基于 BaseInteractive）</h3>
              <div class="button-group">
                <s-button type="primary">主要按钮</s-button>
                <s-button type="success">成功按钮</s-button>
                <s-button type="warning">警告按钮</s-button>
                <s-button type="danger">危险按钮</s-button>
                <s-button type="text">文本按钮</s-button>
                <s-button
                  type="primary"
                  loading
                  >加载中</s-button
                >
              </div>
            </div>

            <!-- 使用新的 Alert 组件 -->
            <div class="alert-examples">
              <h3>Alert 组件（独立样式系统）</h3>
              <div class="alert-group">
                <s-alert
                  type="success"
                  message="成功提示的文案"
                  show-icon
                />
                <s-alert
                  type="info"
                  message="信息提示的文案"
                  description="这是一条详细的信息描述"
                  show-icon
                />
                <s-alert
                  type="warning"
                  message="警告提示的文案"
                  show-icon
                  closable
                />
                <s-alert
                  type="error"
                  message="错误提示的文案"
                  show-icon
                  closable
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SButton, SAlert } from '@saofeng-design/components';
</script>

<style lang="less" scoped>
.base-components-demo {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
}

.demo-content {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  .section-header {
    margin-bottom: 1rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }
  }

  .section-description {
    color: #7f8c8d;
    margin-bottom: 1.5rem;
  }
}

.demo-showcase {
  .card-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .interactive-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .combined-group {
    .button-examples,
    .alert-examples {
      margin-bottom: 2rem;

      h3 {
        font-size: 1.2rem;
        font-weight: 500;
        color: #34495e;
        margin-bottom: 1rem;
      }
    }

    .button-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .alert-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
