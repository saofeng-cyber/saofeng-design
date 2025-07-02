<template>
  <div
    :class="[
      ns.b(),
      ns.m(variant),
      ns.m(size),
      {
        [ns.is('hoverable')]: hoverable,
        [ns.is('bordered')]: bordered,
        [ns.is('shadow')]: shadow,
        [ns.is('loading')]: loading,
      },
    ]"
    :style="customStyle"
    @click="handleClick"
  >
    <div
      v-if="loading"
      :class="ns.e('loading-overlay')"
    >
      <slot name="loading">
        <div :class="ns.e('loading-spinner')"></div>
      </slot>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useNameSpace } from '@saofeng-design/hooks';
import { type CSSProperties } from 'vue';

export interface BaseCardProps {
  /** 卡片变体类型 */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** 卡片尺寸 */
  size?: 'small' | 'default' | 'large';
  /** 是否可悬停 */
  hoverable?: boolean;
  /** 是否显示边框 */
  bordered?: boolean;
  /** 是否显示阴影 */
  shadow?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 自定义样式 */
  customStyle?: CSSProperties;
}

const props = withDefaults(defineProps<BaseCardProps>(), {
  variant: 'default',
  size: 'default',
  hoverable: false,
  bordered: true,
  shadow: false,
  loading: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const ns = useNameSpace('base-card');

const handleClick = (event: MouseEvent) => {
  if (!props.loading) {
    emit('click', event);
  }
};
</script>

<style lang="less" scoped>
@import '@saofeng-design/theme/src/tokens.less';
@import '@saofeng-design/theme/src/components.less';

@base-card-prefix: ~'@{namespace}-base-card';

.@{base-card-prefix} {
  position: relative;
  display: block;
  padding: @base-card-padding;
  border-radius: @base-card-border-radius;
  border: @base-card-border-width @base-card-border-style transparent;
  transition: @base-card-transition;
  background: @white;
  color: @text-color;

  // 边框样式
  &.is-bordered {
    border-color: @border-color-base;
  }

  // 阴影样式
  &.is-shadow {
    box-shadow: @base-card-shadow;
  }

  // 可悬停样式
  &.is-hoverable {
    cursor: @base-interactive-cursor;
    user-select: @base-interactive-user-select;

    &:hover {
      border-color: @primary-color;
      box-shadow: @base-card-shadow;
    }
  }

  // 加载状态
  &.is-loading {
    pointer-events: none;
    opacity: @base-loading-opacity;
  }

  // 加载遮罩
  &__loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: inherit;
    z-index: 1;
  }

  // 加载动画
  &__loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid @border-color-base;
    border-top-color: @primary-color;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  // 变体样式
  &--primary {
    border-color: @primary-color;
    background: fade(@primary-color, 5%);

    &.is-hoverable:hover {
      background: fade(@primary-color, 10%);
    }
  }

  &--success {
    border-color: @success-color;
    background: fade(@success-color, 5%);

    &.is-hoverable:hover {
      background: fade(@success-color, 10%);
    }
  }

  &--warning {
    border-color: @warning-color;
    background: fade(@warning-color, 5%);

    &.is-hoverable:hover {
      background: fade(@warning-color, 10%);
    }
  }

  &--danger {
    border-color: @danger-color;
    background: fade(@danger-color, 5%);

    &.is-hoverable:hover {
      background: fade(@danger-color, 10%);
    }
  }

  &--info {
    border-color: @info-color;
    background: fade(@info-color, 5%);

    &.is-hoverable:hover {
      background: fade(@info-color, 10%);
    }
  }

  // 尺寸样式
  &--small {
    padding: 8px 12px;
    font-size: @font-size-sm;
  }

  &--large {
    padding: 16px 24px;
    font-size: @font-size-lg;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
