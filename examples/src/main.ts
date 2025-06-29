import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// 导入组件库
import SaofengDesign from '@saofeng-design/sui';

// 导入主题样式（可选，如果需要完整的主题样式）
// import '@saofeng-design/theme/dist/index.css';

const app = createApp(App);

// 使用组件库
app.use(SaofengDesign);

app.mount('#app');
