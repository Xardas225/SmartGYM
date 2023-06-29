<script setup lang="ts">
interface LinkButton {
  btnText: string;
  class: string;
}
const props = defineProps<LinkButton>();

const { btnText } = toRefs(props);
</script>

<template>
  <button
    type="button"
    @click="$emit('showModal', true)"
    :class="class"
  >
    {{ btnText }}
  </button>
</template>
