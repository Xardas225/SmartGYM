<script setup>
import { storeToRefs } from "pinia";
import { useEmployeesStore } from "@/store";

const route = useRoute();

useHead({
  title: "Сотрудник",
});

const store = useEmployeesStore();
const employee = ref(null);

useAsyncData("employee", () => {
  return store.setEmployees();
})
  .then(() => {
    const { getEmployeeById } = storeToRefs(store);
    const id = Number(route.params.id);
    employee.value = getEmployeeById.value(id);
  })
  .catch((error) => {
    console.log(error);
  });

const chartOptions = {
  title: {
    text: "Физическая активность",
  },
  chart: {
    type: "column",
    zoomType: "x",
    panning: true,
    panKey: "shift",
  },
  series: [
    {
      data: [1, 2, 3, 4, 5],
      lineWidth: 0.5,
    },
  ],
};
</script>

<template>
  <TheBreadCrumbs
    :items="[
      { title: 'Сотрудники', url: '/employees' },
      { title: 'Текущий сотрудник', url: '' },
    ]"
  />
  <div class="bg-white mt-4 p-4 rounded">
    <div v-if="employee">
      <div class="row mb-4">
        <div class="col-3">
          <img class="rounded" src="https://via.placeholder.com/300" />
        </div>
        <div class="col-6">
          <div class="fs-3 mb-2">
            {{ employee?.name }}
          </div>
          <div class="fs-6">
            {{ employee?.position }}
          </div>
        </div>
        <div class="col-3 d-flex justify-content-end align-items-start">
          <NuxtLink :to="`/employees/edit/${employee.id}`">
            <button type="button" class="btn btn-outline-success">
              Редактировать
            </button>
          </NuxtLink>
        </div>
      </div>
      <div class="row">
        <div class="fs-3 col-12">Статистика</div>
        <highchart :options="chartOptions" />
      </div>
    </div>

    <div v-else class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
