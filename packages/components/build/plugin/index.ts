import gradient from "gradient-string";
import type { ResolvedConfig, Plugin } from "vite";

const welcomeMessage = gradient(["cyan", "magenta"]).multiline(
  `🚀 欢迎使用【骚风】前端框架，如果有问题请及时交流 🚀`,
);

const endMessage = gradient(["cyan", "magenta"]).multiline(
  `🎉 恭喜系统构建成功！！！ 🚀`,
);

const SfRollupPlugin = (): Plugin => {
  const resolvedConfig = {
    command: "",
  };
  return {
    name: "sf-rollup-plugin",
    configResolved(config: ResolvedConfig) {
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
