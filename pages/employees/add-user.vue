<script setup>
import { required, alphaNum, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useEmployeesStore } from "~/store";

const store = useEmployeesStore();

useHead({
  title: "Новый сотрудник",
});

const formData = reactive({
  name: "",
  age: "",
  position: "",
});

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(2) },
    age: { required, alphaNum },
    position: { required },
  };
});

const v$ = useVuelidate(rules, formData);

const addEmployee = async () => {
  v$.value.$validate();
  if (v$.value.$error) {
    console.log("Error validation");
  }

  await store.addEmployee(toRaw(formData));

  navigateTo("/employees");
};
</script>

<template>
  <nav aria-label="breadcrumb" class="mt-4">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <NuxtLink to="/employees"> Сотрудники </NuxtLink>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        Новый сотрудник
      </li>
    </ol>
  </nav>
  <div class="bg-white rounded mt-4 p-4">
    <div v-if="formData">
      <form @submit.prevent="addEmployee">
        <div class="fs-4 mb-4">Добавление нового сотрудника</div>
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
            Добавить сотрудника
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
