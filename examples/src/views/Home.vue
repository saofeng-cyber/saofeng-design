<template>
  <div class="home-container">
    <!-- 头部英雄区域 -->
    <header class="hero-section">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>

      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-main">Saofeng Design</span>
            <span class="title-sub">现代化 Vue 3 组件库</span>
          </h1>
          <p class="hero-description">
            专为构建优雅、高效的用户界面而设计的现代化组件库
            <br />
            基于 Vue 3 + TypeScript，提供完整的设计系统和开发体验
          </p>
          <div class="hero-badges">
            <span class="badge">🚀 Vue 3</span>
            <span class="badge">💎 TypeScript</span>
            <span class="badge">📱 响应式</span>
            <span class="badge">🎨 主题定制</span>
          </div>
          <div class="hero-actions">
            <button
              class="cta-button primary"
              @click="navigateToComponent('/button')"
            >
              开始探索
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
            <button
              class="cta-button secondary"
              @click="scrollToComponents"
            >
              查看组件
            </button>
          </div>
        </div>

        <!-- 主题切换器 -->
        <div class="theme-switcher-container">
          <theme-switcher :show-info="false" />
        </div>
      </div>
    </header>

    <!-- 特性介绍 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">核心特性</h2>
        <div class="features-grid">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="feature-card"
          >
            <div class="feature-icon">
              <icons :name="feature.icon" />
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 组件展示 -->
    <section class="components-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">组件展示</h2>
          <p class="section-subtitle">探索我们精心设计的组件集合</p>
        </div>

        <div class="components-grid">
          <div
            v-for="component in components"
            :key="component.name"
            class="component-card"
            @click="navigateToComponent(component.path)"
          >
            <div class="card-header">
              <div class="card-icon">
                <icons :name="component.iconName" />
              </div>
              <div class="card-info">
                <h3 class="card-title">{{ component.name }}</h3>
                <span class="card-tag">{{ component.category }}</span>
              </div>
            </div>
            <p class="card-description">{{ component.description }}</p>
            <div class="card-footer">
              <div class="card-stats">
                <span class="stat">{{ component.examples }}+ 示例</span>
                <span class="stat">{{ component.props }}+ 属性</span>
              </div>
              <div class="card-arrow">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="16"
                  height="16"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 统计信息 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="stat-item"
          >
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部信息 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3 class="footer-title">Saofeng Design</h3>
            <p class="footer-description">现代化的 Vue 3 组件库，让开发更简单，界面更优雅</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>快速开始</h4>
              <a
                href="#"
                class="footer-link"
                >安装指南</a
              >
              <a
                href="#"
                class="footer-link"
                >使用文档</a
              >
              <a
                href="#"
                class="footer-link"
                >主题定制</a
              >
            </div>
            <div class="link-group">
              <h4>组件</h4>
              <a
                href="/button"
                class="footer-link"
                >Button 按钮</a
              >
              <a
                href="/alert"
                class="footer-link"
                >Alert 警告</a
              >
              <a
                href="#"
                class="footer-link"
                >更多组件</a
              >
            </div>
            <div class="link-group">
              <h4>资源</h4>
              <a
                href="#"
                class="footer-link"
                >GitHub</a
              >
              <a
                href="#"
                class="footer-link"
                >更新日志</a
              >
              <a
                href="#"
                class="footer-link"
                >问题反馈</a
              >
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 Saofeng Design. 基于 Vue 3 + TypeScript 构建</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import Icons from '../components/Icons.vue';
import ThemeSwitcher from '../components/ThemeSwitcher.vue';

const router = useRouter();

// 特性数据
const features = ref([
  {
    title: '现代化设计',
    description: '基于最新的设计趋势，提供简洁优雅的视觉体验',
    icon: 'design',
  },
  {
    title: 'TypeScript 支持',
    description: '完整的类型定义，提供更好的开发体验和代码提示',
    icon: 'code',
  },
  {
    title: '主题定制',
    description: '灵活的主题系统，支持深度定制和暗色模式',
    icon: 'theme',
  },
  {
    title: '响应式设计',
    description: '内置响应式设计，完美适配各种设备和屏幕尺寸',
    icon: 'responsive',
  },
]);

// 组件列表数据
const components = ref([
  {
    name: 'Button 按钮',
    description: '按钮用于触发一个操作，如提交表单、打开对话框、取消操作等。',
    path: '/button',
    category: '基础组件',
    iconName: 'button',
    examples: 8,
    props: 12,
  },
  {
    name: 'Alert 警告提示',
    description: '警告提示，展现需要关注的信息。',
    path: '/alert',
    category: '反馈组件',
    iconName: 'alert',
    examples: 6,
    props: 8,
  },
]);

// 统计数据
const stats = ref([
  {
    value: '2+',
    label: '组件数量',
  },
  {
    value: '100%',
    label: 'TypeScript',
  },
  {
    value: '14+',
    label: '示例演示',
  },
  {
    value: '20+',
    label: '组件属性',
  },
]);

// 导航到组件页面
const navigateToComponent = (path: string) => {
  router.push(path);
};

// 滚动到组件区域
const scrollToComponents = () => {
  const element = document.querySelector('.components-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* 全局容器 */
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #ebedbc 0%, #059669 100%);
  position: relative;
  overflow-x: hidden;
}

/* 英雄区域 */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1);
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 40%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  padding: 0 20px;
  width: 100%;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  margin: 0 0 24px;
}

.title-main {
  display: block;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 12px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.title-sub {
  display: block;
  font-size: 1.8rem;
  font-weight: 300;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0 0 32px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-badges {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.badge {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
}

.badge:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
  flex-wrap: wrap;
}

.cta-button {
  padding: 14px 28px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  min-width: 140px;
  justify-content: center;
}

.cta-button.primary {
  background: white;
  color: #10b981;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 255, 255, 0.4);
  background: #f0fdf4;
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.5);
}

.theme-switcher-container {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10;
}

/* 通用容器 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 特性区域 */
.features-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 60px;
  color: #065f46;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.feature-card {
  text-align: center;
  padding: 40px 30px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(16, 185, 129, 0.1);
  transition: all 0.4s ease;
  border: 1px solid rgba(16, 185, 129, 0.1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out;
}

.feature-card:nth-child(1) {
  animation-delay: 0.1s;
}

.feature-card:nth-child(2) {
  animation-delay: 0.2s;
}

.feature-card:nth-child(3) {
  animation-delay: 0.3s;
}

.feature-card:nth-child(4) {
  animation-delay: 0.4s;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 60px rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.3);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(16, 185, 129, 0.4);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 16px;
  color: #065f46;
}

.feature-description {
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
}

/* 组件展示区域 */
.components-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #6b7280;
  margin: 16px 0 0;
  font-weight: 400;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.component-card {
  background: white;
  border-radius: 24px;
  padding: 32px;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 2px solid rgba(16, 185, 129, 0.1);
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.08);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out;
}

.component-card:nth-child(1) {
  animation-delay: 0.1s;
}

.component-card:nth-child(2) {
  animation-delay: 0.2s;
}

.component-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.component-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(16, 185, 129, 0.15);
  border-color: rgba(16, 185, 129, 0.3);
}

.component-card:hover::before {
  transform: scaleX(1);
}

.card-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  color: white;
  font-size: 22px;
  flex-shrink: 0;
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
}

.component-card:hover .card-icon {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.card-info {
  flex: 1;
}

.card-title {
  margin: 0 0 8px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #065f46;
}

.card-tag {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  color: #065f46;
  padding: 6px 14px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.card-description {
  color: #6b7280;
  line-height: 1.7;
  margin: 0 0 24px;
  font-size: 1rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-stats {
  display: flex;
  gap: 16px;
}

.stat {
  font-size: 0.9rem;
  color: #10b981;
  font-weight: 600;
  background: rgba(16, 185, 129, 0.1);
  padding: 4px 8px;
  border-radius: 8px;
}

.card-arrow {
  color: #10b981;
  transition: all 0.3s ease;
  background: rgba(16, 185, 129, 0.1);
  padding: 8px;
  border-radius: 50%;
}

.component-card:hover .card-arrow {
  transform: translateX(4px);
  background: rgba(16, 185, 129, 0.2);
}

/* 统计区域 */
.stats-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="70" cy="30" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>');
  animation: float 20s linear infinite;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.stat-item {
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.stat-number {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 12px;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.95;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* 底部区域 */
.footer {
  background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  color: white;
  padding: 60px 0 30px;
  position: relative;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 16px;
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: #d1fae5;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
}

.link-group h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 16px;
  color: white;
}

.footer-link {
  display: block;
  color: #d1fae5;
  text-decoration: none;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  opacity: 0.8;
}

.footer-link:hover {
  color: #10b981;
  opacity: 1;
  transform: translateX(4px);
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(16, 185, 129, 0.3);
  color: #d1fae5;
  opacity: 0.8;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .title-main {
    font-size: 3rem;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }

  .components-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .title-main {
    font-size: 2.5rem;
  }

  .title-sub {
    font-size: 1.4rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-section,
  .components-section {
    padding: 60px 0;
  }

  .stats-section {
    padding: 60px 0;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .theme-switcher-container {
    top: 20px;
    right: 20px;
  }
}

@media (max-width: 480px) {
  .hero-badges {
    gap: 8px;
  }

  .badge {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>
