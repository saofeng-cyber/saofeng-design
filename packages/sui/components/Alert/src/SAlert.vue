<template>
  <base-card
    :variant="cardVariant"
    :size="size"
    :class="[
      ns.b(),
      {
        [ns.is('closable')]: closable,
        [ns.is('with-icon')]: showIcon || icon,
        [ns.is('with-description')]: description,
        [ns.is('banner')]: banner,
      },
    ]"
    bordered
    @click="handleClick"
  >
    <div :class="ns.e('content')">
      <!-- 图标 -->
      <div
        v-if="showIcon || icon"
        :class="ns.e('icon')"
      >
        <slot name="icon">
          <component :is="iconComponent" />
        </slot>
      </div>

      <!-- 内容区域 -->
      <div :class="ns.e('message-wrapper')">
        <div :class="ns.e('message')">
          <slot>{{ message }}</slot>
        </div>
        <div
          v-if="description"
          :class="ns.e('description')"
        >
          {{ description }}
        </div>
      </div>

      <!-- 操作区域 -->
      <div
        v-if="$slots.action"
        :class="ns.e('action')"
      >
        <slot name="action"></slot>
      </div>

      <!-- 关闭按钮 -->
      <base-interactive
        v-if="closable"
        variant="text"
        size="small"
        :class="ns.e('close')"
        @click="handleClose"
      >
        <slot name="close-text">
          {{ closeText || '×' }}
        </slot>
      </base-interactive>
    </div>
  </base-card>
</template>

<script setup lang="ts">
import { useNameSpace } from '@saofeng-design/hooks';
import { computed } from 'vue';

import BaseCard from '../../BaseCard/src/BaseCard.vue';
import BaseInteractive from '../../BaseInteractive/src/BaseInteractive.vue';

export interface AlertProps {
  /** 警告提示类型 */
  type?: 'success' | 'info' | 'warning' | 'error';
  /** 警告提示内容 */
  message?: string;
  /** 警告提示的辅助性文字介绍 */
  description?: string;
  /** 是否可关闭 */
  closable?: boolean;
  /** 自定义关闭按钮文字 */
  closeText?: string;
  /** 是否显示图标 */
  showIcon?: boolean;
  /** 自定义图标 */
  icon?: string;
  /** 是否用作顶部公告 */
  banner?: boolean;
  /** 尺寸 */
  size?: 'small' | 'default' | 'large';
}

const props = withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  message: '',
  description: '',
  closable: false,
  closeText: '',
  showIcon: false,
  icon: '',
  banner: false,
  size: 'default',
});

const emit = defineEmits<{
  close: [event: MouseEvent];
  click: [event: MouseEvent];
}>();

const ns = useNameSpace('alert');

// 类型映射
const variantMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'danger',
} as const;

// 图标映射
const iconMap = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '✕',
};

const cardVariant = computed(() => {
  return variantMap[props.type] || 'info';
});

const iconComponent = computed(() => {
  if (props.icon) {
    return props.icon;
  }
  return iconMap[props.type] || iconMap.info;
});

const handleClose = (event: MouseEvent) => {
  event.stopPropagation();
  emit('close', event);
};

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style lang="less">
@import '@saofeng-design/theme/src/tokens.less';
@import '@saofeng-design/theme/src/components.less';

@alert-prefix: ~'@{namespace}-alert';

.@{alert-prefix} {
  // 内容布局
  &__content {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  &__icon {
    flex-shrink: 0;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 1px;
  }

  &__message-wrapper {
    flex: 1;
    min-width: 0;
  }

  &__message {
    font-size: @font-size-base;
    line-height: @line-height-base;
    color: inherit;
  }

  &__description {
    margin-top: 4px;
    font-size: @font-size-sm;
    line-height: @line-height-base;
    opacity: 0.8;
  }

  &__action {
    flex-shrink: 0;
    margin-left: 8px;
  }

  &__close {
    flex-shrink: 0;
    margin-left: 8px;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }

  // Banner 样式
  &.is-banner {
    border-radius: 0;
    border-left: none;
    border-right: none;
    padding: 12px 24px;
  }

  // 带描述的样式
  &.is-with-description {
    padding: 12px 16px;

    .@{alert-prefix}__icon {
      font-size: 20px;
      margin-top: 2px;
    }
  }

  // 带图标的样式
  &.is-with-icon {
    .@{alert-prefix}__content {
      align-items: flex-start;
    }
  }
}
</style>
