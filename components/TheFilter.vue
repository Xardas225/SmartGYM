<script setup lang="ts">
const emits = defineEmits(["update:modelValue"])

const onFilteredData = (event: any) => {
  emits("update:modelValue", event.target.value);
};
</script>

<template>
  <div>
    <div class="d-flex align-items-center justify-content-start sort__wrapper">
      <div class="sort__title">Фильтры:</div>
      <select name="sort" @change="onFilteredData">
        <option value=""></option>
        <option value="easy">Лёгкие</option>
        <option value="hard">Тяжелые</option>
      </select>
    </div>
  </div>
</template>
