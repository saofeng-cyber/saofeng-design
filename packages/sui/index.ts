import type { App } from 'vue';

import SAlert from './components/Alert';
import SBaseCard from './components/BaseCard';
import SBaseInteractive from './components/BaseInteractive';
import SButton from './components/Button';
import * as components from './components/index'; // 导入所有组件

// 导出组件
export { SButton, SAlert, SBaseCard, SBaseInteractive };

// 导出类型
export * from './components/Button';
export * from './components/Alert';
export * from './components/BaseCard';
export * from './components/BaseInteractive';

// 版本信息
export const version = '1.0.0';

// 安装函数
const install = (app: App): void => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};

// 默认导出
export default {
  version,
  install,
};
