<template>
  <nav class="demo-nav">
    <button
      class="back-btn"
      @click="goBack"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="16"
        height="16"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
      返回首页
    </button>

    <div class="nav-center">
      <h1 class="demo-title">{{ title }}</h1>
      <p
        v-if="subtitle"
        class="demo-subtitle"
      >
        {{ subtitle }}
      </p>
    </div>

    <div class="nav-right"></div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Props {
  title: string;
  subtitle?: string;
}

defineProps<Props>();

const router = useRouter();

const goBack = () => {
  router.push('/');
};
</script>

<style scoped>
.demo-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
  border-bottom: 2px solid rgba(16, 185, 129, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.08);
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
}

.back-btn:active {
  transform: translateY(0);
}

.nav-center {
  flex: 1;
  text-align: center;
  margin: 0 20px;
}

.demo-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #065f46;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-subtitle {
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: #6b7280;
  font-weight: 500;
}

.nav-right {
  display: flex;
  align-items: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-nav {
    padding: 16px 20px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .nav-center {
    order: 3;
    flex-basis: 100%;
    margin: 8px 0 0;
  }

  .demo-title {
    font-size: 1.5rem;
  }

  .demo-subtitle {
    font-size: 0.9rem;
  }

  .back-btn {
    padding: 10px 16px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .demo-nav {
    padding: 12px 16px;
  }

  .demo-title {
    font-size: 1.3rem;
  }

  .back-btn {
    padding: 8px 14px;
    font-size: 12px;
  }
}

/* 暗色模式适配 */
@media (prefers-color-scheme: dark) {
  .demo-nav {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    border-bottom-color: rgba(16, 185, 129, 0.2);
  }

  .demo-title {
    color: #10b981;
  }

  .demo-subtitle {
    color: #9ca3af;
  }
}
</style>
