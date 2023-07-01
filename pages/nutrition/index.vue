<template>
  <div>
    <div class="spinner" v-if="cardData?.length == 0"></div>

    <div v-else>
      <div class="row text-center my-4">
        <h2>Питание</h2>
      </div>
      <div class="row">
        <article class="col-3"></article>
        <main class="col-9">
          <div class="row">
            <TheCard
              class="col-4"
              v-for="item in cardData"
              :key="item.id"
              :="item"
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Питание",
});

const { data: cardData } = await useAsyncData("food", () =>
  $fetch("/api/food")
);
</script>
