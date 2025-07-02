import { withInstall } from '@saofeng-design/utils';

import BaseCard from './src/BaseCard.vue';

const SBaseCard = withInstall(BaseCard);

export default SBaseCard;

export type { BaseCardInstance } from './src/instance';
