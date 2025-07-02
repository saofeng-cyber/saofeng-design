import DefaultTheme from 'vitepress/theme';
import './custom.css';
import DesignElements from './components/DesignElements.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('DesignElements', DesignElements);
  },
};
