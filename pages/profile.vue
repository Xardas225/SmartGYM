<script setup lang="ts">
useHead({
  title: "Профиль",
});

const user = useSupabaseUser();

const formData = reactive({
  email: user?.value.email,
  phone: "",
});

console.log(user);
</script>

<template>
  <div>
    <div v-if="user" class="card">
      <div class="card-body">
        <div class="mb-3">
          <label for="email" class="form-label">Логин</label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Введите email"
            v-model="formData.email"
          />
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Телефон</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Введите телефон"
            v-model="formData.phone"
          />
        </div>
        <button type="button" class="btn btn-primary">Сохранить</button>
        <div class="mt-3">
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
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  margin: 100px auto;
  max-width: 530px;
}
</style>
