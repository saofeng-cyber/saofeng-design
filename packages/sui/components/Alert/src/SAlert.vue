<template>
  <div
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      {
        [ns.is('closable')]: closable,
        [ns.is('with-icon')]: showIcon || icon,
        [ns.is('with-description')]: description,
        [ns.is('banner')]: banner,
      },
    ]"
    @click="handleClick"
  >
    <div :class="ns.e('content')">
      <!-- 图标 -->
      <div
        v-if="showIcon || icon"
        :class="ns.e('icon')"
      >
        <slot name="icon">
          {{ iconComponent }}
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
      <button
        v-if="closable"
        :class="ns.e('close')"
        @click="handleClose"
      >
        <slot name="close-text">
          {{ closeText || '✕' }}
        </slot>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNameSpace } from '@saofeng-design/hooks';
import { computed } from 'vue';

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

// 图标映射
const iconMap = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '✕',
};

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
<style lang="less" scoped>
@import url('@saofeng-design/theme/src/components/alert.less');
</style>
