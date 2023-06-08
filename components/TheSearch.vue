<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  // (e: "updateSearch"): void;
  (e: "update:modelValue", value: string): void;
}>();

// const updateSeacrh = (): void => {
//   emit("updateSearch");
// };

const search = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="w-100 d-flex justify-content-start align-items-start">
    <input
      v-model="search"
      type="search"
      class="mb-4 form-control"
      id="seacrh"
      placeholder="Поиск"
    />
    <!-- <button class="btn btn-danger">Поиск</button> -->
  </div>
</template>

<style></style>
