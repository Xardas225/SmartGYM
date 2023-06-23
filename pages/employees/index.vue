<script lang="ts" setup>
import { useEmployeesStore } from "@/store";
useHead({
  title: "Сотрудники",
});

definePageMeta({
  middleware: "auth",
});

const store: any = useEmployeesStore();
const employees = ref(null);

useAsyncData("employees", async (): Promise<void> => {
  return store.setEmployees();
}).then(() => {
  employees.value = store.getEmployees;
});

const deleteEmployee = async (id: Number): Promise<void> => {
  if (confirm("Вы действительно хотите удалить этого сотрудника?")) {
    await store.deleteEmployee(id);
  } else return;
};
</script>

<template>
  <div class="bg-white p-4 my-4 rounded">
    <div v-if="employees">
      <div class="fs-4 mb-4">Сотрудники</div>
      <div class="row mb-4 border-bottom py-2">
        <div class="col fw-bold">Имя</div>
        <div class="col fw-bold">Позиция</div>
        <div class="col fw-bold">Возраст</div>
        <div class="col fw-bold"></div>
      </div>
      <template v-for="empl in employees" :key="empl.id">
        <div class="row border-bottom py-2 mb-4">
          <div class="col">{{ empl.name }}</div>
          <div class="col">{{ empl.position }}</div>
          <div class="col">{{ empl.age }}</div>
          <div class="col d-flex justify-content-around">
            <NuxtLink :to="`/employees/currency/${empl.id}`">
              <button type="button" class="btn btn-outline-primary">
                К сотруднику
              </button>
            </NuxtLink>
            <button
              @click="deleteEmployee(empl.id)"
              type="button"
              class="btn btn-outline-danger"
            >
              Удалить
            </button>
          </div>
        </div>
      </template>
      <div class="pt-4 d-flex justify-content-end">
        <NuxtLink :to="`/employees/add-user`">
          <button type="button" class="btn btn-outline-success">
            Добавить нового сотрудника
          </button>
        </NuxtLink>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
