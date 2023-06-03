<template>
  <HEAD>
    <title>Тренировки</title>
  </HEAD>

  <div class="spinner" v-if="cardData?.length == 0"></div>

  <div v-else>
    <div class="row text-center my-4">
      <h2>Тренировки</h2>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  async setup() {
    const { data: cardData } = await useAsyncData("cardData", () =>
      $fetch("/api/trainings")
    );

    return {cardData}
  }
})


</script>
