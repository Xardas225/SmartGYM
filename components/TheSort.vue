<template>
  <div>
    <div class="d-flex align-items-center justify-content-start sort__wrapper">
      <div class="sort__title">Сортировка:</div>
      <select name="sort" @change="(event)=>onSortedData(event)">
        <option value=""></option>
        <option value="easy">Сначала лёгкие</option>
        <option value="hard">Сначала тяжелые</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ['order'],
  setup(props, {emit}) {
    const onSortedData = (event:any) => {
      emit('order', event.target.value)
    }

    return {onSortedData}
  }
});
</script>

<style scoped lang="scss">
.sort {
  &__title {
    margin-right: 10px;
  }
}
</style>
