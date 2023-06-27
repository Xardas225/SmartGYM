<script setup lang="ts">
const props = defineProps<{
  title: string;
  sortItems: boolean;
}>();
</script>

<template>
  <div class="position-relative cursor-pointer col fw-bold">
    {{ title }}
    <template v-if="sortItems">
      <Icon class="arrow-up-icon" name="mdi:arrow-up-thin" />
      <Icon class="arrow-down-icon" name="mdi:arrow-down-thin" />
    </template>
  </div>
</template>
