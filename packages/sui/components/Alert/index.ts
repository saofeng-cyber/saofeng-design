import { withInstall } from '@saofeng-design/utils';
import MyAlert from './src/SAlert.vue';

const SAlert = withInstall(MyAlert);

export default SAlert;

export type { SAlertInstance } from './src/instance';
