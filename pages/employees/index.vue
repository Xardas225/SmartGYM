<script lang="ts" setup>
import { useEmployeesStore } from "@/store";
import { Employee } from "@/types/interface/employee";

useHead({
  title: "Сотрудники",
});

definePageMeta({
  middleware: "auth",
});

const store: any = useEmployeesStore();
const employees = ref<Employee[]>();

useAsyncData("employees", async (): Promise<void> => {
  return store.setEmployees();
}).then(() => {
  employees.value = store.getEmployees;
});

const sorted = (type: string, value: boolean): void => {
  if (employees.value) {
    employees.value.sort((a, b) =>
      value ? a[type] > b[type] : a[type] < b[type]
    );
  }
};

const deleteEmployee = async (id: Number): Promise<void> => {
  if (confirm("Вы действительно хотите удалить этого сотрудника?")) {
    await store.deleteEmployee(id);
  } else return;
};
</script>

<template>
  <div class="bg-white p-4 my-4 rounded">
    <div v-if="employees">
      <TheEmployeesTable
        :employees="employees"
        @deleteEmployee="deleteEmployee"
        @updateSorting="sorted"
      />
    </div>
    <TheSpinner v-else />
  </div>
</template>
