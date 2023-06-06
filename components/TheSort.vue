<template>
  <div>
    <div class="d-flex align-items-center justify-content-start sort__wrapper">
      <div class="sort__title">Сортировка:</div>
      <select name="sort" @change="onSortedData">
        <option value=""></option>
        <option value="easy">Сначала лёгкие</option>
        <option value="hard">Сначала тяжелые</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["update:modelValue"]);

const onSortedData = (event: any) => {
  emits("update:modelValue", event.target.value);
};
</script>

<style scoped lang="scss">
.sort {
  &__title {
    margin-right: 10px;
  }
}
</style>
