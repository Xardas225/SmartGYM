<template>
  <div>
    <div class="row">
      <article class="col-3">
        <TheFilter v-model="filter" />
      </article>
      <main class="col-9">
        <TheElementList v-for="item in filteredData" :key="item.id" :="item" />

      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface CardDataType {
  id: number;
  title: string;
}

const props = defineProps({
  cardData: {
    type: Array as PropType<CardDataType[]>,
    required: true,
  },
});

const filter = ref("easy");

const filteredData = computed(()=> {
  if(!filter) return props.cardData
  return props.cardData.filter((el:any) => {
    return el.complexity==filter.value
  })
});

</script>
