import type { App, Plugin } from "vue";

// 组件基本类型约束，确保组件至少有name属性
export interface ComponentType {
  name: string;
}

/**
 * 为组件添加Vue插件安装功能的类型
 * @template T 组件类型，必须满足ComponentType约束
 */
export type SFCWithInstall<T extends ComponentType> = T & Plugin;

/**
 * 为组件添加安装方法，使其可以通过app.use进行注册
 * @param component 需要添加install方法的组件
 * @returns 添加了install方法的组件
 */
export const withInstall = <T extends ComponentType>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App): void => {
    app.component(component.name, component);
  };
  return component as SFCWithInstall<T>;
};
