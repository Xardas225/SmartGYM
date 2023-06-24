<script setup lang="ts">
interface LinkButton {
  url: string,
  btnText: string,
  class: string
}
const props = defineProps<LinkButton>();

const { url, btnText } = toRefs(props)
</script>

<template>
  <div>
    <NuxtLink :to="url">
      <button type="button" :class="class">
        {{ btnText }}
      </button>
    </NuxtLink>
  </div>
</template>
