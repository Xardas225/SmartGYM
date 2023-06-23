<script lang="ts" setup>
useHead({
  title: "Сотрудники",
});

import { useEmployeesStore } from "@/store";

const store: any = useEmployeesStore();

useAsyncData("employees", () => {
  return store.setEmployees();
});

const employees = store.getEmployees;
</script>

<template>
  <div class="bg-white p-4 mt-4 rounded">
    <div class="fs-4 mb-4">Сотрудники</div>
    <div class="row mb-4 border-bottom py-2">
      <div class="col fw-bold">Имя</div>
      <div class="col fw-bold">Позиция</div>
      <div class="col fw-bold">Возраст</div>
      <div class="col fw-bold">Редактирование</div>
    </div>
    <template v-for="empl in employees" :key="empl.id">
      <div class="row border-bottom py-2 mb-4">
        <div class="col">{{ empl.name }}</div>
        <div class="col">{{ empl.position }}</div>
        <div class="col">{{ empl.age }}</div>
        <div class="col">
          <NuxtLink :to="`/employee/${empl.id}`">
            <button type="button" class="btn btn-outline-primary">
              Редактировать
            </button>
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>
