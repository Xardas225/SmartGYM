<template>
    <div class="row">
        <article class="col-3">

        </article>
        <main class="col-9">
            <div class="row">
                <TheCard 
                    class="col-3"
                    v-for="item in cardData"
                    :key="item.id"
                    :item="item"
                />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const {data: cardData} = await useAsyncData('cardData', ()=>$fetch('/api/exercises'))
</script>