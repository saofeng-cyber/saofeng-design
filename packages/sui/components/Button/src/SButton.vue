<template>
  <button class="button">{{ text }}</button>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
});
</script>
<style lang="less" scoped>
button {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
