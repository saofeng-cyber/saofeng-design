import { App } from 'vue';
import { default as SButton } from './components/Button';
import { default as SAlert } from './components/Alert';
export { SButton, SAlert };
export * from './components/Button';
export * from './components/Alert';
export declare const version = '1.0.0';
declare const _default: {
  version: string;
  install: (app: App) => void;
};
export default _default;
