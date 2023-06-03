<template>
    <HEAD>
        <title>Упражнения</title>
    </HEAD>

    <div class="row text-center my-4">
      <h2>Упражнения</h2>
    </div>
    <div class="row">
        <article class="col-3">

        </article>
        <main class="col-9">
            <TheElementList 
                v-for="item in cardData"
                :key="item.id"
                :="item"
            />
        </main>
    </div>
</template>

<script setup lang="ts">
const {data: cardData} = await useAsyncData('cardData', ()=>$fetch('/api/exercises'))
</script>