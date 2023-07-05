<script setup lang="ts">
definePageMeta({
  middleware: "isAuth",
});
</script>

<template>
  <div>
    <div class="d-flex min-vh-100">
      <div class="w-100">
        <div class="container m-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
