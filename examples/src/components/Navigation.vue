<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link
          to="/"
          class="brand-link"
        >
          <span class="brand-text">Saofeng Design</span>
        </router-link>
      </div>

      <div
        class="nav-menu"
        :class="{ 'nav-menu--open': isMenuOpen }"
      >
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          @click="closeMenu"
        >
          {{ item.name }}
        </router-link>
      </div>

      <button
        class="nav-toggle"
        :class="{ 'nav-toggle--active': isMenuOpen }"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const navItems = [
  { name: '首页', path: '/' },
  { name: '按钮', path: '/button' },
  { name: '警告', path: '/alert' },
  { name: '主题定制', path: '/theme-customizer' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.navigation {
  background: var(--s-color-background-base);

  border-bottom: 1px solid var(--s-color-border-split);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-brand {
  flex-shrink: 0;
}

.brand-link {
  text-decoration: none;
  color: #1a202c;
  font-weight: 700;
  font-size: 1.25rem;
  transition: color 0.2s ease;
}

.brand-link:hover {
  color: var(--s-color-primary, #1890ff);
}

.brand-text {
  background: linear-gradient(135deg, #1890ff 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: #64748b;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--s-color-primary, #1890ff);
  background: rgba(24, 144, 255, 0.05);
}

.nav-link.router-link-active {
  color: var(--s-color-primary, #1890ff);
  background: rgba(24, 144, 255, 0.1);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-toggle span {
  width: 100%;
  height: 2px;
  background: #64748b;
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.nav-toggle--active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle--active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle--active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    gap: 0;
    padding: 16px 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    padding: 12px 20px;
    border-radius: 0;
    width: 100%;
    text-align: left;
  }

  .nav-link:hover {
    background: rgba(24, 144, 255, 0.05);
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 16px;
  }

  .brand-text {
    font-size: 1.1rem;
  }
}
</style>
