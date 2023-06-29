<script setup lang="ts">
const props = defineProps<{
  name: string;
  title: string;
  sortItems: boolean;
}>();

const {name} = toRefs(props);

const emit = defineEmits<{
  (e: "updateSorting", type: string, value: boolean): void;
}>();

const sortingType = ref(false);
const isSorting = ref(false);

const updateSorting = () => {
  emit('updateSorting', name.value, sortingType.value = !sortingType.value)
  isSorting.value = true;
}

const resetSorting = () => {
  isSorting.value = false;
}

defineExpose({
  resetSorting
})
</script>

<template>
  <button
    @click="updateSorting"
    class="btn position-relative cursor-pointer col fw-bold"
  >
    {{ title }}
    <template v-if="sortItems">
      <Icon
        class="arrow arrow-up-icon"
        :class="{ active: sortingType && isSorting }"
        name="mdi:arrow-up-thin"
      />
      <Icon
        class="arrow arrow-down-icon"
        :class="{ active: !sortingType && isSorting }"
        name="mdi:arrow-down-thin"
      />
    </template>
  </button>
</template>


<style lang="scss">
.arrow {
  position: absolute;
  font-size: 20px;
  top: 10px;
  &.active {
    color: red;
  }
  &-up-icon {
    right: 40px;
  }
  &-down-icon {
    right: 30px;
  }
}
</style>
