<template>
  <nav class="navbar navbar-expand-lg bg-white py-3">
    <div class="container-fluid">
        <NavLink class="navbar-brand" to="/">
            <img src="@/public/favicon.ico" alt="" width="30" height="24" class="d-inline-block align-text-top">
        </NavLink>
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
          <NuxtLink active-class="active" class="nav-link" to="/trainings">Тренировки</NuxtLink>
          <NuxtLink active-class="active" class="nav-link" to="/exercises">Упражнения</NuxtLink>
          <NuxtLink active-class="active" class="nav-link" to="/food">Питание</NuxtLink>
          <NuxtLink active-class="active" class="nav-link" to="/motivation">Мотивация</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
    
</style>
