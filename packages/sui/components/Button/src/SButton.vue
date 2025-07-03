<template>
  <button
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      {
        [ns.is('disabled')]: disabled,
        [ns.is('loading')]: loading,
        [ns.is('round')]: round,
        [ns.is('circle')]: circle,
        [ns.is('plain')]: plain,
      },
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <span
      v-if="loading"
      :class="ns.e('loading')"
    >
      <slot name="loading">
        <svg
          viewBox="0 0 1024 1024"
          :class="ns.e('loading-icon')"
        >
          <path
            d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150.9 874.9c-46.1-46.1-83.1-100.8-109.8-162.7C13.5 648.2 0 581.1 0 512c0-69.1 13.5-136.2 40.2-199.3C66 251.7 103 197 149.1 150.9c46.1-46.1 100.8-83.1 162.7-109.8C375.8 13.5 442.9 0 512 0c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 873.1 149.1c46.1 46.1 83.1 100.8 109.8 162.7C1010.5 375.8 1024 442.9 1024 512c0 69.1-13.5 136.2-40.2 199.3C958 772.3 921 827 874.9 873.1c-46.1 46.1-100.8 83.1-162.7 109.8C648.2 1010.5 581.1 1024 512 1024zM512 92c-231.4 0-420 188.6-420 420s188.6 420 420 420 420-188.6 420-420S743.4 92 512 92z"
            fill="currentColor"
          />
          <path
            d="M512 220c-161.1 0-292 130.9-292 292 0 161.1 130.9 292 292 292 161.1 0 292-130.9 292-292 0-161.1-130.9-292-292-292z m0 536c-134.8 0-244-109.2-244-244s109.2-244 244-244 244 109.2 244 244-109.2 244-244 244z"
            fill="currentColor"
            opacity="0.4"
          />
        </svg>
      </slot>
    </span>
    <span
      v-if="icon && !loading"
      :class="ns.e('icon')"
    >
      <slot name="icon">{{ icon }}</slot>
    </span>
    <span
      v-if="$slots.default || text"
      :class="ns.e('text')"
    >
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { useNameSpace } from '@saofeng-design/hooks';

import { buttonProps, buttonEmits } from './types';

defineOptions({
  name: 'SButton',
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const ns = useNameSpace('button');

const handleClick = (evt: MouseEvent) => {
  if (props.disabled || props.loading) return;
  emit('click', evt);
};
</script>

<style lang="less" scoped>
@import './button.less';
</style>
