<script setup lang="ts">
useHead({
  title: "Профиль",
});

const user = useSupabaseUser();

const formData = reactive({
  email: user?.value.email,
  phone: "",
});
</script>

<template>
  <div v-if="user" class="bg-white p-4 mt-4 rounded">
    <div class="fs-4 mb-4">Профиль</div>
    <div class="mb-3">
      <TheBaseInput
        inputType="text"
        placeholder="Введите email"
        v-model:input="formData.email"
        label="Email"
      />
    </div>
    <div class="mb-3">
      <TheBaseInput
        inputType="text"
        placeholder="Введите телефон"
        v-model:input="formData.phone"
        label="Телефон"
      />
    </div>
    <div class="mb-3">
      Дата регистрации:
      {{
        new Date(user.created_at).toLocaleString("ru-RU", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </div>
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-primary">Сохранить</button>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  margin: 100px auto;
  max-width: 530px;
}
</style>
