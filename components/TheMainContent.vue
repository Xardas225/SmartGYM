<template>
  <div>
    <div class="row">
      <article class="col-3">
        <!-- Фильтр элементов -->
        <TheFilter @updateFilters="updateFilters" />
      </article>
      <main class="col-9">
        <div class="row">
          <div class="col-9">
            <!-- Отображение активных фильтров -->
            <span v-for="filter in filters" :key="filter" class="badge bg-danger">{{ filter }}</span>
          </div>
          <div :class="`col-${filters.length ? 3 : 12}`">
            <!-- Поле поиска -->
            <TheSearch v-model="search" />
          </div>
        </div>
        <!-- Список элементов -->
        <TheElementList v-for="item in filteredData" :key="item.id" v-bind="item" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';
import { CardDataType } from '@/types';
import { useProperties } from '@/composables/useProperties'; // Предполагаемый путь к useProperties

// Определение пропсов
const props = defineProps({
  cardData: {
    type: Array as PropType<CardDataType[]>,
    required: true,
  },
});

// Состояние
const filters = ref<string[]>([]);
const search = ref<string>("");

// Обновление фильтров
const updateFilters = (value: string[]): void => {
  filters.value = value;
};

// Вычисление отфильтрованных данных
const filteredData = computed(() => {
  if (!filters.value.length && !search.value) return props.cardData;

  return props.cardData.filter((elem: CardDataType) => {
    for (let filter of filters.value) {
      if (!filter) continue;
      if (!elem.title.includes(filter)) return false;
    }
    if (search.value && !elem.title.includes(search.value)) return false;
    return true;
  });
});
</script>
