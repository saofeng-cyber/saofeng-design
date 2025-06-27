<script setup lang="ts">
import { SButton } from "@saofeng-design/sui";

defineProps<{ text: string }>();
</script>

<template>
  <s-button :text="text" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
