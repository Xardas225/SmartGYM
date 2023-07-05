<script setup lang="ts">
import { required, email, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

useHead({
  title: "Регистрация",
});

definePageMeta({
  layout: "emptyLayout",
});

const formData = reactive({
  name: "",
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(3) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
  };
});

const v$ = useVuelidate(rules, formData);
const user = useSupabaseUser();
const client = useSupabaseClient();

const signUp = async () => {
  v$.value.$validate();

  if (v$.value.$error) {
    console.log("Error validation");
    return;
  }

  const { data } = await client.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  navigateTo("/");
};
</script>

<template>
  <div class="card register">
    <div v-if="!user" class="regiter-wrapper">
      <div class="card-title register-title">Регистрация</div>
      <div class="card-body register-body">
        <div class="mb-3">
          <TheBaseInput
            @changeInput="v$.name.$touch"
            label="Имя"
            placeholder="Введите имя"
            v-model:input="formData.name"
            :error="v$.name.$error"
            :success="!v$.name.$invalid"
          />
        </div>
        <div class="mb-3">
          <TheBaseInput
            @changeInput="v$.email.$touch"
            label="Email"
            imputType="email"
            placeholder="Введите email"
            v-model:input="formData.email"
            :error="v$.email.$error"
            :success="!v$.email.$invalid"
          />
        </div>
        <div class="mb-3">
          <TheBaseInput
            @changeInput="v$.email.$touch"
            label="Пароль"
            imputType="password"
            placeholder="Введите пароль"
            v-model:input="formData.password"
            :error="v$.password.$error"
            :success="!v$.password.$invalid"
          />
        </div>
        <TheMainButton @click="signUp"> Зарегистрироваться </TheMainButton>
        <div class="register-add">
          Уже зарегистрированы?
          <NuxtLink to="/signin"> Войдите в систему </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else class="register-confirm">Подтвердите плиз</div>
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
