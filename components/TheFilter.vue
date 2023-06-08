<script setup lang="ts">
const emit = defineEmits<{
  (e: "updateFilters", filters: object): void;
}>();

const filters = reactive({
  complexity: "",
  equipment: "",
  muscle: "",
});

const onFilteredData = () => {
  emit("updateFilters", filters);
};

const onResetData = () => {
  emit("updateFilters", {});
};
</script>

<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="filter-wrapper">
          <div class="filter-title">Фильтры</div>
          <!-- Complexity -->
          <div class="filter-item">
            <div class="filter-item-title">Сложность:</div>
            <select
              name="filter-complexity"
              v-model="filters.complexity"
              class="form-select"
            >
              <option value="easy">Лёгкие</option>
              <option value="normal">Средние</option>
              <option value="hard">Тяжелые</option>
            </select>
          </div>
          <!-- Equipment -->
          <div class="filter-item">
            <div class="filter-item-title">Оборудование:</div>
            <select
              name="filter-equipment"
              v-model="filters.equipment"
              class="form-select"
            >
            <option value="personal_weight">Собственный вес</option>
            <option value="dumbbells">Гантели</option>
            </select>
          </div>

          <!-- Muscle -->
          <div class="filter-item">
            <div class="filter-item-title">Группа мышц:</div>
            <select
              name="filter-muscle"
              v-model="filters.muscle"
              class="form-select"
            >
            <option value="quadriceps_legs">Квадрицепсы ног</option>
            <option value="shoulders">Плечи</option>
            </select>
          </div>

          <div class="w-100 d-flex flex-column">
            <button class="mt-3 btn btn-danger" @click="onFilteredData">
              Применить
            </button>

            <button
              class="mt-1 ml-2 btn btn-outline-danger"
              @click="onResetData"
            >
              Очистить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.filter {
  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  &-title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  &-item {
    width: 100%;
    position: relative;
    margin: 10px 0;
    text-align: start;
    &-title {
      font-size: 18px;
      margin-bottom: 5px;
    }
    &::before {
      position: absolute;
      content: ("");
      top: -5px;
      width: 100%;
      height: 1px;
      background-color: lightgray;
    }
  }
}
</style>
