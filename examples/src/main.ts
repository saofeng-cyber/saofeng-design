import { createApp } from 'vue';

import '@saofeng-design/theme/dist/index.css';
import App from './App.vue';
import router from './router';
import './styles/demo-common.css';

const app = createApp(App);

// 使用路由
app.use(router);

app.mount('#app');
