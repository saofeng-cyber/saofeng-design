import type { App } from "vue";
import SButton from "./Button";
import SAlert from "./Alert";

import * as components from "./components"; // 导入所有组件

export { SButton, SAlert };

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
