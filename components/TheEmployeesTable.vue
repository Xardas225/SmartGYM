<script setup lang="ts">
import { Employee } from "@/types/interface/employee";

const props = defineProps<{
  employees: Employee[];
}>();

const emit = defineEmits<{
  (e: "deleteEmployee", value: Number): void;
  (e: "updateSorting", type: String, value: Boolean): void;
}>();

const sorting = ref<any>([]);

const updateSorting = (type: string, value: boolean): void => {
  sorting.value.map((el: any) => el.resetSorting());
  emit("updateSorting", type, value);
};

const headers = [
  {
    name: 'name',
    title: "Имя",
    sortItems: true,
  },
  {
    name: 'position',
    title: "Позиция",
    sortItems: true,
  },
  {
    name: 'age',
    title: "Возраст",
    sortItems: true,
  },
  {
    name: '',
    title: "Действия",
    sortItems: false,
  },
];
</script>

<template>
  <div>
    <div class="fs-4 mb-4">Сотрудники</div>
    <div class="row mb-4 border-bottom py-2">
      <TheTableHeadElement
        v-for="(head, index) in headers"
        :key="index"
        :title="head.title"
        :sortItems="head.sortItems"
        :name="head.name"
        @updateSorting="updateSorting"
        ref="sorting"
      />
    </div>
    <template v-for="empl in employees" :key="empl.id">
      <div class="row border-bottom py-2 mb-4">
        <div class="col">{{ empl.name }}</div>
        <div class="col">{{ empl.position }}</div>
        <div class="col">{{ empl.age }}</div>
        <div class="col d-flex justify-content-around">
          <TheLinkButton
            :url="`/employees/currency/${empl.id}`"
            btnText="К сотруднику"
            class="btn btn-outline-primary"
          />
          <TheLinkButton
            @click="emit('deleteEmployee', empl.id)"
            :url="``"
            btnText="Удалить"
            class="btn btn-outline-danger"
          />
        </div>
      </div>
    </template>
    <div class="pt-4 d-flex justify-content-end">
      <TheLinkButton
        url="/employees/add-user"
        btnText="Добавить нового сотрудника"
        class="btn btn-outline-success"
      />
    </div>
  </div>
</template>
