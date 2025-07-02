<template>
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.m(variant),
      ns.m(size),
      {
        [ns.is('disabled')]: disabled,
        [ns.is('loading')]: loading,
        [ns.is('active')]: active,
        [ns.is('focus')]: focused,
      },
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    :style="customStyle"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      v-if="loading"
      :class="ns.e('loading')"
    >
      <slot name="loading">
        <div :class="ns.e('loading-spinner')"></div>
      </slot>
    </div>

    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
  </component>
</template>

<script setup lang="ts">
import { useNameSpace } from '@saofeng-design/hooks';
import { ref, type CSSProperties } from 'vue';

export interface BaseInteractiveProps {
  /** HTML 标签 */
  tag?: string;
  /** 原生类型 */
  nativeType?: 'button' | 'submit' | 'reset';
  /** 交互变体类型 */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'link';
  /** 尺寸 */
  size?: 'small' | 'default' | 'large';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 是否激活状态 */
  active?: boolean;
  /** 自定义样式 */
  customStyle?: CSSProperties;
}

const props = withDefaults(defineProps<BaseInteractiveProps>(), {
  tag: 'button',
  nativeType: 'button',
  variant: 'default',
  size: 'default',
  disabled: false,
  loading: false,
  active: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  mouseenter: [event: MouseEvent];
  mouseleave: [event: MouseEvent];
}>();

const ns = useNameSpace('base-interactive');
const focused = ref(false);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};

const handleFocus = (event: FocusEvent) => {
  focused.value = true;
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  focused.value = false;
  emit('blur', event);
};

const handleMouseEnter = (event: MouseEvent) => {
  emit('mouseenter', event);
};

const handleMouseLeave = (event: MouseEvent) => {
  emit('mouseleave', event);
};
</script>

<style lang="less" scoped>
@import '@saofeng-design/theme/src/tokens.less';
@import '@saofeng-design/theme/src/components.less';

@base-interactive-prefix: ~'@{namespace}-base-interactive';

.@{base-interactive-prefix} {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: @base-card-padding;
  border-radius: @base-card-border-radius;
  border: @base-card-border-width @base-card-border-style transparent;
  background: transparent;
  color: @text-color;
  font-size: @font-size-base;
  line-height: @line-height-base;
  cursor: @base-interactive-cursor;
  user-select: @base-interactive-user-select;
  touch-action: @base-interactive-touch-action;
  transition: @base-card-transition;
  text-decoration: none;
  outline: none;

  &:focus {
    outline: @base-interactive-outline;
  }

  // 禁用状态
  &.is-disabled {
    opacity: @base-disabled-opacity;
    cursor: @base-disabled-cursor;
    pointer-events: none;
  }

  // 加载状态
  &.is-loading {
    pointer-events: none;
  }

  // 激活状态
  &.is-active {
    transform: translateY(1px);
  }

  // 加载元素
  &__loading {
    display: inline-flex;
    align-items: center;
    margin-right: 8px;
  }

  &__loading-spinner {
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    opacity: 0.6;
  }

  // 变体样式
  &--default {
    background: @white;
    border-color: @border-color-base;
    color: @text-color;

    &:hover:not(.is-disabled) {
      border-color: @primary-color;
      color: @primary-color;
    }

    &:active:not(.is-disabled) {
      border-color: @primary-color-active;
      color: @primary-color-active;
    }
  }

  &--primary {
    background: @primary-color;
    border-color: @primary-color;
    color: @white;

    &:hover:not(.is-disabled) {
      background: @primary-color-hover;
      border-color: @primary-color-hover;
    }

    &:active:not(.is-disabled) {
      background: @primary-color-active;
      border-color: @primary-color-active;
    }
  }

  &--success {
    background: @success-color;
    border-color: @success-color;
    color: @white;

    &:hover:not(.is-disabled) {
      background: @success-color-hover;
      border-color: @success-color-hover;
    }

    &:active:not(.is-disabled) {
      background: @success-color-active;
      border-color: @success-color-active;
    }
  }

  &--warning {
    background: @warning-color;
    border-color: @warning-color;
    color: @white;

    &:hover:not(.is-disabled) {
      background: @warning-color-hover;
      border-color: @warning-color-hover;
    }

    &:active:not(.is-disabled) {
      background: @warning-color-active;
      border-color: @warning-color-active;
    }
  }

  &--danger {
    background: @danger-color;
    border-color: @danger-color;
    color: @white;

    &:hover:not(.is-disabled) {
      background: @danger-color-hover;
      border-color: @danger-color-hover;
    }

    &:active:not(.is-disabled) {
      background: @danger-color-active;
      border-color: @danger-color-active;
    }
  }

  &--info {
    background: @info-color;
    border-color: @info-color;
    color: @white;

    &:hover:not(.is-disabled) {
      background: @info-color-hover;
      border-color: @info-color-hover;
    }

    &:active:not(.is-disabled) {
      background: @info-color-active;
      border-color: @info-color-active;
    }
  }

  &--text {
    background: transparent;
    border-color: transparent;
    color: @text-color;

    &:hover:not(.is-disabled) {
      background: fade(@primary-color, 10%);
      color: @primary-color;
    }

    &:active:not(.is-disabled) {
      background: fade(@primary-color, 15%);
      color: @primary-color-active;
    }
  }

  &--link {
    background: transparent;
    border-color: transparent;
    color: @primary-color;
    text-decoration: underline;

    &:hover:not(.is-disabled) {
      color: @primary-color-hover;
    }

    &:active:not(.is-disabled) {
      color: @primary-color-active;
    }
  }

  // 尺寸样式
  &--small {
    padding: 4px 8px;
    font-size: @font-size-sm;
    border-radius: @border-radius-sm;
  }

  &--large {
    padding: 12px 20px;
    font-size: @font-size-lg;
    border-radius: @border-radius-lg;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
