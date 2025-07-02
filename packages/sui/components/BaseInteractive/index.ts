import { withInstall } from '@saofeng-design/utils';

import BaseInteractive from './src/BaseInteractive.vue';

const SBaseInteractive = withInstall(BaseInteractive);

export default SBaseInteractive;

export type { BaseInteractiveInstance } from './src/instance';
