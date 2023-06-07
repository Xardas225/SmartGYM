<template>
  <div>
    <div class="row">
      <article class="col-3">
        <TheFilter @updateFilters="updateFilters" />
      </article>
      <main class="col-9">
        <div class="row">
          <div class="col-9"></div>
          <div class="col-3">
            <TheSearch v-model="search" />
          </div>
        </div>
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

const filters = ref();
const search = ref('')

const updateFilters = (value: any): void => {
  filters.value = value;
};

const filteredData = computed(() => {
  if (!filters.value && !search.value) return props.cardData;
  
  return props.cardData.filter((elem: any) => {
    for (let filter in filters.value) {
      if (!filters.value[filter]) continue;
      if (elem[filter] !== filters.value[filter]) return false;
    }
    if(!elem.title.includes(search.value))
      return false;
    return true;
  });
});
</script>
