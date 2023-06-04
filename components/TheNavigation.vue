<template>
  <nav class="navbar navbar-expand-lg bg-white py-3">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img
          src="@/public/favicon.ico"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="w-100 justify-content-center navbar-nav">
          <NuxtLink active-class="active" class="nav-link" to="/trainings"
            >Тренировки</NuxtLink
          >
          <NuxtLink active-class="active" class="nav-link" to="/exercises"
            >Упражнения</NuxtLink
          >
          <NuxtLink active-class="active" class="nav-link" to="/nutrition"
            >Питание</NuxtLink
          >
          <NuxtLink active-class="active" class="nav-link" to="/motivations"
            >Мотивация</NuxtLink
          >
        </div>
      </div>

      <div class="navbar-sidebar">
        <Icon
          class="sidebar-icon"
          name="zondicons:align-right"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
        </Icon>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-link {
  transition: all 0.3s;
  margin: 0 5px;
  font-size: 18px;
  &:hover {
    opacity: 0.8;
  }
}

</style>
