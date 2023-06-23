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
</script>

<template>
  <div class="bg-white mt-4 p-4 rounded">
    <div class="row mb-4">
      <div class="col-3">
        <img class="rounded" src="https://via.placeholder.com/300" />
      </div>
      <div class="col-9">
        <div class="fs-3 mb-2">
          {{ employee.name }}
        </div>
        <div class="fs-6">
          {{ employee.position }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="fs-3 col-12">
        Статистика
      </div>
      <div class="col-12">
        Здесь будут графики со статистикой.
      </div>
    </div>
  </div>
</template>
