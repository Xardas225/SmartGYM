<template>
  <HEAD>
    <title>Упражнения</title>
  </HEAD>
  <div class="row text-center my-4">
    <h2>Упражнения</h2>
    <TheMainContent 
      :cardData="cardData"
    />
  </div>
</template>

<script setup lang="ts">
import { useExStore } from "@/store/index";

const store: any = useExStore();

useAsyncData("exercises", () => {
  return store.setCardData();
});

</script>
