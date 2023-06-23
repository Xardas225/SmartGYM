<script setup lang="ts">
import { required, email, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

useHead({
  title: "Регистрация",
});

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
  const { data } = await client.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (data.user !== null) {
    navigateTo("/");
  }
};
</script>

<template>
  <div class="card register">
    <div class="card-title register-title">Вход</div>
    <div class="card-body register-body">
      <div class="mb-3">
        <TheBaseInput
          @changeInput="v$.email.$touch"
          label="Email"
          placeholder="Введите email"
          v-model:input="formData.email"
          :error="v$.email.$error"
          :success="!v$.email.$invalid"
        />
      </div>
      <div class="mb-3">
        <TheBaseInput
          @changeInput="v$.password.$touch"
          inputType="password"
          label="Email"
          placeholder="Введите email"
          v-model:input="formData.password"
          :error="v$.password.$error"
          :success="!v$.password.$invalid"
        />
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
      content: "";
      bottom: -15px;
      right: 29%;
      width: 200px;
      height: 1px;
      background-color: #e2e5e9;
    }
  }
  &-add {
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
