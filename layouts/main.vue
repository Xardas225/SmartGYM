<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();

const signOut = async () => {
  const { error } = await client.auth.signOut()
  if(error) {
    console.log(error);
    return;
  }
  navigateTo('/signin')
}
</script>

<template>
  <div>
    <TheNavigation :user="user || null" />
    <div class="container">
      <div>
        <slot />
      </div>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body">
        <ul class="list-group list-group-flush">
          <NuxtLink
            v-if="user"
            to="/profile"
            class="list-group-item sidebar-icon__wrapper"
          >
            <Icon class="sidebar-icon" name="system-uicons:user-male-circle" />
            <div class="sidebar-icon__text">Профиль</div>
          </NuxtLink>

          <NuxtLink
            v-if="!user"
            to="/signup"
            class="list-group-item sidebar-icon__wrapper"
          >
            <Icon class="sidebar-icon" name="system-uicons:user-male" />
            <div class="sidebar-icon__text">Вход</div>
          </NuxtLink>

          <NuxtLink
            v-if="!user"
            to="/signup"
            class="list-group-item sidebar-icon__wrapper"
          >
            <Icon class="sidebar-icon" name="system-uicons:user-add" />
            <div class="sidebar-icon__text">Регистрация</div>
          </NuxtLink>

          <NuxtLink class="list-group-item sidebar-icon__wrapper">
            <Icon class="sidebar-icon" name="system-uicons:settings" />
            <div class="sidebar-icon__text">Настройки</div>
          </NuxtLink>

          <div @click="signOut" v-if="user" class="cursor-pointer list-group-item sidebar-icon__wrapper">
            <Icon class="sidebar-icon" name="system-uicons:exit-left" />
            <div class="sidebar-icon__text">Выход</div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.list-group-item {
  cursor: pointer;
}
</style>
