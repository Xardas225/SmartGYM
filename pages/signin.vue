<script setup lang="ts">
import { required, email, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const formData = reactive({
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  };
});

const v$ = useVuelidate(rules, formData);

const client = useSupabaseClient();

const signIn = async () => {
  v$.value.$validate();
  if (v$.value.$error) {
    console.log("Error validation");
  }
  const {data} = await client.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if(data.user !== null) {
    navigateTo('/')
  }
};
</script>

<template>
  <HEAD>
    <title>Регистрация</title>
  </HEAD>

  <div class="card register">
    <div class="card-title register-title">
        Вход
    </div>
    <div class="card-body register-body">
      <div class="position-relative mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="formData.email"
          @change="v$.email.$touch"
          type="email"
          class="rounded-0 form-control"
          :class="{
            'border border-2 border-danger': v$.email.$error,
            'border border-2 border-success ': !v$.email.$invalid,
          }"
          id="email"
          placeholder="Введите email"
        />
        <Icon
          class="position-absolute alert-icon"
          :class="`${
            v$.email.$error ? 'alert-icon-error' : 'alert-icon-success'
          }`"
          v-if="!v$.email.$invalid || v$.email.$error"
          :name="`mdi:${v$.email.$error ? 'alert' : 'check'}`"
        ></Icon>
      </div>
      <div class="position-relative mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input
          v-model="formData.password"
          @change="v$.password.$touch"
          type="password"
          class="rounded-0 form-control"
          :class="{
            'border border-2 border-danger': v$.password.$error,
            'border border-2 border-success ': !v$.password.$invalid,
          }"
          id="password"
          placeholder="Введите пароль"
        />
        <Icon
          class="position-absolute alert-icon"
          :class="`${
            v$.password.$error ? 'alert-icon-error' : 'alert-icon-success'
          }`"
          v-if="!v$.password.$invalid || v$.password.$error"
          :name="`mdi:${v$.password.$error ? 'alert' : 'check'}`"
        ></Icon>
      </div>
      <TheCardButton @click="signIn"> Войти </TheCardButton>
      <div class="register-add">
        Нет аккаунта?
        <NuxtLink to="/signup"> Зарегистрируйтесь </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  &.register {
    margin: 100px auto;
    max-width: 530px;
  }
}
.register {
    &-body {
        padding: 30px;
    }
    &-title {
        width: 100%;
        position: relative;
        font-size: 26px;
        font-weight: 600;
        text-align: center;
        margin: 20px auto 20px;
        &::after {
            position: absolute;
            content: '';
            bottom: -15px;
            right: 29%;
            width: 200px;
            height: 1px;
            background-color: #e2e5e9;
        }
    }
    &-add {
        margin-top: 20px;
        color: rgba(0,0,0,.5);
    }
}
.alert-icon {
  font-weight: bold;
  font-size: 20px;
  bottom: 10px;
  right: 10px;
  &-success {
    color: #198754;
  }
  &-error {
    color: #ffc107;
  }
}
</style>
