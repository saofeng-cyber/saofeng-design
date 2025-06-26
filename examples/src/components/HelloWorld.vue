<script setup lang="ts">
import { SButton } from "@saofeng-design/components";

defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>

  <s-button text="Hello World" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
