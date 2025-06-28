import { withInstall } from '@saofeng-design/utils';
import MyButton from './src/SButton.vue';

const SButton = withInstall(MyButton);

export default SButton;

export type { SButtonInstance } from './src/instance';
