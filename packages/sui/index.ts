import type { App } from 'vue';
import SButton from './components/Button';
import SAlert from './components/Alert';

import * as components from './components/index'; // 导入所有组件

export { SButton, SAlert };

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
