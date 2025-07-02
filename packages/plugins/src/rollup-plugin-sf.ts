import gradient from 'gradient-string';

// 定义简化的插件接口，避免直接依赖 Vite 类型
interface VitePlugin {
  name: string;
  configResolved?: (config: any) => void;
  buildStart?: () => void;
  closeBundle?: () => void;
}

const welcomeMessage = gradient(['cyan', 'magenta']).multiline(
  `🚀 欢迎使用【骚风】前端框架，如果有问题请及时交流 🚀`
);

const endMessage = gradient(['cyan', 'magenta']).multiline(`🎉 恭喜系统构建成功！！！ 🚀`);

const SfRollupPlugin = (): VitePlugin => {
  const resolvedConfig = {
    command: '',
  };
  return {
    name: 'sf-rollup-plugin',
    configResolved(config: any) {
      Object.assign(resolvedConfig, config);
    },
    buildStart() {
      console.log(welcomeMessage);
    },
    closeBundle() {
      console.log(endMessage);
    },
  };
};

export default SfRollupPlugin;
