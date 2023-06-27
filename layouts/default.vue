<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();

const signOut = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    console.log(error);
    return;
  }
  navigateTo("/signin");
};
</script>

<template>
  <div>
    <div class="d-flex min-vh-100">
      <TheSideBar :user="user" />
      <div class="w-100">
        <TheNavigation :user="user || null" />
        <div class="container">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.list-group-item {
  cursor: pointer;
}
</style>
