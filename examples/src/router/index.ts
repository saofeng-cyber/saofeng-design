import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// 导入页面组件
import AlertDemo from '../views/AlertDemo.vue';
import BaseComponentsDemo from '../views/BaseComponentsDemo.vue';
import ButtonDemo from '../views/ButtonDemo.vue';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '组件展示',
    },
  },
  {
    path: '/button',
    name: 'Button',
    component: ButtonDemo,
    meta: {
      title: 'Button 按钮',
    },
  },
  {
    path: '/alert',
    name: 'Alert',
    component: AlertDemo,
    meta: {
      title: 'Alert 警告提示',
    },
  },
  {
    path: '/base-components',
    name: 'BaseComponents',
    component: BaseComponentsDemo,
    meta: {
      title: '基础组件',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫 - 设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title} - Saofeng Design`;
  }
  next();
});

export default router;
