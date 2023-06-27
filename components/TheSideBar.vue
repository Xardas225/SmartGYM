<script setup lang="ts">
const props = defineProps<{
  user: object;
}>();
</script>

<template>
  <div
    class="max-h-100 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    style="width: 280px"
  >
    <NuxtLink class="navbar-brand" to="/">
      <div class="row justify-content-start align-items-center">
        <div class="col-2">
          <img
            src="@/public/favicon.ico"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </div>
        <div class="col-10 d-inline-block fs-4 ml-4">SmartGYM</div>
      </div>
    </NuxtLink>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <div v-if="user">
        <NuxtLink to="/employees" class="list-group-item sidebar-icon__wrapper">
          <Icon class="sidebar-icon" name="system-uicons:users" />
          <div class="nav-link text-white">Сотрудники</div>
        </NuxtLink>
        <NuxtLink to="/analytics" class="list-group-item sidebar-icon__wrapper">
          <Icon class="sidebar-icon" name="ph:chart-donut-fill" />
          <div class="nav-link text-white">Аналитика</div>
        </NuxtLink>
        <NuxtLink to="/raing" class="list-group-item sidebar-icon__wrapper">
          <Icon class="sidebar-icon" name="material-symbols:social-leaderboard" />
          <div class="nav-link text-white">Доска лидеров</div>
        </NuxtLink>
        <NuxtLink to="/Активность" class="list-group-item sidebar-icon__wrapper">
          <Icon class="sidebar-icon" name="carbon:user-activity" />
          <div class="nav-link text-white">Активность</div>
        </NuxtLink>
      </div>

      <NuxtLink
        v-if="!user"
        to="/signin"
        class="list-group-item sidebar-icon__wrapper"
      >
        <Icon class="sidebar-icon" name="system-uicons:user-male" />
        <div class="nav-link text-white">Вход</div>
      </NuxtLink>

      <NuxtLink
        v-if="!user"
        to="/signup"
        class="list-group-item sidebar-icon__wrapper"
      >
        <Icon class="sidebar-icon" name="system-uicons:user-add" />
        <div class="nav-link text-white">Регистрация</div>
      </NuxtLink>
    </ul>
    <hr />
    <div v-if="user" class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          class="rounded-circle me-2"
          width="32"
          height="32"
        />
        <strong>User</strong>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
        style=""
      >
        <div class="dropdown-item">
          <NuxtLink
            v-if="user"
            to="/profile"
            class="list-group-item sidebar-icon__wrapper"
          >
            <Icon class="sidebar-icon" name="system-uicons:user-male-circle" />
            <div class="dropdown-item text-white">Профиль</div>
          </NuxtLink>
        </div>
        <div class="dropdown-item">
          <NuxtLink class="list-group-item sidebar-icon__wrapper">
            <Icon class="sidebar-icon" name="system-uicons:settings" />
            <div class="dropdown-item text-white">Настройки</div>
          </NuxtLink>
        </div>
        <div class="dropdown-item">
          <div
            @click="signOut"
            v-if="user"
            class="cursor-pointer list-group-item sidebar-icon__wrapper"
          >
            <Icon class="sidebar-icon" name="system-uicons:exit-left" />
            <div class="nav-link text-white">Выход</div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
