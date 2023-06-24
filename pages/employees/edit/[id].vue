<script setup lang="ts">
import { required, alphaNum, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useEmployeesStore } from "@/store";

const route = useRoute();
const userId = Number(route.params.id);
const store = useEmployeesStore();

const formData = reactive({
  name: "",
  age: "",
  position: "",
});

useAsyncData("employee", async (): Promise<void> => {
  return await store.getEmployeeById(userId);
}).then((res) => {
  const { name, age, position } = res.data.value;
  formData.name = name;
  formData.age = age;
  formData.position = position;
});

useHead({
  title: "Редактирование сотрудника",
});

definePageMeta({
  middleware: "auth",
});

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(2) },
    age: { required, alphaNum },
    position: { required },
  };
});

const v$ = useVuelidate(rules, formData);

const addEmployee = async (): Promise<void> => {
  v$.value.$validate();
  if (v$.value.$error) {
    console.log("Error validation");
    return;
  }
  await store.updateEmployee(userId, toRaw(formData));

  navigateTo("/employees");
};
</script>

<template>
  <TheBreadCrumbs
    :items="[
      { title: 'Сотрудники', url: '/employees' },
      { title: 'Редактирование сотрудника', url: '' },
    ]"
  />
  <div class="bg-white rounded mt-4 p-4">
    <div v-if="formData">
      <form @submit.prevent="addEmployee">
        <div class="fs-4 mb-4">Редактирование сотрудника</div>
        <div class="mb-4">
          <TheBaseInput
            @changeInput="v$.name.$touch"
            label="Имя сотрудника"
            placeholder="Введите имя сотрудника"
            v-model:input="formData.name"
            :error="v$.name.$error"
            :success="!v$.name.$invalid"
          />
        </div>
        <div class="mb-4">
          <TheBaseInput
            @changeInput="v$.position.$touch"
            label="Должность сотрудника"
            placeholder="Введите должность сотрудника"
            v-model:input="formData.position"
            :error="v$.position.$error"
            :success="!v$.position.$invalid"
          />
        </div>
        <div class="mb-4">
          <TheBaseInput
            @changeInput="v$.age.$touch"
            label="Возраст сотрудника"
            placeholder="Введите возраст сотрудника"
            v-model:input="formData.age"
            :error="v$.age.$error"
            :success="!v$.age.$invalid"
          />
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-outline-success">
            Обновить информацию
          </button>
        </div>
      </form>
    </div>
    <TheSpinner v-else />
  </div>
</template>
