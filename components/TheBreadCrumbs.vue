<script setup lang="ts">
import { BreadCrumbItem } from "@/types/interface/breadCrumbs";

const props = defineProps<{
  items: BreadCrumbItem[];
}>();

const { items } = toRefs(props);
</script>

<template>
  <nav aria-label="breadcrumb" class="mt-4">
    <ol class="breadcrumb">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumb-item"
        :class="{ active: !item.url }"
      >
        <NuxtLink :to="item.url"> {{ item.title }} </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
