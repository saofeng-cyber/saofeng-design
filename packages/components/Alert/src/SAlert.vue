<template>
  <modal class="s-modal">{{ text }}</modal>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>
<style lang="less" scoped>
.s-modal {
  padding: 20px;
}
</style>
