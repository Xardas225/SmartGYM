<script setup lang="ts">
const props = defineProps({
  options: Array
});
</script>

<template>
  <select class="form-select">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</template>
